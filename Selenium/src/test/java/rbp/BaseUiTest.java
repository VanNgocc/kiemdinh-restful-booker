package rbp;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.openqa.selenium.WebDriver;

@ExtendWith(ResultExtension.class)
public abstract class BaseUiTest {
    static volatile WebDriver current;

    protected WebDriver driver;
    protected Ui ui;
    protected final ApiClient api = new ApiClient();

    @BeforeEach
    void startBrowser() {
        driver = DriverFactory.create();
        ui = new Ui(driver);
        current = driver;
    }

    @AfterEach
    void stopBrowser() {
        if (driver != null) {
            driver.quit();
        }
        current = null;
    }
}
