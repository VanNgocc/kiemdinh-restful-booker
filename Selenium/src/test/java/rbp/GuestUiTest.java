package rbp;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import rbp.pages.HomePage;
import rbp.pages.ReservationPage;

/** Nhóm Guest: TC-UI-01 đến TC-UI-08. */
public class GuestUiTest extends BaseUiTest {

    /** Mở phòng đầu tiên, chọn ngày (2 đêm, bắt đầu sau daysFromToday ngày), mở biểu mẫu khách, nhập thông tin và gửi. */
    private ReservationPage bookViaUi(String first, String last, int daysFromToday) {
        new HomePage(ui).open().openFirstRoom();
        ReservationPage page = new ReservationPage(driver, ui);
        assertTrue(page.isLoaded(), "Không mở được trang đặt phòng");
        LocalDate in = LocalDate.now().plusDays(daysFromToday);
        page.selectDays(in, in.plusDays(2));
        page.openBookingForm();
        page.fillGuest(first, last, "qa.book@example.com", "01234567890");
        page.submitBooking();
        return page;
    }

    /** Mỗi booking tạo ra một tin nhắn "You have a new booking!" gửi cho Admin; dọn các tin nhắn đó sau mỗi test. */
    @AfterEach
    void cleanupBookingMessages() {
        for (String n : new String[] {"QaBook Tester", "QaDupA Tester", "QaDupB Tester", "Nguyễn Văn Hải", "QaView Calendar"}) {
            api.deleteMessagesByName(n);
        }
    }

    @Test
    @DisplayName("TC-UI-01 Mở trang chủ: hiển thị thương hiệu và danh sách phòng")
    void ui01() {
        HomePage home = new HomePage(ui).open();
        String apiName = api.brandingName();
        assertNotNull(apiName, "Không lấy được tên thương hiệu từ API");
        assertTrue(home.brandText().equalsIgnoreCase(apiName.trim()),
                "Tên trên thanh điều hướng '" + home.brandText() + "' khác tên từ API '" + apiName + "'");
        assertEquals(api.roomCount(), home.roomCardCount(), "Số phòng trên giao diện khác số phòng từ API");
    }

    @Test
    @DisplayName("TC-UI-02 Xem chi tiết phòng và lịch trống")
    void ui02() {
        int roomId = api.firstRoomId();
        List<Integer> before = api.bookingIds(roomId);
        LocalDate today = LocalDate.now();
        try {
            api.createBookingId(roomId, "QaView", "Calendar", today, today.plusDays(1));
            new HomePage(ui).open().openFirstRoom();
            ReservationPage page = new ReservationPage(driver, ui);
            assertTrue(page.isLoaded(), "Không mở được trang chi tiết phòng");
            assertTrue(ui.isVisible("reservation.calendar", 10), "Không thấy lịch của phòng");
        } finally {
            api.deleteNewBookings(roomId, before);
        }
    }

    @Test
    @DisplayName("TC-UI-03 Đặt phòng hợp lệ")
    void ui03() {
        int roomId = api.firstRoomId();
        List<Integer> before = api.bookingIds(roomId);
        try {
            ReservationPage page = bookViaUi("QaBook", "Tester", 20);
            assertTrue(Ui.poll(10, () -> api.bookingIds(roomId).size() == before.size() + 1),
                    "Booking không được tạo sau khi gửi biểu mẫu");
            assertTrue(page.successVisible(5), "Không thấy thông báo xác nhận đặt phòng");
        } finally {
            api.deleteNewBookings(roomId, before);
        }
    }

    @Test
    @DisplayName("TC-UI-04 Đặt phòng nhập thiếu hoặc sai")
    void ui04() {
        int roomId = api.firstRoomId();
        List<Integer> before = api.bookingIds(roomId);
        try {
            new HomePage(ui).open().openFirstRoom();
            ReservationPage page = new ReservationPage(driver, ui);
            assertTrue(page.isLoaded(), "Không mở được trang đặt phòng");
            page.openBookingForm();
            page.submitBooking();
            assertTrue(page.alertVisible(10), "Không thấy thông báo lỗi khi gửi biểu mẫu để trống");
            List<String> unclear = new ArrayList<>();
            for (String line : page.alertText().split("\\R")) {
                String l = line.trim().toLowerCase();
                if (!l.isEmpty() && !(l.contains("firstname") || l.contains("lastname") || l.contains("email") || l.contains("phone"))) {
                    unclear.add(line.trim());
                }
            }
            assertTrue(unclear.isEmpty(), "Thông báo lỗi không nêu rõ trường vi phạm (NFR-06): " + unclear);
            assertEquals(before.size(), api.bookingIds(roomId).size(), "Biểu mẫu sai không được tạo booking");
        } finally {
            api.deleteNewBookings(roomId, before);
        }
    }

    @Test
    @DisplayName("TC-UI-05 Đặt phòng trùng lịch")
    void ui05() {
        int roomId = api.firstRoomId();
        List<Integer> before = api.bookingIds(roomId);
        try {
            bookViaUi("QaDupA", "Tester", 40);
            assertTrue(Ui.poll(10, () -> api.bookingIds(roomId).size() == before.size() + 1),
                    "Lần đặt đầu tiên không tạo được booking");
            ReservationPage second = bookViaUi("QaDupB", "Tester", 40);
            assertTrue(second.alertVisible(10), "Không thấy thông báo lỗi khi đặt trùng lịch");
            assertEquals(before.size() + 1, api.bookingIds(roomId).size(), "Lần đặt thứ hai không được tạo booking");
        } finally {
            api.deleteNewBookings(roomId, before);
        }
    }

    @Test
    @DisplayName("TC-UI-06 Đặt phòng với tên tiếng Việt có dấu")
    void ui06() {
        int roomId = api.firstRoomId();
        List<Integer> before = api.bookingIds(roomId);
        try {
            ReservationPage page = bookViaUi("Nguyễn", "Văn Hải", 60);
            assertTrue(Ui.poll(10, () -> api.bookingIds(roomId).size() == before.size() + 1),
                    "Tên tiếng Việt có dấu bị từ chối, booking không được tạo");
            assertTrue(page.successVisible(5), "Không thấy thông báo xác nhận đặt phòng");
        } finally {
            api.deleteNewBookings(roomId, before);
        }
    }

    @Test
    @DisplayName("TC-UI-07 Gửi liên hệ hợp lệ")
    void ui07() {
        String subject = "QA lien he " + ApiClient.letters(5);
        try {
            HomePage home = new HomePage(ui).open();
            home.fillContact("QA Tester", "qa.contact@example.com", "01234567890", subject,
                    "Noi dung lien he kiem thu tu dong bang Selenium.");
            home.submitContact();
            assertTrue(ui.isVisible("contact.success", 10), "Không thấy thông báo xác nhận gửi liên hệ");
            assertTrue(Ui.poll(8, () -> api.messageIdBySubject(subject) != null),
                    "Tin nhắn không có trong message-service");
        } finally {
            Integer id = api.messageIdBySubject(subject);
            if (id != null) {
                api.deleteMessage(id);
            }
        }
    }

    @Test
    @DisplayName("TC-UI-08 Gửi liên hệ sai dữ liệu")
    void ui08() {
        String subject = "QA sai du lieu " + ApiClient.letters(5);
        try {
            HomePage home = new HomePage(ui).open();
            home.fillContact("QA Tester", "abc", "01234567890", subject, "ngan");
            home.submitContact();
            assertTrue(ui.isVisible("home.alert", 10), "Không thấy thông báo lỗi khi nhập sai dữ liệu");
            String text = ui.text("home.alert").toLowerCase();
            assertTrue(text.contains("20 and 2000") || text.contains("email"),
                    "Thông báo lỗi không nêu rõ trường vi phạm: " + text);
            assertTrue(api.messageIdBySubject(subject) == null, "Dữ liệu sai vẫn tạo ra tin nhắn");
        } finally {
            Integer id = api.messageIdBySubject(subject);
            if (id != null) {
                api.deleteMessage(id);
            }
        }
    }
}
