# Kiểm thử hiệu năng bằng JMeter

Các kịch bản dưới đây ứng với nhóm PERF trong `TestPlan/TestPlan.md` (mục 7.9 và mục 9). JMeter gọi **thẳng cổng dịch vụ** (room 3001, booking 3000), không đi qua cổng giao diện 3003.

> Các file `.jmx` được tạo tự động. Lần chạy thử đầu tiên (`smoke`) cho thấy 01 chạy tốt (57 mẫu, 0 lỗi) và 02a lỗi (0 mẫu); 02a và 02b đã được sửa như ghi chú ở mục 6 nhưng **chưa được chạy lại**. Hãy chạy `run_jmeter.cmd smoke` trước (2 người dùng, 15 giây) để kiểm tra kết nối và cú pháp, rồi mới chạy các kịch bản chính.

## 1. Danh sách kịch bản

| File | Test case | Mô tả |
|---|---|---|
| `01-room-load-stress.jmx` | TC-PERF-01, TC-PERF-03 | `GET /room/`, kiểm tra mã 200 |
| `02a-booking-load-stress-with-contact.jmx` | TC-PERF-02, TC-PERF-03 | `POST /booking/` có `email` và `phone` (đúng luồng thực tế, mỗi lượt kéo theo một lời gọi sang message-service), kiểm tra mã 201 |
| `02b-booking-load-stress-no-contact.jmx` | TC-PERF-02 (đối chứng) | Giống 02a nhưng không có `email`, `phone`; so sánh với 02a để thấy ảnh hưởng của message-service |
| `03-room-spike.jmx` | TC-PERF-04 | Nền 10 người dùng, sau 60 giây tăng thêm 190 người dùng trong 5 giây, giữ 60 giây rồi giảm |
| `04-booking-concurrency.jmx` | TC-PERF-05 | 50 luồng chờ nhau (Synchronizing Timer) rồi cùng đặt một phòng, cùng khoảng ngày; kiểm tra 201 hoặc 409 |

## 2. Tham số (`-J<tên>=<giá trị>`)

| Tham số | Mặc định | Ý nghĩa |
|---|---|---|
| `host` | 127.0.0.1 | Địa chỉ dịch vụ |
| `port` | 3001 (room), 3000 (booking) | Cổng dịch vụ |
| `users` | 50 | Số người dùng ảo |
| `rampup` | 30 (02, 01), 2 (04) | Thời gian tăng dần, giây |
| `duration` | 300 | Thời gian chạy, giây |
| `think` | 500 | Think time giữa hai request, mili giây (giả định, có thể chỉnh) |
| `seqStart` | 1 | Số bắt đầu của bộ đếm sinh ngày đặt phòng (kịch bản 02) |
| `offsetDays` | 400 | Số ngày cách hôm nay của khoảng ngày đặt (kịch bản 04) |
| `room` | 1 | Phòng được đặt trong kịch bản 04 |
| `spikeUsers`, `spikeDelay`, `spikeRamp`, `spikeDuration` | 190, 60, 5, 60 | Cấu hình đợt đột biến (kịch bản 03) |

## 3. Cách chạy

1. Chạy hệ thống ở cửa sổ riêng bằng `run_locally.cmd` (không kèm `true`), **không gõ gì vào cửa sổ đó**.
2. Mở cửa sổ khác, vào thư mục `JMeter`, kiểm tra JMeter chạy được (`jmeter -v`).
3. Chạy thử: `run_jmeter.cmd smoke`.
4. Chạy chính thức (mỗi lệnh có thể kèm số lần chạy, ví dụ `run_jmeter.cmd load 2`):

| Lệnh | Test case |
|---|---|
| `run_jmeter.cmd load` | TC-PERF-01, TC-PERF-02 |
| `run_jmeter.cmd stress` | TC-PERF-03 (50, 100, 200, 400 người dùng, mỗi mức 3 phút) |
| `run_jmeter.cmd spike` | TC-PERF-04 |
| `run_jmeter.cmd concurrency` | TC-PERF-05 (script tự đếm số phản hồi 201, 409 sau khi chạy) |

Kết quả nằm trong `results\`: mỗi lần chạy có file `.jtl` và một thư mục báo cáo HTML (mở `index.html`).

## 4. Nguyên tắc để số liệu đáng tin (theo Test Plan mục 9 và 12)

- Mỗi kịch bản chạy trên **dữ liệu sạch**: tắt hệ thống, chạy lại `run_locally.cmd` trước mỗi kịch bản. Kịch bản 02 tạo rất nhiều booking và tin nhắn nên làm dữ liệu phình ra; lệnh `stress` chạy liên tiếp 4 mức nên đã tự dùng `seqStart` khác nhau cho mỗi mức để không trùng ngày.
- Nếu chạy lại mà không khởi động lại hệ thống, đổi `seqStart` (kịch bản 02) hoặc `offsetDays` (kịch bản 04), nếu không các lượt đặt sẽ bị 409 vì trùng với lần chạy trước.
- Lặp lại tối thiểu 3 lần, lấy trung bình và nêu độ lệch.
- Đóng chương trình nền; ghi cấu hình máy (CPU, RAM) vào Test Plan mục 4.1. JMeter và hệ thống chạy chung một máy nên số liệu chỉ có giá trị so sánh trên cùng máy.
- Theo dõi CPU và bộ nhớ của máy trong lúc chạy (Task Manager hoặc `typeperf`) để ghi vào báo cáo.
- Nếu JMeter báo lỗi khi chạy trên JDK 26, thử chạy JMeter với JDK 17 hoặc 21 (đặt `JAVA_HOME` riêng cho cửa sổ chạy JMeter); hệ thống kiểm thử vẫn giữ JDK hiện tại.

## 5. Đọc kết quả

Trong báo cáo HTML, mục **Statistics** có các cột cần ghi lại:

| Chỉ số | Cột trong báo cáo |
|---|---|
| Thời gian phản hồi trung bình | Average |
| p95, p99 | 95th pct, 99th pct |
| Thông lượng (yêu cầu mỗi giây) | Throughput |
| Tỷ lệ lỗi | Error % |

Ngưỡng đề xuất (NFR-01): với 50 người dùng, trung bình ≤ 1 giây, p95 ≤ 2 giây, lỗi < 1%.

Bảng ghi kết quả mẫu cho Phần IV:

| Kịch bản | Người dùng | Lần chạy | Trung bình (ms) | p95 (ms) | p99 (ms) | Throughput (req/s) | Lỗi (%) | Đạt ngưỡng |
|---|---|---|---|---|---|---|---|---|
| GET /room/ | 50 | 1 | | | | | | |
| POST /booking/ | 50 | 1 | | | | | | |

Với TC-PERF-05 (đồng thời), kết quả đạt khi đúng **1** phản hồi 201 và các phản hồi còn lại là 409. Nếu có từ 2 phản hồi 201 trở lên, đó là bằng chứng của lỗi overbooking (kiểm tra trùng và ghi là hai bước riêng, CSDL không có ràng buộc chống trùng); ghi thành lỗi ở Phần IV.

## 6. Lưu ý về dữ liệu sinh ra

- Kịch bản 02: mỗi lượt dùng phòng 1 đến 3 và khoảng ngày riêng, bắt đầu từ 30 ngày sau hôm chạy, cách nhau 2 ngày, nên không trùng lịch. Họ tên cố định `Load Tester`.
- Kịch bản 04: khoảng ngày là `offsetDays` ngày sau hôm chạy, kéo dài 5 ngày, họ tên `Race Cond<số luồng>`.
- Sửa lỗi 02a và 02b (0 mẫu, `NumberFormatException: For input string: "${seq}"` trong `jmeter.log`): biến `seq` của bộ đếm chưa có giá trị khi khối User Parameters chạy ở đầu mỗi vòng lặp. Nhiều khả năng JMeter gọi các bộ nghe vòng lặp theo thứ tự ngược với thứ tự trong cây kịch bản nên User Parameters chạy trước bộ đếm. Bản sửa bỏ User Parameters và đặt các biểu thức tính phòng, ngày nhận, ngày trả thẳng vào thân yêu cầu `POST /booking/`, được tính lúc gửi request, khi bộ đếm đã có giá trị.
- `run_jmeter.cmd` nay in `CANH BAO` khi một lần chạy không ghi nhận mẫu nào, vì khi đó dòng tổng kết vẫn hiện `Err: 0` và dễ bị hiểu nhầm là đạt. Lỗi `Error generating the report ... resultData is null` ở cuối lần chạy chỉ là hệ quả của việc không có mẫu.
- Kịch bản 04 (đồng thời): bản đầu tiên để tùy chọn "Ignore Status" của bộ kiểm tra là tắt, nên JMeter vẫn đếm mọi phản hồi 4xx là lỗi dù bộ kiểm tra chấp nhận mã 409. Vì vậy ở lần chạy thử 5 luồng, `Err: 2 (40%)` thực ra là hai phản hồi 409 (đúng như mong đợi), không phải lỗi. Bản sửa bật "Ignore Status", nên cột lỗi chỉ đếm mã khác 201 và 409. Kết quả đúng của TC-PERF-05 vẫn là: đúng một phản hồi 201, các phản hồi còn lại 409.
- Kết quả smoke 04 (5 luồng, cùng phòng, cùng khoảng ngày): 3 phản hồi 201 và 2 phản hồi 409, tức là cùng một khoảng ngày của một phòng bị đặt 3 lần (overbooking). Cần xác nhận bằng danh sách booking của phòng và ghi thành lỗi ở Phần IV.
