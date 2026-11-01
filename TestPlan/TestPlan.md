# KẾ HOẠCH KIỂM THỬ

**Hệ thống đặt phòng khách sạn mã nguồn mở Restful-booker Platform**

| Mục | Nội dung |
|---|---|
| Môn học | Đánh giá và kiểm định chất lượng phần mềm |
| Đề tài | Kiểm định chất lượng phần mềm hệ thống đặt phòng khách sạn mã nguồn mở Restful-booker Platform bằng Postman, JMeter và Selenium |
| Nhóm thực hiện | Nguyễn Văn Ngọc - 23010413 ; Nguyễn Thị Trà Mi - 23010460 |

---

## Mục lục

1. Giới thiệu
2. Phạm vi kiểm thử
3. Chiến lược và kỹ thuật kiểm thử
4. Môi trường kiểm thử
5. Dữ liệu kiểm thử
6. Địa chỉ gọi API
7. Bộ test case
8. Ma trận truy vết
9. Kịch bản và ngưỡng hiệu năng
10. Tiêu chí vào, ra, tạm dừng và nghiệm thu
11. Quản lý lỗi
12. Rủi ro và biện pháp
13. Sản phẩm bàn giao, phân công và lịch trình

---

## 1. Giới thiệu

### 1.1 Mục đích

Tài liệu xác định phạm vi, chiến lược, môi trường, bộ test case và tiêu chí nghiệm thu để kiểm định chất lượng Restful-booker Platform. Các hạng mục kiểm thử được suy ra từ SRS (mục 3 đến 8) và được đối chiếu với hệ thống chạy thật trong Phần III.

### 1.2 Tài liệu tham chiếu

- SRS.
- ISO/IEC 25010: mô hình chất lượng sản phẩm phần mềm.
- Mã nguồn `restful-booker-platform`, repo gốc `github.com/mwinteringham/restful-booker-platform`.

### 1.3 Các điểm điều chỉnh so với SRS

Trong quá trình chuẩn bị Test Plan, việc chạy thử hệ thống cho thấy sáu điểm cần xử lý. Test Plan dùng các quyết định dưới đây làm chuẩn.

| STT | Điểm cần điều chỉnh | Quyết định trong Test Plan |
|---|---|---|
| 1 | NFR-02 và NFR-07 nhắc tới container và Docker, trong khi mục 2.3 của SRS nêu kiểm thử không dùng Docker | NFR-02 được kiểm thử bằng cách dừng tiến trình của dịch vụ phụ thuộc (tắt đúng tiến trình theo cổng, không dùng `taskkill /im java.exe`). Phần triển khai Docker của NFR-07 nằm ngoài phạm vi; chỉ kiểm thử tương thích trình duyệt |
| 2 | BR-07 và Phụ lục A ghi xem tin nhắn không cần token, trong khi NFR-04 yêu cầu dữ liệu cá nhân của khách chỉ Admin được xem | Lấy **NFR-04 làm chuẩn nghiệm thu**: các test case xem tin nhắn không token có kết quả mong đợi là 403. Hành vi thực tế của hệ thống (200, trả cả email, số điện thoại, nội dung) được ghi nhận là lỗi DEF-001 |
| 3 | Phản hồi qua giao diện (`/api/...` trên cổng 3003) khác phản hồi khi gọi thẳng dịch vụ. Đã quan sát: `POST /api/message` trả 200 kèm `{"success":true}` (SRS ghi dịch vụ trả 201); `POST /api/auth/login` trả token trong thân phản hồi, không có header `Set-Cookie`. Ngược lại, gọi thẳng `POST :3004/auth/login` trả 200, thân rỗng và token nằm trong `Set-Cookie` (đúng BR-08) | Test case Postman và JMeter kiểm tra theo mã trạng thái của dịch vụ (gọi thẳng). Test case Selenium kiểm tra theo hành vi giao diện. Mỗi test case ghi rõ đường gọi đang dùng |
| 4 | Các ngưỡng hiệu năng ở NFR-01 là đề xuất | Chốt ở mục 9, hiệu chỉnh ở Phần IV sau khi có số liệu thực tế |
| 5 | BR-01 và luồng thay thế UC-03 trong SRS 1.0 ghi thiếu `checkin` hoặc `checkout` trả 409. Hệ thống thực tế trả 400, do ràng buộc dữ liệu (BR-06) được kiểm tra trước | SRS đã sửa ở phiên bản 1.1 (thiếu ngày → 400; `checkin` bằng hoặc sau `checkout` → 409). TC-BOOK-09 có mong đợi 400. Đây là sai sót của SRS (suy ra từ đọc mã), không phải lỗi hệ thống, nên không vi phạm nguyên tắc ở mục 3.3; việc sửa được ghi trong lịch sử thay đổi của SRS |
| 6 | Dữ liệu mẫu của `branding` có `logoUrl` là đường dẫn tương đối (`/images/rbp-logo.jpg`), bị chính bộ kiểm tra URL của dịch vụ từ chối khi gửi lại bằng `PUT /branding/` (400, "Url should be a correct url format") | Các test case cập nhật thương hiệu dùng `logoUrl` tuyệt đối (`http://localhost:3003/images/rbp-logo.jpg`) để mỗi ca chỉ kiểm tra một ràng buộc. Việc dữ liệu mẫu tự vi phạm ràng buộc được ghi nhận là lỗi DEF-005 |

---

## 2. Phạm vi kiểm thử

### 2.1 Trong phạm vi

- Sáu dịch vụ: `auth`, `booking`, `room`, `message`, `branding`, `report` (qua REST API).
- Giao diện web (React) cho các luồng của Guest và Admin.
- Toàn bộ yêu cầu chức năng FR-01 đến FR-26 và các yêu cầu phi chức năng NFR-01 đến NFR-08, trừ phần ngoài phạm vi ở mục 2.2.

### 2.2 Ngoài phạm vi

- Kiểm thử xâm nhập và bảo mật chuyên sâu. Phần Security chỉ gồm phân quyền, xác thực token, rà soát mã và một số thử nghiệm đầu vào cơ bản.
- Kiểm thử trên thiết bị di động.
- Triển khai bằng Docker (`docker-compose.yml`).
- Kiểm thử mã nguồn từng lớp (unit test) của dự án gốc. Phần white-box chỉ gồm rà soát mã và phân tích luồng, không viết thêm unit test.

### 2.3 Hạng mục kiểm thử theo yêu cầu

| Nhóm | Yêu cầu | Công cụ chính |
|---|---|---|
| Chức năng API | FR-01 đến FR-26 | Postman, Newman |
| Chức năng giao diện | FR-01 đến FR-23 (luồng chính) | Selenium |
| Hiệu năng | NFR-01, NFR-03 | JMeter |
| Độ tin cậy | NFR-02 | Dừng tiến trình, Postman |
| Bảo mật | NFR-04, NFR-05 | Postman, rà soát mã |
| Khả dụng, tương thích | NFR-06, NFR-07 | Selenium, quan sát |
| Xử lý dữ liệu không hợp lệ | NFR-08 | Postman |

---

## 3. Chiến lược và kỹ thuật kiểm thử

### 3.1 Các tầng kiểm thử

| Tầng | Mục tiêu | Công cụ | Đường gọi |
|---|---|---|---|
| API | Kiểm tra mã trạng thái, dữ liệu trả về, ràng buộc, phân quyền | Postman (chạy tự động bằng Newman) | Gọi thẳng cổng dịch vụ |
| Giao diện | Kiểm tra luồng nghiệp vụ end-to-end và thông báo lỗi | Selenium WebDriver, mô hình Page Object; Selenium IDE dùng để ghi nhanh kịch bản | `http://localhost:3003` |
| Hiệu năng | Đo thời gian phản hồi, thông lượng, tỷ lệ lỗi, tính toàn vẹn khi đồng thời | Apache JMeter | Gọi thẳng cổng dịch vụ |
| Tĩnh (white-box) | Rà soát mã: băm mật khẩu, truy vấn tham số hóa, sinh và hết hạn token, cookie | Đọc mã nguồn | Không áp dụng |

### 3.2 Kỹ thuật thiết kế test case

| Kỹ thuật | Áp dụng cho |
|---|---|
| Phân vùng tương đương (EP) | Loại phòng (`type`), email hợp lệ và không hợp lệ, có và không có token |
| Phân tích giá trị biên (BVA) | Độ dài `firstname` (3 đến 18), `lastname` (3 đến 30), `phone` (11 đến 21), `subject` (5 đến 100), `description` (20 đến 2000), `roomPrice` (1 đến 999), `branding.name` (3 đến 100) |
| Bảng quyết định | Quy tắc ngày đặt phòng (BR-01, BR-02): checkin, checkout, trùng lịch |
| Chuyển trạng thái | Vòng đời token (đăng nhập, hợp lệ, đăng xuất, không hợp lệ); tin nhắn chưa đọc sang đã đọc |
| Kiểm thử theo vai trò | Guest và Admin trên cùng một API |
| Rà soát tĩnh (static review) | NFR-05 |
| Kiểm thử đồng thời | NFR-03 (không overbooking) |

### 3.3 Nguyên tắc thực thi

- Kết quả mong đợi lấy từ SRS và NFR, **không sửa cho khớp với hành vi hiện tại của hệ thống**. Test case lệch mong đợi được ghi là Fail và chuyển thành lỗi ở mục 11. Ngoại lệ duy nhất là khi đối chiếu cho thấy chính SRS mô tả sai (mục 1.3, điểm 5): khi đó sửa SRS, ghi vào lịch sử thay đổi và sửa mong đợi tương ứng.
- Mỗi test case ghi rõ đường gọi (thẳng dịch vụ hoặc qua giao diện).
- Mỗi lần chạy bộ test bắt đầu từ trạng thái dữ liệu sạch (mục 5.2).
- Mỗi test case lỗi có bằng chứng (ảnh chụp, log) lưu ở `Images/`.

---

## 4. Môi trường kiểm thử

### 4.1 Phần mềm

| Hạng mục | Phiên bản |
|---|---|
| Hệ điều hành | Windows 11 |
| JDK | Eclipse Temurin 26.0.2.1 |
| Maven | 3.9.14 |
| Node.js / npm | 24.22.1 / 11.19.1 |
| Postman / Newman | 12.34.2.0 / 6.2.3 |
| Apache JMeter | 5.6.3 |
| Selenium (WebDriver / IDE), trình duyệt | WebDriver 4.25.0 |
| Cấu hình máy kiểm thử (CPU, RAM) | AMD Ryzen 9 8945HX with Radeon Graphics (2.50 GHz), RAM 32GB |

### 4.2 Cách chạy hệ thống

- Chạy bằng `build_locally.cmd` (build Maven, sau đó gọi `run_locally.cmd`). Dự án kèm `docker-compose.yml` nhưng không dùng.
- `build_locally.cmd` gọi `run_locally.cmd true` nên chạy kèm bộ `end-to-end-tests` có sẵn và có thể để lại dữ liệu. Khi cần dữ liệu sạch, chạy `run_locally.cmd` không kèm `true`.
- Chạy ứng dụng ở một cửa sổ riêng và **không gõ gì vào cửa sổ đó**. Gửi lệnh kiểm thử ở cửa sổ khác. Nhấn Enter trong cửa sổ ứng dụng chạy `taskkill /f /im java.exe` và `node.exe`, tắt mọi tiến trình Java và Node trên máy.
- Biến `dbRefresh` không được đặt, nên dữ liệu không bị reset định kỳ, chỉ mất khi tắt dịch vụ.
- Tùy chọn: `set dbServer=true` trước khi chạy để mở cổng H2 (booking 9090, auth 9091, branding 9092, message 9093, room 9094) khi cần xem CSDL.

### 4.3 Cổng và log

| Thành phần | Cổng | Log (thư mục `SourceCode`) |
|---|---|---|
| Giao diện (`assets`, `npm run dev`) | 3003 | Cửa sổ chạy ứng dụng |
| booking | 3000 | `booking.log` |
| room | 3001 | `room.log` |
| branding | 3002 | `branding.log` |
| auth | 3004 | `auth.log` |
| report | 3005 | `report.log` |
| message | 3006 | `message.log` |

---

## 5. Dữ liệu kiểm thử

### 5.1 Dữ liệu khởi tạo

| Đối tượng | Dữ liệu mẫu sau khi khởi động |
|---|---|
| Phòng | 3 phòng: 101 (Single, 100), 102 (Double, 150), 103 (Suite, 225) |
| Booking | 1 booking ở phòng 1, từ 2026-02-01 đến 2026-02-05 |
| Tin nhắn | 1 tin nhắn (James Dean, "Booking enquiry") |
| Tài khoản Admin | `admin` / `password` (đăng nhập qua `POST /api/auth/login` trả `{"token": "..."}`) |

### 5.2 Nguyên tắc dữ liệu

- Mỗi phiên chạy bộ test bắt đầu bằng cách tắt hệ thống, chạy lại `run_locally.cmd` (không kèm `true`) để về dữ liệu mẫu.
- Test case tạo booking dùng khoảng ngày trong năm 2027 và tách biệt nhau, không dùng khoảng ngày của booking mẫu, trừ các test case trùng lịch và liền kề cố ý (TC-BOOK-10 đến TC-BOOK-13).
- Chuỗi biên (độ dài 2, 3, 18, 19, 30, 31, 100, 101, 2000, 2001) được sinh bằng script trong Postman, không gõ tay.
- Payload cập nhật thương hiệu dùng `logoUrl` tuyệt đối (mục 1.3, điểm 6). Dữ liệu thương hiệu sau khi chạy khác dữ liệu mẫu ở trường này, nên phải khởi động lại dịch vụ để về dữ liệu gốc.
- Token Admin lấy ở bước đăng nhập đầu phiên (từ `Set-Cookie` khi gọi thẳng dịch vụ), lưu vào biến môi trường `token` và gửi qua cookie `token=...`.
- Postman dùng chung cookie cho mọi cổng của cùng một tên host. Để các request "không token" không bị gửi kèm token, đăng nhập được gọi qua `localhost`, còn các dịch vụ khác gọi qua `127.0.0.1` (cookie của hai tên host tách biệt).
- Do Admin phải đăng nhập trước, các test case cần quyền Admin chạy sau nhóm AUTH.

---

## 6. Địa chỉ gọi API

| Dịch vụ | Gọi thẳng dịch vụ (Postman, JMeter) | Qua giao diện, cổng 3003 (Selenium) | Trạng thái |
|---|---|---|---|
| room | `http://localhost:3001/room/` | `/api/room`, `/api/room/{id}` | Đã xác nhận |
| booking | `http://localhost:3000/booking/` | `POST /api/booking` (201) | Đã xác nhận |
| branding | `http://localhost:3002/branding/` | `/api/branding` | Đã xác nhận |
| auth | `http://localhost:3004/auth/` | `POST /api/auth/login` (200, token trong thân), `POST /api/auth/validate` (200) | Đã xác nhận: qua giao diện trả token trong thân; gọi thẳng `login` trả thân rỗng, token trong `Set-Cookie` |
| report | `http://localhost:3005/report/` | `/api/report`, `/api/report/room/{id}` | Đã xác nhận |
| message | `http://localhost:3006/message/` | `POST /api/message` (200, `{"success":true}`) | Đã xác nhận |

Trong Postman, địa chỉ gốc đặt thành biến môi trường theo từng dịch vụ (`authUrl`, `roomUrl`, `bookingUrl`, `messageUrl`, `brandingUrl`, `reportUrl`); `authUrl` dùng `localhost`, các biến còn lại dùng `127.0.0.1` (xem mục 5.2). Qua giao diện, đường dẫn không có dấu `/` ở cuối; khi gọi thẳng dịch vụ thì có.

---

## 7. Bộ test case

### 7.1 Quy ước

- Mã test case: `TC-{NHÓM}-{số}`. Nhóm: AUTH, ROOM, BOOK, MSG, BRAND, REP, SEC, REL, UI, PERF.
- Các test case BVA và EP được thực thi theo dữ liệu (data-driven): một test case có thể có nhiều bộ dữ liệu. Giá trị cụ thể ghi ở cột Dữ liệu.
- "Có token" nghĩa là gửi cookie `token` của Admin; "không token" là không gửi cookie.
- Mã trạng thái là mã của dịch vụ khi gọi thẳng, theo Phụ lục A của SRS.
- Cột Yêu cầu liệt kê FR hoặc NFR được phủ. Ký hiệu `[DEF-0xx]` đánh dấu test case dự kiến Fail theo các lần chạy thử.

### 7.2 Nhóm AUTH: đăng nhập và xác thực token (Postman)

| Mã | Mô tả | Dữ liệu | Mong đợi | Yêu cầu |
|---|---|---|---|---|
| TC-AUTH-01 | Đăng nhập đúng | `admin` / `password` | 200, trả token | FR-08 |
| TC-AUTH-02 | Đăng nhập sai mật khẩu | `admin` / mật khẩu sai | 403 | FR-08 |
| TC-AUTH-03 | Đăng nhập sai tên đăng nhập | tên sai / `password` | 403 | FR-08 |
| TC-AUTH-04 | Đăng nhập để trống | username và password rỗng | 403 | FR-08 |
| TC-AUTH-05 | Xác thực token hợp lệ | token vừa cấp | 200 | FR-24 |
| TC-AUTH-06 | Xác thực token sai | `abc` | 403 | FR-24 |
| TC-AUTH-07 | Đăng xuất với token hợp lệ | token vừa cấp | 200 | FR-09 |
| TC-AUTH-08 | Xác thực token sau khi đăng xuất | token đã đăng xuất | 403 | FR-24 |
| TC-AUTH-09 | Đăng xuất với token không tồn tại | `abc` | 404 | FR-09 |

### 7.3 Nhóm ROOM: quản lý phòng (Postman)

| Mã | Mô tả | Dữ liệu | Mong đợi | Yêu cầu |
|---|---|---|---|---|
| TC-ROOM-01 | Xem danh sách phòng | `GET /room/` | 200, 3 phòng mẫu | FR-02 |
| TC-ROOM-02 | Xem chi tiết phòng | `GET /room/1` | 200, phòng 101 | FR-03 |
| TC-ROOM-03 | Xem phòng không tồn tại | `GET /room/99999` | 404 [DEF-003] | FR-03, NFR-08 |
| TC-ROOM-04 | Lọc theo ngày, khoảng trùng booking mẫu | `checkin=2026-02-01&checkout=2026-02-05` | 200, không còn phòng 1 | FR-04 |
| TC-ROOM-05 | Lọc theo ngày, khoảng không trùng | khoảng ngày năm 2027 | 200, đủ 3 phòng | FR-04 |
| TC-ROOM-06 | Lọc chỉ có một tham số ngày | chỉ `checkin` | 200, toàn bộ phòng (BR-10) | FR-04 |
| TC-ROOM-07 | Tạo phòng hợp lệ, mỗi loại phòng (EP) | `type` lần lượt Single, Double, Twin, Family, Suite; có token | 201 | FR-10 |
| TC-ROOM-08 | Tạo phòng không token | dữ liệu hợp lệ | 403 | FR-10, NFR-04 |
| TC-ROOM-09 | BVA giá phòng | `roomPrice` = 0, 1, 999, 1000 | 400, 201, 201, 400 | FR-10 |
| TC-ROOM-10 | Loại phòng ngoài danh sách | `type` = `Penthouse` | 400 | FR-10 |
| TC-ROOM-11 | Tên phòng rỗng | `roomName` = "" | 400 | FR-10 |
| TC-ROOM-12 | Sửa phòng hợp lệ | `PUT /room/{id}`, có token | 202 | FR-11 |
| TC-ROOM-13 | Sửa phòng không tồn tại | `PUT /room/99999`, có token | 404 | FR-11 |
| TC-ROOM-14 | Sửa phòng không token | dữ liệu hợp lệ | 403 | FR-11, NFR-04 |
| TC-ROOM-15 | Xóa phòng hợp lệ | phòng vừa tạo, có token | 202 | FR-12 |
| TC-ROOM-16 | Xóa phòng không tồn tại | `DELETE /room/99999`, có token | 404 | FR-12 |
| TC-ROOM-17 | Xóa phòng không token | phòng vừa tạo | 403 | FR-12, NFR-04 |

### 7.4 Nhóm BOOK: đặt phòng và quản lý booking (Postman)

| Mã | Mô tả | Dữ liệu | Mong đợi | Yêu cầu |
|---|---|---|---|---|
| TC-BOOK-01 | Tạo booking hợp lệ | dữ liệu đầy đủ, ngày năm 2027 | 201 | FR-06 |
| TC-BOOK-02 | BVA `firstname` | độ dài 2, 3, 18, 19 | 400, 201, 201, 400 | FR-06 |
| TC-BOOK-03 | BVA `lastname` | độ dài 2, 3, 30, 31 | 400, 201, 201, 400 | FR-06 |
| TC-BOOK-04 | BVA `phone` | độ dài 10, 11, 21, 22 | 400, 201, 201, 400 | FR-06 |
| TC-BOOK-05 | Email sai định dạng | `abc` | 400 | FR-06 |
| TC-BOOK-06 | `roomid` không hợp lệ | `roomid` = 0 | 400 | FR-06 |
| TC-BOOK-07 | `checkin` bằng `checkout` | cùng một ngày | 409 | FR-25 |
| TC-BOOK-08 | `checkin` sau `checkout` | ngược thứ tự | 409 | FR-25 |
| TC-BOOK-09 | Thiếu ngày | bỏ `checkin` hoặc `checkout` | 400 (BR-06, xem mục 1.3 điểm 5) | FR-06, FR-25 |
| TC-BOOK-10 | Trùng hoàn toàn với booking mẫu | phòng 1, 2026-02-01 đến 2026-02-05 | 409 | FR-25, NFR-03 |
| TC-BOOK-11 | Trùng một phần (gối lên) | phòng 1, 2026-02-03 đến 2026-02-08 | 409 | FR-25 |
| TC-BOOK-12 | Liền kề sau: bắt đầu đúng ngày kết thúc booking trước | phòng 1, 2026-02-05 đến 2026-02-08 | 201 | FR-25 |
| TC-BOOK-13 | Liền kề trước: kết thúc đúng ngày bắt đầu booking sau | phòng 1, 2026-01-28 đến 2026-02-01 | 201 | FR-25 |
| TC-BOOK-14 | Hai phòng khác nhau cùng ngày | phòng 2 và phòng 3, cùng khoảng ngày | 201 cả hai | FR-06 |
| TC-BOOK-15 | Xem danh sách booking không token | `GET /booking/?roomid=1` | 403 | FR-13, NFR-04 |
| TC-BOOK-16 | Xem danh sách booking có token | `GET /booking/?roomid=1` | 200 | FR-13 |
| TC-BOOK-17 | Xem chi tiết booking có token | `GET /booking/{id}` | 200 | FR-14 |
| TC-BOOK-18 | Xem chi tiết booking không token | `GET /booking/{id}` | 403 | FR-14, NFR-04 |
| TC-BOOK-19 | Xem booking không tồn tại | `GET /booking/99999`, có token | 404 | FR-14 |
| TC-BOOK-20 | Sửa booking hợp lệ | `PUT /booking/{id}`, có token | 200 | FR-15 |
| TC-BOOK-21 | Sửa booking gây trùng lịch | đổi ngày chồng lên booking khác | 409 | FR-15, FR-25 |
| TC-BOOK-22 | Sửa booking dữ liệu sai | `firstname` 2 ký tự | 400 | FR-15 |
| TC-BOOK-23 | Sửa booking không token | dữ liệu hợp lệ | 403 | FR-15, NFR-04 |
| TC-BOOK-24 | Sửa booking không tồn tại | `PUT /booking/99999`, có token | 404 | FR-15 |
| TC-BOOK-25 | Xóa booking hợp lệ | `DELETE /booking/{id}`, có token | 202 | FR-16 |
| TC-BOOK-26 | Xóa booking không token | booking vừa tạo | 403 | FR-16, NFR-04 |
| TC-BOOK-27 | Xóa booking không tồn tại | `DELETE /booking/99999`, có token | 404 | FR-16 |
| TC-BOOK-28 | Xem tóm tắt ngày đã đặt | `GET /booking/summary?roomid=1` | 200, không cần token | FR-05 |
| TC-BOOK-29 | Xem ngày không khả dụng | `GET /booking/unavailable?checkin&checkout` | 200, không cần token | FR-04 |

Ghi chú về TC-BOOK-12 và TC-BOOK-13:

- Hai test case dùng ngày cố định quanh booking mẫu của phòng 1. Khi thành công, TC-BOOK-12 tạo thêm một booking (2026-02-05 đến 2026-02-08); chạy lại mà không khởi động lại dịch vụ thì request này trùng với chính booking đã tạo và trả 409. Vì vậy mỗi phiên chạy phải bắt đầu từ dữ liệu sạch (mục 5.2).
- BR-02 của SRS chỉ nêu rõ chiều "bắt đầu đúng ngày booking trước kết thúc" (TC-BOOK-12). Mong đợi 201 của TC-BOOK-13 (kết thúc đúng ngày bắt đầu booking sau) suy ra từ tính đối xứng của quy tắc đặt phòng theo đêm. Phần white-box sẽ rà soát mã kiểm tra trùng lịch để kết luận lỗi hệ thống hay SRS thiếu quy tắc, rồi bổ sung BR-02 nếu cần.

### 7.5 Nhóm MSG: tin nhắn liên hệ (Postman)

| Mã | Mô tả | Dữ liệu | Mong đợi | Yêu cầu |
|---|---|---|---|---|
| TC-MSG-01 | Gửi liên hệ hợp lệ | dữ liệu đầy đủ | 201 | FR-07 |
| TC-MSG-02 | BVA `subject` | độ dài 4, 5, 100, 101 | 400, 201, 201, 400 | FR-07 |
| TC-MSG-03 | BVA `description` | độ dài 19, 20, 2000, 2001 | 400, 201, 201, 400 | FR-07 |
| TC-MSG-04 | BVA `phone` | độ dài 10, 11, 21, 22 | 400, 201, 201, 400 | FR-07 |
| TC-MSG-05 | Email sai định dạng | `abc` | 400 | FR-07 |
| TC-MSG-06 | Thiếu trường bắt buộc | bỏ `name` | 400 | FR-07 |
| TC-MSG-07 | Xem danh sách tin nhắn không token | `GET /message/` | 403 theo NFR-04 [DEF-001] | FR-17, NFR-04 |
| TC-MSG-08 | Xem danh sách tin nhắn có token | `GET /message/` | 200 | FR-17 |
| TC-MSG-09 | Xem chi tiết tin nhắn không token | `GET /message/1` | 403 theo NFR-04 [DEF-001] | FR-18, NFR-04 |
| TC-MSG-10 | Xem chi tiết tin nhắn có token | `GET /message/1` | 200 | FR-18 |
| TC-MSG-11 | Xem tin nhắn không tồn tại | `GET /message/99999` | 404 [DEF-002] | FR-18, NFR-08 |
| TC-MSG-12 | Đếm tin nhắn | `GET /message/count` | 200 (số đếm không phải dữ liệu cá nhân; SRS ghi không cần token) | FR-19 |
| TC-MSG-13 | Đánh dấu đã đọc có token | `PUT /message/{id}/read` | 202 | FR-20 |
| TC-MSG-14 | Đánh dấu đã đọc không token | `PUT /message/{id}/read` | 403 | FR-20, NFR-04 |
| TC-MSG-15 | Xóa tin nhắn có token | `DELETE /message/{id}` | 202 | FR-21 |
| TC-MSG-16 | Xóa tin nhắn không token | `DELETE /message/{id}` | 403 | FR-21, NFR-04 |
| TC-MSG-17 | Xóa tin nhắn không tồn tại | `DELETE /message/99999`, có token | 404 | FR-21 |
| TC-MSG-18 | Booking có email và phone sinh thông báo | tạo booking đủ `email`, `phone`, sau đó xem danh sách tin nhắn | Có tin nhắn thông báo mới | FR-26 |

### 7.6 Nhóm BRAND và REP: thương hiệu và báo cáo (Postman)

| Mã | Mô tả | Dữ liệu | Mong đợi | Yêu cầu |
|---|---|---|---|---|
| TC-BRAND-01 | Xem thương hiệu | `GET /branding/` | 200, đủ address, contact, map, logoUrl | FR-01 |
| TC-BRAND-02 | Cập nhật hợp lệ | dữ liệu đầy đủ, có token | 202 | FR-23 |
| TC-BRAND-03 | Cập nhật không token | dữ liệu hợp lệ | 403 | FR-23, NFR-04 |
| TC-BRAND-04 | Tên chứa ký tự không cho phép | `name` có chữ số | 400 | FR-23 |
| TC-BRAND-05 | BVA độ dài `name` | 2, 3, 100, 101 ký tự | 400, 202, 202, 400 | FR-23 |
| TC-BRAND-06 | `logoUrl` sai định dạng | `abc` | 400 | FR-23 |
| TC-BRAND-07 | `contact.email` sai định dạng | `abc` | 400 | FR-23 |
| TC-BRAND-08 | Thiếu `address.line1` | bỏ trường | 400 | FR-23 |
| TC-REP-01 | Báo cáo tổng hợp có token | `GET /report/`, cookie hợp lệ | 200 | FR-22 |
| TC-REP-02 | Báo cáo không có cookie | `GET /report/` | 400 | FR-22 |
| TC-REP-03 | Báo cáo với token sai | cookie `token=abc` | 403 [DEF-004] | FR-22, NFR-08 |
| TC-REP-04 | Báo cáo theo phòng không token | `GET /report/room/1` | 200 | FR-05 |

### 7.7 Nhóm SEC và REL: bảo mật và độ tin cậy

| Mã | Mô tả | Cách thực hiện | Mong đợi | Yêu cầu |
|---|---|---|---|---|
| TC-SEC-01 | Mật khẩu không lưu và so khớp ở dạng thô | Rà soát mã dịch vụ `auth` và dữ liệu khởi tạo | Mật khẩu được băm | NFR-05 |
| TC-SEC-02 | Truy vấn dùng tham số hóa | Rà soát mã truy cập CSDL của các dịch vụ | Không ghép chuỗi đầu vào vào SQL | NFR-05 |
| TC-SEC-03 | Đầu vào dạng SQL injection cơ bản | Gửi `' OR '1'='1` vào `username`, `roomid`, `roomName` | Không lộ dữ liệu, không trả 5xx | NFR-05, NFR-08 |
| TC-SEC-04 | Thuộc tính bảo vệ của cookie | Quan sát cookie `token` sau đăng nhập qua giao diện (HttpOnly, SameSite, Secure) | Có thuộc tính bảo vệ | NFR-05 |
| TC-SEC-05 | Token có thời hạn và sinh ngẫu nhiên | Rà soát mã sinh và kiểm tra token | Có cơ chế hết hạn, sinh ngẫu nhiên an toàn | NFR-05 |
| TC-SEC-06 | Dữ liệu không hợp lệ không gây 5xx | Gửi dữ liệu sai kiểu, thiếu, quá dài đến mọi API ghi | Luôn trả 4xx | NFR-08 |
| TC-REL-01 | Message-service không khả dụng khi đặt phòng | Dừng tiến trình message-service, tạo booking | Trả mã lỗi có kiểm soát; ghi nhận việc booking có được lưu hay không | NFR-02 |
| TC-REL-02 | Auth-service không khả dụng | Dừng tiến trình auth-service, gọi API cần token | Trả lỗi có kiểm soát, không treo | NFR-02 |

### 7.8 Nhóm UI: giao diện (Selenium)

| Mã | Mô tả | Mong đợi | Yêu cầu |
|---|---|---|---|
| TC-UI-01 | Mở trang chủ | Hiển thị thông tin thương hiệu và danh sách phòng | FR-01, FR-02 |
| TC-UI-02 | Xem chi tiết phòng và lịch trống | Hiển thị thông tin phòng và các ngày đã đặt | FR-03, FR-05 |
| TC-UI-03 | Đặt phòng hợp lệ | Đặt thành công, có xác nhận | FR-06 |
| TC-UI-04 | Đặt phòng nhập thiếu hoặc sai | Thông báo lỗi nêu rõ trường vi phạm | FR-06, NFR-06 |
| TC-UI-05 | Đặt phòng trùng lịch | Hiển thị thông báo lỗi, không tạo booking | FR-25 |
| TC-UI-06 | Đặt phòng với tên tiếng Việt có dấu | Dữ liệu hợp lý không bị từ chối vô lý | NFR-06 |
| TC-UI-07 | Gửi liên hệ hợp lệ | Gửi thành công, có xác nhận | FR-07 |
| TC-UI-08 | Gửi liên hệ sai dữ liệu | Thông báo lỗi nêu rõ trường vi phạm | FR-07, NFR-06 |
| TC-UI-09 | Đăng nhập admin đúng | Vào được khu vực quản trị | FR-08 |
| TC-UI-10 | Đăng nhập admin sai | Hiển thị thông báo lỗi | FR-08 |
| TC-UI-11 | Admin tạo, sửa, xóa phòng | Danh sách phòng cập nhật đúng | FR-10, FR-11, FR-12 |
| TC-UI-12 | Admin xem, sửa, xóa booking | Booking hiển thị và cập nhật đúng | FR-13 đến FR-16 |
| TC-UI-13 | Admin xem, đánh dấu đã đọc, xóa tin nhắn | Trạng thái tin nhắn cập nhật đúng | FR-17 đến FR-21 |
| TC-UI-14 | Admin xem báo cáo | Báo cáo hiển thị | FR-22 |
| TC-UI-15 | Admin cập nhật thương hiệu | Thông tin mới hiển thị ở trang chủ | FR-23 |
| TC-UI-16 | Đăng xuất | Quay lại trạng thái Guest | FR-09 |
| TC-UI-17 | Truy cập khu vực quản trị khi chưa đăng nhập | Bị chặn hoặc chuyển về đăng nhập | NFR-04 |
| TC-UI-18 | Chạy các luồng chính trên Chrome, Firefox, Edge | Kết quả giống nhau trên cả ba trình duyệt | NFR-07 |

### 7.9 Nhóm PERF: hiệu năng (JMeter)

| Mã | Mô tả | Kịch bản | Mong đợi | Yêu cầu |
|---|---|---|---|---|
| TC-PERF-01 | Tải `GET /room/` | Load test, mục 9 | Đạt ngưỡng NFR-01 | NFR-01 |
| TC-PERF-02 | Tải `POST /booking/` | Load test, mục 9 | Đạt ngưỡng NFR-01 | NFR-01 |
| TC-PERF-03 | Stress | Tăng dần người dùng đến khi vượt ngưỡng | Xác định điểm gãy và cách hệ thống suy giảm | NFR-01 |
| TC-PERF-04 | Spike | Tăng đột ngột người dùng, rồi giảm | Hệ thống phục hồi, không treo | NFR-01 |
| TC-PERF-05 | Đặt đồng thời cùng một phòng, cùng khoảng ngày | Nhiều luồng cùng gửi `POST /booking/` | Đúng một yêu cầu thành công, các yêu cầu còn lại 409 | NFR-03 |

### 7.10 Tổng hợp số lượng

| Nhóm | Số test case |
|---|---|
| AUTH | 9 |
| ROOM | 17 |
| BOOK | 29 |
| MSG | 18 |
| BRAND | 8 |
| REP | 4 |
| SEC | 6 |
| REL | 2 |
| UI | 18 |
| PERF | 5 |
| **Tổng** | **116** |

Số test case thiết kế (116) khác số dòng thực thi trong Postman (128) vì các test case BVA và EP được thực thi theo dữ liệu (mục 7.1): mỗi bộ dữ liệu là một request riêng, mang mã có hậu tố chữ cái (ví dụ TC-ROOM-09a đến 09d). Bảng đối chiếu:

| Nhóm | Test case thiết kế | Dòng thực thi trong Postman | Ghi chú |
|---|---|---|---|
| AUTH | 9 | 9 | |
| ROOM | 17 | 24 | TC-ROOM-07 thành 5 dòng, TC-ROOM-09 thành 4 dòng |
| BOOK | 29 | 40 | TC-BOOK-02, 03, 04 mỗi ca 4 dòng; TC-BOOK-09 và TC-BOOK-14 mỗi ca 2 dòng |
| MSG | 18 | 29 | TC-MSG-02, 03, 04 mỗi ca 4 dòng; TC-MSG-18 thành 3 dòng |
| BRAND | 8 | 11 | TC-BRAND-05 thành 4 dòng |
| REP | 4 | 4 | |
| SEC | 6 | 11 | Postman chỉ phủ TC-SEC-03 (4 dòng) và TC-SEC-06 (7 dòng); TC-SEC-01, 02, 04, 05 là rà soát mã hoặc quan sát |
| **Tổng** | **87** (không tính REL, UI, PERF) | **128** | |

---

## 8. Ma trận truy vết

Cột Test Case của ma trận trong SRS (mục 8) được điền như sau.

| FR | Test Case |
|---|---|
| FR-01 | TC-BRAND-01, TC-UI-01 |
| FR-02 | TC-ROOM-01, TC-UI-01 |
| FR-03 | TC-ROOM-02, TC-ROOM-03, TC-UI-02 |
| FR-04 | TC-ROOM-04, TC-ROOM-05, TC-ROOM-06, TC-BOOK-29 |
| FR-05 | TC-BOOK-28, TC-REP-04, TC-UI-02 |
| FR-06 | TC-BOOK-01 đến TC-BOOK-06, TC-BOOK-09, TC-BOOK-14, TC-UI-03, TC-UI-04 |
| FR-07 | TC-MSG-01 đến TC-MSG-06, TC-UI-07, TC-UI-08 |
| FR-08 | TC-AUTH-01 đến TC-AUTH-04, TC-UI-09, TC-UI-10 |
| FR-09 | TC-AUTH-07, TC-AUTH-09, TC-UI-16 |
| FR-10 | TC-ROOM-07 đến TC-ROOM-11, TC-UI-11 |
| FR-11 | TC-ROOM-12 đến TC-ROOM-14, TC-UI-11 |
| FR-12 | TC-ROOM-15 đến TC-ROOM-17, TC-UI-11 |
| FR-13 | TC-BOOK-15, TC-BOOK-16, TC-UI-12 |
| FR-14 | TC-BOOK-17 đến TC-BOOK-19, TC-UI-12 |
| FR-15 | TC-BOOK-20 đến TC-BOOK-24, TC-UI-12 |
| FR-16 | TC-BOOK-25 đến TC-BOOK-27, TC-UI-12 |
| FR-17 | TC-MSG-07, TC-MSG-08, TC-UI-13 |
| FR-18 | TC-MSG-09 đến TC-MSG-11, TC-UI-13 |
| FR-19 | TC-MSG-12, TC-UI-13 |
| FR-20 | TC-MSG-13, TC-MSG-14, TC-UI-13 |
| FR-21 | TC-MSG-15 đến TC-MSG-17, TC-UI-13 |
| FR-22 | TC-REP-01 đến TC-REP-03, TC-UI-14 |
| FR-23 | TC-BRAND-02 đến TC-BRAND-08, TC-UI-15 |
| FR-24 | TC-AUTH-05, TC-AUTH-06, TC-AUTH-08 |
| FR-25 | TC-BOOK-07 đến TC-BOOK-13, TC-BOOK-21, TC-UI-05 |
| FR-26 | TC-MSG-18 |

Yêu cầu phi chức năng:

| NFR | Test Case |
|---|---|
| NFR-01 | TC-PERF-01 đến TC-PERF-04 |
| NFR-02 | TC-REL-01, TC-REL-02 |
| NFR-03 | TC-PERF-05, TC-BOOK-10 |
| NFR-04 | TC-MSG-07, TC-MSG-09, TC-MSG-14, TC-MSG-16, TC-ROOM-08, TC-ROOM-14, TC-ROOM-17, TC-BOOK-15, TC-BOOK-18, TC-BOOK-23, TC-BOOK-26, TC-BRAND-03, TC-REP-03, TC-UI-17 |
| NFR-05 | TC-SEC-01 đến TC-SEC-05 |
| NFR-06 | TC-UI-04, TC-UI-06, TC-UI-08 |
| NFR-07 | TC-UI-18 |
| NFR-08 | TC-SEC-03, TC-SEC-06, TC-ROOM-03, TC-MSG-11, TC-REP-03 |

Mọi yêu cầu FR-01 đến FR-26 và NFR-01 đến NFR-08 đều có ít nhất một test case (độ phủ yêu cầu 100% ở mức thiết kế).

---

## 9. Kịch bản và ngưỡng hiệu năng

Ngưỡng đề xuất theo NFR-01: với 50 người dùng đồng thời, thời gian phản hồi trung bình ≤ 1 giây, p95 ≤ 2 giây, tỷ lệ lỗi < 1%. Ngưỡng này được đo ở Phần III và hiệu chỉnh, kết luận ở Phần IV.

| Kịch bản | API | Cấu hình đề xuất |
|---|---|---|
| Load | `GET /room/`, `POST /booking/` (mỗi lần dùng khoảng ngày khác nhau) | 50 luồng, ramp-up 30 giây, duy trì 5 phút |
| Stress | `GET /room/`, `POST /booking/` | Tăng dần từ 50 lên 100, 200, 400 luồng, theo dõi điểm bắt đầu vượt ngưỡng hoặc xuất hiện lỗi |
| Spike | `GET /room/` | Tăng đột ngột từ 10 lên 200 luồng trong vài giây, rồi giảm và quan sát phục hồi |
| Đồng thời (NFR-03) | `POST /booking/` cùng `roomid`, cùng khoảng ngày | 20 đến 50 luồng gửi cùng lúc (synchronizing timer), mong đợi đúng 1 phản hồi 201 |

Nguyên tắc đo:

- JMeter gọi thẳng cổng dịch vụ (3000 và 3001), không đi qua cổng 3003 vì máy chủ phát triển của giao diện làm lệch số liệu.
- Không chạy kịch bản hiệu năng trong khi JMeter và hệ thống tranh tài nguyên với chương trình khác; ghi lại cấu hình máy.
- Mỗi kịch bản chạy trên dữ liệu sạch và lặp lại tối thiểu 3 lần; báo cáo lấy giá trị trung bình và nêu độ lệch.
- Chỉ số ghi nhận: thời gian phản hồi trung bình, p95, p99, thông lượng (yêu cầu mỗi giây), tỷ lệ lỗi, mức sử dụng CPU và bộ nhớ của máy.

---

## 10. Tiêu chí vào, ra, tạm dừng và nghiệm thu

**Tiêu chí bắt đầu**

- SRS và Test Plan đã được rà soát.
- Hệ thống chạy ổn định: cả 6 cổng dịch vụ và cổng 3003 phản hồi.
- Công cụ đã cài đặt và phiên bản đã ghi ở mục 4.1.
- Bộ test case đã thiết kế xong và có dữ liệu kiểm thử.

**Tiêu chí tạm dừng**

- Hệ thống không khởi động hoặc một dịch vụ lõi (`auth`, `booking`, `room`) liên tục không phản hồi.
- Lỗi môi trường làm hơn 20% test case không thực thi được.

**Tiêu chí kết thúc và nghiệm thu**

- 100% test case đã thiết kế được thực thi; test case không thực thi được phải nêu lý do.
- Mỗi test case Fail có lỗi tương ứng trong danh sách lỗi, kèm bằng chứng và mức độ.
- 100% yêu cầu FR và NFR có ít nhất một test case đã thực thi (độ phủ yêu cầu).
- Không còn lỗi mức Cao chưa được phân tích nguyên nhân và đề xuất khắc phục.
- Kết quả hiệu năng được đối chiếu với ngưỡng ở mục 9; trường hợp không đạt được ghi rõ và giải thích.

Do mục đích là đánh giá chất lượng, hệ thống **không bắt buộc đạt 100% test case** để được nghiệm thu; điều kiện nghiệm thu là việc thực thi và phân tích đầy đủ.

---

## 11. Quản lý lỗi

### 11.1 Mức độ nghiêm trọng

| Mức | Mô tả | Ví dụ |
|---|---|---|
| Cao | Lộ dữ liệu cá nhân, mất dữ liệu, vi phạm xác thực hoặc phân quyền, chức năng cốt lõi không dùng được | Xem tin nhắn không cần đăng nhập |
| Trung bình | Chức năng sai hoặc trả mã lỗi không đúng nhưng có cách khắc phục, không lộ dữ liệu | Trả 500 thay vì 404 |
| Thấp | Lỗi giao diện, thông báo không rõ, sai chính tả | Thông báo lỗi chung chung |

### 11.2 Mẫu báo cáo lỗi

Mỗi lỗi gồm: mã lỗi, chức năng và yêu cầu liên quan, các bước tái hiện, kết quả mong đợi, kết quả thực tế, mức độ, bằng chứng, phân tích nguyên nhân (log, mã nguồn) và đề xuất khắc phục.

### 11.3 Danh sách lỗi sơ bộ (từ các lần chạy thử trước khi thực thi chính thức)

| Mã | Mô tả | Test case | Mức đề xuất |
|---|---|---|---|
| DEF-001 | `GET /message/`, `GET /message/{id}` không cần token; `GET /message/1` trả `email`, `phone`, `description` của khách | TC-MSG-07, TC-MSG-09 | Cao |
| DEF-002 | `GET /message/99999` trả 500 thay vì 404 | TC-MSG-11 | Trung bình |
| DEF-003 | `GET /room/99999` trả 500 thay vì 404 | TC-ROOM-03 | Trung bình |
| DEF-004 | `GET /report/` với token sai trả 500 thay vì 403 | TC-REP-03 | Trung bình (có thể hạ xuống Thấp vì yêu cầu vẫn bị từ chối) |
| DEF-005 | Dữ liệu mẫu `logoUrl` là đường dẫn tương đối, bị chính bộ kiểm tra URL từ chối khi gửi lại bằng `PUT /branding/` (400); cần xác nhận ảnh hưởng trên giao diện bằng Selenium | TC-BRAND-01, TC-BRAND-02 | Trung bình (chờ xác nhận) |
| DEF-006 | `POST /booking/` có `checkout` đúng ngày `checkin` của booking sau trả 409 thay vì 201; chiều ngược lại (TC-BOOK-12) đạt | TC-BOOK-13 | Trung bình (chờ kết luận SRS hay hệ thống, xem mục 7.4) |

Danh sách này sẽ được xác nhận và bổ sung ở Phần III, mã lỗi được đánh lại khi lập bảng lỗi chính thức ở Phần IV.

---

## 12. Rủi ro và biện pháp

| STT | Rủi ro | Ảnh hưởng | Biện pháp |
|---|---|---|---|
| 1 | Dữ liệu không reset giữa các lần chạy | Test case phụ thuộc thứ tự, kết quả lệch | Bắt đầu mỗi phiên từ trạng thái sạch; dùng dữ liệu riêng cho từng test case |
| 2 | Nhấn Enter trong cửa sổ ứng dụng tắt mọi tiến trình Java và Node trên máy | Mất trạng thái, tắt cả chương trình khác | Chạy ứng dụng ở cửa sổ riêng; không chạy chương trình Java hoặc Node khác khi kiểm thử |
| 3 | Số liệu hiệu năng biến động vì chạy trên máy cá nhân | Kết luận thiếu tin cậy | Ghi cấu hình máy; chạy lặp lại; đóng chương trình nền |
| 4 | Cổng 3003 chạy bằng máy chủ phát triển | Làm lệch số liệu hiệu năng nếu đo qua giao diện | JMeter gọi thẳng cổng dịch vụ |
| 5 | Phản hồi qua giao diện khác khi gọi thẳng dịch vụ | Nhầm lẫn khi đối chiếu SRS | Mỗi test case ghi rõ đường gọi; kiểm tra mã dịch vụ khi gọi thẳng |
| 6 | Thay đổi mã nguồn của dự án gốc | Kết quả không tái lập | Cố định commit `efe2deb8ce02db541adbf9d3a6604caf5fbdaae6` |
| 7 | Kịch bản Selenium không ổn định (chờ phần tử, phụ thuộc thời gian) | Test case Fail giả | Dùng chờ tường minh (explicit wait); đặt định danh phần tử rõ ràng; chạy lại để xác nhận lỗi |
| 8 | Khác biệt phiên bản công cụ giữa các thành viên | Kết quả khác nhau | Ghi phiên bản ở mục 4.1 và dùng chung bộ script trong repo |

---

## 13. Sản phẩm bàn giao, phân công và lịch trình

### 13.1 Sản phẩm bàn giao

| Sản phẩm | Vị trí trong repo |
|---|---|
| Test Plan | `TestPlan/TestPlan.md` |
| Bảng test case chi tiết (mở rộng từ mục 7) | `TestCase/TestCase_RestfulBooker_Postman.xlsx` |
| Postman collection và environment | `Postman/` |
| Script Selenium | `Selenium/` |
| Test plan JMeter và kết quả (`.jtl`, báo cáo HTML) | `JMeter/` |
| Ảnh chụp, log bằng chứng | `Images/` |
| Báo cáo cuối kỳ | `BaoCao/` |

### 13.2 Phân công và lịch trình

| Công việc | Người phụ trách |
|---|---|
| Thiết kế chi tiết bộ test case | Nguyễn Văn Ngọc |
| Postman: xây dựng và chạy collection | Nguyễn Văn Ngọc | 
| Selenium: xây dựng và chạy kịch bản | Nguyễn Văn Ngọc | 
| JMeter: xây dựng và chạy kịch bản | Nguyễn Thị Trà Mi |
| Rà soát mã (white-box, NFR-05) | Nguyễn Thị Trà Mi |
| Tổng hợp kết quả, báo cáo lỗi (Phần IV) | Nguyễn Thị Trà Mi |

---

## Phụ lục: Lệnh tham khảo

```
:: Chạy hệ thống với dữ liệu sạch (ở cửa sổ riêng)
cd SourceCode
run_locally.cmd

:: Đăng nhập admin qua giao diện
curl -i -X POST http://localhost:3003/api/auth/login -H "Content-Type: application/json" -d "{\"username\":\"admin\",\"password\":\"password\"}"

:: Kiểm tra lỗi lộ dữ liệu (DEF-001)
curl -i http://localhost:3006/message/1

:: Chạy collection Postman bằng Newman
newman run Postman\RestfulBooker_postman_collection.json -e Postman\RestfulBooker_postman_environment.json
:: hoặc chạy run_newman.cmd (xuất báo cáo vào Postman\reports)
```
