package rbp.pages;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import rbp.Ui;

public class ReservationPage {
    private final WebDriver d;
    private final Ui ui;

    public ReservationPage(WebDriver d, Ui ui) {
        this.d = d;
        this.ui = ui;
    }

    public boolean isLoaded() {
        return ui.isVisible("reservation.open", 10);
    }

    public void openBookingForm() {
        ui.scrollAndClick("reservation.open");
    }

    public void fillGuest(String first, String last, String email, String phone) {
        ui.type("booking.firstname", first);
        ui.type("booking.lastname", last);
        ui.type("booking.email", email);
        ui.type("booking.phone", phone);
    }

    /** Chuyển sang tháng sau rồi kéo chọn từ ô colStart đến ô colEnd của hàng tuần thứ row (bắt đầu từ 0). */
    public void selectDaysNextMonth(int row, int colStart, int colEnd) {
        ui.click("reservation.nextMonth");
        ui.visible("reservation.calendar");
        List<WebElement> weeks = ui.all("reservation.weekRows");
        if (weeks.size() <= row) {
            throw new AssertionError("Lịch không có hàng tuần thứ " + row);
        }
        List<WebElement> cells = weeks.get(row).findElements(By.cssSelector(".rbc-day-bg"));
        if (cells.size() <= colEnd) {
            throw new AssertionError("Hàng tuần không có đủ ô ngày");
        }
        ui.scrollIntoView(cells.get(colStart));
        new Actions(d).clickAndHold(cells.get(colStart)).moveToElement(cells.get(colEnd)).release().perform();
    }

    /**
     * Chọn ngày bằng tham số ?checkin=&checkout= của địa chỉ trang đặt phòng (giao diện cũng dùng cách này ở các liên kết
     * phòng tương tự). Kéo chuột trên lịch bằng Selenium không chọn được ngày nên không dùng cách đó.
     */
    public void selectDays(LocalDate in, LocalDate out) {
        String base = d.getCurrentUrl().replaceFirst("\\?.*$", "");
        d.get(base + "?checkin=" + in + "&checkout=" + out);
        ui.visible("reservation.open");
        long nights = ChronoUnit.DAYS.between(in, out);
        boolean ok = Ui.poll(10, () -> ui.text("reservation.nights").contains(" x " + nights + " nights"));
        if (!ok) {
            throw new AssertionError("Trang đặt phòng không nhận ngày từ địa chỉ (giá tạm tính: " + nightsText() + ")");
        }
    }

    public String nightsText() {
        return ui.text("reservation.nights");
    }

    public void submitBooking() {
        ui.scrollAndClick("home.bookButton");
    }

    public boolean calendarHasEvents(int seconds) {
        return ui.isVisible("reservation.events", seconds);
    }

    public boolean alertVisible(int seconds) {
        return ui.isVisible("home.alert", seconds);
    }

    public String alertText() {
        return ui.text("home.alert");
    }

    public boolean successVisible(int seconds) {
        return ui.isVisible("booking.success", seconds);
    }
}
