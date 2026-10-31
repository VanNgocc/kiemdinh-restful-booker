package rbp;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import rbp.pages.AdminPage;
import rbp.pages.HomePage;
import rbp.pages.ReservationPage;

/** Không chạy trong bộ test thường. Chạy bằng: run_selenium.cmd locators. Báo định danh nào không tìm thấy. */
public class LocatorSmoke extends BaseUiTest {

    private void check(List<String> missing, String page, String... keys) {
        for (String k : keys) {
            boolean found = Ui.poll(5, () -> !driver.findElements(Locators.by(k)).isEmpty());
            if (!found) {
                missing.add(page + ": " + k);
            }
        }
    }

    @Test
    @DisplayName("LOCATOR Kiểm tra định danh phần tử")
    void check() {
        List<String> missing = new ArrayList<>();
        AdminPage admin = new AdminPage(ui);
        ReservationPage res = new ReservationPage(driver, ui);

        new HomePage(ui).open();
        check(missing, "Trang chủ", "nav.brand", "home.roomCards", "home.reserveLinks",
                "contact.name", "contact.email", "contact.phone", "contact.subject", "contact.description", "contact.submit");

        new HomePage(ui).openFirstRoom();

        res.openBookingForm();
        check(missing, "Biểu mẫu đặt phòng", "booking.firstname", "booking.lastname", "booking.email", "booking.phone",
                "home.bookButton");

        ui.open(Config.get("adminPath"));
        check(missing, "Đăng nhập", "login.username", "login.password", "login.submit");

        admin.loginAsAdmin();
        check(missing, "Danh sách phòng", "admin.roomHeader", "admin.roomName", "admin.roomPrice", "admin.roomCreate",
                "admin.roomRows", "nav.report", "nav.branding", "nav.frontPage", "admin.logout");

        admin.openReport();
        check(missing, "Báo cáo", "report.calendar");

        admin.openBranding();
        check(missing, "Thương hiệu", "branding.name", "branding.update");

        System.out.println("LOCATOR: không tìm thấy " + missing.size() + " định danh: " + missing);
        assertTrue(missing.isEmpty(), "Không tìm thấy các định danh: " + missing);
    }
}
