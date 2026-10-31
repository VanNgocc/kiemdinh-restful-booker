package rbp;

import java.io.File;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.nio.file.StandardOpenOption;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

import org.junit.jupiter.api.extension.BeforeTestExecutionCallback;
import org.junit.jupiter.api.extension.ExtensionContext;
import org.junit.jupiter.api.extension.TestExecutionExceptionHandler;
import org.junit.jupiter.api.extension.TestWatcher;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

/** Chụp ảnh màn hình khi lỗi và ghi kết quả từng test case ra target/ui-results-&lt;trình duyệt&gt;.csv. */
public class ResultExtension implements TestWatcher, BeforeTestExecutionCallback, TestExecutionExceptionHandler {
    private static final Map<String, Long> START = new ConcurrentHashMap<>();

    private static String id(ExtensionContext c) {
        return c.getDisplayName().split("\\s+")[0];
    }

    @Override
    public void beforeTestExecution(ExtensionContext c) {
        START.put(c.getUniqueId(), System.currentTimeMillis());
    }

    @Override
    public void handleTestExecutionException(ExtensionContext c, Throwable t) throws Throwable {
        try {
            WebDriver d = BaseUiTest.current;
            if (d instanceof TakesScreenshot) {
                File f = ((TakesScreenshot) d).getScreenshotAs(OutputType.FILE);
                Path dir = Path.of("target", "screenshots");
                Files.createDirectories(dir);
                Files.copy(f.toPath(), dir.resolve(Config.get("browser") + "-" + id(c) + ".png"), StandardCopyOption.REPLACE_EXISTING);
            }
        } catch (Exception ignored) {
            // không để lỗi chụp ảnh che mất lỗi gốc
        }
        throw t;
    }

    @Override
    public void testSuccessful(ExtensionContext c) {
        log(c, "PASS", "");
    }

    @Override
    public void testFailed(ExtensionContext c, Throwable cause) {
        log(c, "FAIL", String.valueOf(cause.getMessage()));
    }

    @Override
    public void testAborted(ExtensionContext c, Throwable cause) {
        log(c, "SKIP", String.valueOf(cause.getMessage()));
    }

    @Override
    public void testDisabled(ExtensionContext c, Optional<String> reason) {
        log(c, "DISABLED", reason.orElse(""));
    }

    private void log(ExtensionContext c, String status, String message) {
        try {
            String browser = String.valueOf(Config.get("browser"));
            Path p = Path.of("target", "ui-results-" + browser + ".csv");
            Files.createDirectories(p.getParent());
            if (!Files.exists(p)) {
                Files.writeString(p, "browser,tc,status,millis,message\n", StandardCharsets.UTF_8,
                        StandardOpenOption.CREATE, StandardOpenOption.APPEND);
            }
            Long s = START.get(c.getUniqueId());
            long ms = s == null ? 0 : System.currentTimeMillis() - s;
            String msg = message.replace("\"", "'").replace("\r", " ").replace("\n", " ");
            String line = browser + "," + id(c) + "," + status + "," + ms + ",\"" + msg + "\"\n";
            Files.writeString(p, line, StandardCharsets.UTF_8, StandardOpenOption.CREATE, StandardOpenOption.APPEND);
        } catch (Exception ignored) {
            // bỏ qua lỗi ghi file
        }
    }
}
