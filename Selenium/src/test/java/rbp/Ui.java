package rbp;

import java.time.Duration;
import java.util.List;
import java.util.function.BooleanSupplier;

import org.openqa.selenium.By;
import org.openqa.selenium.ElementClickInterceptedException;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

/** Các thao tác dùng chung, đều có chờ tường minh (không dùng Thread.sleep cố định). */
public class Ui {
    private final WebDriver d;
    private final int wait;

    public Ui(WebDriver d) {
        this.d = d;
        this.wait = Config.seconds("waitSeconds", 10);
    }

    private WebDriverWait waiter(int seconds) {
        return new WebDriverWait(d, Duration.ofSeconds(seconds));
    }

    public void open(String path) {
        d.get(Config.get("baseUrl") + path);
    }

    public WebElement visible(By by) {
        return waiter(wait).until(ExpectedConditions.visibilityOfElementLocated(by));
    }

    public WebElement visible(String key) {
        return visible(Locators.by(key));
    }

    public WebElement clickable(String key) {
        return waiter(wait).until(ExpectedConditions.elementToBeClickable(Locators.by(key)));
    }

    public void click(String key) {
        safeClick(clickable(key));
    }

    public void scrollAndClick(String key) {
        safeClick(clickable(key));
    }

    /**
     * Cuộn phần tử vào giữa màn hình rồi bấm. Nếu bị chặn (cuộn chưa xong, có thành phần che) thì thử lại,
     * cuối cùng bấm bằng JavaScript.
     */
    public void safeClick(WebElement e) {
        for (int i = 0; i < 3; i++) {
            try {
                scrollIntoView(e);
                e.click();
                return;
            } catch (ElementClickInterceptedException ex) {
                try {
                    Thread.sleep(400);
                } catch (InterruptedException ie) {
                    Thread.currentThread().interrupt();
                    return;
                }
            }
        }
        ((JavascriptExecutor) d).executeScript("arguments[0].click();", e);
    }

    public void type(String key, String text) {
        WebElement e = visible(key);
        e.clear();
        e.sendKeys(text);
    }

    public String text(String key) {
        return visible(key).getText();
    }

    public List<WebElement> all(String key) {
        return d.findElements(Locators.by(key));
    }

    public int count(String key) {
        return all(key).size();
    }

    public boolean isVisible(String key, int seconds) {
        try {
            waiter(seconds).until(ExpectedConditions.visibilityOfElementLocated(Locators.by(key)));
            return true;
        } catch (TimeoutException e) {
            return false;
        }
    }

    public boolean isVisible(By by, int seconds) {
        try {
            waiter(seconds).until(ExpectedConditions.visibilityOfElementLocated(by));
            return true;
        } catch (TimeoutException e) {
            return false;
        }
    }

    /** Văn bản (không phân biệt vị trí) có xuất hiện trên trang không. Văn bản không được chứa dấu nháy đơn. */
    public boolean textPresent(String text, int seconds) {
        return isVisible(By.xpath("//*[contains(normalize-space(text()),'" + text + "')]"), seconds);
    }

    public void scrollIntoView(WebElement e) {
        ((JavascriptExecutor) d).executeScript("arguments[0].scrollIntoView({block:'center', behavior:'instant'});", e);
    }

    /** Thăm dò điều kiện đến khi đúng hoặc hết thời gian. */
    public static boolean poll(int seconds, BooleanSupplier cond) {
        long end = System.currentTimeMillis() + seconds * 1000L;
        while (System.currentTimeMillis() < end) {
            try {
                if (cond.getAsBoolean()) {
                    return true;
                }
            } catch (RuntimeException ignored) {
                // thử lại
            }
            try {
                Thread.sleep(300);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return false;
            }
        }
        return false;
    }
}
