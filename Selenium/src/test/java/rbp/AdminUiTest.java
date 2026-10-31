package rbp;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDate;
import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import rbp.pages.AdminPage;
import rbp.pages.HomePage;

/** Nhóm Admin: TC-UI-09 đến TC-UI-17. TC-UI-18 chạy bằng run_selenium.cmd all. */
public class AdminUiTest extends BaseUiTest {

    @Test
    @DisplayName("TC-UI-09 Đăng nhập admin đúng")
    void ui09() {
        AdminPage admin = new AdminPage(ui).loginAsAdmin();
        assertTrue(admin.roomListVisible(10), "Không vào được khu vực quản trị sau khi đăng nhập đúng");
    }

    @Test
    @DisplayName("TC-UI-10 Đăng nhập admin sai")
    void ui10() {
        AdminPage admin = new AdminPage(ui).login(Config.get("adminUser"), "sai-mat-khau");
        assertAll(
                () -> assertFalse(admin.roomListVisible(3), "Đăng nhập sai vẫn vào được khu quản trị"),
                () -> assertTrue(admin.loginFormVisible(3), "Biểu mẫu đăng nhập biến mất sau khi đăng nhập sai"),
                () -> assertTrue(ui.isVisible("home.alert", 3), "Không thấy thông báo lỗi đăng nhập (định danh .alert-danger có thể khác)"));
    }

    @Test
    @DisplayName("TC-UI-11 Admin tạo, sửa, xóa phòng")
    void ui11() {
        String name = "QA Room " + ApiClient.letters(5);
        AdminPage admin = new AdminPage(ui).loginAsAdmin();
        assertTrue(admin.roomListVisible(10), "Đăng nhập thất bại");
        int before = admin.roomRows();
        try {
            admin.createRoom(name, "150");
            assertTrue(Ui.poll(10, () -> admin.roomRows() == before + 1), "Danh sách phòng không tăng sau khi tạo");
            assertNotNull(api.roomIdByName(name), "Phòng vừa tạo không có trong API");

            admin.openRow(name);
            admin.clickEdit();
            admin.setPriceInForm("175");
            admin.clickUpdateRoom();
            assertTrue(Ui.poll(10, () -> Integer.valueOf(175).equals(api.roomPriceByName(name))),
                    "Giá phòng không được cập nhật sau khi sửa");

            ui.open(Config.get("adminRoomsPath"));
            assertTrue(admin.roomListVisible(10), "Không quay lại được danh sách phòng");
            admin.deleteRow(name);
            assertTrue(Ui.poll(10, () -> admin.roomRows() == before), "Danh sách phòng không giảm sau khi xóa");
            assertNull(api.roomIdByName(name), "Phòng vẫn còn trong API sau khi xóa");
        } finally {
            Integer id = api.roomIdByName(name);
            if (id != null) {
                api.deleteRoom(id);
            }
        }
    }

    @Test
    @DisplayName("TC-UI-12 Admin xem booking của phòng (phần sửa, xóa chưa tự động hóa)")
    void ui12() {
        String roomName = "QA Room BK " + ApiClient.letters(4);
        int roomId = api.createRoom(roomName, 120);
        LocalDate today = LocalDate.now();
        try {
            api.createBookingId(roomId, "QaAdmin", "Viewer", today, today.plusDays(1));
            AdminPage admin = new AdminPage(ui).loginAsAdmin();
            assertTrue(admin.roomListVisible(10), "Đăng nhập thất bại");
            admin.openRow(roomName);
            boolean seen = ui.textPresent("QaAdmin", 10)
                    || ui.isVisible("reservation.events", 3)
                    || ui.isVisible("admin.bookingItems", 3);
            assertTrue(seen, "Khu quản trị không hiển thị booking của phòng");
        } finally {
            for (Integer id : api.bookingIds(roomId)) {
                api.deleteBooking(id);
            }
            api.deleteRoom(roomId);
        }
    }

    @Test
    @DisplayName("TC-UI-13 Admin xem, đánh dấu đã đọc, xóa tin nhắn")
    void ui13() {
        String subject = "QA tin nhan " + ApiClient.letters(5);
        api.createMessage("QA Reader", subject, "Noi dung tin nhan kiem thu cho Admin xem va xoa.");
        try {
            AdminPage admin = new AdminPage(ui).loginAsAdmin();
            assertTrue(admin.roomListVisible(10), "Đăng nhập thất bại");
            admin.openMessages();
            assertTrue(ui.textPresent(subject, 10), "Không thấy tin nhắn trong danh sách của Admin");

            WebElement row = ui.visible(By.xpath("//*[contains(normalize-space(text()),'" + subject + "')]"));
            ui.safeClick(row);
            assertTrue(Ui.poll(10, () -> api.isMessageRead(subject)), "Tin nhắn không được đánh dấu đã đọc");

            driver.navigate().refresh();
            assertTrue(ui.textPresent(subject, 10), "Không thấy tin nhắn sau khi tải lại trang");
            WebElement delete = ui.visible(By.xpath("//*[contains(normalize-space(text()),'" + subject
                    + "')]/ancestor::div[contains(@class,'row')][1]//*[contains(@class,'roomDelete')]"));
            ui.safeClick(delete);
            assertTrue(Ui.poll(10, () -> api.messageIdBySubject(subject) == null), "Tin nhắn chưa bị xóa");
        } finally {
            Integer id = api.messageIdBySubject(subject);
            if (id != null) {
                api.deleteMessage(id);
            }
        }
    }

    @Test
    @DisplayName("TC-UI-14 Admin xem báo cáo")
    void ui14() {
        AdminPage admin = new AdminPage(ui).loginAsAdmin();
        assertTrue(admin.roomListVisible(10), "Đăng nhập thất bại");
        admin.openReport();
        assertTrue(ui.isVisible("report.calendar", 10), "Báo cáo (lịch) không hiển thị");
    }

    @Test
    @DisplayName("TC-UI-15 Admin cập nhật thương hiệu")
    void ui15() {
        AdminPage admin = new AdminPage(ui).loginAsAdmin();
        assertTrue(admin.roomListVisible(10), "Đăng nhập thất bại");
        admin.openBranding();
        assertTrue(Ui.poll(10, () -> !ui.visible("branding.name").getAttribute("value").isEmpty()),
                "Trang thương hiệu không hiển thị dữ liệu");
        assertEquals(api.brandingName(), ui.visible("branding.name").getAttribute("value"),
                "Tên thương hiệu trên giao diện khác dữ liệu từ API");

        String newName = "QA Hotel " + ApiClient.letters(4);
        ui.type("branding.name", newName);
        ui.scrollAndClick("branding.update");
        assertTrue(Ui.poll(10, () -> newName.equals(api.brandingName())),
                "Cập nhật thương hiệu qua giao diện không thành công (nghi DEF-005: logoUrl tương đối bị từ chối)");

        new HomePage(ui).open();
        assertTrue(Ui.poll(10, () -> ui.text("nav.brand").trim().equalsIgnoreCase(newName)),
                "Trang chủ không hiển thị tên thương hiệu mới");
    }

    @Test
    @DisplayName("TC-UI-16 Đăng xuất")
    void ui16() {
        AdminPage admin = new AdminPage(ui).loginAsAdmin();
        assertTrue(admin.roomListVisible(10), "Đăng nhập thất bại");
        admin.logout();
        assertTrue(Ui.poll(10, () -> !admin.roomListVisible(1)), "Sau khi đăng xuất vẫn thấy khu quản trị");
        driver.navigate().back();
        assertFalse(admin.roomListVisible(3), "Sau khi đăng xuất, nút Back vẫn vào lại được khu quản trị");
    }

    @Test
    @DisplayName("TC-UI-17 Truy cập khu vực quản trị khi chưa đăng nhập")
    void ui17() {
        ui.open(Config.get("adminRoomsPath"));
        AdminPage admin = new AdminPage(ui);
        assertFalse(admin.roomListVisible(5), "Chưa đăng nhập nhưng vẫn thấy danh sách phòng quản trị");
        assertTrue(admin.loginFormVisible(5) || !driver.getCurrentUrl().contains("/admin"),
                "Không bị chuyển về trang đăng nhập hoặc trang công khai");
    }
}
