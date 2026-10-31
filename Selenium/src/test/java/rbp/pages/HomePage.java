package rbp.pages;

import java.util.List;

import org.openqa.selenium.WebElement;

import rbp.Ui;

public class HomePage {
    private final Ui ui;

    public HomePage(Ui ui) {
        this.ui = ui;
    }

    public HomePage open() {
        ui.open("/");
        ui.visible("home.roomCards");
        return this;
    }

    public int roomCardCount() {
        return ui.count("home.roomCards");
    }

    public String brandText() {
        return ui.text("nav.brand").trim();
    }

    /** Mở trang đặt phòng của phòng đầu tiên trong danh sách. */
    public void openFirstRoom() {
        List<WebElement> links = ui.all("home.reserveLinks");
        if (links.isEmpty()) {
            throw new AssertionError("Không thấy nút đặt phòng trên trang chủ (home.reserveLinks)");
        }
        WebElement first = links.get(0);
        ui.safeClick(first);
    }

    public void fillContact(String name, String email, String phone, String subject, String description) {
        ui.type("contact.name", name);
        ui.type("contact.email", email);
        ui.type("contact.phone", phone);
        ui.type("contact.subject", subject);
        ui.type("contact.description", description);
    }

    public void submitContact() {
        ui.scrollAndClick("contact.submit");
    }
}
