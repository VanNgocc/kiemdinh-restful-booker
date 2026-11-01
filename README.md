BỘ GIÁO DỤC VÀ ĐÀO TẠO

**TRƯỜNG ĐẠI HỌC PHENIKAA**

![Logo Trường Đại học Phenikaa](media/image1.jpeg)

**BÀI TẬP LỚN**

**ĐÁNH GIÁ VÀ KIỂM ĐỊNH CHẤT LƯỢNG PHẦN MỀM**

**Kiểm định chất lượng phần mềm hệ thống đặt phòng khách sạn mã nguồn mở Restful-booker Platform bằng Postman, JMeter và Selenium**

**Giảng viên hướng dẫn: TS. Trịnh Thanh Bình**

> **Danh sách thành viên:**

| **Mã sinh viên** | **Họ và tên**     | **Lớp**   |
|------------------|-------------------|-----------|
| 23010413         | Nguyễn Văn Ngọc   | CNTT5_K17 |
| 23010460         | Nguyễn Thị Trà Mi | CNTT5_K17 |

**Hà Nội, Năm 2026**

**MỤC LỤC**

- [Chương 1. Tổng quan đề tài](#chương-1-tổng-quan-đề-tài)
  - [1.1 Giới thiệu](#11-giới-thiệu)
  - [1.2 Mục tiêu kiểm định](#12-mục-tiêu-kiểm-định)
  - [1.3 Công nghệ sử dụng](#13-công-nghệ-sử-dụng)
  - [1.4 Nội dung kiểm định](#14-nội-dung-kiểm-định)
- [Chương 2. Đặc tả yêu cầu phần mềm](#chương-2-đặc-tả-yêu-cầu-phần-mềm)
  - [2.1 Giới thiệu](#21-giới-thiệu)
  - [2.2 Mô tả tổng quan](#22-mô-tả-tổng-quan)
  - [2.3 Yêu cầu chức năng](#23-yêu-cầu-chức-năng)
  - [2.4 Yêu cầu giao diện ngoài](#24-yêu-cầu-giao-diện-ngoài)
  - [2.5 Mô hình hóa hệ thống](#25-mô-hình-hóa-hệ-thống)
  - [2.6 Quy tắc nghiệp vụ và ràng buộc dữ liệu](#26-quy-tắc-nghiệp-vụ-và-ràng-buộc-dữ-liệu)
  - [2.7 Yêu cầu phi chức năng](#27-yêu-cầu-phi-chức-năng)
  - [2.8 Ma trận truy vết](#28-ma-trận-truy-vết)
  - [2.9 Phụ lục A: Danh mục API](#29-phụ-lục-a-danh-mục-api)
- [Chương 3. Kế hoạch kiểm thử](#chương-3-kế-hoạch-kiểm-thử)
  - [3.1 Giới thiệu](#31-giới-thiệu)
  - [3.2 Phạm vi kiểm thử](#32-phạm-vi-kiểm-thử)
  - [3.3 Chiến lược và kỹ thuật kiểm thử](#33-chiến-lược-và-kỹ-thuật-kiểm-thử)
  - [3.4 Môi trường kiểm thử](#34-môi-trường-kiểm-thử)
  - [3.5 Dữ liệu kiểm thử](#35-dữ-liệu-kiểm-thử)
  - [3.6 Địa chỉ gọi API](#36-địa-chỉ-gọi-api)
  - [3.7 Bộ test case](#37-bộ-test-case)
  - [3.8 Ma trận truy vết](#38-ma-trận-truy-vết)
  - [3.9 Kịch bản và ngưỡng hiệu năng](#39-kịch-bản-và-ngưỡng-hiệu-năng)
  - [3.10 Tiêu chí vào, ra, tạm dừng và nghiệm thu](#310-tiêu-chí-vào-ra-tạm-dừng-và-nghiệm-thu)
  - [3.11 Quản lý lỗi](#311-quản-lý-lỗi)
  - [3.12 Rủi ro và biện pháp](#312-rủi-ro-và-biện-pháp)
  - [3.13 Sản phẩm bàn giao và phân công](#313-sản-phẩm-bàn-giao-và-phân-công)
  - [3.14 Phụ lục: Lệnh tham khảo](#314-phụ-lục-lệnh-tham-khảo)
- [Chương 4. Thực hiện kiểm thử](#chương-4-thực-hiện-kiểm-thử)
  - [4.1 Phạm vi, môi trường và phương pháp](#41-phạm-vi-môi-trường-và-phương-pháp)
  - [4.2 Kết quả thực thi](#42-kết-quả-thực-thi)
- [Chương 5. Báo cáo kết quả kiểm thử](#chương-5-báo-cáo-kết-quả-kiểm-thử)
  - [5.1 Tóm tắt kết quả](#51-tóm-tắt-kết-quả)
  - [5.2 Phân tích lỗi](#52-phân-tích-lỗi)
  - [5.3 Đánh giá chất lượng theo ISO/IEC 25010](#53-đánh-giá-chất-lượng-theo-isoiec-25010)
  - [5.4 Đánh giá rủi ro](#54-đánh-giá-rủi-ro)
  - [5.5 Đối chiếu tiêu chí nghiệm thu](#55-đối-chiếu-tiêu-chí-nghiệm-thu)
  - [5.6 Kết luận và kiến nghị](#56-kết-luận-và-kiến-nghị)
  - [5.7 Phụ lục A: Kết quả chi tiết 116 test case](#57-phụ-lục-a-kết-quả-chi-tiết-116-test-case)
  - [5.8 Phụ lục B: Số liệu hiệu năng đầy đủ](#58-phụ-lục-b-số-liệu-hiệu-năng-đầy-đủ)
  - [5.9 Phụ lục C: Bằng chứng](#59-phụ-lục-c-bằng-chứng)
- [Chương 6. Tổng hợp và hướng dẫn sử dụng repository](#chương-6-tổng-hợp-và-hướng-dẫn-sử-dụng-repository)
  - [6.1 Kết quả kiểm thử](#61-kết-quả-kiểm-thử)
  - [6.2 Kỹ thuật kiểm thử](#62-kỹ-thuật-kiểm-thử)
  - [6.3 Cấu trúc Repository](#63-cấu-trúc-repository)
  - [6.4 Vai trò hệ thống](#64-vai-trò-hệ-thống)
  - [6.5 Hướng dẫn chạy dự án](#65-hướng-dẫn-chạy-dự-án)
- [Tài liệu tham khảo](#tài-liệu-tham-khảo)
- [License](#license)

---

# Chương 1. Tổng quan đề tài

## 1.1 Giới thiệu

Đây là bài tập lớn môn Đánh giá và kiểm định chất lượng phần mềm, sử dụng hệ thống Restful-booker Platform làm đối tượng kiểm thử.

Restful-booker Platform là website đặt phòng khách sạn mã nguồn mở, gồm giao diện web (React) và sáu dịch vụ backend (Java Spring Boot) giao tiếp với nhau qua REST API. Hệ thống hỗ trợ khách xem thông tin khách sạn, xem và lọc phòng, đặt phòng, gửi liên hệ; quản trị viên đăng nhập để quản lý phòng, quản lý đặt phòng, xử lý tin nhắn liên hệ, xem báo cáo và cấu hình thương hiệu.

## 1.2 Mục tiêu kiểm định

- Phân tích yêu cầu phần mềm (SRS).
- Xây dựng kế hoạch kiểm thử (Test Plan).
- Kiểm thử hộp trắng (White-box Testing) bằng rà soát mã nguồn.
- Kiểm thử hộp đen (Black-box Testing) qua API và giao diện.
- Kiểm thử phân quyền và luồng nghiệp vụ.
- Kiểm thử hiệu năng (load, stress, spike, đặt phòng đồng thời).
- Đánh giá chất lượng phần mềm theo ISO/IEC 25010.
- Tổng hợp và phân tích kết quả kiểm thử.

## 1.3 Công nghệ sử dụng

Hệ thống được kiểm thử:

- Java, Spring Boot (Jakarta)
- React
- H2 in-memory (`MODE=MySQL`)
- Maven
- Node.js / npm

Công cụ và môi trường kiểm thử:

- Postman 12.34.2.0, Newman 6.2.3
- Apache JMeter 5.6.3
- Selenium WebDriver 4.25.0, JUnit 5
- Windows 11
- JDK Eclipse Temurin 26.0.2.1, Maven 3.9.14, Node.js 24.22.1, npm 11.19.1

## 1.4 Nội dung kiểm định

Nội dung kiểm định được trình bày theo cấu trúc bốn phần của mẫu, tương ứng với các chương sau: Phần I (SRS) ở Chương 2, Phần II (Test Plan) ở Chương 3, Phần III (Thực hiện kiểm thử) ở Chương 4 và Phần IV (Report) ở Chương 5. Chương 6 tổng hợp kết quả, kỹ thuật kiểm thử và hướng dẫn sử dụng repository.

# Chương 2. Đặc tả yêu cầu phần mềm

## 2.1 Giới thiệu

### 2.1.1 Mục đích

Tài liệu mô tả yêu cầu của hệ thống Restful-booker Platform: chức năng, quy tắc nghiệp vụ, mô hình dữ liệu và yêu cầu phi chức năng. Đây là cơ sở để xây dựng Kế hoạch kiểm thử (Phần II), thiết kế test case và đánh giá chất lượng theo ISO/IEC 25010.

### 2.1.2 Phạm vi

Restful-booker Platform là hệ thống đặt phòng khách sạn mã nguồn mở, gồm giao diện web (React) và các dịch vụ backend (Java Spring Boot) giao tiếp qua REST API. Hệ thống hỗ trợ:

- Khách (Guest): xem thông tin khách sạn, xem phòng, đặt phòng, gửi liên hệ.
- Quản trị viên (Admin): đăng nhập, quản lý phòng, quản lý đặt phòng, xử lý tin nhắn liên hệ, xem báo cáo, cấu hình thương hiệu.

Phạm vi kiểm định của đồ án gồm các dịch vụ `auth`, `booking`, `room`, `message`, `branding`, `report` và giao diện web.

Các hành vi của hệ thống trong tài liệu được suy ra từ mã nguồn; việc đối chiếu với hệ thống chạy thật được thực hiện trong Phần III (thực hiện kiểm thử).

### 2.1.3 Định nghĩa và từ viết tắt

| **Thuật ngữ** | **Ý nghĩa**                                                  |
|---------------|--------------------------------------------------------------|
| SRS           | Software Requirements Specification, đặc tả yêu cầu phần mềm |
| FR / NFR      | Functional / Non-functional Requirement                      |
| BR            | Business Rule, quy tắc nghiệp vụ                             |
| UC            | Use Case                                                     |
| Guest         | Người dùng chưa đăng nhập                                    |
| Admin         | Quản trị viên, đăng nhập bằng tài khoản và dùng token        |
| Token         | Chuỗi định danh phiên của Admin, lưu trong cookie `token`    |
| BVA / EP      | Boundary Value Analysis / Equivalence Partitioning           |
| Booking       | Một lượt đặt phòng gồm phòng, khách và khoảng ngày           |

### 2.1.4 Tài liệu tham khảo

- Mã nguồn `restful-booker-platform` (các service auth, booking, room, message, branding, report và giao diện React).
- ISO/IEC 25010: Mô hình chất lượng sản phẩm phần mềm.
- IEEE 830 / ISO/IEC/IEEE 29148: hướng dẫn cấu trúc tài liệu đặc tả yêu cầu.

## 2.2 Mô tả tổng quan

### 2.2.1 Kiến trúc hệ thống

Hệ thống gồm giao diện web (ứng dụng `assets`, chạy bằng `npm run dev`, cổng 3003) và các dịch vụ backend độc lập, mỗi dịch vụ chạy trên một cổng riêng. Theo `run_locally.cmd`, không có tiến trình proxy riêng; giao diện gọi API qua đường dẫn dạng `http://localhost:3003/api/{dịch vụ}` (đã xác nhận `GET /api/branding` và `GET /api/room` trả 200), và ứng dụng `assets` nhiều khả năng chuyển tiếp request tới dịch vụ tương ứng. Mỗi dịch vụ có CSDL riêng (H2 in-memory), liên kết với nhau qua REST, không có khóa ngoại giữa các CSDL.

![Sơ đồ kiến trúc hệ thống](media/image2.png)

| **Dịch vụ** | **Vai trò**                                            | **CSDL**            |
|-------------|--------------------------------------------------------|---------------------|
| auth        | Đăng nhập, cấp và kiểm tra token                       | ACCOUNTS, TOKENS    |
| booking     | Đặt phòng, kiểm tra trùng lịch, quản lý booking        | BOOKINGS            |
| room        | Quản lý thông tin phòng, lọc phòng theo ngày           | ROOMS               |
| message     | Tin nhắn liên hệ và thông báo đặt phòng                | MESSAGES            |
| branding    | Thông tin thương hiệu khách sạn                        | BRANDINGS           |
| report      | Báo cáo đặt phòng, tổng hợp dữ liệu từ room và booking | Không có CSDL riêng |

### 2.2.2 Tác nhân

| **Tác nhân** | **Mô tả**                       | **Quyền**                                        |
|--------------|---------------------------------|--------------------------------------------------|
| Guest        | Khách truy cập, không đăng nhập | Xem thông tin, xem phòng, đặt phòng, gửi liên hệ |
| Admin        | Quản trị viên, có token hợp lệ  | Toàn bộ chức năng quản trị                       |
| Hệ thống     | Các dịch vụ gọi lẫn nhau        | Xác thực token, gửi thông báo                    |

### 2.2.3 Môi trường vận hành

- Backend: Java, Spring Boot (Jakarta), CSDL H2 in-memory (`MODE=MySQL`).
- Frontend: React, truy cập bằng trình duyệt hiện đại.
- Triển khai kiểm thử: chạy cục bộ trên Windows bằng `build_locally.cmd` (build Maven rồi gọi `run_locally.cmd`). Dự án có kèm `docker-compose.yml` nhưng không dùng trong kiểm thử này.
- Dữ liệu mỗi dịch vụ được khởi tạo từ `db.sql` và `seed.sql` khi khởi động. Cơ chế reset định kỳ (`DatabaseScheduler`) chỉ chạy khi biến môi trường `dbRefresh` lớn hơn 0 (đơn vị phút).
- Khi chạy bằng `run_locally.cmd`, biến `dbRefresh` không được đặt nên dữ liệu không bị reset định kỳ; dữ liệu chỉ mất khi tắt các dịch vụ.
- Cổng: giao diện 3003; booking 3000, room 3001, branding 3002, auth 3004, report 3005, message 3006 (theo `docker-compose.yml` và các địa chỉ trong mã).

### 2.2.4 Ràng buộc và giả định

- Dữ liệu không bền vững: mất khi dịch vụ khởi động lại, hoặc khi reset định kỳ nếu `dbRefresh` được bật (kể cả token đăng nhập).
- Việc phân quyền dựa trên token trong cookie `token`; mỗi dịch vụ tự gọi auth-service để kiểm tra.
- Không có khóa ngoại giữa các dịch vụ; tính nhất quán giữa phòng và booking do ứng dụng đảm nhiệm.
- Hệ thống dùng cho mục đích học tập và kiểm thử, không triển khai cho khách sạn thật.

## 2.3 Yêu cầu chức năng

### 2.3.1 Danh sách Use Case

| **Mã** | **Use Case**            | **Tác nhân** | **FR liên quan**                  |
|--------|-------------------------|--------------|-----------------------------------|
| UC-01  | Xem thông tin khách sạn | Guest        | FR-01                             |
| UC-02  | Xem và lọc phòng        | Guest        | FR-02, FR-03, FR-04, FR-05        |
| UC-03  | Đặt phòng               | Guest        | FR-06, FR-25, FR-26               |
| UC-04  | Gửi liên hệ             | Guest        | FR-07                             |
| UC-05  | Đăng nhập / Đăng xuất   | Admin        | FR-08, FR-09                      |
| UC-06  | Quản lý phòng           | Admin        | FR-10, FR-11, FR-12               |
| UC-07  | Quản lý đặt phòng       | Admin        | FR-13, FR-14, FR-15, FR-16        |
| UC-08  | Quản lý tin nhắn        | Admin        | FR-17, FR-18, FR-19, FR-20, FR-21 |
| UC-09  | Xem báo cáo             | Admin        | FR-22                             |
| UC-10  | Cấu hình thương hiệu    | Admin        | FR-23                             |
| UC-11  | Xác thực token          | Hệ thống     | FR-24                             |

### 2.3.2 Yêu cầu chức năng nhóm Guest

| **Mã** | **Tên**                          | **Mô tả**                                                                                                                             | **API**                                                 | **Kết quả**           |
|--------|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|-----------------------|
| FR-01  | Xem thông tin thương hiệu        | Hiển thị tên, logo, mô tả, chỉ đường, liên hệ, địa chỉ, bản đồ                                                                        | `GET /branding/`                                        | 200                   |
| FR-02  | Xem danh sách phòng              | Liệt kê toàn bộ phòng                                                                                                                 | `GET /room/`                                            | 200                   |
| FR-03  | Xem chi tiết phòng               | Hiển thị thông tin một phòng theo mã                                                                                                  | `GET /room/{id}`                                        | 200; 404 nếu không có |
| FR-04  | Lọc phòng còn trống theo ngày    | Trả danh sách phòng sau khi loại phòng đã có booking trong khoảng ngày; cần đủ `checkin` và `checkout`                                | `GET /room/?checkin=&checkout=`                         | 200                   |
| FR-05  | Xem tình trạng đặt của một phòng | Xem các khoảng ngày đã đặt của phòng; báo cáo theo phòng chỉ gồm `start`, `end` và `title` là "Unavailable", không có thông tin khách | `GET /booking/summary?roomid=`, `GET /report/room/{id}` | 200                   |
| FR-06  | Đặt phòng                        | Khách nhập thông tin và khoảng ngày để đặt phòng; chi tiết ở 3.5                                                                      | `POST /booking/`                                        | 201; 400; 409         |
| FR-07  | Gửi liên hệ                      | Gửi tin nhắn cho khách sạn                                                                                                            | `POST /message/`                                        | 201; 400              |

### 2.3.3 Yêu cầu chức năng nhóm Admin

Mọi chức năng trong nhóm này (trừ FR-08) yêu cầu token hợp lệ. Thiếu hoặc sai token → 403.

| **Mã** | **Tên**                 | **Mô tả**                                                                                                                                                                                | **API**                  | **Kết quả**                      |
|--------|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|----------------------------------|
| FR-08  | Đăng nhập               | Kiểm tra tài khoản, cấp token và đặt vào cookie `token`                                                                                                                                  | `POST /auth/login`       | 200; 403 nếu sai thông tin       |
| FR-09  | Đăng xuất               | Hủy token                                                                                                                                                                                | `POST /auth/logout`      | 200; 404 nếu token không tồn tại |
| FR-10  | Thêm phòng              | Tạo phòng mới                                                                                                                                                                            | `POST /room/`            | 201; 400; 403                    |
| FR-11  | Sửa phòng               | Cập nhật thông tin phòng                                                                                                                                                                 | `PUT /room/{id}`         | 202; 400; 403; 404               |
| FR-12  | Xóa phòng               | Xóa phòng theo mã                                                                                                                                                                        | `DELETE /room/{id}`      | 202; 403; 404                    |
| FR-13  | Xem danh sách đặt phòng | Liệt kê booking, có thể lọc theo phòng                                                                                                                                                   | `GET /booking/?roomid=`  | 200; 403                         |
| FR-14  | Xem chi tiết đặt phòng  | Xem một booking theo mã                                                                                                                                                                  | `GET /booking/{id}`      | 200; 403; 404                    |
| FR-15  | Sửa đặt phòng           | Cập nhật thông tin và ngày của booking, có kiểm tra trùng lịch                                                                                                                           | `PUT /booking/{id}`      | 200; 400; 403; 404; 409          |
| FR-16  | Xóa đặt phòng           | Xóa booking                                                                                                                                                                              | `DELETE /booking/{id}`   | 202; 403; 404                    |
| FR-17  | Xem danh sách tin nhắn  | Liệt kê tin nhắn liên hệ dạng tóm tắt gồm `id`, `name`, `subject`, `read`                                                                                                                | `GET /message/`          | 200                              |
| FR-18  | Xem chi tiết tin nhắn   | Xem đầy đủ một tin nhắn                                                                                                                                                                  | `GET /message/{id}`      | 200                              |
| FR-19  | Xem số tin chưa đọc     | Đếm tin nhắn chưa đọc                                                                                                                                                                    | `GET /message/count`     | 200                              |
| FR-20  | Đánh dấu đã đọc         | Đánh dấu một tin nhắn là đã đọc                                                                                                                                                          | `PUT /message/{id}/read` | 202; 403                         |
| FR-21  | Xóa tin nhắn            | Xóa tin nhắn theo mã                                                                                                                                                                     | `DELETE /message/{id}`   | 202; 403; 404                    |
| FR-22  | Xem báo cáo tổng hợp    | Báo cáo đặt phòng của tất cả phòng; mỗi mục gồm `start`, `end` (định dạng `yyyy-MM-dd`) và `title` (tên khách và tên phòng). Dữ liệu booking lấy từ booking-service bằng token của Admin | `GET /report/`           | 200                              |
| FR-23  | Cập nhật thương hiệu    | Sửa thông tin thương hiệu khách sạn                                                                                                                                                      | `PUT /branding/`         | 202; 400; 403                    |

### 2.3.4 Yêu cầu chức năng của hệ thống

| **Mã** | **Tên**                 | **Mô tả**                                                                                                                                                                    |
|--------|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FR-24  | Xác thực token          | Auth-service nhận token và trả 200 nếu token tồn tại, 403 nếu không (`POST /auth/validate`). Các dịch vụ booking, room, message dùng chức năng này cho mọi thao tác quản trị |
| FR-25  | Kiểm tra trùng lịch     | Khi tạo hoặc sửa booking, hệ thống từ chối nếu khoảng ngày không hợp lệ hoặc trùng với booking khác của cùng phòng (xem BR-01, BR-02)                                        |
| FR-26  | Gửi thông báo đặt phòng | Sau khi tạo booking thành công có đủ `email` và `phone`, booking-service gửi một tin nhắn thông báo sang message-service (`POST /message/`)                                  |

### 2.3.5 Đặc tả Use Case UC-03: Đặt phòng

| **Mục**                    | **Nội dung**                                                                                                                |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Tác nhân                   | Guest                                                                                                                       |
| Mục tiêu                   | Đặt một phòng trong khoảng ngày xác định                                                                                    |
| Tiền điều kiện             | Phòng cần đặt đã có trong hệ thống                                                                                          |
| Đầu vào                    | `roomid`, `firstname`, `lastname`, `depositpaid`, `bookingdates` (`checkin`, `checkout`), `email` và `phone` (tùy chọn)     |
| Hậu điều kiện (thành công) | Booking được lưu, trả 201 kèm mã booking; nếu có đủ `email` và `phone` thì tin nhắn thông báo được gửi sang message-service |

**Luồng chính**

1.  Guest chọn phòng và nhập thông tin đặt phòng.
2.  Hệ thống kiểm tra các ràng buộc dữ liệu (BR-06).
3.  Hệ thống kiểm tra khoảng ngày hợp lệ (BR-01).
4.  Hệ thống kiểm tra phòng không bị trùng lịch (BR-02).
5.  Hệ thống lưu booking.
6.  Nếu có đủ `email` và `phone`, hệ thống gửi thông báo sang message-service (FR-26).
7.  Hệ thống trả 201 và hiển thị xác nhận.

**Luồng thay thế**

| **Bước** | **Điều kiện**                                                    | **Kết quả**  |
|----------|------------------------------------------------------------------|--------------|
| 2        | Vi phạm ràng buộc dữ liệu, kể cả thiếu `checkin` hoặc `checkout` | 400, báo lỗi |
| 3        | `checkin` bằng hoặc sau `checkout`                               | 409          |
| 4        | Trùng lịch với booking khác của phòng                            | 409          |

### 2.3.6 Đặc tả Use Case UC-05: Đăng nhập

| **Mục**        | **Nội dung**                                                                                                                           |
|----------------|----------------------------------------------------------------------------------------------------------------------------------------|
| Tác nhân       | Admin                                                                                                                                  |
| Mục tiêu       | Có phiên làm việc để dùng các chức năng quản trị                                                                                       |
| Đầu vào        | `username`, `password`                                                                                                                 |
| Luồng chính    | Admin nhập thông tin → auth-service đối chiếu tài khoản → sinh token ngẫu nhiên 16 ký tự, lưu vào CSDL → trả 200 và đặt cookie `token` |
| Luồng thay thế | Sai thông tin → 403; không lưu được token → 500                                                                                        |
| Đăng xuất      | Admin gọi `POST /auth/logout` kèm token → token bị xóa; token cũ không còn dùng được (403)                                             |

## 2.4 Yêu cầu giao diện ngoài

### 2.4.1 Giao diện người dùng

- Khu vực Guest: thông tin khách sạn, danh sách phòng, đặt phòng, biểu mẫu liên hệ.
- Khu vực Admin: đăng nhập, quản lý phòng, quản lý đặt phòng, tin nhắn, báo cáo, cấu hình thương hiệu.

### 2.4.2 Giao diện giao tiếp

- Giao thức: REST qua HTTP, dữ liệu JSON.
- Xác thực: cookie `token`, kiểm tra bằng `POST /auth/validate`.
- Giao tiếp nội bộ: booking → auth, booking → message, room → auth, room → booking, message → auth.
- Danh mục API đầy đủ: xem Phụ lục A.

## 2.5 Mô hình hóa hệ thống

Các sơ đồ dưới đây dùng Mermaid (hiển thị trực tiếp trên GitHub và VS Code). Bản PlantUML tương ứng nằm trong `SRS/diagrams/`.

### 2.5.1 Sơ đồ Use Case

![Sơ đồ Use Case](media/image3.png)

### 2.5.2 Mô hình dữ liệu (ERD)

Mỗi dịch vụ có CSDL riêng. Quan hệ giữa phòng và booking là tham chiếu logic qua `roomid`, không có khóa ngoại.

![Mô hình dữ liệu (ERD)](media/image4.png)

Ghi chú: `email` và `phone` của booking chỉ có trong yêu cầu đặt phòng, không lưu trong bảng BOOKINGS; chúng được dùng để tạo tin nhắn thông báo.

### 2.5.3 Sơ đồ lớp (booking-service)

![Sơ đồ lớp (booking-service)](media/image5.png)

Các dịch vụ auth, room, message, branding, report có cấu trúc Controller → Service → DB tương tự.

### 2.5.4 Sơ đồ hoạt động: Đặt phòng

![Sơ đồ hoạt động: Đặt phòng](media/image6.png)

### 2.5.5 Sơ đồ tuần tự: Đặt phòng

![Sơ đồ tuần tự: Đặt phòng](media/image7.png)

### 2.5.6 Sơ đồ tuần tự: Đăng nhập và xác thực Admin

![Sơ đồ tuần tự: Đăng nhập và xác thực Admin](media/image8.png)

### 2.5.7 Sơ đồ trạng thái: Vòng đời booking

Dùng làm cơ sở cho State Transition Testing. Sơ đồ chỉ vẽ các chuyển trạng thái thành công; các trường hợp bị từ chối và thao tác trên booking không tồn tại được liệt kê trong bảng chuyển trạng thái bên dưới.

![Sơ đồ trạng thái: Vòng đời booking](media/image9.png)

**Bảng chuyển trạng thái**

| **Mã** | **Trạng thái hiện tại** | **Sự kiện**            | **Điều kiện**                                                | **Trạng thái kế tiếp** | **Mã trạng thái** |
|--------|-------------------------|------------------------|--------------------------------------------------------------|------------------------|-------------------|
| T1     | Chưa tồn tại            | `POST /booking/`       | Dữ liệu hợp lệ, ngày hợp lệ, không trùng lịch                | Đã đặt                 | 201               |
| T2     | Chưa tồn tại            | `POST /booking/`       | Vi phạm ràng buộc dữ liệu                                    | Chưa tồn tại           | 400               |
| T3     | Chưa tồn tại            | `POST /booking/`       | Ngày không hợp lệ hoặc trùng lịch                            | Chưa tồn tại           | 409               |
| T4     | Đã đặt                  | `PUT /booking/{id}`    | Token hợp lệ, ngày hợp lệ, không trùng lịch với booking khác | Đã đặt (đã cập nhật)   | 200               |
| T5     | Đã đặt                  | `PUT /booking/{id}`    | Ngày không hợp lệ hoặc trùng lịch với booking khác           | Đã đặt (không đổi)     | 409               |
| T6     | Đã đặt                  | `PUT /booking/{id}`    | Không có token hợp lệ                                        | Đã đặt (không đổi)     | 403               |
| T7     | Đã đặt                  | `GET /booking/{id}`    | Token hợp lệ                                                 | Đã đặt (không đổi)     | 200               |
| T8     | Đã đặt                  | `DELETE /booking/{id}` | Token hợp lệ                                                 | Đã xóa                 | 202               |
| T9     | Đã đặt                  | `DELETE /booking/{id}` | Không có token hợp lệ                                        | Đã đặt (không đổi)     | 403               |
| T10    | Đã xóa                  | `GET /booking/{id}`    | Token hợp lệ                                                 | Đã xóa                 | 404               |
| T11    | Đã xóa                  | `PUT /booking/{id}`    | Token và ngày hợp lệ                                         | Đã xóa                 | 404               |
| T12    | Đã xóa                  | `DELETE /booking/{id}` | Token hợp lệ                                                 | Đã xóa                 | 404               |

## 2.6 Quy tắc nghiệp vụ và ràng buộc dữ liệu

### 2.6.1 Quy tắc nghiệp vụ

| **Mã** | **Quy tắc**                                                                                                                                     |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| BR-01  | `checkin` và `checkout` bắt buộc; thiếu một trong hai vi phạm BR-06 → 400. `checkin` phải trước `checkout` (không cho bằng nhau); vi phạm → 409 |
| BR-02  | Một phòng không được có hai booking trùng khoảng ngày. Booking mới được phép bắt đầu đúng ngày booking trước kết thúc. Vi phạm → 409            |
| BR-03  | Tạo booking không cần đăng nhập; xem, sửa, xóa booking cần token Admin, sai token → 403                                                         |
| BR-04  | Khi tạo booking có đủ `email` và `phone`, hệ thống gửi thông báo sang message-service                                                           |
| BR-05  | Dữ liệu lưu trong CSDL in-memory; chỉ được reset định kỳ khi biến môi trường `dbRefresh` lớn hơn 0                                              |
| BR-06  | Ràng buộc dữ liệu từng đối tượng theo mục 2.6.2. Vi phạm → 400                                                                                  |
| BR-07  | Gửi liên hệ không cần đăng nhập; xóa và đánh dấu đã đọc tin nhắn cần token Admin                                                                |
| BR-08  | Đăng nhập thành công thì cấp token và đặt vào cookie `token`; thông tin sai → 403                                                               |
| BR-09  | Xem thông tin phòng không cần đăng nhập; tạo, sửa, xóa phòng cần token Admin                                                                    |
| BR-10  | Lọc phòng theo ngày chỉ áp dụng khi có đủ cả `checkin` và `checkout`; thiếu một trong hai thì trả toàn bộ phòng                                 |
| BR-11  | Phòng: `type` thuộc {Single, Double, Twin, Family, Suite}; `roomPrice` từ 1 đến 999                                                             |
| BR-12  | Tin nhắn liên hệ: tất cả trường bắt buộc, `email` đúng định dạng                                                                                |
| BR-13  | Token do auth-service sinh khi đăng nhập thành công và lưu trong CSDL; các dịch vụ khác xác thực bằng cách hỏi auth-service                     |
| BR-14  | Xem thông tin thương hiệu không cần token; cập nhật cần token Admin                                                                             |
| BR-15  | Báo cáo tổng hợp cần token Admin; báo cáo theo từng phòng không yêu cầu token                                                                   |

### 2.6.2 Ràng buộc dữ liệu

**Booking**

| **Trường**         | **Ràng buộc**                    |
|--------------------|----------------------------------|
| `roomid`           | số nguyên ≥ 1                    |
| `firstname`        | không trống, 3–18 ký tự          |
| `lastname`         | không trống, 3–30 ký tự          |
| `depositpaid`      | boolean (thiếu → false)          |
| `bookingdates`     | `checkin`, `checkout` theo BR-01 |
| `email` (tùy chọn) | không rỗng, đúng định dạng email |
| `phone` (tùy chọn) | không rỗng, 11–21 ký tự          |

**Room**

| **Trường**                                       | **Ràng buộc**                                           |
|--------------------------------------------------|---------------------------------------------------------|
| `roomName`                                       | bắt buộc, không rỗng                                    |
| `type`                                           | bắt buộc, một trong Single, Double, Twin, Family, Suite |
| `roomPrice`                                      | 1–999                                                   |
| `accessible`, `image`, `description`, `features` | không có ràng buộc                                      |

**Message**

| **Trường**    | **Ràng buộc**                  |
|---------------|--------------------------------|
| `name`        | bắt buộc, không trống          |
| `email`       | bắt buộc, đúng định dạng email |
| `phone`       | bắt buộc, 11–21 ký tự          |
| `subject`     | bắt buộc, 5–100 ký tự          |
| `description` | bắt buộc, 20–2000 ký tự        |

**Branding**

| **Trường**                                                 | **Ràng buộc**                                                                      |
|------------------------------------------------------------|------------------------------------------------------------------------------------|
| `name`                                                     | không trống, 3–100 ký tự, chỉ gồm chữ cái không dấu, `&` và khoảng trắng           |
| `logoUrl`                                                  | không trống, đúng định dạng URL                                                    |
| `description`                                              | không trống, 3–500 ký tự, chỉ gồm chữ cái không dấu, `,`, `&`, `.` và khoảng trắng |
| `directions`                                               | không trống                                                                        |
| `map.latitude`, `map.longitude`                            | số thực                                                                            |
| `contact.name`                                             | không trống, 3–40 ký tự, chỉ gồm chữ cái không dấu, `&` và khoảng trắng            |
| `contact.phone`                                            | không trống; ràng buộc khai báo là `@Min(11)` trên chuỗi                           |
| `contact.email`                                            | không trống, đúng định dạng email                                                  |
| `address.line1`, `line2`, `postTown`, `county`, `postCode` | đều bắt buộc, không trống                                                          |

**Auth**

| **Trường**             | **Ràng buộc**                              |
|------------------------|--------------------------------------------|
| `username`, `password` | chuỗi, không có ràng buộc định dạng        |
| Token                  | chuỗi ngẫu nhiên 16 ký tự do hệ thống sinh |

## 2.7 Yêu cầu phi chức năng

Các ngưỡng số ở NFR-01 là ngưỡng đề xuất, sẽ được hiệu chỉnh trong Kế hoạch kiểm thử (Phần II).

| **Mã** | **Đặc tính ISO/IEC 25010**     | **Yêu cầu**                                                                                                                                                                                | **Cách đánh giá**                                  |
|--------|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| NFR-01 | Performance Efficiency         | Với 50 người dùng đồng thời, `GET /room/` và `POST /booking/` có thời gian phản hồi trung bình ≤ 1 giây, p95 ≤ 2 giây, tỷ lệ lỗi < 1%                                                     | JMeter: load, stress, spike                        |
| NFR-02 | Reliability                    | Khi auth-service hoặc message-service không khả dụng, hệ thống trả mã lỗi có kiểm soát và không để dữ liệu mâu thuẫn (client nhận lỗi nhưng booking vẫn được lưu)                          | Dừng container dịch vụ phụ thuộc, quan sát kết quả |
| NFR-03 | Reliability (toàn vẹn dữ liệu) | Khi nhiều yêu cầu đồng thời đặt cùng một phòng và cùng khoảng ngày, chỉ một yêu cầu được thành công (không overbooking)                                                                    | JMeter: nhiều luồng cùng đặt một phòng             |
| NFR-04 | Security                       | Mọi API quản trị phải xác thực token; thiếu hoặc sai token bị từ chối với 403; dữ liệu cá nhân của khách chỉ Admin được xem                                                                | Postman: kiểm thử theo vai trò Guest / Admin       |
| NFR-05 | Security                       | Token có thời hạn và sinh ngẫu nhiên an toàn; mật khẩu không lưu hoặc so khớp ở dạng văn bản thô; tham số đầu vào không được ghép trực tiếp vào câu SQL; cookie phiên có thuộc tính bảo vệ | Rà soát mã (static review), Postman                |
| NFR-06 | Usability                      | Luồng đặt phòng hoàn thành được trong một lần điền biểu mẫu; thông báo lỗi nêu rõ trường vi phạm; dữ liệu hợp lý (ví dụ tên tiếng Việt có dấu) không bị từ chối vô lý                      | Selenium, quan sát giao diện                       |
| NFR-07 | Compatibility / Portability    | Chạy được trên các trình duyệt phổ biến (Chrome, Firefox, Edge) và triển khai bằng Docker                                                                                                  | Selenium, chạy thử môi trường Docker               |
| NFR-08 | Functional Suitability         | Dữ liệu không hợp lệ phải trả mã 4xx rõ ràng, không trả 5xx; mã trạng thái nhất quán giữa các dịch vụ                                                                                      | Postman: EP và BVA                                 |

## 2.8 Ma trận truy vết

Cột Test Case được điền ở Phần II khi có bộ test case.

| **FR** | **Use Case** | **API**                                         | **Test Case** |
|--------|--------------|-------------------------------------------------|---------------|
| FR-01  | UC-01        | `GET /branding/`                                |               |
| FR-02  | UC-02        | `GET /room/`                                    |               |
| FR-03  | UC-02        | `GET /room/{id}`                                |               |
| FR-04  | UC-02        | `GET /room/?checkin&checkout`                   |               |
| FR-05  | UC-02        | `GET /booking/summary`, `GET /report/room/{id}` |               |
| FR-06  | UC-03        | `POST /booking/`                                |               |
| FR-07  | UC-04        | `POST /message/`                                |               |
| FR-08  | UC-05        | `POST /auth/login`                              |               |
| FR-09  | UC-05        | `POST /auth/logout`                             |               |
| FR-10  | UC-06        | `POST /room/`                                   |               |
| FR-11  | UC-06        | `PUT /room/{id}`                                |               |
| FR-12  | UC-06        | `DELETE /room/{id}`                             |               |
| FR-13  | UC-07        | `GET /booking/`                                 |               |
| FR-14  | UC-07        | `GET /booking/{id}`                             |               |
| FR-15  | UC-07        | `PUT /booking/{id}`                             |               |
| FR-16  | UC-07        | `DELETE /booking/{id}`                          |               |
| FR-17  | UC-08        | `GET /message/`                                 |               |
| FR-18  | UC-08        | `GET /message/{id}`                             |               |
| FR-19  | UC-08        | `GET /message/count`                            |               |
| FR-20  | UC-08        | `PUT /message/{id}/read`                        |               |
| FR-21  | UC-08        | `DELETE /message/{id}`                          |               |
| FR-22  | UC-09        | `GET /report/`                                  |               |
| FR-23  | UC-10        | `PUT /branding/`                                |               |
| FR-24  | UC-11        | `POST /auth/validate`                           |               |
| FR-25  | UC-03, UC-07 | `POST /booking/`, `PUT /booking/{id}`           |               |
| FR-26  | UC-03        | `POST /message/` (từ booking-service)           |               |

## 2.9 Phụ lục A: Danh mục API

Tiền tố `/booking`, `/room`, `/message`, `/auth`, `/branding`, `/report` là tiền tố đường dẫn của từng dịch vụ. Giao diện mở tại `http://localhost:3003`; qua giao diện, API được gọi theo dạng `http://localhost:3003/api/{dịch vụ}` (đã xác nhận `GET /api/branding` và `GET /api/room` trả 200). Gọi thẳng dịch vụ có dạng `http://localhost:{cổng}/{dịch vụ}/...` (cổng ở mục 2.2.3). "Token" nghĩa là cần cookie `token` của Admin.

| **Dịch vụ** | **Method + đường dẫn**                        | **Token**             | **Mã trạng thái**         |
|-------------|-----------------------------------------------|-----------------------|---------------------------|
| booking     | `GET /booking/?roomid=`                       | Cần                   | 200, 403                  |
| booking     | `GET /booking/unavailable?checkin&checkout`   | Không                 | 200                       |
| booking     | `POST /booking/`                              | Không                 | 201, 400, 409             |
| booking     | `GET /booking/{id}`                           | Cần                   | 200, 403, 404             |
| booking     | `PUT /booking/{id}`                           | Cần                   | 200, 400, 403, 404, 409   |
| booking     | `DELETE /booking/{id}`                        | Cần                   | 202, 403, 404             |
| booking     | `GET /booking/summary?roomid=`                | Không                 | 200                       |
| room        | `GET /room/` (tùy chọn `checkin`, `checkout`) | Không                 | 200                       |
| room        | `GET /room/{id}`                              | Không                 | 200, 404                  |
| room        | `POST /room/`                                 | Cần                   | 201, 400, 403             |
| room        | `PUT /room/{id}`                              | Cần                   | 202, 400, 403, 404        |
| room        | `DELETE /room/{id}`                           | Cần                   | 202, 403, 404             |
| message     | `GET /message/`                               | Không                 | 200                       |
| message     | `GET /message/count`                          | Không                 | 200                       |
| message     | `GET /message/{id}`                           | Không                 | 200, 404                  |
| message     | `POST /message/`                              | Không                 | 201, 400                  |
| message     | `PUT /message/{id}/read`                      | Cần                   | 202, 403                  |
| message     | `DELETE /message/{id}`                        | Cần                   | 202, 403, 404             |
| auth        | `POST /auth/login`                            | Không                 | 200, 403                  |
| auth        | `POST /auth/validate`                         | Không                 | 200, 403                  |
| auth        | `POST /auth/logout`                           | Không                 | 200, 404                  |
| branding    | `GET /branding/`                              | Không                 | 200                       |
| branding    | `PUT /branding/`                              | Cần                   | 202, 400, 403             |
| report      | `GET /report/`                                | Cần (cookie bắt buộc) | 200, 400 nếu thiếu cookie |
| report      | `GET /report/room/{id}`                       | Không                 | 200                       |

# Chương 3. Kế hoạch kiểm thử

## 3.1 Giới thiệu

### 3.1.1 Mục đích

Tài liệu xác định phạm vi, chiến lược, môi trường, bộ test case và tiêu chí nghiệm thu để kiểm định chất lượng Restful-booker Platform. Các hạng mục kiểm thử được suy ra từ SRS (mục 2.3 đến 2.8) và được đối chiếu với hệ thống chạy thật trong Phần III.

### 3.1.2 Tài liệu tham chiếu

- SRS.
- ISO/IEC 25010: mô hình chất lượng sản phẩm phần mềm.
- Mã nguồn `restful-booker-platform`, repo gốc `github.com/mwinteringham/restful-booker-platform`.

### 3.1.3 Các điểm điều chỉnh so với SRS

Trong quá trình chuẩn bị Test Plan, việc chạy thử hệ thống cho thấy sáu điểm cần xử lý. Test Plan dùng các quyết định dưới đây làm chuẩn.

| **STT** | **Điểm cần điều chỉnh**                                                                                                                                                                                                                                                                                                                                                             | **Quyết định trong Test Plan**                                                                                                                                                                                                      |
|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1       | NFR-02 và NFR-07 nhắc tới container và Docker, trong khi mục 2.2.3 của SRS nêu kiểm thử không dùng Docker                                                                                                                                                                                                                                                                           | NFR-02 được kiểm thử bằng cách dừng tiến trình của dịch vụ phụ thuộc (tắt đúng tiến trình theo cổng, không dùng `taskkill /im java.exe`). Phần triển khai Docker của NFR-07 nằm ngoài phạm vi; chỉ kiểm thử tương thích trình duyệt |
| 2       | BR-07 và Phụ lục A ghi xem tin nhắn không cần token, trong khi NFR-04 yêu cầu dữ liệu cá nhân của khách chỉ Admin được xem                                                                                                                                                                                                                                                          | Lấy **NFR-04 làm chuẩn nghiệm thu**: các test case xem tin nhắn không token có kết quả mong đợi là 403. Hành vi thực tế của hệ thống (200, trả cả email, số điện thoại, nội dung) được ghi nhận là lỗi DEF-001                      |
| 3       | Phản hồi qua giao diện (`/api/...` trên cổng 3003) khác phản hồi khi gọi thẳng dịch vụ. Đã quan sát: `POST /api/message` trả 200 kèm `{"success":true}` (SRS ghi dịch vụ trả 201); `POST /api/auth/login` trả token trong thân phản hồi, không có header `Set-Cookie`. Ngược lại, gọi thẳng `POST :3004/auth/login` trả 200, thân rỗng và token nằm trong `Set-Cookie` (đúng BR-08) | Test case Postman và JMeter kiểm tra theo mã trạng thái của dịch vụ (gọi thẳng). Test case Selenium kiểm tra theo hành vi giao diện. Mỗi test case ghi rõ đường gọi đang dùng                                                       |
| 4       | Các ngưỡng hiệu năng ở NFR-01 là đề xuất                                                                                                                                                                                                                                                                                                                                            | Chốt ở mục 3.9, hiệu chỉnh ở Phần IV sau khi có số liệu thực tế                                                                                                                                                                     |
| 5       | BR-01 và luồng thay thế UC-03 trong SRS 1.0 ghi thiếu `checkin` hoặc `checkout` trả 409. Hệ thống thực tế trả 400, do ràng buộc dữ liệu (BR-06) được kiểm tra trước                                                                                                                                                                                                                 | SRS đã sửa ở phiên bản 1.1 (thiếu ngày → 400; `checkin` bằng hoặc sau `checkout` → 409). TC-BOOK-09 có mong đợi 400. Đây là sai sót của SRS (suy ra từ đọc mã), không phải lỗi hệ thống, nên không vi phạm nguyên tắc ở mục 3.3.3   |
| 6       | Dữ liệu mẫu của `branding` có `logoUrl` là đường dẫn tương đối (`/images/rbp-logo.jpg`), bị chính bộ kiểm tra URL của dịch vụ từ chối khi gửi lại bằng `PUT /branding/` (400, "Url should be a correct url format")                                                                                                                                                                 | Các test case cập nhật thương hiệu dùng `logoUrl` tuyệt đối (`http://localhost:3003/images/rbp-logo.jpg`) để mỗi ca chỉ kiểm tra một ràng buộc. Việc dữ liệu mẫu tự vi phạm ràng buộc được ghi nhận là lỗi DEF-005                  |

## 3.2 Phạm vi kiểm thử

### 3.2.1 Trong phạm vi

- Sáu dịch vụ: `auth`, `booking`, `room`, `message`, `branding`, `report` (qua REST API).
- Giao diện web (React) cho các luồng của Guest và Admin.
- Toàn bộ yêu cầu chức năng FR-01 đến FR-26 và các yêu cầu phi chức năng NFR-01 đến NFR-08, trừ phần ngoài phạm vi ở mục 3.2.2.

### 3.2.2 Ngoài phạm vi

- Kiểm thử xâm nhập và bảo mật chuyên sâu. Phần Security chỉ gồm phân quyền, xác thực token, rà soát mã và một số thử nghiệm đầu vào cơ bản.
- Kiểm thử trên thiết bị di động.
- Triển khai bằng Docker (`docker-compose.yml`).
- Kiểm thử mã nguồn từng lớp (unit test) của dự án gốc. Phần white-box chỉ gồm rà soát mã và phân tích luồng, không viết thêm unit test.

### 3.2.3 Hạng mục kiểm thử theo yêu cầu

| **Nhóm**                   | **Yêu cầu**                   | **Công cụ chính**        |
|----------------------------|-------------------------------|--------------------------|
| Chức năng API              | FR-01 đến FR-26               | Postman, Newman          |
| Chức năng giao diện        | FR-01 đến FR-23 (luồng chính) | Selenium                 |
| Hiệu năng                  | NFR-01, NFR-03                | JMeter                   |
| Độ tin cậy                 | NFR-02                        | Dừng tiến trình, Postman |
| Bảo mật                    | NFR-04, NFR-05                | Postman, rà soát mã      |
| Khả dụng, tương thích      | NFR-06, NFR-07                | Selenium, quan sát       |
| Xử lý dữ liệu không hợp lệ | NFR-08                        | Postman                  |

## 3.3 Chiến lược và kỹ thuật kiểm thử

### 3.3.1 Các tầng kiểm thử

| **Tầng**         | **Mục tiêu**                                                                  | **Công cụ**                                                                      | **Đường gọi**           |
|------------------|-------------------------------------------------------------------------------|----------------------------------------------------------------------------------|-------------------------|
| API              | Kiểm tra mã trạng thái, dữ liệu trả về, ràng buộc, phân quyền                 | Postman (chạy tự động bằng Newman)                                               | Gọi thẳng cổng dịch vụ  |
| Giao diện        | Kiểm tra luồng nghiệp vụ end-to-end và thông báo lỗi                          | Selenium WebDriver, mô hình Page Object; Selenium IDE dùng để ghi nhanh kịch bản | `http://localhost:3003` |
| Hiệu năng        | Đo thời gian phản hồi, thông lượng, tỷ lệ lỗi, tính toàn vẹn khi đồng thời    | Apache JMeter                                                                    | Gọi thẳng cổng dịch vụ  |
| Tĩnh (white-box) | Rà soát mã: băm mật khẩu, truy vấn tham số hóa, sinh và hết hạn token, cookie | Đọc mã nguồn                                                                     | Không áp dụng           |

### 3.3.2 Kỹ thuật thiết kế test case

| **Kỹ thuật**                 | **Áp dụng cho**                                                                                                                                                                     |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Phân vùng tương đương (EP)   | Loại phòng (`type`), email hợp lệ và không hợp lệ, có và không có token                                                                                                             |
| Phân tích giá trị biên (BVA) | Độ dài `firstname` (3 đến 18), `lastname` (3 đến 30), `phone` (11 đến 21), `subject` (5 đến 100), `description` (20 đến 2000), `roomPrice` (1 đến 999), `branding.name` (3 đến 100) |
| Bảng quyết định              | Quy tắc ngày đặt phòng (BR-01, BR-02): checkin, checkout, trùng lịch                                                                                                                |
| Chuyển trạng thái            | Vòng đời token (đăng nhập, hợp lệ, đăng xuất, không hợp lệ); tin nhắn chưa đọc sang đã đọc                                                                                          |
| Kiểm thử theo vai trò        | Guest và Admin trên cùng một API                                                                                                                                                    |
| Rà soát tĩnh (static review) | NFR-05                                                                                                                                                                              |
| Kiểm thử đồng thời           | NFR-03 (không overbooking)                                                                                                                                                          |

### 3.3.3 Nguyên tắc thực thi

- Kết quả mong đợi lấy từ SRS và NFR, không sửa cho khớp với hành vi hiện tại của hệ thống. Test case lệch mong đợi được ghi là Fail và chuyển thành lỗi ở mục 3.11. Ngoại lệ duy nhất là khi đối chiếu cho thấy chính SRS mô tả sai (mục 3.1.3, điểm 5): khi đó sửa SRS và sửa mong đợi tương ứng.
- Mỗi test case ghi rõ đường gọi (thẳng dịch vụ hoặc qua giao diện).
- Mỗi lần chạy bộ test bắt đầu từ trạng thái dữ liệu sạch (mục 3.5.2).
- Mỗi test case lỗi có bằng chứng (ảnh chụp, log) lưu ở `Images/`.

## 3.4 Môi trường kiểm thử

### 3.4.1 Phần mềm

| **Hạng mục**                            | **Phiên bản**                                                |
|-----------------------------------------|--------------------------------------------------------------|
| Hệ điều hành                            | Windows 11                                                   |
| JDK                                     | Eclipse Temurin 26.0.2.1                                     |
| Maven                                   | 3.9.14                                                       |
| Node.js / npm                           | 24.22.1 / 11.19.1                                            |
| Postman / Newman                        | 12.34.2.0 / 6.2.3                                            |
| Apache JMeter                           | 5.6.3                                                        |
| Selenium (WebDriver / IDE), trình duyệt | WebDriver 4.25.0                                             |
| Cấu hình máy kiểm thử (CPU, RAM)        | AMD Ryzen 9 8945HX with Radeon Graphics (2.50 GHz), RAM 32GB |

### 3.4.2 Cách chạy hệ thống

- Chạy bằng `build_locally.cmd` (build Maven, sau đó gọi `run_locally.cmd`). Dự án kèm `docker-compose.yml` nhưng không dùng.
- `build_locally.cmd` gọi `run_locally.cmd true` nên chạy kèm bộ `end-to-end-tests` có sẵn và có thể để lại dữ liệu. Khi cần dữ liệu sạch, chạy `run_locally.cmd` không kèm `true`.
- Chạy ứng dụng ở một cửa sổ riêng và không gõ gì vào cửa sổ đó. Gửi lệnh kiểm thử ở cửa sổ khác. Nhấn Enter trong cửa sổ ứng dụng chạy `taskkill /f /im java.exe` và `node.exe`, tắt mọi tiến trình Java và Node trên máy.
- Biến `dbRefresh` không được đặt, nên dữ liệu không bị reset định kỳ, chỉ mất khi tắt dịch vụ.
- Tùy chọn: `set dbServer=true` trước khi chạy để mở cổng H2 (booking 9090, auth 9091, branding 9092, message 9093, room 9094) khi cần xem CSDL.

### 3.4.3 Cổng và log

| **Thành phần**                      | **Cổng** | **Log (thư mục** `SourceCode`**)** |
|-------------------------------------|----------|------------------------------------|
| Giao diện (`assets`, `npm run dev`) | 3003     | Cửa sổ chạy ứng dụng               |
| booking                             | 3000     | `booking.log`                      |
| room                                | 3001     | `room.log`                         |
| branding                            | 3002     | `branding.log`                     |
| auth                                | 3004     | `auth.log`                         |
| report                              | 3005     | `report.log`                       |
| message                             | 3006     | `message.log`                      |

## 3.5 Dữ liệu kiểm thử

### 3.5.1 Dữ liệu khởi tạo

| **Đối tượng**   | **Dữ liệu mẫu sau khi khởi động**                                                  |
|-----------------|------------------------------------------------------------------------------------|
| Phòng           | 3 phòng: 101 (Single, 100), 102 (Double, 150), 103 (Suite, 225)                    |
| Booking         | 1 booking ở phòng 1, từ 2026-02-01 đến 2026-02-05                                  |
| Tin nhắn        | 1 tin nhắn (James Dean, "Booking enquiry")                                         |
| Tài khoản Admin | `admin` / `password` (đăng nhập qua `POST /api/auth/login` trả `{"token": "..."}`) |

### 3.5.2 Nguyên tắc dữ liệu

- Mỗi phiên chạy bộ test bắt đầu bằng cách tắt hệ thống, chạy lại `run_locally.cmd` (không kèm `true`) để về dữ liệu mẫu.
- Test case tạo booking dùng khoảng ngày trong năm 2027 và tách biệt nhau, không dùng khoảng ngày của booking mẫu, trừ các test case trùng lịch và liền kề cố ý (TC-BOOK-10 đến TC-BOOK-13).
- Chuỗi biên (độ dài 2, 3, 18, 19, 30, 31, 100, 101, 2000, 2001) được sinh bằng script trong Postman, không gõ tay.
- Payload cập nhật thương hiệu dùng `logoUrl` tuyệt đối (mục 3.1.3, điểm 6). Dữ liệu thương hiệu sau khi chạy khác dữ liệu mẫu ở trường này, nên phải khởi động lại dịch vụ để về dữ liệu gốc.
- Token Admin lấy ở bước đăng nhập đầu phiên (từ `Set-Cookie` khi gọi thẳng dịch vụ), lưu vào biến môi trường `token` và gửi qua cookie `token=...`.
- Postman dùng chung cookie cho mọi cổng của cùng một tên host. Để các request "không token" không bị gửi kèm token, đăng nhập được gọi qua `localhost`, còn các dịch vụ khác gọi qua `127.0.0.1` (cookie của hai tên host tách biệt).
- Do Admin phải đăng nhập trước, các test case cần quyền Admin chạy sau nhóm AUTH.

## 3.6 Địa chỉ gọi API

| **Dịch vụ** | **Gọi thẳng dịch vụ (Postman, JMeter)** | **Qua giao diện, cổng 3003 (Selenium)**                                         | **Trạng thái**                                                                                             |
|-------------|-----------------------------------------|---------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| room        | `http://localhost:3001/room/`           | `/api/room`, `/api/room/{id}`                                                   | Đã xác nhận                                                                                                |
| booking     | `http://localhost:3000/booking/`        | `POST /api/booking` (201)                                                       | Đã xác nhận                                                                                                |
| branding    | `http://localhost:3002/branding/`       | `/api/branding`                                                                 | Đã xác nhận                                                                                                |
| auth        | `http://localhost:3004/auth/`           | `POST /api/auth/login` (200, token trong thân), `POST /api/auth/validate` (200) | Đã xác nhận: qua giao diện trả token trong thân; gọi thẳng `login` trả thân rỗng, token trong `Set-Cookie` |
| report      | `http://localhost:3005/report/`         | `/api/report`, `/api/report/room/{id}`                                          | Đã xác nhận                                                                                                |
| message     | `http://localhost:3006/message/`        | `POST /api/message` (200, `{"success":true}`)                                   | Đã xác nhận                                                                                                |

Trong Postman, địa chỉ gốc đặt thành biến môi trường theo từng dịch vụ (`authUrl`, `roomUrl`, `bookingUrl`, `messageUrl`, `brandingUrl`, `reportUrl`); `authUrl` dùng `localhost`, các biến còn lại dùng `127.0.0.1` (xem mục 3.5.2). Qua giao diện, đường dẫn không có dấu `/` ở cuối; khi gọi thẳng dịch vụ thì có.

## 3.7 Bộ test case

### 3.7.1 Quy ước

- Mã test case: `TC-{NHÓM}-{số}`. Nhóm: AUTH, ROOM, BOOK, MSG, BRAND, REP, SEC, REL, UI, PERF.
- Các test case BVA và EP được thực thi theo dữ liệu (data-driven): một test case có thể có nhiều bộ dữ liệu. Giá trị cụ thể ghi ở cột Dữ liệu.
- "Có token" nghĩa là gửi cookie `token` của Admin; "không token" là không gửi cookie.
- Mã trạng thái là mã của dịch vụ khi gọi thẳng, theo Phụ lục A của SRS.
- Cột Yêu cầu liệt kê FR hoặc NFR được phủ. Ký hiệu `[DEF-0xx]` đánh dấu test case dự kiến Fail theo các lần chạy thử.

### 3.7.2 Nhóm AUTH: đăng nhập và xác thực token (Postman)

| **Mã**     | **Mô tả**                         | **Dữ liệu**               | **Mong đợi**   | **Yêu cầu** |
|------------|-----------------------------------|---------------------------|----------------|-------------|
| TC-AUTH-01 | Đăng nhập đúng                    | `admin` / `password`      | 200, trả token | FR-08       |
| TC-AUTH-02 | Đăng nhập sai mật khẩu            | `admin` / mật khẩu sai    | 403            | FR-08       |
| TC-AUTH-03 | Đăng nhập sai tên đăng nhập       | tên sai / `password`      | 403            | FR-08       |
| TC-AUTH-04 | Đăng nhập để trống                | username và password rỗng | 403            | FR-08       |
| TC-AUTH-05 | Xác thực token hợp lệ             | token vừa cấp             | 200            | FR-24       |
| TC-AUTH-06 | Xác thực token sai                | `abc`                     | 403            | FR-24       |
| TC-AUTH-07 | Đăng xuất với token hợp lệ        | token vừa cấp             | 200            | FR-09       |
| TC-AUTH-08 | Xác thực token sau khi đăng xuất  | token đã đăng xuất        | 403            | FR-24       |
| TC-AUTH-09 | Đăng xuất với token không tồn tại | `abc`                     | 404            | FR-09       |

### 3.7.3 Nhóm ROOM: quản lý phòng (Postman)

| **Mã**     | **Mô tả**                               | **Dữ liệu**                                                   | **Mong đợi**               | **Yêu cầu**   |
|------------|-----------------------------------------|---------------------------------------------------------------|----------------------------|---------------|
| TC-ROOM-01 | Xem danh sách phòng                     | `GET /room/`                                                  | 200, 3 phòng mẫu           | FR-02         |
| TC-ROOM-02 | Xem chi tiết phòng                      | `GET /room/1`                                                 | 200, phòng 101             | FR-03         |
| TC-ROOM-03 | Xem phòng không tồn tại                 | `GET /room/99999`                                             | 404 [DEF-003]            | FR-03, NFR-08 |
| TC-ROOM-04 | Lọc theo ngày, khoảng trùng booking mẫu | `checkin=2026-02-01&checkout=2026-02-05`                      | 200, không còn phòng 1     | FR-04         |
| TC-ROOM-05 | Lọc theo ngày, khoảng không trùng       | khoảng ngày năm 2027                                          | 200, đủ 3 phòng            | FR-04         |
| TC-ROOM-06 | Lọc chỉ có một tham số ngày             | chỉ `checkin`                                                 | 200, toàn bộ phòng (BR-10) | FR-04         |
| TC-ROOM-07 | Tạo phòng hợp lệ, mỗi loại phòng (EP)   | `type` lần lượt Single, Double, Twin, Family, Suite; có token | 201                        | FR-10         |
| TC-ROOM-08 | Tạo phòng không token                   | dữ liệu hợp lệ                                                | 403                        | FR-10, NFR-04 |
| TC-ROOM-09 | BVA giá phòng                           | `roomPrice` = 0, 1, 999, 1000                                 | 400, 201, 201, 400         | FR-10         |
| TC-ROOM-10 | Loại phòng ngoài danh sách              | `type` = `Penthouse`                                          | 400                        | FR-10         |
| TC-ROOM-11 | Tên phòng rỗng                          | `roomName` = ""                                               | 400                        | FR-10         |
| TC-ROOM-12 | Sửa phòng hợp lệ                        | `PUT /room/{id}`, có token                                    | 202                        | FR-11         |
| TC-ROOM-13 | Sửa phòng không tồn tại                 | `PUT /room/99999`, có token                                   | 404                        | FR-11         |
| TC-ROOM-14 | Sửa phòng không token                   | dữ liệu hợp lệ                                                | 403                        | FR-11, NFR-04 |
| TC-ROOM-15 | Xóa phòng hợp lệ                        | phòng vừa tạo, có token                                       | 202                        | FR-12         |
| TC-ROOM-16 | Xóa phòng không tồn tại                 | `DELETE /room/99999`, có token                                | 404                        | FR-12         |
| TC-ROOM-17 | Xóa phòng không token                   | phòng vừa tạo                                                 | 403                        | FR-12, NFR-04 |

### 3.7.4 Nhóm BOOK: đặt phòng và quản lý booking (Postman)

| **Mã**     | **Mô tả**                                             | **Dữ liệu**                                 | **Mong đợi**                      | **Yêu cầu**   |
|------------|-------------------------------------------------------|---------------------------------------------|-----------------------------------|---------------|
| TC-BOOK-01 | Tạo booking hợp lệ                                    | dữ liệu đầy đủ, ngày năm 2027               | 201                               | FR-06         |
| TC-BOOK-02 | BVA `firstname`                                       | độ dài 2, 3, 18, 19                         | 400, 201, 201, 400                | FR-06         |
| TC-BOOK-03 | BVA `lastname`                                        | độ dài 2, 3, 30, 31                         | 400, 201, 201, 400                | FR-06         |
| TC-BOOK-04 | BVA `phone`                                           | độ dài 10, 11, 21, 22                       | 400, 201, 201, 400                | FR-06         |
| TC-BOOK-05 | Email sai định dạng                                   | `abc`                                       | 400                               | FR-06         |
| TC-BOOK-06 | `roomid` không hợp lệ                                 | `roomid` = 0                                | 400                               | FR-06         |
| TC-BOOK-07 | `checkin` bằng `checkout`                             | cùng một ngày                               | 409                               | FR-25         |
| TC-BOOK-08 | `checkin` sau `checkout`                              | ngược thứ tự                                | 409                               | FR-25         |
| TC-BOOK-09 | Thiếu ngày                                            | bỏ `checkin` hoặc `checkout`                | 400 (BR-06, xem mục 3.1.3 điểm 5) | FR-06, FR-25  |
| TC-BOOK-10 | Trùng hoàn toàn với booking mẫu                       | phòng 1, 2026-02-01 đến 2026-02-05          | 409                               | FR-25, NFR-03 |
| TC-BOOK-11 | Trùng một phần (gối lên)                              | phòng 1, 2026-02-03 đến 2026-02-08          | 409                               | FR-25         |
| TC-BOOK-12 | Liền kề sau: bắt đầu đúng ngày kết thúc booking trước | phòng 1, 2026-02-05 đến 2026-02-08          | 201                               | FR-25         |
| TC-BOOK-13 | Liền kề trước: kết thúc đúng ngày bắt đầu booking sau | phòng 1, 2026-01-28 đến 2026-02-01          | 201                               | FR-25         |
| TC-BOOK-14 | Hai phòng khác nhau cùng ngày                         | phòng 2 và phòng 3, cùng khoảng ngày        | 201 cả hai                        | FR-06         |
| TC-BOOK-15 | Xem danh sách booking không token                     | `GET /booking/?roomid=1`                    | 403                               | FR-13, NFR-04 |
| TC-BOOK-16 | Xem danh sách booking có token                        | `GET /booking/?roomid=1`                    | 200                               | FR-13         |
| TC-BOOK-17 | Xem chi tiết booking có token                         | `GET /booking/{id}`                         | 200                               | FR-14         |
| TC-BOOK-18 | Xem chi tiết booking không token                      | `GET /booking/{id}`                         | 403                               | FR-14, NFR-04 |
| TC-BOOK-19 | Xem booking không tồn tại                             | `GET /booking/99999`, có token              | 404                               | FR-14         |
| TC-BOOK-20 | Sửa booking hợp lệ                                    | `PUT /booking/{id}`, có token               | 200                               | FR-15         |
| TC-BOOK-21 | Sửa booking gây trùng lịch                            | đổi ngày chồng lên booking khác             | 409                               | FR-15, FR-25  |
| TC-BOOK-22 | Sửa booking dữ liệu sai                               | `firstname` 2 ký tự                         | 400                               | FR-15         |
| TC-BOOK-23 | Sửa booking không token                               | dữ liệu hợp lệ                              | 403                               | FR-15, NFR-04 |
| TC-BOOK-24 | Sửa booking không tồn tại                             | `PUT /booking/99999`, có token              | 404                               | FR-15         |
| TC-BOOK-25 | Xóa booking hợp lệ                                    | `DELETE /booking/{id}`, có token            | 202                               | FR-16         |
| TC-BOOK-26 | Xóa booking không token                               | booking vừa tạo                             | 403                               | FR-16, NFR-04 |
| TC-BOOK-27 | Xóa booking không tồn tại                             | `DELETE /booking/99999`, có token           | 404                               | FR-16         |
| TC-BOOK-28 | Xem tóm tắt ngày đã đặt                               | `GET /booking/summary?roomid=1`             | 200, không cần token              | FR-05         |
| TC-BOOK-29 | Xem ngày không khả dụng                               | `GET /booking/unavailable?checkin&checkout` | 200, không cần token              | FR-04         |

Ghi chú về TC-BOOK-12 và TC-BOOK-13:

- Hai test case dùng ngày cố định quanh booking mẫu của phòng 1. Khi thành công, TC-BOOK-12 tạo thêm một booking (2026-02-05 đến 2026-02-08); chạy lại mà không khởi động lại dịch vụ thì request này trùng với chính booking đã tạo và trả 409. Vì vậy mỗi phiên chạy phải bắt đầu từ dữ liệu sạch (mục 3.5.2).
- BR-02 của SRS chỉ nêu rõ chiều "bắt đầu đúng ngày booking trước kết thúc" (TC-BOOK-12). Mong đợi 201 của TC-BOOK-13 (kết thúc đúng ngày bắt đầu booking sau) suy ra từ tính đối xứng của quy tắc đặt phòng theo đêm. Phần white-box sẽ rà soát mã kiểm tra trùng lịch để kết luận lỗi hệ thống hay SRS thiếu quy tắc, rồi bổ sung BR-02 nếu cần.

### 3.7.5 Nhóm MSG: tin nhắn liên hệ (Postman)

| **Mã**    | **Mô tả**                                | **Dữ liệu**                                                    | **Mong đợi**                                                     | **Yêu cầu**   |
|-----------|------------------------------------------|----------------------------------------------------------------|------------------------------------------------------------------|---------------|
| TC-MSG-01 | Gửi liên hệ hợp lệ                       | dữ liệu đầy đủ                                                 | 201                                                              | FR-07         |
| TC-MSG-02 | BVA `subject`                            | độ dài 4, 5, 100, 101                                          | 400, 201, 201, 400                                               | FR-07         |
| TC-MSG-03 | BVA `description`                        | độ dài 19, 20, 2000, 2001                                      | 400, 201, 201, 400                                               | FR-07         |
| TC-MSG-04 | BVA `phone`                              | độ dài 10, 11, 21, 22                                          | 400, 201, 201, 400                                               | FR-07         |
| TC-MSG-05 | Email sai định dạng                      | `abc`                                                          | 400                                                              | FR-07         |
| TC-MSG-06 | Thiếu trường bắt buộc                    | bỏ `name`                                                      | 400                                                              | FR-07         |
| TC-MSG-07 | Xem danh sách tin nhắn không token       | `GET /message/`                                                | 403 theo NFR-04 [DEF-001]                                      | FR-17, NFR-04 |
| TC-MSG-08 | Xem danh sách tin nhắn có token          | `GET /message/`                                                | 200                                                              | FR-17         |
| TC-MSG-09 | Xem chi tiết tin nhắn không token        | `GET /message/1`                                               | 403 theo NFR-04 [DEF-001]                                      | FR-18, NFR-04 |
| TC-MSG-10 | Xem chi tiết tin nhắn có token           | `GET /message/1`                                               | 200                                                              | FR-18         |
| TC-MSG-11 | Xem tin nhắn không tồn tại               | `GET /message/99999`                                           | 404 [DEF-002]                                                  | FR-18, NFR-08 |
| TC-MSG-12 | Đếm tin nhắn                             | `GET /message/count`                                           | 200 (số đếm không phải dữ liệu cá nhân; SRS ghi không cần token) | FR-19         |
| TC-MSG-13 | Đánh dấu đã đọc có token                 | `PUT /message/{id}/read`                                       | 202                                                              | FR-20         |
| TC-MSG-14 | Đánh dấu đã đọc không token              | `PUT /message/{id}/read`                                       | 403                                                              | FR-20, NFR-04 |
| TC-MSG-15 | Xóa tin nhắn có token                    | `DELETE /message/{id}`                                         | 202                                                              | FR-21         |
| TC-MSG-16 | Xóa tin nhắn không token                 | `DELETE /message/{id}`                                         | 403                                                              | FR-21, NFR-04 |
| TC-MSG-17 | Xóa tin nhắn không tồn tại               | `DELETE /message/99999`, có token                              | 404                                                              | FR-21         |
| TC-MSG-18 | Booking có email và phone sinh thông báo | tạo booking đủ `email`, `phone`, sau đó xem danh sách tin nhắn | Có tin nhắn thông báo mới                                        | FR-26         |

### 3.7.6 Nhóm BRAND và REP: thương hiệu và báo cáo (Postman)

| **Mã**      | **Mô tả**                      | **Dữ liệu**                   | **Mong đợi**                           | **Yêu cầu**   |
|-------------|--------------------------------|-------------------------------|----------------------------------------|---------------|
| TC-BRAND-01 | Xem thương hiệu                | `GET /branding/`              | 200, đủ address, contact, map, logoUrl | FR-01         |
| TC-BRAND-02 | Cập nhật hợp lệ                | dữ liệu đầy đủ, có token      | 202                                    | FR-23         |
| TC-BRAND-03 | Cập nhật không token           | dữ liệu hợp lệ                | 403                                    | FR-23, NFR-04 |
| TC-BRAND-04 | Tên chứa ký tự không cho phép  | `name` có chữ số              | 400                                    | FR-23         |
| TC-BRAND-05 | BVA độ dài `name`              | 2, 3, 100, 101 ký tự          | 400, 202, 202, 400                     | FR-23         |
| TC-BRAND-06 | `logoUrl` sai định dạng        | `abc`                         | 400                                    | FR-23         |
| TC-BRAND-07 | `contact.email` sai định dạng  | `abc`                         | 400                                    | FR-23         |
| TC-BRAND-08 | Thiếu `address.line1`          | bỏ trường                     | 400                                    | FR-23         |
| TC-REP-01   | Báo cáo tổng hợp có token      | `GET /report/`, cookie hợp lệ | 200                                    | FR-22         |
| TC-REP-02   | Báo cáo không có cookie        | `GET /report/`                | 400                                    | FR-22         |
| TC-REP-03   | Báo cáo với token sai          | cookie `token=abc`            | 403 [DEF-004]                        | FR-22, NFR-08 |
| TC-REP-04   | Báo cáo theo phòng không token | `GET /report/room/1`          | 200                                    | FR-05         |

### 3.7.7 Nhóm SEC và REL: bảo mật và độ tin cậy

| **Mã**    | **Mô tả**                                    | **Cách thực hiện**                                                               | **Mong đợi**                                                         | **Yêu cầu**    |
|-----------|----------------------------------------------|----------------------------------------------------------------------------------|----------------------------------------------------------------------|----------------|
| TC-SEC-01 | Mật khẩu không lưu và so khớp ở dạng thô     | Rà soát mã dịch vụ `auth` và dữ liệu khởi tạo                                    | Mật khẩu được băm                                                    | NFR-05         |
| TC-SEC-02 | Truy vấn dùng tham số hóa                    | Rà soát mã truy cập CSDL của các dịch vụ                                         | Không ghép chuỗi đầu vào vào SQL                                     | NFR-05         |
| TC-SEC-03 | Đầu vào dạng SQL injection cơ bản            | Gửi `' OR '1'='1` vào `username`, `roomid`, `roomName`                           | Không lộ dữ liệu, không trả 5xx                                      | NFR-05, NFR-08 |
| TC-SEC-04 | Thuộc tính bảo vệ của cookie                 | Quan sát cookie `token` sau đăng nhập qua giao diện (HttpOnly, SameSite, Secure) | Có thuộc tính bảo vệ                                                 | NFR-05         |
| TC-SEC-05 | Token có thời hạn và sinh ngẫu nhiên         | Rà soát mã sinh và kiểm tra token                                                | Có cơ chế hết hạn, sinh ngẫu nhiên an toàn                           | NFR-05         |
| TC-SEC-06 | Dữ liệu không hợp lệ không gây 5xx           | Gửi dữ liệu sai kiểu, thiếu, quá dài đến mọi API ghi                             | Luôn trả 4xx                                                         | NFR-08         |
| TC-REL-01 | Message-service không khả dụng khi đặt phòng | Dừng tiến trình message-service, tạo booking                                     | Trả mã lỗi có kiểm soát; ghi nhận việc booking có được lưu hay không | NFR-02         |
| TC-REL-02 | Auth-service không khả dụng                  | Dừng tiến trình auth-service, gọi API cần token                                  | Trả lỗi có kiểm soát, không treo                                     | NFR-02         |

### 3.7.8 Nhóm UI: giao diện (Selenium)

| **Mã**   | **Mô tả**                                       | **Mong đợi**                                      | **Yêu cầu**         |
|----------|-------------------------------------------------|---------------------------------------------------|---------------------|
| TC-UI-01 | Mở trang chủ                                    | Hiển thị thông tin thương hiệu và danh sách phòng | FR-01, FR-02        |
| TC-UI-02 | Xem chi tiết phòng và lịch trống                | Hiển thị thông tin phòng và các ngày đã đặt       | FR-03, FR-05        |
| TC-UI-03 | Đặt phòng hợp lệ                                | Đặt thành công, có xác nhận                       | FR-06               |
| TC-UI-04 | Đặt phòng nhập thiếu hoặc sai                   | Thông báo lỗi nêu rõ trường vi phạm               | FR-06, NFR-06       |
| TC-UI-05 | Đặt phòng trùng lịch                            | Hiển thị thông báo lỗi, không tạo booking         | FR-25               |
| TC-UI-06 | Đặt phòng với tên tiếng Việt có dấu             | Dữ liệu hợp lý không bị từ chối vô lý             | NFR-06              |
| TC-UI-07 | Gửi liên hệ hợp lệ                              | Gửi thành công, có xác nhận                       | FR-07               |
| TC-UI-08 | Gửi liên hệ sai dữ liệu                         | Thông báo lỗi nêu rõ trường vi phạm               | FR-07, NFR-06       |
| TC-UI-09 | Đăng nhập admin đúng                            | Vào được khu vực quản trị                         | FR-08               |
| TC-UI-10 | Đăng nhập admin sai                             | Hiển thị thông báo lỗi                            | FR-08               |
| TC-UI-11 | Admin tạo, sửa, xóa phòng                       | Danh sách phòng cập nhật đúng                     | FR-10, FR-11, FR-12 |
| TC-UI-12 | Admin xem, sửa, xóa booking                     | Booking hiển thị và cập nhật đúng                 | FR-13 đến FR-16     |
| TC-UI-13 | Admin xem, đánh dấu đã đọc, xóa tin nhắn        | Trạng thái tin nhắn cập nhật đúng                 | FR-17 đến FR-21     |
| TC-UI-14 | Admin xem báo cáo                               | Báo cáo hiển thị                                  | FR-22               |
| TC-UI-15 | Admin cập nhật thương hiệu                      | Thông tin mới hiển thị ở trang chủ                | FR-23               |
| TC-UI-16 | Đăng xuất                                       | Quay lại trạng thái Guest                         | FR-09               |
| TC-UI-17 | Truy cập khu vực quản trị khi chưa đăng nhập    | Bị chặn hoặc chuyển về đăng nhập                  | NFR-04              |
| TC-UI-18 | Chạy các luồng chính trên Chrome, Firefox, Edge | Kết quả giống nhau trên cả ba trình duyệt         | NFR-07              |

### 3.7.9 Nhóm PERF: hiệu năng (JMeter)

| **Mã**     | **Mô tả**                                      | **Kịch bản**                            | **Mong đợi**                                         | **Yêu cầu** |
|------------|------------------------------------------------|-----------------------------------------|------------------------------------------------------|-------------|
| TC-PERF-01 | Tải `GET /room/`                               | Load test, mục 3.9                      | Đạt ngưỡng NFR-01                                    | NFR-01      |
| TC-PERF-02 | Tải `POST /booking/`                           | Load test, mục 3.9                      | Đạt ngưỡng NFR-01                                    | NFR-01      |
| TC-PERF-03 | Stress                                         | Tăng dần người dùng đến khi vượt ngưỡng | Xác định điểm gãy và cách hệ thống suy giảm          | NFR-01      |
| TC-PERF-04 | Spike                                          | Tăng đột ngột người dùng, rồi giảm      | Hệ thống phục hồi, không treo                        | NFR-01      |
| TC-PERF-05 | Đặt đồng thời cùng một phòng, cùng khoảng ngày | Nhiều luồng cùng gửi `POST /booking/`   | Đúng một yêu cầu thành công, các yêu cầu còn lại 409 | NFR-03      |

### 3.7.10 Tổng hợp số lượng

| **Nhóm** | **Số test case** |
|----------|------------------|
| AUTH     | 9                |
| ROOM     | 17               |
| BOOK     | 29               |
| MSG      | 18               |
| BRAND    | 8                |
| REP      | 4                |
| SEC      | 6                |
| REL      | 2                |
| UI       | 18               |
| PERF     | 5                |
| **Tổng** | **116**          |

Số test case thiết kế (116) khác số dòng thực thi trong Postman (128) vì các test case BVA và EP được thực thi theo dữ liệu (mục 3.7.1): mỗi bộ dữ liệu là một request riêng, mang mã có hậu tố chữ cái (ví dụ TC-ROOM-09a đến 09d). Bảng đối chiếu:

| **Nhóm** | **Test case thiết kế**            | **Dòng thực thi trong Postman** | **Ghi chú**                                                                                                 |
|----------|-----------------------------------|---------------------------------|-------------------------------------------------------------------------------------------------------------|
| AUTH     | 9                                 | 9                               |                                                                                                             |
| ROOM     | 17                                | 24                              | TC-ROOM-07 thành 5 dòng, TC-ROOM-09 thành 4 dòng                                                            |
| BOOK     | 29                                | 40                              | TC-BOOK-02, 03, 04 mỗi ca 4 dòng; TC-BOOK-09 và TC-BOOK-14 mỗi ca 2 dòng                                    |
| MSG      | 18                                | 29                              | TC-MSG-02, 03, 04 mỗi ca 4 dòng; TC-MSG-18 thành 3 dòng                                                     |
| BRAND    | 8                                 | 11                              | TC-BRAND-05 thành 4 dòng                                                                                    |
| REP      | 4                                 | 4                               |                                                                                                             |
| SEC      | 6                                 | 11                              | Postman chỉ phủ TC-SEC-03 (4 dòng) và TC-SEC-06 (7 dòng); TC-SEC-01, 02, 04, 05 là rà soát mã hoặc quan sát |
| **Tổng** | **87** (không tính REL, UI, PERF) | **128**                         |                                                                                                             |

## 3.8 Ma trận truy vết

Cột Test Case của ma trận trong SRS (mục 2.8) được điền như sau.

| **FR** | **Test Case**                                                         |
|--------|-----------------------------------------------------------------------|
| FR-01  | TC-BRAND-01, TC-UI-01                                                 |
| FR-02  | TC-ROOM-01, TC-UI-01                                                  |
| FR-03  | TC-ROOM-02, TC-ROOM-03, TC-UI-02                                      |
| FR-04  | TC-ROOM-04, TC-ROOM-05, TC-ROOM-06, TC-BOOK-29                        |
| FR-05  | TC-BOOK-28, TC-REP-04, TC-UI-02                                       |
| FR-06  | TC-BOOK-01 đến TC-BOOK-06, TC-BOOK-09, TC-BOOK-14, TC-UI-03, TC-UI-04 |
| FR-07  | TC-MSG-01 đến TC-MSG-06, TC-UI-07, TC-UI-08                           |
| FR-08  | TC-AUTH-01 đến TC-AUTH-04, TC-UI-09, TC-UI-10                         |
| FR-09  | TC-AUTH-07, TC-AUTH-09, TC-UI-16                                      |
| FR-10  | TC-ROOM-07 đến TC-ROOM-11, TC-UI-11                                   |
| FR-11  | TC-ROOM-12 đến TC-ROOM-14, TC-UI-11                                   |
| FR-12  | TC-ROOM-15 đến TC-ROOM-17, TC-UI-11                                   |
| FR-13  | TC-BOOK-15, TC-BOOK-16, TC-UI-12                                      |
| FR-14  | TC-BOOK-17 đến TC-BOOK-19, TC-UI-12                                   |
| FR-15  | TC-BOOK-20 đến TC-BOOK-24, TC-UI-12                                   |
| FR-16  | TC-BOOK-25 đến TC-BOOK-27, TC-UI-12                                   |
| FR-17  | TC-MSG-07, TC-MSG-08, TC-UI-13                                        |
| FR-18  | TC-MSG-09 đến TC-MSG-11, TC-UI-13                                     |
| FR-19  | TC-MSG-12, TC-UI-13                                                   |
| FR-20  | TC-MSG-13, TC-MSG-14, TC-UI-13                                        |
| FR-21  | TC-MSG-15 đến TC-MSG-17, TC-UI-13                                     |
| FR-22  | TC-REP-01 đến TC-REP-03, TC-UI-14                                     |
| FR-23  | TC-BRAND-02 đến TC-BRAND-08, TC-UI-15                                 |
| FR-24  | TC-AUTH-05, TC-AUTH-06, TC-AUTH-08                                    |
| FR-25  | TC-BOOK-07 đến TC-BOOK-13, TC-BOOK-21, TC-UI-05                       |
| FR-26  | TC-MSG-18                                                             |

Yêu cầu phi chức năng:

| **NFR** | **Test Case**                                                                                                                                                    |
|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| NFR-01  | TC-PERF-01 đến TC-PERF-04                                                                                                                                        |
| NFR-02  | TC-REL-01, TC-REL-02                                                                                                                                             |
| NFR-03  | TC-PERF-05, TC-BOOK-10                                                                                                                                           |
| NFR-04  | TC-MSG-07, TC-MSG-09, TC-MSG-14, TC-MSG-16, TC-ROOM-08, TC-ROOM-14, TC-ROOM-17, TC-BOOK-15, TC-BOOK-18, TC-BOOK-23, TC-BOOK-26, TC-BRAND-03, TC-REP-03, TC-UI-17 |
| NFR-05  | TC-SEC-01 đến TC-SEC-05                                                                                                                                          |
| NFR-06  | TC-UI-04, TC-UI-06, TC-UI-08                                                                                                                                     |
| NFR-07  | TC-UI-18                                                                                                                                                         |
| NFR-08  | TC-SEC-03, TC-SEC-06, TC-ROOM-03, TC-MSG-11, TC-REP-03                                                                                                           |

Mọi yêu cầu FR-01 đến FR-26 và NFR-01 đến NFR-08 đều có ít nhất một test case (độ phủ yêu cầu 100% ở mức thiết kế).

## 3.9 Kịch bản và ngưỡng hiệu năng

Ngưỡng đề xuất theo NFR-01: với 50 người dùng đồng thời, thời gian phản hồi trung bình ≤ 1 giây, p95 ≤ 2 giây, tỷ lệ lỗi < 1%. Ngưỡng này được đo ở Phần III và hiệu chỉnh, kết luận ở Phần IV.

| **Kịch bản**       | **API**                                                             | **Cấu hình đề xuất**                                                                         |
|--------------------|---------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| Load               | `GET /room/`, `POST /booking/` (mỗi lần dùng khoảng ngày khác nhau) | 50 luồng, ramp-up 30 giây, duy trì 5 phút                                                    |
| Stress             | `GET /room/`, `POST /booking/`                                      | Tăng dần từ 50 lên 100, 200, 400 luồng, theo dõi điểm bắt đầu vượt ngưỡng hoặc xuất hiện lỗi |
| Spike              | `GET /room/`                                                        | Tăng đột ngột từ 10 lên 200 luồng trong vài giây, rồi giảm và quan sát phục hồi              |
| Đồng thời (NFR-03) | `POST /booking/` cùng `roomid`, cùng khoảng ngày                    | 20 đến 50 luồng gửi cùng lúc (synchronizing timer), mong đợi đúng 1 phản hồi 201             |

Nguyên tắc đo:

- JMeter gọi thẳng cổng dịch vụ (3000 và 3001), không đi qua cổng 3003 vì máy chủ phát triển của giao diện làm lệch số liệu.
- Không chạy kịch bản hiệu năng trong khi JMeter và hệ thống tranh tài nguyên với chương trình khác; ghi lại cấu hình máy.
- Mỗi kịch bản chạy trên dữ liệu sạch và lặp lại tối thiểu 3 lần; báo cáo lấy giá trị trung bình và nêu độ lệch.
- Chỉ số ghi nhận: thời gian phản hồi trung bình, p95, p99, thông lượng (yêu cầu mỗi giây), tỷ lệ lỗi, mức sử dụng CPU và bộ nhớ của máy.

## 3.10 Tiêu chí vào, ra, tạm dừng và nghiệm thu

**Tiêu chí bắt đầu**

- SRS và Test Plan đã được rà soát.
- Hệ thống chạy ổn định: cả 6 cổng dịch vụ và cổng 3003 phản hồi.
- Công cụ đã cài đặt và phiên bản đã ghi ở mục 3.4.1.
- Bộ test case đã thiết kế xong và có dữ liệu kiểm thử.

**Tiêu chí tạm dừng**

- Hệ thống không khởi động hoặc một dịch vụ lõi (`auth`, `booking`, `room`) liên tục không phản hồi.
- Lỗi môi trường làm hơn 20% test case không thực thi được.

**Tiêu chí kết thúc và nghiệm thu**

- 100% test case đã thiết kế được thực thi; test case không thực thi được phải nêu lý do.
- Mỗi test case Fail có lỗi tương ứng trong danh sách lỗi, kèm bằng chứng và mức độ.
- 100% yêu cầu FR và NFR có ít nhất một test case đã thực thi (độ phủ yêu cầu).
- Không còn lỗi mức Cao chưa được phân tích nguyên nhân và đề xuất khắc phục.
- Kết quả hiệu năng được đối chiếu với ngưỡng ở mục 3.9; trường hợp không đạt được ghi rõ và giải thích.

Do mục đích là đánh giá chất lượng, hệ thống **không bắt buộc đạt 100% test case** để được nghiệm thu; điều kiện nghiệm thu là việc thực thi và phân tích đầy đủ.

## 3.11 Quản lý lỗi

### 3.11.1 Mức độ nghiêm trọng

| **Mức**    | **Mô tả**                                                                                            | **Ví dụ**                        |
|------------|------------------------------------------------------------------------------------------------------|----------------------------------|
| Cao        | Lộ dữ liệu cá nhân, mất dữ liệu, vi phạm xác thực hoặc phân quyền, chức năng cốt lõi không dùng được | Xem tin nhắn không cần đăng nhập |
| Trung bình | Chức năng sai hoặc trả mã lỗi không đúng nhưng có cách khắc phục, không lộ dữ liệu                   | Trả 500 thay vì 404              |
| Thấp       | Lỗi giao diện, thông báo không rõ, sai chính tả                                                      | Thông báo lỗi chung chung        |

### 3.11.2 Mẫu báo cáo lỗi

Mỗi lỗi gồm: mã lỗi, chức năng và yêu cầu liên quan, các bước tái hiện, kết quả mong đợi, kết quả thực tế, mức độ, bằng chứng, phân tích nguyên nhân (log, mã nguồn) và đề xuất khắc phục.

### 3.11.3 Danh sách lỗi sơ bộ (từ các lần chạy thử trước khi thực thi chính thức)

| **Mã**  | **Mô tả**                                                                                                                                                                   | **Test case**            | **Mức đề xuất**                                             |
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|-------------------------------------------------------------|
| DEF-001 | `GET /message/`, `GET /message/{id}` không cần token; `GET /message/1` trả `email`, `phone`, `description` của khách                                                        | TC-MSG-07, TC-MSG-09     | Cao                                                         |
| DEF-002 | `GET /message/99999` trả 500 thay vì 404                                                                                                                                    | TC-MSG-11                | Trung bình                                                  |
| DEF-003 | `GET /room/99999` trả 500 thay vì 404                                                                                                                                       | TC-ROOM-03               | Trung bình                                                  |
| DEF-004 | `GET /report/` với token sai trả 500 thay vì 403                                                                                                                            | TC-REP-03                | Trung bình (có thể hạ xuống Thấp vì yêu cầu vẫn bị từ chối) |
| DEF-005 | Dữ liệu mẫu `logoUrl` là đường dẫn tương đối, bị chính bộ kiểm tra URL từ chối khi gửi lại bằng `PUT /branding/` (400); cần xác nhận ảnh hưởng trên giao diện bằng Selenium | TC-BRAND-01, TC-BRAND-02 | Trung bình (chờ xác nhận)                                   |
| DEF-006 | `POST /booking/` có `checkout` đúng ngày `checkin` của booking sau trả 409 thay vì 201; chiều ngược lại (TC-BOOK-12) đạt                                                    | TC-BOOK-13               | Trung bình (chờ kết luận SRS hay hệ thống, xem mục 3.7.4)   |

Danh sách này sẽ được xác nhận và bổ sung ở Phần III, mã lỗi được đánh lại khi lập bảng lỗi chính thức ở Phần IV.

## 3.12 Rủi ro và biện pháp

| **STT** | **Rủi ro**                                                                | **Ảnh hưởng**                                   | **Biện pháp**                                                                                |
|---------|---------------------------------------------------------------------------|-------------------------------------------------|----------------------------------------------------------------------------------------------|
| 1       | Dữ liệu không reset giữa các lần chạy                                     | Test case phụ thuộc thứ tự, kết quả lệch        | Bắt đầu mỗi phiên từ trạng thái sạch; dùng dữ liệu riêng cho từng test case                  |
| 2       | Nhấn Enter trong cửa sổ ứng dụng tắt mọi tiến trình Java và Node trên máy | Mất trạng thái, tắt cả chương trình khác        | Chạy ứng dụng ở cửa sổ riêng; không chạy chương trình Java hoặc Node khác khi kiểm thử       |
| 3       | Số liệu hiệu năng biến động vì chạy trên máy cá nhân                      | Kết luận thiếu tin cậy                          | Ghi cấu hình máy; chạy lặp lại; đóng chương trình nền                                        |
| 4       | Cổng 3003 chạy bằng máy chủ phát triển                                    | Làm lệch số liệu hiệu năng nếu đo qua giao diện | JMeter gọi thẳng cổng dịch vụ                                                                |
| 5       | Phản hồi qua giao diện khác khi gọi thẳng dịch vụ                         | Nhầm lẫn khi đối chiếu SRS                      | Mỗi test case ghi rõ đường gọi; kiểm tra mã dịch vụ khi gọi thẳng                            |
| 6       | Thay đổi mã nguồn của dự án gốc                                           | Kết quả không tái lập                           | Cố định phiên bản mã nguồn                                                                   |
| 7       | Kịch bản Selenium không ổn định (chờ phần tử, phụ thuộc thời gian)        | Test case Fail giả                              | Dùng chờ tường minh (explicit wait); đặt định danh phần tử rõ ràng; chạy lại để xác nhận lỗi |
| 8       | Khác biệt phiên bản công cụ giữa các thành viên                           | Kết quả khác nhau                               | Ghi phiên bản ở mục 3.4.1 và dùng chung bộ script trong repo                                 |

## 3.13 Sản phẩm bàn giao và phân công

### 3.13.1 Sản phẩm bàn giao

| **Sản phẩm**                                       | **Vị trí trong repo**                          |
|----------------------------------------------------|------------------------------------------------|
| Test Plan                                          | `TestPlan/TestPlan.md`                         |
| Bảng test case chi tiết (mở rộng từ mục 3.7)       | `TestCase/TestCase_RestfulBooker_Postman.xlsx` |
| Postman collection và environment                  | `Postman/`                                     |
| Script Selenium                                    | `Selenium/`                                    |
| Test plan JMeter và kết quả (`.jtl`, báo cáo HTML) | `JMeter/`                                      |
| Ảnh chụp, log bằng chứng                           | `Images/`                                      |
| Báo cáo cuối kỳ                                    | `BaoCao/`                                      |

### 3.13.2 Phân công

| **Công việc**                           | **Người phụ trách** |
|-----------------------------------------|---------------------|
| Thiết kế chi tiết bộ test case          | Nguyễn Văn Ngọc     |
| Postman: xây dựng và chạy collection    | Nguyễn Văn Ngọc     |
| Rà soát mã (white-box, NFR-05)          | Nguyễn Văn Ngọc     |
| Selenium: xây dựng và chạy kịch bản     | Nguyễn Thị Trà Mi   |
| JMeter: xây dựng và chạy kịch bản       | Nguyễn Thị Trà Mi   |
| Tổng hợp kết quả, báo cáo lỗi (Phần IV) | Nguyễn Thị Trà Mi   |

## 3.14 Phụ lục: Lệnh tham khảo

```bat
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

# Chương 4. Thực hiện kiểm thử

## 4.1 Phạm vi, môi trường và phương pháp

### 4.1.1 Phạm vi

Kiểm thử các dịch vụ `auth`, `booking`, `room`, `message`, `branding`, `report` và giao diện web, theo Test Plan mục 3.2. Ngoài phạm vi: triển khai Docker, nội bộ CSDL H2, tương thích thiết bị di động.

### 4.1.2 Môi trường

| **Hạng mục**            | **Giá trị**                                                                                               |
|-------------------------|-----------------------------------------------------------------------------------------------------------|
| Hệ điều hành            | Windows 11                                                                                                |
| Cấu hình máy (CPU, RAM) | AMD Ryzen 9 8945HX with Radeon Graphics (2.50 GHz), RAM 32GB                                              |
| JDK                     | Eclipse Temurin 26.0.2.1                                                                                  |
| Maven                   | 3.9.14                                                                                                    |
| Node.js / npm           | 24.22.1 / 11.19.1                                                                                         |
| Cách chạy hệ thống      | `build_locally.cmd`, sau đó `run_locally.cmd`; không đặt `dbRefresh` (dữ liệu không reset)                |
| Giao diện               | `http://localhost:3003` (ứng dụng `assets`, `npm run dev`)                                                |
| Cổng dịch vụ            | booking 3000, room 3001, branding 3002, auth 3004, report 3005, message 3006                              |
| Postman / Newman        | 12.34.2.0 / 6.2.3; collection "Restful-booker Platform – Kiểm thử API", môi trường "Restful-booker local" |
| Apache JMeter           | 5.6.3                                                                                                     |
| Selenium                | 4.25.0 (theo `pom.xml`), JUnit 5; trình duyệt Chrome, Firefox                                             |

### 4.1.3 Phương pháp

| **Mức**       | **Công cụ**                         | **Nội dung**                                                                                |
|---------------|-------------------------------------|---------------------------------------------------------------------------------------------|
| API (hộp đen) | Postman, Newman                     | Phân vùng tương đương, giá trị biên, kiểm thử theo vai trò Guest và Admin, vòng đời booking |
| Giao diện     | Selenium (Java, JUnit 5)            | Thao tác trên giao diện, xác nhận kết quả bằng API                                          |
| Hiệu năng     | JMeter, gọi thẳng cổng 3000 và 3001 | Load, stress, spike, đặt đồng thời                                                          |
| Hộp trắng     | Rà soát mã nguồn                    | Bảo mật (SEC-01, SEC-02, SEC-05) và xác định nguyên nhân lỗi                                |

Kết quả mong đợi của mọi test case lấy theo SRS 1.1 và Test Plan 1.1 (kể cả sáu điểm điều chỉnh ở Test Plan mục 3.1.3).

### 4.1.4 Giới hạn của đợt kiểm thử

1.  JMeter chỉ có số liệu của một lần chạy cho mỗi kịch bản (lần chạy `r3`), trong khi Test Plan yêu cầu tối thiểu 3 lần; chưa ghi nhận CPU và bộ nhớ của máy.
2.  Hai kết quả JMeter không hợp lệ do dữ liệu từ các lần chạy trước còn tồn tại: `booking-stress-50` (100% mã 409) và `concurrency-r3` (50 phản hồi 409). Số liệu chính thức của NFR-03 cần chạy lại trên dữ liệu sạch; bằng chứng hiện có lấy từ lần chạy thử `smoke-04` (mục 4.2.5).
3.  Nhóm REL (2 test case) chưa thực thi, TC-SEC-04 (thuộc tính cookie) chưa quan sát, TC-UI-18 mới chạy trên 2 trong 3 trình duyệt (chưa có Edge).
4.  TC-SEC-01, SEC-02, SEC-05 được đánh giá bằng rà soát mã, chưa khai thác thử bằng yêu cầu thật.
5.  Hai test case giao diện (TC-UI-01, TC-UI-05) thất bại nhưng chưa xác định nguyên nhân (mục 5.2.4).
6.  Kết quả Postman là một lần chạy (một vòng lặp).

## 4.2 Kết quả thực thi

### 4.2.1 Tổng hợp theo nhóm chức năng

| **Nhóm** | **Nội dung**                 | **Công cụ**              | **Số test case** | **Đạt** | **Không đạt** | **Chưa thực thi hoặc một phần** | **Tỷ lệ đạt trên số đã thực thi** |
|----------|------------------------------|--------------------------|------------------|---------|---------------|---------------------------------|-----------------------------------|
| AUTH     | Đăng nhập và xác thực token  | Postman                  | 9                | 9       | 0             | 0                               | 100.0%                            |
| ROOM     | Quản lý phòng                | Postman                  | 17               | 16      | 1             | 0                               | 94.1%                             |
| BOOK     | Đặt phòng và quản lý booking | Postman                  | 29               | 28      | 1             | 0                               | 96.6%                             |
| MSG      | Tin nhắn liên hệ             | Postman                  | 18               | 15      | 3             | 0                               | 83.3%                             |
| BRAND    | Thương hiệu                  | Postman                  | 8                | 8       | 0             | 0                               | 100.0%                            |
| REP      | Báo cáo                      | Postman                  | 4                | 3       | 1             | 0                               | 75.0%                             |
| SEC      | Bảo mật                      | Postman và rà soát mã    | 6                | 2       | 3             | 1                               | 40.0%                             |
| REL      | Độ tin cậy                   | Dừng tiến trình, Postman | 2                | 0       | 0             | 2                               | –                                 |
| UI       | Giao diện                    | Selenium                 | 18               | 13      | 4             | 1                               | 76.5%                             |
| PERF     | Hiệu năng                    | JMeter                   | 5                | 4       | 1             | 0                               | 80.0%                             |
|          | **Tổng**                     |                          | **116**          | **98**  | **14**        | **4**                           | **87.5%**                         |

Ghi chú: UI gồm 17 test case đạt hoặc không đạt và TC-UI-18 (ba trình duyệt) tính là "một phần". Số test case thiết kế (116) khác số dòng thực thi trong Postman (128) vì các ca BVA và EP chạy theo bộ dữ liệu (Test Plan mục 3.7.10); một test case chỉ được tính Đạt khi mọi dòng dữ liệu của nó đạt.

### 4.2.2 Kết quả API (Postman, Newman)

| **Chỉ số**            | **Giá trị**                                                                                                         |
|-----------------------|---------------------------------------------------------------------------------------------------------------------|
| Số request            | 131 (128 dòng test case, 3 dòng chuẩn bị dữ liệu)                                                                   |
| Số assertion          | 144, không đạt 6                                                                                                    |
| Thời gian chạy        | 15 giây; phản hồi trung bình 15 ms, lớn nhất 180 ms                                                                 |
| Test case Postman đạt | 79 trên 85 (nhóm AUTH, ROOM, BOOK, MSG, BRAND, REP), cùng 2 trên 2 test case SEC chạy bằng Postman (SEC-03, SEC-06) |

Sáu assertion không đạt:

| **Test case**                                          | **Kết quả mong đợi** | **Kết quả thực tế** | **Lỗi** |
|--------------------------------------------------------|----------------------|---------------------|---------|
| TC-ROOM-03: xem phòng không tồn tại                    | 404                  | 500                 | DEF-003 |
| TC-BOOK-13: kết thúc đúng ngày checkin của booking sau | 201                  | 409                 | DEF-006 |
| TC-MSG-07: xem danh sách tin nhắn không token          | 403                  | 200                 | DEF-001 |
| TC-MSG-09: xem chi tiết tin nhắn không token           | 403                  | 200                 | DEF-001 |
| TC-MSG-11: xem tin nhắn không tồn tại                  | 404                  | 500                 | DEF-002 |
| TC-REP-03: báo cáo với token sai                       | 403                  | 500                 | DEF-004 |

Nhận xét: các nhóm xác thực (AUTH 9/9) và thương hiệu (BRAND 8/8) đạt toàn bộ. Các kiểm tra theo vai trò ở những API ghi và quản trị của booking, room, message (thiếu token trả 403) đều đạt, riêng hai API đọc tin nhắn không yêu cầu token (DEF-001). Các test case dữ liệu không hợp lệ và SQL injection ở đăng nhập, đường dẫn phòng, tên phòng (TC-SEC-03, SEC-06) đều trả mã 4xx hoặc xử lý an toàn.

### 4.2.3 Kết quả giao diện (Selenium)

| **Mã**   | **Nội dung**                                 | **Chrome** | **Firefox** | **Thời gian Chrome (ms)** | **Thời gian Firefox (ms)** |
|----------|----------------------------------------------|------------|-------------|---------------------------|----------------------------|
| TC-UI-01 | Mở trang chủ                                 | Không đạt  | Không đạt   | 1716                      | 1932                       |
| TC-UI-02 | Xem chi tiết phòng và lịch trống             | Đạt        | Đạt         | 1999                      | 2547                       |
| TC-UI-03 | Đặt phòng hợp lệ                             | Đạt        | Đạt         | 3211                      | 3555                       |
| TC-UI-04 | Đặt phòng nhập thiếu hoặc sai                | Không đạt  | Không đạt   | 2677                      | 2816                       |
| TC-UI-05 | Đặt phòng trùng lịch                         | Không đạt  | Không đạt   | 15866                     | 16005                      |
| TC-UI-06 | Đặt phòng với tên tiếng Việt có dấu          | Đạt        | Đạt         | 3314                      | 3506                       |
| TC-UI-07 | Gửi liên hệ hợp lệ                           | Đạt        | Đạt         | 2103                      | 2120                       |
| TC-UI-08 | Gửi liên hệ sai dữ liệu                      | Đạt        | Đạt         | 2038                      | 2137                       |
| TC-UI-09 | Đăng nhập admin đúng                         | Đạt        | Đạt         | 1841                      | 2195                       |
| TC-UI-10 | Đăng nhập admin sai                          | Đạt        | Đạt         | 4336                      | 4853                       |
| TC-UI-11 | Admin tạo, sửa, xóa phòng                    | Đạt        | Đạt         | 4792                      | 3899                       |
| TC-UI-12 | Admin xem, sửa, xóa booking                  | Đạt        | Đạt         | 2816                      | 3386                       |
| TC-UI-13 | Admin xem, đánh dấu đã đọc, xóa tin nhắn     | Đạt        | Đạt         | 3719                      | 4235                       |
| TC-UI-14 | Admin xem báo cáo                            | Đạt        | Đạt         | 2369                      | 2469                       |
| TC-UI-15 | Admin cập nhật thương hiệu                   | Không đạt  | Không đạt   | 14280                     | 13398                      |
| TC-UI-16 | Đăng xuất                                    | Đạt        | Đạt         | 6518                      | 6968                       |
| TC-UI-17 | Truy cập khu vực quản trị khi chưa đăng nhập | Đạt        | Đạt         | 5710                      | 6332                       |

Chrome và Firefox cho kết quả giống hệt nhau ở cả 17 test case. Thời gian chạy trung bình mỗi test case: Chrome 4665 ms, Firefox 4844 ms. TC-UI-18 (ba trình duyệt) mới chạy trên Chrome và Firefox; chưa có kết quả Edge.

Bốn test case không đạt (cả hai trình duyệt):

| **Test case** | **Thông báo lỗi ghi nhận**                                                                                         | **Phân loại**            |
|---------------|--------------------------------------------------------------------------------------------------------------------|--------------------------|
| TC-UI-01      | Số phòng trên giao diện khác số phòng từ API (mong đợi 4, thực tế 3)                                               | Chờ xác minh (mục 5.2.4) |
| TC-UI-04      | Thông báo lỗi chỉ gồm các câu chung như "must not be empty", "size must be between 3 and 18", không nêu tên trường | DEF-011                  |
| TC-UI-05      | Không thấy thông báo lỗi khi đặt phòng trùng lịch                                                                  | Chờ xác minh (mục 5.2.4) |
| TC-UI-15      | Cập nhật thương hiệu qua giao diện không thành công                                                                | DEF-005                  |

### 4.2.4 Bảo mật và độ tin cậy

| **Test case**                                        | **Kết quả**         | **Căn cứ**                                                                                              |
|------------------------------------------------------|---------------------|---------------------------------------------------------------------------------------------------------|
| TC-SEC-01 Mật khẩu không lưu dạng thô                | Không đạt (DEF-008) | `AuthDB.queryCredentials` so khớp `username` và `password` trực tiếp trong câu lệnh SQL, không băm      |
| TC-SEC-02 Truy vấn tham số hóa                       | Không đạt (DEF-009) | `BookingDB.queryBookingsById` và `queryBookingSummariesById` ghép chuỗi `roomid` vào SQL                |
| TC-SEC-03 SQL injection cơ bản                       | Đạt                 | Postman: đăng nhập 403, đường dẫn phòng 404, tên phòng được lưu như chuỗi thường, bảng phòng nguyên vẹn |
| TC-SEC-04 Thuộc tính cookie                          | Chưa thực thi       | Chưa quan sát HttpOnly, SameSite, Secure                                                                |
| TC-SEC-05 Token có thời hạn, sinh ngẫu nhiên an toàn | Không đạt (DEF-010) | `AuthService.verify` chỉ kiểm tra token có tồn tại; token sinh bằng `ThreadLocalRandom`                 |
| TC-SEC-06 Dữ liệu sai không gây 5xx                  | Đạt                 | Postman: 7 dòng đều trả 4xx                                                                             |
| TC-REL-01, TC-REL-02                                 | Chưa thực thi       | Chưa dừng message-service và auth-service để quan sát                                                   |

### 4.2.5 Kết quả hiệu năng (JMeter)

Điều kiện đo: JMeter 5.6.3 gọi thẳng dịch vụ; think time 500 ms; dữ liệu đặt phòng có `email` và `phone` (mỗi lượt kéo theo một lời gọi sang message-service). Ngưỡng NFR-01 (Test Plan mục 3.9): với 50 người dùng, trung bình ≤ 1 giây, p95 ≤ 2 giây, lỗi < 1%.

**Load (50 người dùng, tăng dần 30 giây, duy trì 5 phút), TC-PERF-01 và TC-PERF-02**

| **Kịch bản**          | **Người dùng tối đa** | **Số yêu cầu** | **Trung bình (ms)** | **Trung vị (ms)** | **p95 (ms)** | **p99 (ms)** | **Lớn nhất (ms)** | **Thông lượng (yêu cầu/giây)** | **Tỷ lệ lỗi** | **Ghi chú** |
|-----------------------|-----------------------|----------------|---------------------|-------------------|--------------|--------------|-------------------|--------------------------------|---------------|-------------|
| GET /room/ (load)     | 50                    | 28415          | 0.7                 | 1                 | 1            | 2            | 17                | 94.9                           | 0.00%         |             |
| POST /booking/ (load) | 50                    | 27796          | 11.5                | 11                | 17           | 19           | 183               | 92.8                           | 0.00%         |             |

Cả hai API đạt ngưỡng với biên rất lớn: trung bình 0,7 ms (GET phòng) và 11,5 ms (đặt phòng), p95 lần lượt 1 ms và 17 ms, lỗi 0%.

**Stress** `GET /room/` **(50, 100, 200, 400 người dùng, mỗi mức 3 phút), TC-PERF-03**

| **Kịch bản**          | **Người dùng tối đa** | **Số yêu cầu** | **Trung bình (ms)** | **Trung vị (ms)** | **p95 (ms)** | **p99 (ms)** | **Lớn nhất (ms)** | **Thông lượng (yêu cầu/giây)** | **Tỷ lệ lỗi** | **Ghi chú** |
|-----------------------|-----------------------|----------------|---------------------|-------------------|--------------|--------------|-------------------|--------------------------------|---------------|-------------|
| GET /room/ stress 50  | 50                    | 15000          | 0.5                 | 1                 | 1            | 1            | 14                | 83.6                           | 0.00%         |             |
| GET /room/ stress 100 | 100                   | 29932          | 0.4                 | 0                 | 1            | 1            | 15                | 166.8                          | 0.00%         |             |
| GET /room/ stress 200 | 200                   | 59837          | 0.4                 | 0                 | 1            | 1            | 14                | 333.4                          | 0.00%         |             |
| GET /room/ stress 400 | 400                   | 119636         | 0.3                 | 0                 | 1            | 1            | 14                | 666.6                          | 0.00%         |             |

Thông lượng tăng gần tuyến tính theo số người dùng (84 → 667 yêu cầu/giây), thời gian phản hồi không đổi (dưới 1 ms), không có lỗi. **Chưa tìm thấy điểm gãy** của `GET /room/` đến 400 người dùng.

**Stress** `POST /booking/`**, TC-PERF-03**

| **Kịch bản**              | **Người dùng tối đa** | **Số yêu cầu** | **Trung bình (ms)** | **Trung vị (ms)** | **p95 (ms)** | **p99 (ms)** | **Lớn nhất (ms)** | **Thông lượng (yêu cầu/giây)** | **Tỷ lệ lỗi** | **Ghi chú**                                              |
|---------------------------|-----------------------|----------------|---------------------|-------------------|--------------|--------------|-------------------|--------------------------------|---------------|----------------------------------------------------------|
| POST /booking/ stress 50  | 50                    | 14934          | 2.7                 | 3                 | 4            | 5            | 40                | 83.2                           | 100.00%       | Không hợp lệ: 100% mã 409, trùng ngày với lần chạy trước |
| POST /booking/ stress 100 | 100                   | 29093          | 15.1                | 12                | 27           | 29           | 59                | 162.1                          | 0.00%         |                                                          |
| POST /booking/ stress 200 | 200                   | 35474          | 348.5               | 307               | 829          | 1413         | 5204              | 196.7                          | 0.00%         |                                                          |
| POST /booking/ stress 400 | 400                   | 26025          | 1818.0              | 1853              | 3159         | 3777         | 5438              | 143.3                          | 0.00%         |                                                          |

- Dòng `stress 50` không hợp lệ: toàn bộ 14.934 yêu cầu bị 409 vì khoảng ngày trùng với booking tạo ở lần chạy load trước (dữ liệu không được reset giữa hai lần chạy). Đây là lỗi cách chạy, không phải lỗi hệ thống, nên không dùng để kết luận.
- Từ 100 lên 200 người dùng, thời gian phản hồi tăng mạnh (trung bình 15 → 349 ms, p99 1,4 giây, lớn nhất 5,2 giây). Ở 400 người dùng vượt ngưỡng: trung bình 1.818 ms (> 1.000 ms) và p95 3.159 ms (> 2.000 ms); thông lượng giảm từ 197 xuống 143 yêu cầu/giây. Lỗi vẫn bằng 0%: hệ thống chậm đi chứ không từ chối yêu cầu.
- Điểm gãy của `POST /booking/` nằm trong khoảng 200 đến 400 người dùng (với think time 500 ms), thông lượng bão hòa quanh 150 đến 200 yêu cầu/giây.
- Lý do**:** các mức stress chạy liên tiếp trên dữ liệu không reset, nên số booking trong CSDL tăng dần (ước tính từ khoảng 28 nghìn lên khoảng 118 nghìn). Theo mã, mỗi lần đặt phòng chạy truy vấn kiểm tra trùng lịch trên bảng `BOOKINGS` không có chỉ mục ngoài khóa chính, và mỗi dịch vụ dùng một kết nối JDBC dùng chung. Nhiều khả năng độ chậm do cả số người dùng đồng thời lẫn kích thước bảng tăng; hai yếu tố này chưa được tách riêng trong lần đo này.

**Spike** `GET /room/` **(nền 10 người dùng, đột biến lên 200), TC-PERF-04**

| **Kịch bản**                        | **Người dùng tối đa** | **Số yêu cầu** | **Trung bình (ms)** | **Trung vị (ms)** | **p95 (ms)** | **p99 (ms)** | **Lớn nhất (ms)** | **Thông lượng (yêu cầu/giây)** | **Tỷ lệ lỗi** | **Ghi chú** |
|-------------------------------------|-----------------------|----------------|---------------------|-------------------|--------------|--------------|-------------------|--------------------------------|---------------|-------------|
| GET /room/ spike (nền 10, đỉnh 200) | 200                   | 24745          | 0.7                 | 1                 | 1            | 1            | 16                | 138.0                          | 0.00%         |             |

Hệ thống phục hồi ngay: không có lỗi, thời gian phản hồi lớn nhất 16 ms. Đạt.

**Đặt đồng thời cùng một phòng, cùng khoảng ngày, TC-PERF-05 (NFR-03)**

| **Lần chạy**                  | **Số luồng** | **Kết quả 201** | **Kết quả 409** | **Nhận xét**                                                                                                               |
|-------------------------------|--------------|-----------------|-----------------|----------------------------------------------------------------------------------------------------------------------------|
| `smoke-04` (chạy thử)         | 5            | **3**           | 2               | Không đạt: mong đợi đúng 1 yêu cầu thành công. Cả 5 yêu cầu gửi cùng một thời điểm                                         |
| `concurrency-r3` (chính thức) | 50           | 0               | 50              | Không hợp lệ: khoảng ngày trùng với booking đã tạo ở các lần stress trước, nên mọi yêu cầu bị từ chối vì trùng lịch có sẵn |

Bằng chứng từ lần chạy thử là đủ để kết luận có lỗi đặt trùng (DEF-007). Số liệu chính thức với 50 luồng cần chạy lại trên dữ liệu sạch (khởi động lại hệ thống rồi chạy `run_jmeter.cmd concurrency`).

Hiệu chỉnh ngưỡng NFR-01**.** Test Plan cho phép hiệu chỉnh ngưỡng đề xuất ở Phần IV. Với 50 người dùng, hệ thống đạt trung bình 11,5 ms và p95 17 ms (đặt phòng), vì vậy ngưỡng đề xuất ban đầu (1 giây, 2 giây) quá rộng. Đề xuất ngưỡng thực tế hơn: với 50 người dùng, trung bình ≤ 100 ms, p95 ≤ 200 ms, lỗi < 1%; với 200 người dùng, trung bình ≤ 500 ms và p95 ≤ 1 giây (hệ thống hiện đạt, trung bình 349 ms và p95 829 ms).

### 4.2.6 Độ phủ yêu cầu

| **Yêu cầu** | **Số test case liên quan** | **Đạt** | **Không đạt** | **Chưa thực thi** | **Kết luận**                               |
|-------------|----------------------------|---------|---------------|-------------------|--------------------------------------------|
| FR-01       | 2                          | 1       | 1             | 0                 | Có lỗi                                     |
| FR-02       | 2                          | 1       | 1             | 0                 | Có lỗi                                     |
| FR-03       | 3                          | 2       | 1             | 0                 | Có lỗi                                     |
| FR-04       | 4                          | 4       | 0             | 0                 | Đạt                                        |
| FR-05       | 3                          | 3       | 0             | 0                 | Đạt                                        |
| FR-06       | 10                         | 9       | 1             | 0                 | Có lỗi                                     |
| FR-07       | 8                          | 8       | 0             | 0                 | Đạt                                        |
| FR-08       | 6                          | 6       | 0             | 0                 | Đạt                                        |
| FR-09       | 3                          | 3       | 0             | 0                 | Đạt                                        |
| FR-10       | 6                          | 6       | 0             | 0                 | Đạt                                        |
| FR-11       | 4                          | 4       | 0             | 0                 | Đạt                                        |
| FR-12       | 4                          | 4       | 0             | 0                 | Đạt                                        |
| FR-13       | 3                          | 3       | 0             | 0                 | Đạt                                        |
| FR-14       | 4                          | 4       | 0             | 0                 | Đạt                                        |
| FR-15       | 6                          | 6       | 0             | 0                 | Đạt                                        |
| FR-16       | 4                          | 4       | 0             | 0                 | Đạt                                        |
| FR-17       | 3                          | 2       | 1             | 0                 | Có lỗi                                     |
| FR-18       | 4                          | 2       | 2             | 0                 | Có lỗi                                     |
| FR-19       | 2                          | 2       | 0             | 0                 | Đạt                                        |
| FR-20       | 3                          | 3       | 0             | 0                 | Đạt                                        |
| FR-21       | 4                          | 4       | 0             | 0                 | Đạt                                        |
| FR-22       | 4                          | 3       | 1             | 0                 | Có lỗi                                     |
| FR-23       | 8                          | 7       | 1             | 0                 | Có lỗi                                     |
| FR-24       | 3                          | 3       | 0             | 0                 | Đạt                                        |
| FR-25       | 9                          | 7       | 2             | 0                 | Có lỗi                                     |
| FR-26       | 1                          | 1       | 0             | 0                 | Đạt                                        |
| NFR-01      | 4                          | 4       | 0             | 0                 | Đạt                                        |
| NFR-02      | 2                          | 0       | 0             | 2                 | Chưa thực thi                              |
| NFR-03      | 2                          | 1       | 1             | 0                 | Có lỗi                                     |
| NFR-04      | 14                         | 11      | 3             | 0                 | Có lỗi                                     |
| NFR-05      | 5                          | 1       | 3             | 1                 | Có lỗi                                     |
| NFR-06      | 3                          | 2       | 1             | 0                 | Có lỗi                                     |
| NFR-07      | 1                          | 0       | 0             | 1                 | Đạt một phần (còn test case chưa thực thi) |
| NFR-08      | 5                          | 2       | 3             | 0                 | Có lỗi                                     |

Có 33 trên 34 yêu cầu có ít nhất một test case đã thực thi. Chỉ NFR-02 (độ tin cậy khi dịch vụ phụ thuộc lỗi) chưa có test case nào thực thi (TC-REL-01, TC-REL-02); NFR-07 mới đạt một phần vì thiếu Edge.

# Chương 5. Báo cáo kết quả kiểm thử

| **Mục**            | **Nội dung**                                                                                                                    |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------|
| Môn học            | Đánh giá và kiểm định chất lượng phần mềm                                                                                       |
| Đề tài             | Kiểm định chất lượng phần mềm hệ thống đặt phòng khách sạn mã nguồn mở Restful-booker Platform bằng Postman, JMeter và Selenium |
| Phiên bản tài liệu | 1.0                                                                                                                             |
| Ngày               | 31/10/2026                                                                                                                      |
| Nhóm thực hiện     | Nguyễn Văn Ngọc - 23010413; Nguyễn Thị Trà Mi - 23010460                                                                        |

## 5.1 Tóm tắt kết quả

Bộ kiểm thử gồm **116 test case** thiết kế (Test Plan mục 3.7.10). Kết quả thực thi:

| **Chỉ số**                               | **Giá trị**                                                                          |
|------------------------------------------|--------------------------------------------------------------------------------------|
| Test case đã thực thi                    | 112 trên 116 (96,6%)                                                                 |
| Đạt                                      | 98                                                                                   |
| Không đạt                                | 14                                                                                   |
| Chưa thực thi hoặc mới thực thi một phần | 4 (TC-SEC-04, TC-REL-01, TC-REL-02, TC-UI-18)                                        |
| Tỷ lệ đạt trên số đã thực thi            | 87,5%                                                                                |
| Lỗi ghi nhận                             | 11 lỗi: 3 mức Cao, 7 mức Trung bình, 1 mức Thấp; 2 test case Fail đang chờ phân loại |
| Postman/Newman                           | 131 request, 144 assertion, 6 assertion không đạt, chạy trong 15 giây                |
| Selenium                                 | 17 test case trên Chrome và Firefox, kết quả giống nhau: 13 đạt, 4 không đạt         |
| JMeter                                   | Ngưỡng NFR-01 đạt với 50 người dùng, lỗi 0%; phát hiện đặt trùng phòng khi đồng thời |

Chức năng nghiệp vụ chính hoạt động đúng ở mức cao (API đạt 79 trên 85 test case, 92,9%), hiệu năng với 50 người dùng rất tốt. Tuy nhiên hệ thống có ba vấn đề nghiêm trọng cần xử lý trước khi dùng thật:

1.  Đặt trùng phòng khi có yêu cầu đồng thời (DEF-007): chạy thử 5 yêu cầu cùng lúc cho cùng một phòng, cùng khoảng ngày thì cả 3 yêu cầu được chấp nhận (mong đợi đúng 1).
2.  Lộ dữ liệu cá nhân của khách (DEF-001): ai cũng đọc được tin nhắn liên hệ (họ tên, email, số điện thoại, nội dung) mà không cần đăng nhập.
3.  Truy vấn SQL ghép chuỗi với tham số `roomid` ở API không cần đăng nhập (DEF-009), qua rà soát mã.

Các điểm còn thiếu của đợt kiểm thử (mục 4.1.4 và mục 5.5) cần hoàn tất để đủ điều kiện nghiệm thu theo Test Plan.

## 5.2 Phân tích lỗi

### 5.2.1 Thống kê

| **Mức độ** | **Số lỗi** | **Mã lỗi**                                                    |
|------------|------------|---------------------------------------------------------------|
| Cao        | 3          | DEF-001, DEF-007, DEF-009                                     |
| Trung bình | 7          | DEF-002, DEF-003, DEF-004, DEF-005, DEF-006, DEF-008, DEF-010 |
| Thấp       | 1          | DEF-011                                                       |
| **Tổng**   | **11**     |                                                               |

Mã lỗi giữ nguyên các mã DEF-001 đến DEF-006 của Test Plan mục 3.11.3 để dễ truy vết; DEF-007 đến DEF-011 là lỗi phát hiện thêm trong quá trình thực thi.

### 5.2.2 Danh sách lỗi

| **Mã**  | **Mô tả**                                                                                                 | **Test case**        | **Yêu cầu**           | **Mức độ**    |
|---------|-----------------------------------------------------------------------------------------------------------|----------------------|-----------------------|---------------|
| DEF-001 | Đọc tin nhắn liên hệ không cần đăng nhập, lộ dữ liệu cá nhân của khách                                    | TC-MSG-07, TC-MSG-09 | NFR-04                | Cao           |
| DEF-002 | `GET /message/{id}` với mã không tồn tại trả 500 thay vì 404                                              | TC-MSG-11            | FR-18, NFR-08         | Trung bình    |
| DEF-003 | `GET /room/{id}` với mã không tồn tại trả 500 thay vì 404                                                 | TC-ROOM-03           | FR-03, NFR-08         | Trung bình    |
| DEF-004 | `GET /report/` với token sai trả 500 thay vì 403                                                          | TC-REP-03            | FR-22, NFR-04, NFR-08 | Trung bình    |
| DEF-005 | Dữ liệu mẫu `logoUrl` tương đối bị chính bộ kiểm tra URL từ chối, không lưu được thương hiệu từ giao diện | TC-UI-15             | FR-23                 | Trung bình    |
| DEF-006 | Đặt phòng kết thúc đúng ngày bắt đầu của booking sau bị từ chối (409)                                     | TC-BOOK-13           | FR-25                 | Trung bình    |
| DEF-007 | Đặt trùng phòng khi có các yêu cầu đồng thời                                                              | TC-PERF-05           | NFR-03, FR-25         | Cao           |
| DEF-008 | Mật khẩu so khớp ở dạng văn bản thô, không băm                                                            | TC-SEC-01            | NFR-05                | Trung bình    |
| DEF-009 | Câu SQL ghép chuỗi tham số `roomid` ở API không cần đăng nhập                                             | TC-SEC-02            | NFR-05                | Cao (tiềm ẩn) |
| DEF-010 | Token không có kiểm tra hết hạn, sinh bằng bộ ngẫu nhiên không an toàn                                    | TC-SEC-05            | NFR-05                | Trung bình    |
| DEF-011 | Thông báo lỗi biểu mẫu đặt phòng không nêu tên trường vi phạm                                             | TC-UI-04             | NFR-06                | Thấp          |

### 5.2.3 Chi tiết từng lỗi

**DEF-001: Đọc tin nhắn không cần đăng nhập (Cao)**

| **Mục**             | **Nội dung**                                                                                                                                                                    |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Tái hiện            | `GET http://127.0.0.1:3006/message/` và `GET http://127.0.0.1:3006/message/1` không kèm cookie `token`                                                                          |
| Mong đợi            | 403 (dữ liệu cá nhân của khách chỉ Admin được xem, NFR-04)                                                                                                                      |
| Thực tế             | 200. `GET /message/1` trả đủ `name`, `email`, `phone`, `subject`, `description`; mã tin nhắn là số tuần tự nên có thể duyệt toàn bộ                                            |
| Bằng chứng          | Newman: TC-MSG-07, TC-MSG-09                                                                                                                                                    |
| Nguyên nhân (từ mã) | `MessageController` không nhận cookie và `MessageService.getMessages`, `getCount`, `getSpecificMessage` không gọi bước xác thực, trong khi `deleteMessage`, `markAsRead` có gọi |
| Đề xuất             | Yêu cầu token cho cả ba API đọc (`postCheckAuth`), trả 403 khi sai; xem xét giới hạn số lần gọi `POST /message/`                                                                |

**DEF-002 và DEF-003: Mã không tồn tại trả 500 (Trung bình)**

| **Mục**             | **Nội dung**                                                                                                                                                                                                   |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Tái hiện            | `GET /message/99999` (message-service) và `GET /room/99999` (room-service)                                                                                                                                     |
| Mong đợi            | 404                                                                                                                                                                                                            |
| Thực tế             | 500                                                                                                                                                                                                            |
| Bằng chứng          | Newman: TC-MSG-11, TC-ROOM-03                                                                                                                                                                                  |
| Nguyên nhân (từ mã) | `MessageDB.query` và `RoomDB.query` gọi `result.next()` nhưng không kiểm tra kết quả, rồi dựng đối tượng từ kết quả rỗng nên ném ngoại lệ; tầng service không bắt (khác với booking-service có bắt và trả 404) |
| Đề xuất             | Kiểm tra `result.next()` và trả `null` để service trả 404, hoặc bắt ngoại lệ như ở booking-service                                                                                                             |

**DEF-004: Báo cáo với token sai trả 500 (Trung bình)**

| **Mục**             | **Nội dung**                                                                                                                                                                     |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Tái hiện            | `GET /report/` (report-service) với cookie `token` giả                                                                                                                           |
| Mong đợi            | 403                                                                                                                                                                              |
| Thực tế             | 500                                                                                                                                                                              |
| Bằng chứng          | Newman: TC-REP-03                                                                                                                                                                |
| Nguyên nhân (từ mã) | `ReportService` không tự xác thực mà chuyển token sang booking-service; lỗi 403 từ booking-service không được bắt nên lan thành 500. Cần đối chiếu thêm `report.log` để xác nhận |
| Đề xuất             | Bắt lỗi 4xx từ booking-service và trả 403, hoặc kiểm tra token trực tiếp với auth-service                                                                                        |

**DEF-005: Không lưu được thương hiệu từ giao diện (Trung bình)**

| **Mục**     | **Nội dung**                                                                                                                                                                                                                                                  |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Tái hiện    | Đăng nhập Admin, vào trang thương hiệu, đổi tên và bấm cập nhật (TC-UI-15)                                                                                                                                                                                    |
| Mong đợi    | Tên mới được lưu và hiển thị ở trang chủ                                                                                                                                                                                                                      |
| Thực tế     | Tên không đổi (cả Chrome và Firefox). Cùng lúc, các test case Postman dùng `logoUrl` tuyệt đối (TC-BRAND-01, 02) đều đạt                                                                                                                                      |
| Bằng chứng  | Selenium: TC-UI-15 (Chrome, Firefox); Test Plan mục 3.1.3 điểm 6                                                                                                                                                                                              |
| Nguyên nhân | Dữ liệu mẫu có `logoUrl` là đường dẫn tương đối (`/images/rbp-logo.jpg`); khi giao diện gửi lại nguyên giá trị đó, ràng buộc `@URL` của dịch vụ từ chối (400). Nên xác nhận thêm bằng DevTools (tab Network, yêu cầu `PUT /api/branding`) hoặc `branding.log` |
| Đề xuất     | Đổi dữ liệu mẫu sang URL tuyệt đối hoặc nới ràng buộc để chấp nhận đường dẫn tương đối                                                                                                                                                                        |

**DEF-006: Biên đặt phòng không đối xứng (Trung bình)**

| **Mục**             | **Nội dung**                                                                                                                                                                                         |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Tái hiện            | Có booking nền 10 → 15; đặt phòng mới 5 → 10 (kết thúc đúng ngày booking nền bắt đầu)                                                                                                                |
| Mong đợi            | 201 (BR-02: khoảng ngày nửa mở). Chiều ngược lại, đặt 15 → 20, trả 201 đúng như mong đợi (TC-BOOK-12 đạt)                                                                                            |
| Thực tế             | 409                                                                                                                                                                                                  |
| Bằng chứng          | Newman: TC-BOOK-13                                                                                                                                                                                   |
| Nguyên nhân (từ mã) | Câu truy vấn `SELECT_DATE_CONFLICTS` dùng `checkin BETWEEN (checkin mới + 1) AND checkout mới`, bao gồm cả đầu mút `checkout mới`, nên booking có `checkin` đúng bằng `checkout` mới bị coi là trùng |
| Đề xuất             | Dùng so sánh chặt: trùng khi `checkin cũ < checkout mới` và `checkout cũ > checkin mới`                                                                                                              |

**DEF-007: Đặt trùng phòng khi đồng thời (Cao)**

| **Mục**             | **Nội dung**                                                                                                                                                                                     |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Tái hiện            | Gửi đồng thời `POST /booking/` cùng `roomid`, cùng khoảng ngày (kịch bản `04-booking-concurrency.jmx`, `smoke-04`: 5 luồng)                                                                      |
| Mong đợi            | Đúng 1 phản hồi 201, các phản hồi còn lại 409 (NFR-03)                                                                                                                                           |
| Thực tế             | 3 phản hồi 201 và 2 phản hồi 409: một phòng có 3 booking trùng ngày                                                                                                                              |
| Bằng chứng          | `results/smoke-04.jtl` (5 yêu cầu cùng thời điểm `1793434857820`)                                                                                                                                |
| Nguyên nhân (từ mã) | `BookingService.createBooking` kiểm tra trùng (`checkForBookingConflict`) rồi mới ghi (`create`), hai bước riêng rẽ, không khóa và không có ràng buộc ở CSDL (bảng `BOOKINGS` chỉ có khóa chính) |
| Đề xuất             | Tuần tự hóa việc kiểm tra và ghi theo từng phòng (khóa hoặc giao dịch), hoặc dùng ràng buộc duy nhất ở mức CSDL (ví dụ bảng theo đêm với khóa duy nhất `roomid, ngày`)                           |
| Việc còn lại        | Chạy lại với 50 luồng trên dữ liệu sạch để có số liệu chính thức                                                                                                                                 |

**DEF-008: Mật khẩu dạng thô (Trung bình)**

| **Mục** | **Nội dung**                                                                                                                                                                   |
|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Căn cứ  | Rà soát `AuthDB.queryCredentials`: `SELECT * FROM ACCOUNTS WHERE username = ? AND password = ?` với mật khẩu người dùng nhập, tức mật khẩu lưu và so khớp trực tiếp, không băm |
| Hệ quả  | Ai truy cập được CSDL hoặc bản sao dữ liệu đọc được mật khẩu quản trị; tài khoản mặc định `admin` / `password` còn công khai                                                   |
| Đề xuất | Băm mật khẩu (bcrypt hoặc argon2) và đổi tài khoản mặc định                                                                                                                    |

**DEF-009: SQL ghép chuỗi với** `roomid` **(Cao, tiềm ẩn)**

| **Mục**        | **Nội dung**                                                                                                                                                                                                                   |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Căn cứ         | `BookingDB.queryBookingsById` và `queryBookingSummariesById` dựng câu `"SELECT * FROM BOOKINGS WHERE roomid = " + roomid` với `roomid` là chuỗi lấy từ tham số yêu cầu; `GET /booking/summary?roomid=` không yêu cầu đăng nhập |
| Mức độ         | Chưa khai thác thử (TC-SEC-03 chỉ thử đăng nhập, đường dẫn phòng, tên phòng, và đều an toàn); xác nhận bằng rà soát mã                                                                                                         |
| Gợi ý xác nhận | Gọi `GET http://127.0.0.1:3000/booking/summary?roomid=abc` trên bản chạy cục bộ: mong đợi 400, nếu trả 500 thì xác nhận đầu vào đi thẳng vào câu SQL                                                                           |
| Đề xuất        | Dùng `PreparedStatement` và kiểm tra `roomid` là số nguyên                                                                                                                                                                     |

**DEF-010: Quản lý token yếu (Trung bình)**

| **Mục** | **Nội dung**                                                                                                                                                                                       |
|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Căn cứ  | `AuthService.verify` chỉ kiểm tra token có trong bảng (`queryToken`), không xét cột `expiry`; token 16 ký tự sinh bằng `ThreadLocalRandom`, không phải bộ sinh ngẫu nhiên an toàn (`SecureRandom`) |
| Hệ quả  | Token không bao giờ hết hạn; khả năng đoán token cao hơn mức cần thiết                                                                                                                             |
| Đề xuất | Kiểm tra `expiry` khi xác thực; dùng `SecureRandom`                                                                                                                                                |

**DEF-011: Thông báo lỗi không nêu tên trường (Thấp)**

| **Mục**     | **Nội dung**                                                                                                                                                                  |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Tái hiện    | Mở biểu mẫu đặt phòng, để trống và gửi (TC-UI-04)                                                                                                                             |
| Mong đợi    | Thông báo nêu rõ trường vi phạm (NFR-06)                                                                                                                                      |
| Thực tế     | Hiển thị các câu chung chung: "must not be empty", "size must be between 3 and 18", "size must be between 11 and 21", "size must be between 3 and 30" (không biết trường nào) |
| Bằng chứng  | Selenium: TC-UI-04 (Chrome, Firefox)                                                                                                                                          |
| Nguyên nhân | Giao diện hiển thị nguyên thông báo mặc định của bộ kiểm tra dữ liệu, không kèm tên trường                                                                                    |
| Đề xuất     | Thêm tên trường vào thông báo, hoặc đặt thông báo tùy biến cho từng ràng buộc                                                                                                 |

### 5.2.4 Test case Fail chờ phân loại

Hai test case giao diện thất bại ở cả hai trình duyệt nhưng chưa đủ bằng chứng để xếp vào lỗi của hệ thống hay lỗi của dữ liệu và cách kiểm thử:

| **Test case** | **Hiện tượng**                              | **Giả thuyết**                                                                                                               | **Cách xác minh**                                                                                                          |
|---------------|---------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| TC-UI-01      | Giao diện hiển thị 3 phòng, API trả 4 phòng | (a) còn một phòng thừa do các test case trước để lại (b) giao diện không hiển thị phòng đó (c) trang tải chưa xong khi đếm | Gọi `GET http://127.0.0.1:3001/room/` xem phòng thứ tư là phòng nào; xem ảnh chụp `target/screenshots/chrome-TC-UI-01.png` |
| TC-UI-05      | Không thấy thông báo lỗi khi đặt trùng lịch | (a) giao diện không hiển thị lỗi 409 (lỗi Usability) (b) thông báo nằm ở phần tử khác `.alert-danger`                      | Xem ảnh `chrome-TC-UI-05.png`; mở DevTools, tab Network, xem mã trả về của lần đặt thứ hai và giao diện hiện gì            |

Sau khi xác minh, cập nhật mục 5.2.2 và 5.2.3 (thêm DEF-012, DEF-013 nếu là lỗi hệ thống) hoặc ghi chú nguyên nhân là dữ liệu hoặc test.

### 5.2.5 Quan sát hiệu năng (không phải lỗi)

`POST /booking/` bão hòa quanh 150 đến 200 yêu cầu/giây và chậm rõ rệt ở 400 người dùng (mục 4.2.5). Hướng cải thiện: thêm chỉ mục cho `BOOKINGS(roomid, checkin, checkout)`, giảm phạm vi truy vấn kiểm tra trùng, dùng nhiều hơn một kết nối CSDL.

## 5.3 Đánh giá chất lượng theo ISO/IEC 25010

| **Đặc tính**           | **Cách đánh giá**                                     | **Kết quả**                                                                                                                                                                                                                | **Mức đánh giá**                               |
|------------------------|-------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| Functional Suitability | Test case Postman và Selenium                         | API: 79/85 đạt (92,9%). Giao diện: 13/17 đạt (76,5%). Gộp: 92/102 (90,2%). Các lỗi chức năng: mã trạng thái sai (DEF-002, 003, 004), biên ngày không đối xứng (DEF-006), không lưu được thương hiệu từ giao diện (DEF-005) | **Khá**                                        |
| Performance Efficiency | Số liệu JMeter                                        | Đạt ngưỡng NFR-01 với biên rất lớn (50 người dùng: 11,5 ms, p95 17 ms, lỗi 0%). `GET /room/` không suy giảm đến 400 người dùng. `POST /booking/` vượt ngưỡng ở 400 người dùng (trung bình 1,8 giây)                        | **Tốt** ở tải bình thường; hạn chế khi mở rộng |
| Reliability            | Độ ổn định khi chịu tải, xử lý lỗi                    | Không có lỗi trong các lần chạy tải hợp lệ (0%). Nhưng có 3 chỗ trả 500 thay vì 4xx (DEF-002, 003, 004) và đặt trùng khi đồng thời (DEF-007). Kịch bản dịch vụ phụ thuộc lỗi (REL) chưa thực thi                           | **Trung bình**, chưa đủ dữ liệu                |
| Security               | Phân quyền, xác thực token, truy cập API không hợp lệ | Phân quyền theo vai trò ở booking, room, message (ghi) đạt; SQL injection cơ bản an toàn. Nhưng lộ dữ liệu khách (DEF-001), SQL ghép chuỗi (DEF-009), mật khẩu thô (DEF-008), token yếu (DEF-010); cookie chưa quan sát    | **Yếu**                                        |
| Usability              | Quan sát luồng giao diện qua Selenium                 | Luồng đặt phòng và liên hệ hoạt động (TC-UI-03, 06, 07, 08 đạt), tên tiếng Việt có dấu được chấp nhận khi đặt phòng. Thông báo lỗi chung chung (DEF-011); phản hồi khi trùng lịch chưa xác định (TC-UI-05)                 | **Trung bình**                                 |
| Compatibility          | Chạy trên nhiều trình duyệt (NFR-07)                  | Chrome và Firefox cho kết quả giống hệt (17/17 giống nhau); Edge chưa chạy                                                                                                                                                 | **Tốt** (2/3 trình duyệt)                      |

## 5.4 Đánh giá rủi ro

Khả năng xảy ra và ảnh hưởng được đánh giá theo ba mức (Thấp, Trung bình, Cao).

| **STT** | **Rủi ro**                                                                   | **Lỗi liên quan**        | **Khả năng** | **Ảnh hưởng** | **Mức rủi ro**    | **Biện pháp**                                                                |
|---------|------------------------------------------------------------------------------|--------------------------|--------------|---------------|-------------------|------------------------------------------------------------------------------|
| 1       | Hai khách cùng đặt một phòng, cùng ngày, đều được xác nhận (đặt trùng)       | DEF-007                  | Trung bình   | Cao           | **Rất cao**       | Tuần tự hóa việc kiểm tra và ghi; ràng buộc duy nhất ở CSDL                  |
| 2       | Lộ họ tên, email, số điện thoại, nội dung liên hệ của khách                  | DEF-001                  | Cao          | Cao           | **Rất cao**       | Yêu cầu token cho các API đọc tin nhắn                                       |
| 3       | Tấn công SQL injection qua `roomid`                                          | DEF-009                  | Trung bình   | Cao           | **Cao**           | Truy vấn tham số hóa; kiểm tra kiểu `roomid`                                 |
| 4       | Lộ hoặc đoán được thông tin đăng nhập quản trị                               | DEF-008, DEF-010         | Trung bình   | Cao           | **Cao**           | Băm mật khẩu; token có hạn, sinh bằng `SecureRandom`; đổi tài khoản mặc định |
| 5       | Từ chối nhầm đặt phòng hợp lệ (khách đến sát ngày khách trước đi)            | DEF-006                  | Cao          | Trung bình    | **Trung bình**    | Sửa điều kiện so sánh biên                                                   |
| 6       | Không cập nhật được thương hiệu từ giao diện                                 | DEF-005                  | Cao          | Trung bình    | **Trung bình**    | Sửa dữ liệu mẫu hoặc ràng buộc URL                                           |
| 7       | Lỗi 500 làm lộ chi tiết nội bộ, khó phân biệt lỗi người dùng và lỗi hệ thống | DEF-002, 003, 004        | Cao          | Thấp          | **Trung bình**    | Xử lý trường hợp không tồn tại và lỗi dịch vụ phụ thuộc                      |
| 8       | Chậm khi dữ liệu và số người dùng tăng                                       | Quan sát hiệu năng (4.5) | Trung bình   | Trung bình    | **Trung bình**    | Chỉ mục, nhiều kết nối CSDL                                                  |
| 9       | Hành vi khi dịch vụ phụ thuộc lỗi chưa biết (REL chưa chạy)                  | NFR-02                   | Chưa rõ      | Trung bình    | **Chưa đánh giá** | Thực thi TC-REL-01, TC-REL-02                                                |

**Thứ tự khắc phục đề xuất**

1.  Ưu tiên 1: DEF-007, DEF-001, DEF-009.
2.  Ưu tiên 2: DEF-008, DEF-010, DEF-006, DEF-005, DEF-002, DEF-003, DEF-004.
3.  Ưu tiên 3: DEF-011 và các phát hiện về giao diện sau khi phân loại.

## 5.5 Đối chiếu tiêu chí nghiệm thu

Theo Test Plan mục 3.10, hệ thống không bắt buộc đạt 100% test case; điều kiện nghiệm thu là việc thực thi và phân tích đầy đủ.

| **Tiêu chí**                                                                       | **Kết quả**                                                                              | **Đánh giá**         |
|------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|----------------------|
| 100% test case đã thiết kế được thực thi (test case không thực thi phải nêu lý do) | 112/116 đã thực thi; còn TC-SEC-04, TC-REL-01, TC-REL-02, TC-UI-18 (thiếu Edge)          | **Chưa đạt**         |
| Mỗi test case Fail có lỗi tương ứng kèm bằng chứng và mức độ                       | 12/14 test case Fail đã gắn lỗi; TC-UI-01 và TC-UI-05 đang chờ phân loại                 | **Chưa đạt**         |
| 100% FR và NFR có ít nhất một test case đã thực thi                                | 33/34 yêu cầu; NFR-02 chưa có                                                            | **Chưa đạt** (97,1%) |
| Không còn lỗi mức Cao chưa phân tích nguyên nhân và đề xuất khắc phục              | 3 lỗi Cao đều có nguyên nhân và đề xuất                                                  | **Đạt**              |
| Kết quả hiệu năng đối chiếu với ngưỡng, trường hợp không đạt được giải thích       | Đã đối chiếu (mục 4.2.5); `POST /booking/` vượt ngưỡng ở 400 người dùng và đã giải thích | **Đạt**              |

**Việc cần hoàn tất để đủ điều kiện nghiệm thu**

1.  Thực thi TC-REL-01 và TC-REL-02 (dừng đúng tiến trình message-service, auth-service theo cổng 3006 và 3004, không dùng `taskkill /im java.exe`).
2.  Quan sát cookie `token` ở TC-SEC-04 (DevTools, tab Application).
3.  Chạy bộ Selenium trên Edge để hoàn tất TC-UI-18.
4.  Xác minh nguyên nhân TC-UI-01 và TC-UI-05 (mục 5.2.4).
5.  Chạy lại TC-PERF-05 với 50 luồng và `booking-stress-50` trên dữ liệu sạch; bổ sung cấu hình máy, CPU và bộ nhớ; nếu có thể lặp lại mỗi kịch bản đủ 3 lần.

## 5.6 Kết luận và kiến nghị

Qua 116 test case thiết kế, trong đó 112 đã thực thi, hệ thống Restful-booker Platform cho thấy:

- **Điểm mạnh:** luồng nghiệp vụ cốt lõi (đăng nhập, quản lý phòng, đặt phòng, tin nhắn, thương hiệu, báo cáo) hoạt động đúng ở mức cao; xác thực ở các API quản trị được kiểm tra nhất quán; hiệu năng với 50 người dùng rất tốt (đặt phòng trung bình 11,5 ms) và `GET /room/` chịu được 400 người dùng không suy giảm; giao diện cho kết quả giống nhau trên Chrome và Firefox.
- **Điểm yếu nghiêm trọng:** an toàn dữ liệu và toàn vẹn nghiệp vụ. Hệ thống để lộ dữ liệu khách (DEF-001), cho phép đặt trùng phòng khi đồng thời (DEF-007) và có truy vấn SQL ghép chuỗi (DEF-009). Quản lý mật khẩu và token còn yếu (DEF-008, DEF-010).
- **Điểm cần cải thiện:** xử lý lỗi (mã 500 thay vì 4xx), logic kiểm tra biên ngày (DEF-006), dữ liệu mẫu thương hiệu (DEF-005), thông báo lỗi trên giao diện (DEF-011), và hiệu năng đặt phòng khi tải rất cao.

Theo thang đánh giá ISO/IEC 25010 ở mục 5.3, hệ thống đạt mức **Khá** về chức năng, **Tốt** về hiệu năng ở tải bình thường, **Yếu** về an toàn thông tin và **Trung bình** về độ tin cậy và khả năng sử dụng. Hệ thống **chưa nên đưa vào sử dụng thực tế** nếu chưa khắc phục các lỗi ưu tiên 1.

Về phía đợt kiểm thử, các hạng mục còn thiếu ở mục 5.5 cần hoàn tất; sau đó cập nhật các bảng số liệu liên quan trong báo cáo này.

## 5.7 Phụ lục A: Kết quả chi tiết 116 test case

| **Mã**      | **Mô tả**                                             | **Kết quả**   | **Lỗi liên quan** | **Cách thực hiện**                           |
|-------------|-------------------------------------------------------|---------------|-------------------|----------------------------------------------|
| TC-AUTH-01  | Đăng nhập đúng                                        | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-AUTH-02  | Đăng nhập sai mật khẩu                                | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-AUTH-03  | Đăng nhập sai tên đăng nhập                           | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-AUTH-04  | Đăng nhập để trống                                    | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-AUTH-05  | Xác thực token hợp lệ                                 | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-AUTH-06  | Xác thực token sai                                    | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-AUTH-07  | Đăng xuất với token hợp lệ                            | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-AUTH-08  | Xác thực token sau khi đăng xuất                      | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-AUTH-09  | Đăng xuất với token không tồn tại                     | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-ROOM-01  | Xem danh sách phòng                                   | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-ROOM-02  | Xem chi tiết phòng                                    | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-ROOM-03  | Xem phòng không tồn tại                               | Không đạt     | DEF-003           | Postman/Newman, 1 dòng thực thi              |
| TC-ROOM-04  | Lọc theo ngày, khoảng trùng booking mẫu               | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-ROOM-05  | Lọc theo ngày, khoảng không trùng                     | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-ROOM-06  | Lọc chỉ có một tham số ngày                           | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-ROOM-07  | Tạo phòng hợp lệ, mỗi loại phòng (EP)                 | Đạt           |                   | Postman/Newman, 5 dòng thực thi              |
| TC-ROOM-08  | Tạo phòng không token                                 | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-ROOM-09  | BVA giá phòng                                         | Đạt           |                   | Postman/Newman, 4 dòng thực thi              |
| TC-ROOM-10  | Loại phòng ngoài danh sách                            | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-ROOM-11  | Tên phòng rỗng                                        | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-ROOM-12  | Sửa phòng hợp lệ                                      | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-ROOM-13  | Sửa phòng không tồn tại                               | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-ROOM-14  | Sửa phòng không token                                 | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-ROOM-15  | Xóa phòng hợp lệ                                      | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-ROOM-16  | Xóa phòng không tồn tại                               | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-ROOM-17  | Xóa phòng không token                                 | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-01  | Tạo booking hợp lệ                                    | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-02  | BVA `firstname`                                       | Đạt           |                   | Postman/Newman, 4 dòng thực thi              |
| TC-BOOK-03  | BVA `lastname`                                        | Đạt           |                   | Postman/Newman, 4 dòng thực thi              |
| TC-BOOK-04  | BVA `phone`                                           | Đạt           |                   | Postman/Newman, 4 dòng thực thi              |
| TC-BOOK-05  | Email sai định dạng                                   | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-06  | `roomid` không hợp lệ                                 | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-07  | `checkin` bằng `checkout`                             | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-08  | `checkin` sau `checkout`                              | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-09  | Thiếu ngày                                            | Đạt           |                   | Postman/Newman, 2 dòng thực thi              |
| TC-BOOK-10  | Trùng hoàn toàn với booking mẫu                       | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-11  | Trùng một phần (gối lên)                              | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-12  | Liền kề sau: bắt đầu đúng ngày kết thúc booking trước | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-13  | Liền kề trước: kết thúc đúng ngày bắt đầu booking sau | Không đạt     | DEF-006           | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-14  | Hai phòng khác nhau cùng ngày                         | Đạt           |                   | Postman/Newman, 2 dòng thực thi              |
| TC-BOOK-15  | Xem danh sách booking không token                     | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-16  | Xem danh sách booking có token                        | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-17  | Xem chi tiết booking có token                         | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-18  | Xem chi tiết booking không token                      | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-19  | Xem booking không tồn tại                             | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-20  | Sửa booking hợp lệ                                    | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-21  | Sửa booking gây trùng lịch                            | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-22  | Sửa booking dữ liệu sai                               | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-23  | Sửa booking không token                               | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-24  | Sửa booking không tồn tại                             | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-25  | Xóa booking hợp lệ                                    | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-26  | Xóa booking không token                               | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-27  | Xóa booking không tồn tại                             | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-28  | Xem tóm tắt ngày đã đặt                               | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BOOK-29  | Xem ngày không khả dụng                               | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-MSG-01   | Gửi liên hệ hợp lệ                                    | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-MSG-02   | BVA `subject`                                         | Đạt           |                   | Postman/Newman, 4 dòng thực thi              |
| TC-MSG-03   | BVA `description`                                     | Đạt           |                   | Postman/Newman, 4 dòng thực thi              |
| TC-MSG-04   | BVA `phone`                                           | Đạt           |                   | Postman/Newman, 4 dòng thực thi              |
| TC-MSG-05   | Email sai định dạng                                   | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-MSG-06   | Thiếu trường bắt buộc                                 | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-MSG-07   | Xem danh sách tin nhắn không token                    | Không đạt     | DEF-001           | Postman/Newman, 1 dòng thực thi              |
| TC-MSG-08   | Xem danh sách tin nhắn có token                       | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-MSG-09   | Xem chi tiết tin nhắn không token                     | Không đạt     | DEF-001           | Postman/Newman, 1 dòng thực thi              |
| TC-MSG-10   | Xem chi tiết tin nhắn có token                        | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-MSG-11   | Xem tin nhắn không tồn tại                            | Không đạt     | DEF-002           | Postman/Newman, 1 dòng thực thi              |
| TC-MSG-12   | Đếm tin nhắn                                          | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-MSG-13   | Đánh dấu đã đọc có token                              | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-MSG-14   | Đánh dấu đã đọc không token                           | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-MSG-15   | Xóa tin nhắn có token                                 | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-MSG-16   | Xóa tin nhắn không token                              | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-MSG-17   | Xóa tin nhắn không tồn tại                            | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-MSG-18   | Booking có email và phone sinh thông báo              | Đạt           |                   | Postman/Newman, 3 dòng thực thi              |
| TC-BRAND-01 | Xem thương hiệu                                       | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BRAND-02 | Cập nhật hợp lệ                                       | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BRAND-03 | Cập nhật không token                                  | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BRAND-04 | Tên chứa ký tự không cho phép                         | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BRAND-05 | BVA độ dài `name`                                     | Đạt           |                   | Postman/Newman, 4 dòng thực thi              |
| TC-BRAND-06 | `logoUrl` sai định dạng                               | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BRAND-07 | `contact.email` sai định dạng                         | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-BRAND-08 | Thiếu `address.line1`                                 | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-REP-01   | Báo cáo tổng hợp có token                             | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-REP-02   | Báo cáo không có cookie                               | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-REP-03   | Báo cáo với token sai                                 | Không đạt     | DEF-004           | Postman/Newman, 1 dòng thực thi              |
| TC-REP-04   | Báo cáo theo phòng không token                        | Đạt           |                   | Postman/Newman, 1 dòng thực thi              |
| TC-SEC-01   | Mật khẩu không lưu và so khớp ở dạng thô              | Không đạt     | DEF-008           | Rà soát mã                                   |
| TC-SEC-02   | Truy vấn dùng tham số hóa                             | Không đạt     | DEF-009           | Rà soát mã                                   |
| TC-SEC-03   | Đầu vào dạng SQL injection cơ bản                     | Đạt           |                   | Postman/Newman, 4 dòng thực thi              |
| TC-SEC-04   | Thuộc tính bảo vệ của cookie                          | Chưa thực thi |                   | Chưa quan sát cookie                         |
| TC-SEC-05   | Token có thời hạn và sinh ngẫu nhiên                  | Không đạt     | DEF-010           | Rà soát mã                                   |
| TC-SEC-06   | Dữ liệu không hợp lệ không gây 5xx                    | Đạt           |                   | Postman/Newman, 7 dòng thực thi              |
| TC-REL-01   | Message-service không khả dụng khi đặt phòng          | Chưa thực thi |                   | Chưa thực thi                                |
| TC-REL-02   | Auth-service không khả dụng                           | Chưa thực thi |                   | Chưa thực thi                                |
| TC-UI-01    | Mở trang chủ                                          | Không đạt     | Chờ xác minh      | Selenium, Chrome và Firefox giống nhau       |
| TC-UI-02    | Xem chi tiết phòng và lịch trống                      | Đạt           |                   | Selenium, Chrome và Firefox giống nhau       |
| TC-UI-03    | Đặt phòng hợp lệ                                      | Đạt           |                   | Selenium, Chrome và Firefox giống nhau       |
| TC-UI-04    | Đặt phòng nhập thiếu hoặc sai                         | Không đạt     | DEF-011           | Selenium, Chrome và Firefox giống nhau       |
| TC-UI-05    | Đặt phòng trùng lịch                                  | Không đạt     | Chờ xác minh      | Selenium, Chrome và Firefox giống nhau       |
| TC-UI-06    | Đặt phòng với tên tiếng Việt có dấu                   | Đạt           |                   | Selenium, Chrome và Firefox giống nhau       |
| TC-UI-07    | Gửi liên hệ hợp lệ                                    | Đạt           |                   | Selenium, Chrome và Firefox giống nhau       |
| TC-UI-08    | Gửi liên hệ sai dữ liệu                               | Đạt           |                   | Selenium, Chrome và Firefox giống nhau       |
| TC-UI-09    | Đăng nhập admin đúng                                  | Đạt           |                   | Selenium, Chrome và Firefox giống nhau       |
| TC-UI-10    | Đăng nhập admin sai                                   | Đạt           |                   | Selenium, Chrome và Firefox giống nhau       |
| TC-UI-11    | Admin tạo, sửa, xóa phòng                             | Đạt           |                   | Selenium, Chrome và Firefox giống nhau       |
| TC-UI-12    | Admin xem, sửa, xóa booking                           | Đạt           |                   | Selenium, Chrome và Firefox giống nhau       |
| TC-UI-13    | Admin xem, đánh dấu đã đọc, xóa tin nhắn              | Đạt           |                   | Selenium, Chrome và Firefox giống nhau       |
| TC-UI-14    | Admin xem báo cáo                                     | Đạt           |                   | Selenium, Chrome và Firefox giống nhau       |
| TC-UI-15    | Admin cập nhật thương hiệu                            | Không đạt     | DEF-005           | Selenium, Chrome và Firefox giống nhau       |
| TC-UI-16    | Đăng xuất                                             | Đạt           |                   | Selenium, Chrome và Firefox giống nhau       |
| TC-UI-17    | Truy cập khu vực quản trị khi chưa đăng nhập          | Đạt           |                   | Selenium, Chrome và Firefox giống nhau       |
| TC-UI-18    | Chạy các luồng chính trên Chrome, Firefox, Edge       | Một phần      |                   | Chrome và Firefox giống nhau; Edge chưa chạy |
| TC-PERF-01  | Tải `GET /room/`                                      | Đạt           |                   | JMeter                                       |
| TC-PERF-02  | Tải `POST /booking/`                                  | Đạt           |                   | JMeter                                       |
| TC-PERF-03  | Stress                                                | Đạt           |                   | JMeter                                       |
| TC-PERF-04  | Spike                                                 | Đạt           |                   | JMeter                                       |
| TC-PERF-05  | Đặt đồng thời cùng một phòng, cùng khoảng ngày        | Không đạt     | DEF-007           | JMeter, smoke-04.jtl                         |

## 5.8 Phụ lục B: Số liệu hiệu năng đầy đủ

Số liệu của toàn bộ các lần chạy chính thức (không gồm các lần chạy thử `smoke`). Chỉ số lấy từ tệp `.jtl`, khớp với báo cáo HTML của JMeter.

| **Kịch bản**          | **Người dùng tối đa** | **Số yêu cầu** | **Trung bình (ms)** | **Trung vị (ms)** | **p95 (ms)** | **p99 (ms)** | **Lớn nhất (ms)** | **Thông lượng (yêu cầu/giây)** | **Tỷ lệ lỗi** | **Ghi chú** |
|-----------------------|-----------------------|----------------|---------------------|-------------------|--------------|--------------|-------------------|--------------------------------|---------------|-------------|
| booking-load-50-r3    | 50                    | 27796          | 11.5                | 11                | 17           | 19           | 183               | 92.8                           | 0.00%         |             |
| booking-stress-100-r3 | 100                   | 29093          | 15.1                | 12                | 27           | 29           | 59                | 162.1                          | 0.00%         |             |
| booking-stress-200-r3 | 200                   | 35474          | 348.5               | 307               | 829          | 1413         | 5204              | 196.7                          | 0.00%         |             |
| booking-stress-400-r3 | 400                   | 26025          | 1818.0              | 1853              | 3159         | 3777         | 5438              | 143.3                          | 0.00%         |             |
| booking-stress-50-r3  | 50                    | 14934          | 2.7                 | 3                 | 4            | 5            | 40                | 83.2                           | 100.00%       |             |
| concurrency-r3        | 50                    | 50             | 191.2               | 192               | 314          | 325          | 328               | 152.4                          | 0.00%         |             |
| room-load-50-r3       | 50                    | 28415          | 0.7                 | 1                 | 1            | 2            | 17                | 94.9                           | 0.00%         |             |
| room-spike-r3         | 200                   | 24745          | 0.7                 | 1                 | 1            | 1            | 16                | 138.0                          | 0.00%         |             |
| room-stress-100-r3    | 100                   | 29932          | 0.4                 | 0                 | 1            | 1            | 15                | 166.8                          | 0.00%         |             |
| room-stress-200-r3    | 200                   | 59837          | 0.4                 | 0                 | 1            | 1            | 14                | 333.4                          | 0.00%         |             |
| room-stress-400-r3    | 400                   | 119636         | 0.3                 | 0                 | 1            | 1            | 14                | 666.6                          | 0.00%         |             |
| room-stress-50-r3     | 50                    | 15000          | 0.5                 | 1                 | 1            | 1            | 14                | 83.6                           | 0.00%         |             |

## 5.9 Phụ lục C: Bằng chứng

| **Hạng mục**           | **Vị trí**                                                                                 |
|------------------------|--------------------------------------------------------------------------------------------|
| Báo cáo Newman (HTML)  | `newman-report.html`                                                                       |
| Kết quả Newman (JSON)  | `newman-result.json`, `newman-result_1.json`                                               |
| Kết quả JMeter         | `results/*.jtl` và các thư mục báo cáo HTML `results/<tên lần chạy>/index.html`            |
| Kết quả Selenium       | `ui-results-chrome.csv`, `ui-results-firefox.csv`; ảnh chụp lỗi trong `target/screenshots` |
| Kết quả từng test case | `BaoCao/ket-qua-test-case.csv`                                                             |
| Bộ kịch bản            | `Postman/`, `JMeter/`, `Selenium/`                                                         |
| Log dịch vụ            | `booking.log`, `room.log`, `branding.log`, `auth.log`, `report.log`, `message.log`         |

# Chương 6. Tổng hợp và hướng dẫn sử dụng repository

## 6.1 Kết quả kiểm thử

| **Nhóm chức năng**  | **Số test case** | **Đạt** | **Không đạt** | **Chưa thực thi** |
|---------------------|------------------|---------|---------------|-------------------|
| Xác thực (AUTH)     | 9                | 9       | 0             | 0                 |
| Phòng (ROOM)        | 17               | 16      | 1             | 0                 |
| Đặt phòng (BOOK)    | 29               | 28      | 1             | 0                 |
| Tin nhắn (MSG)      | 18               | 15      | 3             | 0                 |
| Thương hiệu (BRAND) | 8                | 8       | 0             | 0                 |
| Báo cáo (REP)       | 4                | 3       | 1             | 0                 |
| Bảo mật (SEC)       | 6                | 2       | 3             | 1                 |
| Độ tin cậy (REL)    | 2                | 0       | 0             | 2                 |
| Giao diện (UI)      | 18               | 13      | 4             | 1                 |
| Hiệu năng (PERF)    | 5                | 4       | 1             | 0                 |
| **Tổng cộng**       | **116**          | **98**  | **14**        | **4**             |

Đã thực thi 112 trên 116 test case. Tỷ lệ đạt: 87,5% trên số đã thực thi (98/112), 84,5% trên tổng số test case thiết kế (98/116). Kết quả chi tiết từng test case, danh sách lỗi, đánh giá rủi ro và kết luận nằm ở Phần III và Phần IV (Phụ lục A: kết quả chi tiết 116 test case).

## 6.2 Kỹ thuật kiểm thử

- Static Review (rà soát mã nguồn)
- Black-box Testing
- Equivalence Partitioning
- Boundary Value Analysis
- Decision Table Testing (quy tắc ngày đặt phòng)
- State Transition Testing (vòng đời token, vòng đời booking, trạng thái tin nhắn)
- Role-based Testing (Guest, Admin)
- Concurrency Testing (đặt đồng thời cùng một phòng)
- Load, Stress và Spike Testing

## 6.3 Cấu trúc Repository

```
kiemdinh-restful-booker
│
├── BaoCao/          Báo cáo kết quả (BaoCao.md, ket-qua-test-case.csv)
├── SRS/             Đặc tả yêu cầu phần mềm
├── TestPlan/        Kế hoạch kiểm thử
├── TestCase/        Bảng test case chi tiết
├── Postman/         Collection và environment của Postman
├── JMeter/          Kịch bản JMeter, run_jmeter.cmd, kết quả (results/)
├── Selenium/        Dự án Maven Selenium (pom.xml, src/test/java), run_selenium.cmd
├── Images/          Ảnh chụp màn hình, bằng chứng
├── SourceCode/      Mã nguồn Restful-booker Platform được kiểm thử
└── README.md
```

## 6.4 Vai trò hệ thống

- Guest / Public: xem thông tin khách sạn, xem và lọc phòng, đặt phòng, gửi liên hệ.
- Admin: đăng nhập, quản lý phòng, quản lý đặt phòng, xử lý tin nhắn, xem báo cáo, cấu hình thương hiệu.
- Hệ thống: các dịch vụ gọi lẫn nhau để xác thực token và gửi thông báo đặt phòng.

## 6.5 Hướng dẫn chạy dự án

### 6.5.1 Yêu cầu

JDK 26 trở lên (đã dùng Temurin 26.0.2.1), Maven 3.9.14, Node.js 24.x, npm 11.x, trên Windows.

### 6.5.2 Chạy hệ thống

Chạy trong thư mục `SourceCode`:

```bat
cd SourceCode
build_locally.cmd
```

`build_locally.cmd` build bằng Maven rồi chạy hệ thống kèm bộ `end-to-end-tests` có sẵn của dự án, nên có thể để lại dữ liệu. Khi kiểm thử cần dữ liệu sạch, tắt hệ thống rồi chạy:

```bat
run_locally.cmd
```

Chạy hệ thống ở một cửa sổ riêng và không gõ gì vào cửa sổ đó: nhấn Enter ở cửa sổ này sẽ chạy `taskkill` và tắt mọi tiến trình Java và Node trên máy.

Truy cập: `http://localhost:3003`

| **Thành phần** | **Cổng** |
|----------------|----------|
| Giao diện      | 3003     |
| booking        | 3000     |
| room           | 3001     |
| branding       | 3002     |
| auth           | 3004     |
| report         | 3005     |
| message        | 3006     |

Tài khoản Admin mặc định: `admin` / `password`. Dữ liệu không bền vững: mất khi tắt các dịch vụ.

### 6.5.3 Chạy kiểm thử API (Postman, Newman)

Import `Postman/RestfulBooker.postman_collection.json` và `Postman/RestfulBooker.postman_environment.json` vào Postman, chọn môi trường "Restful-booker local", hoặc chạy bằng Newman:

```bat
npm install -g newman
newman run Postman\RestfulBooker.postman_collection.json -e Postman\RestfulBooker.postman_environment.json
```

Mỗi lần chạy cần khởi động lại hệ thống để về dữ liệu sạch.

### 6.5.4 Chạy kiểm thử hiệu năng (JMeter)

```bat
cd JMeter
run_jmeter.cmd smoke
run_jmeter.cmd load
run_jmeter.cmd stress
run_jmeter.cmd spike
run_jmeter.cmd concurrency
```

Kết quả nằm trong `JMeter\results\`. Hướng dẫn chi tiết và tham số: [`JMeter/README.md`](JMeter/README.md).

### 6.5.5 Chạy kiểm thử giao diện (Selenium)

```bat
cd Selenium
run_selenium.cmd smoke
run_selenium.cmd all
run_selenium.cmd cross
```

Cần Chrome (và Firefox,). Hướng dẫn chi tiết: [`Selenium/README.md`](Selenium/README.md).

# Tài liệu tham khảo

- ISO/IEC 25010: mô hình chất lượng sản phẩm phần mềm
- IEEE 830 / ISO/IEC/IEEE 29148: hướng dẫn cấu trúc tài liệu đặc tả yêu cầu
- Mã nguồn Restful-booker Platform (`github.com/mwinteringham/restful-booker-platform`)
- Postman và Newman Documentation
- Apache JMeter Documentation
- Selenium Documentation
- JUnit 5 User Guide
- Tài liệu môn Đánh giá và kiểm định chất lượng phần mềm

# License

Dự án được thực hiện phục vụ mục đích học tập môn Đánh giá và kiểm định chất lượng phần mềm. Mã nguồn Restful-booker Platform thuộc về tác giả gốc; xem giấy phép đi kèm trong thư mục `SourceCode/`.
