# Kiểm thử giao diện bằng Selenium

Bộ test này ứng với nhóm UI trong `TestPlan/TestPlan.md` (mục 7.8): `TC-UI-01` đến `TC-UI-17` là các test JUnit 5, `TC-UI-18` (ba trình duyệt) chạy bằng `run_selenium.cmd all`.

> **Chưa biên dịch và chưa chạy thử.** Mã được viết dựa trên page object của bộ end-to-end-tests trong repo và các phần đã biết của hệ thống. Một số định danh phần tử là **suy đoán** (đánh dấu `[DOAN]` trong `src/test/resources/locators.properties`). Hãy làm theo mục 3 để kiểm tra trước khi chạy chính thức.

## 1. Yêu cầu

- Java 17 trở lên, Maven.
- Chrome (bắt buộc), Firefox và Edge (cho TC-UI-18). Selenium Manager tự tải driver, lần đầu cần có Internet.
- Hệ thống đang chạy (`run_locally.cmd`, không kèm `true`) và mở được `http://localhost:3003`.
- Tài khoản Admin: sửa `adminUser`, `adminPassword` trong `config.properties` nếu khác mặc định.

## 2. Cấu trúc

| Thành phần | Vai trò |
|---|---|
| `config.properties` | Địa chỉ giao diện, địa chỉ gọi thẳng các dịch vụ, trình duyệt, tài khoản |
| `locators.properties` | Định danh phần tử giao diện (sửa tại đây, không sửa trong mã) |
| `pages/` | Các page object: trang chủ, trang đặt phòng, khu quản trị |
| `ApiClient` | Tạo dữ liệu, kiểm tra kết quả và dọn dẹp bằng cách gọi thẳng dịch vụ |
| `GuestUiTest` | TC-UI-01 đến TC-UI-08 |
| `AdminUiTest` | TC-UI-09 đến TC-UI-17 |
| `LocatorSmoke`, `DomDump` | Công cụ kiểm tra định danh, không nằm trong bộ test thường |

Nguyên tắc: thao tác trên **giao diện**, còn việc xác nhận kết quả (booking, phòng, tin nhắn, thương hiệu đã đổi chưa) kiểm tra bằng **API**, vì chắc chắn hơn việc đọc chữ trên màn hình. Mọi dữ liệu test tạo ra đều được dọn lại.

## 3. Cách chạy

1. Chạy hệ thống, kiểm tra mở được `http://localhost:3003`.
2. `run_selenium.cmd locators`: báo các định danh không tìm thấy. Nếu có, chạy `run_selenium.cmd dump`, rồi gửi các tệp trong `target\dom` (`.html` và `.png`) để cập nhật `locators.properties`.
3. `run_selenium.cmd chrome`: chạy 17 test case trên Chrome.
4. `run_selenium.cmd all`: chạy lần lượt Chrome, Firefox, Edge và liệt kê test case có kết quả khác nhau giữa các trình duyệt (TC-UI-18).

Chế độ không hiện cửa sổ trình duyệt: thêm `-Dheadless=true` khi chạy Maven trực tiếp, ví dụ `mvn test -Dbrowser=firefox -Dheadless=true`.

## 4. Kết quả

- `target\ui-results-<trình duyệt>.csv`: mã test case, kết quả (PASS, FAIL), thời gian, thông báo lỗi. Bản sao nằm trong `results\`. Dùng để điền bảng kết quả ở Phần IV.
- `target\screenshots\`: ảnh chụp màn hình lúc test thất bại.
- Báo cáo Surefire: `target\surefire-reports`.

## 5. Độ tin cậy của từng test case

| Test case | Cách kiểm tra | Định danh |
|---|---|---|
| TC-UI-01 | Tên thương hiệu và số phòng trên giao diện khớp với API | Đã có trong page object |
| TC-UI-02 | Tạo booking hôm nay bằng API, kiểm tra lịch của phòng có sự kiện | Một phần suy đoán (lịch) |
| TC-UI-03, 05, 06 | Chọn ngày bằng cách kéo trên lịch tháng sau, nhập thông tin, gửi; kiểm tra booking bằng API | **Suy đoán**: ô nhập, nút tháng sau, hàng tuần của lịch |
| TC-UI-04 | Gửi biểu mẫu để trống, kiểm tra thông báo lỗi | Đã có trong page object (nút đặt phòng, khung lỗi) |
| TC-UI-07, 08 | Điền biểu mẫu liên hệ; kiểm tra tin nhắn bằng API | **Suy đoán**: các ô và nút của biểu mẫu liên hệ |
| TC-UI-09, 10, 17 | Đăng nhập đúng, sai, truy cập không đăng nhập | Đã có trong page object (đường dẫn `/admin`, `/admin/rooms` là suy đoán) |
| TC-UI-11 | Tạo và xóa phòng bằng giao diện; sửa giá; kiểm tra bằng API | Tạo, xóa gần như có sẵn; **nút cập nhật phòng suy đoán** |
| TC-UI-12 | Chỉ kiểm phần **xem** booking trong khu quản trị | Suy đoán; phần sửa, xóa booking chưa tự động hóa vì chưa biết giao diện |
| TC-UI-13 | Xem, mở (đánh dấu đã đọc), xóa tin nhắn; kiểm tra bằng API | Biểu tượng xóa đã có; dòng tin nhắn suy đoán |
| TC-UI-14 | Mở báo cáo, kiểm tra lịch hiển thị | Đã có trong page object |
| TC-UI-15 | Đổi tên thương hiệu trên giao diện, kiểm tra API và trang chủ | Ô tên đã có; **nút cập nhật suy đoán** |
| TC-UI-16 | Đăng xuất, nhấn Back, kiểm tra không vào lại được | **Nút đăng xuất suy đoán** |

## 6. Lưu ý

- **TC-UI-15 thay đổi tên thương hiệu** và không khôi phục (API cập nhật thương hiệu đang bị lỗi DEF-005 khi `logoUrl` là đường dẫn tương đối, nên không thể khôi phục an toàn). Khởi động lại hệ thống để về dữ liệu mẫu. Nếu test này thất bại ở bước đổi tên, rất có thể chính là DEF-005 biểu hiện trên giao diện; ghi nhận vào Phần IV.
- Các test đặt phòng dùng **phòng đầu tiên** và ngày ở **tháng sau**, rồi xóa booking mới tạo. Nếu bị gián đoạn giữa chừng, booking thừa có thể còn lại; khởi động lại hệ thống để dọn.
- `TC-UI-04` và `TC-UI-08` kiểm tra thông báo lỗi **có nêu trường vi phạm**. Nếu giao diện chỉ hiện thông báo chung chung, test sẽ thất bại và đó là phát hiện về Usability (NFR-06).
- Mỗi test mở một trình duyệt mới nên bộ test chạy chậm hơn nhưng độc lập với nhau.
- Máy dùng JDK rất mới có thể gặp cảnh báo ByteBuddy; `pom.xml` đã bật `-Dnet.bytebuddy.experimental=true` để tránh.
