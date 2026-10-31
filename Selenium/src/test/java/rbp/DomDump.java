package rbp;

import java.io.File;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.time.LocalDate;
import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import rbp.pages.AdminPage;
import rbp.pages.HomePage;
import rbp.pages.ReservationPage;

/**
 * Không chạy trong bộ test thường. Chạy bằng: run_selenium.cmd dump
 * Lưu mã HTML và ảnh chụp từng bước vào target/dom để xác nhận hoặc bổ sung định danh phần tử.
 */
public class DomDump extends BaseUiTest {

    private Path dir;

    private void step(String name, Runnable action) {
        try {
            action.run();
            Thread.sleep(1500);
        } catch (Exception e) {
            System.out.println("DUMP: bước " + name + " gặp lỗi, vẫn lưu trạng thái hiện tại: " + e.getMessage());
        }
        try {
            Files.writeString(dir.resolve(name + ".html"), driver.getPageSource(), StandardCharsets.UTF_8);
            File shot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            Files.copy(shot.toPath(), dir.resolve(name + ".png"), StandardCopyOption.REPLACE_EXISTING);
        } catch (Exception e) {
            System.out.println("DUMP: không lưu được " + name + ": " + e.getMessage());
        }
    }

    @Test
    @DisplayName("DUMP Lưu HTML các trang để xác nhận định danh")
    void dump() throws Exception {
        dir = Path.of("target", "dom");
        Files.createDirectories(dir);
        AdminPage admin = new AdminPage(ui);
        ReservationPage res = new ReservationPage(driver, ui);
        String subject = "QA dump " + ApiClient.letters(5);
        String contactSubject = "QA dump contact " + ApiClient.letters(5);
        Integer msgId = null;
        int roomId = api.firstRoomId();
        List<Integer> beforeBookings = api.bookingIds(roomId);
        try {
            step("01-home", () -> ui.open("/"));
            step("01b-contact-submit-empty", () -> new HomePage(ui).submitContact());
            step("01c-contact-submit-valid", () -> {
                HomePage home = new HomePage(ui);
                home.fillContact("QA Dump", "qa.dump@example.com", "01234567890", contactSubject,
                        "Noi dung lien he de luu HTML thong bao thanh cong cua bieu mau lien he.");
                home.submitContact();
            });
            step("01d-home-reload", () -> ui.open("/"));
            step("02-reservation", () -> new HomePage(ui).openFirstRoom());
            step("03-reservation-days-selected", () -> res.selectDays(LocalDate.now().plusDays(20), LocalDate.now().plusDays(22)));
            step("04-reservation-form-open", res::openBookingForm);
            step("05-reservation-submit-empty", res::submitBooking);
            step("05b-reservation-submit-valid", () -> {
                res.fillGuest("QaDump", "Tester", "qa.dump@example.com", "01234567890");
                res.submitBooking();
            });
            step("06-admin-login", () -> ui.open(Config.get("adminPath")));
            step("07-admin-rooms", admin::loginAsAdmin);
            step("08-admin-room-detail", () -> ui.safeClick(ui.all("admin.roomRows").get(0)));
            step("08b-admin-room-edit", () -> ui.click("admin.roomEdit"));
            msgId = api.createMessage("QA Dump", subject, "Noi dung tin nhan de luu HTML trang tin nhan cua Admin.");
            step("09-admin-messages", () -> {
                ui.open(Config.get("adminRoomsPath"));
                admin.openMessages();
            });
            step("10-admin-report", () -> {
                ui.open(Config.get("adminRoomsPath"));
                admin.openReport();
            });
            step("11-admin-branding", admin::openBranding);
        } finally {
            api.deleteNewBookings(roomId, beforeBookings);
            api.deleteMessagesByName("QaDump Tester");
            Integer cid = api.messageIdBySubject(contactSubject);
            if (cid != null) {
                api.deleteMessage(cid);
            }
            if (msgId != null) {
                api.deleteMessage(msgId);
            }
        }
        System.out.println("DUMP: đã lưu vào " + dir.toAbsolutePath());
    }
}
