# Đặc tả yêu cầu phần mềm (SRS)
**Đối tượng:** Restful-booker Platform – hệ thống đặt phòng khách sạn mã nguồn mở
**Môn học:** Đánh giá và kiểm định chất lượng phần mềm

## 1. Giới thiệu
### 1.1 Mục đích
### 1.2 Phạm vi
### 1.3 Định nghĩa, từ viết tắt
### 1.4 Tài liệu tham khảo

## 2. Mô tả tổng quan
### 2.1 Kiến trúc hệ thống
UI (React) → Proxy → các service Spring Boot (auth, booking, room, message, branding, report, assets). *(Chèn sơ đồ kiến trúc)*
### 2.2 Tác nhân
| Tác nhân | Mô tả |
|---|---|
| Guest | Khách truy cập, không cần đăng nhập |
| Admin | Quản trị viên, đăng nhập bằng tài khoản + token |
### 2.3 Ràng buộc và giả định

## 3. Yêu cầu chức năng
### 3.1 Nhóm Guest
| Mã | Yêu cầu | Ưu tiên |
|---|---|---|
| FR-01 | Xem thông tin khách sạn/thương hiệu | |
| FR-02 | Xem danh sách phòng | |
| FR-03 | Đặt phòng | |
| FR-04 | Gửi liên hệ | |

### 3.2 Nhóm Admin
| Mã | Yêu cầu | Ưu tiên |
|---|---|---|
| FR-05 | Đăng nhập / đăng xuất | |
| FR-06 | Quản lý phòng (thêm/sửa/xóa) | |
| FR-07 | Quản lý đặt phòng | |
| FR-08 | Đọc/xóa tin nhắn liên hệ | |
| FR-09 | Xem báo cáo | |
| FR-10 | Cấu hình thương hiệu | |

### 3.3 Quy tắc nghiệp vụ và ràng buộc dữ liệu
*(Độ dài tên, định dạng email/phone, checkout sau checkin, không trùng lịch... → nguồn cho BVA/EP)*

## 4. Yêu cầu phi chức năng
| Mã | Đặc tính (ISO/IEC 25010) | Yêu cầu |
|---|---|---|
| NFR-01 | Performance Efficiency | |
| NFR-02 | Reliability | |
| NFR-03 | Security | |
| NFR-04 | Usability | |

## 5. Mô hình hóa
### 5.1 Use Case — `diagrams/usecase.puml`
### 5.2 Mô hình dữ liệu (ERD) — `diagrams/erd.puml`
### 5.3 Class Diagram — `diagrams/class.puml`
### 5.4 Activity Diagram (đặt phòng) — `diagrams/activity-booking.puml`
### 5.5 Sequence Diagram (đặt phòng) — `diagrams/sequence-booking.puml`

## 6. Ma trận truy vết
| Yêu cầu | Use Case | Test Case |
|---|---|---|
| FR-01 | | |
