package rbp;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

/** Tạo trình duyệt theo tham số browser: chrome (mặc định), firefox. Selenium Manager tự tải driver. */
public final class DriverFactory {
    private DriverFactory() {
    }

    public static WebDriver create() {
        String browser = String.valueOf(Config.get("browser")).toLowerCase();
        boolean headless = Boolean.parseBoolean(String.valueOf(Config.get("headless")));
        WebDriver driver;
        switch (browser) {
            case "firefox": {
                FirefoxOptions o = new FirefoxOptions();
                if (headless) {
                    o.addArguments("-headless");
                }
                driver = new FirefoxDriver(o);
                break;
            }
            case "chrome": {
                ChromeOptions o = new ChromeOptions();
                if (headless) {
                    o.addArguments("--headless=new");
                }
                driver = new ChromeDriver(o);
                break;
            }
            default:
                throw new IllegalArgumentException("Trình duyệt không hỗ trợ: " + browser + " (chỉ chrome hoặc firefox)");
        }
        driver.manage().window().setSize(new Dimension(1366, 900));
        return driver;
    }
}