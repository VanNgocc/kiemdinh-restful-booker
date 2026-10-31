package rbp;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.Properties;
import java.util.Set;
import java.util.TreeSet;

import org.openqa.selenium.By;

/** Đọc định danh phần tử từ locators.properties. */
public final class Locators {
    private static final Properties P = new Properties();

    static {
        try (InputStream in = Locators.class.getResourceAsStream("/locators.properties")) {
            if (in != null) {
                P.load(new InputStreamReader(in, StandardCharsets.UTF_8));
            }
        } catch (Exception e) {
            throw new RuntimeException("Không đọc được locators.properties", e);
        }
    }

    private Locators() {
    }

    public static By by(String key) {
        String v = P.getProperty(key);
        if (v == null) {
            throw new IllegalArgumentException("Thiếu định danh trong locators.properties: " + key);
        }
        int i = v.indexOf(':');
        String type = v.substring(0, i);
        String val = v.substring(i + 1);
        switch (type) {
            case "css":
                return By.cssSelector(val);
            case "xpath":
                return By.xpath(val);
            case "id":
                return By.id(val);
            default:
                throw new IllegalArgumentException("Kiểu định danh không hỗ trợ: " + type + " (khóa " + key + ")");
        }
    }

    public static Set<String> keys() {
        return new TreeSet<>(P.stringPropertyNames());
    }
}
