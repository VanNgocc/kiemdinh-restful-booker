package rbp.pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import rbp.Config;
import rbp.Ui;

public class AdminPage {
    private final Ui ui;

    public AdminPage(Ui ui) {
        this.ui = ui;
    }

    public AdminPage login(String user, String pass) {
        ui.open(Config.get("adminPath"));
        ui.type("login.username", user);
        ui.type("login.password", pass);
        ui.click("login.submit");
        return this;
    }

    public AdminPage loginAsAdmin() {
        return login(Config.get("adminUser"), Config.get("adminPassword"));
    }

    public boolean roomListVisible(int seconds) {
        return ui.isVisible("admin.roomHeader", seconds);
    }

    public boolean loginFormVisible(int seconds) {
        return ui.isVisible("login.username", seconds);
    }

    public int roomRows() {
        return ui.count("admin.roomRows");
    }

    public void createRoom(String name, String price) {
        ui.type("admin.roomName", name);
        ui.type("admin.roomPrice", price);
        ui.scrollAndClick("admin.roomCreate");
    }

    public By rowByName(String name) {
        return By.xpath("//div[contains(concat(' ',normalize-space(@data-type),' '),' room ')]"
                + "[.//*[contains(normalize-space(text()),'" + name + "')]]");
    }

    public void openRow(String name) {
        WebElement r = ui.visible(rowByName(name));
        ui.safeClick(r);
    }

    public void deleteRow(String name) {
        WebElement r = ui.visible(rowByName(name));
        ui.safeClick(r.findElement(By.xpath(".//*[contains(@class,'roomDelete')]")));
    }

    /** Nhập giá vào ô giá đang hiển thị đầu tiên (biểu mẫu sửa phòng nằm trước biểu mẫu tạo phòng). */
    public void setPriceInForm(String price) {
        List<WebElement> inputs = ui.all("admin.roomPrice");
        for (WebElement e : inputs) {
            if (e.isDisplayed()) {
                e.clear();
                e.sendKeys(price);
                return;
            }
        }
        throw new AssertionError("Không thấy ô giá phòng đang hiển thị (admin.roomPrice)");
    }

    public void clickEdit() {
        ui.click("admin.roomEdit");
    }

    public void clickUpdateRoom() {
        ui.scrollAndClick("admin.roomUpdate");
    }

    public void openReport() {
        ui.click("nav.report");
    }

    public void openBranding() {
        ui.click("nav.branding");
    }

    public void openMessages() {
        ui.click("nav.notification");
    }

    public void logout() {
        ui.click("admin.logout");
    }
}
