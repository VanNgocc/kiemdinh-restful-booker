package rbp;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpHeaders;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/** Gọi thẳng các dịch vụ để tạo dữ liệu, kiểm tra kết quả và dọn dẹp (không dùng để kiểm thử giao diện). */
public class ApiClient {

    public static class Res {
        public final int status;
        public final String body;
        public final HttpHeaders headers;

        Res(int status, String body, HttpHeaders headers) {
            this.status = status;
            this.body = body;
            this.headers = headers;
        }
    }

    private final HttpClient http = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build();
    private String token;

    private Res send(String method, String url, String json, boolean auth) {
        try {
            HttpRequest.Builder b = HttpRequest.newBuilder(URI.create(url))
                    .timeout(Duration.ofSeconds(20))
                    .header("Content-Type", "application/json");
            if (auth) {
                b.header("Cookie", "token=" + token());
            }
            HttpRequest.BodyPublisher bp = json == null
                    ? HttpRequest.BodyPublishers.noBody()
                    : HttpRequest.BodyPublishers.ofString(json);
            HttpResponse<String> r = http.send(b.method(method, bp).build(), HttpResponse.BodyHandlers.ofString());
            return new Res(r.statusCode(), r.body(), r.headers());
        } catch (Exception e) {
            throw new RuntimeException("Lỗi gọi API " + method + " " + url + ": " + e.getMessage(), e);
        }
    }

    public synchronized String token() {
        if (token == null) {
            String body = "{\"username\":\"" + Config.get("adminUser") + "\",\"password\":\"" + Config.get("adminPassword") + "\"}";
            Res r = send("POST", Config.get("authApi") + "/auth/login", body, false);
            for (String c : r.headers.allValues("set-cookie")) {
                Matcher m = Pattern.compile("token=([^;]+)").matcher(c);
                if (m.find()) {
                    token = m.group(1);
                    break;
                }
            }
            if (token == null) {
                throw new RuntimeException("Không lấy được token đăng nhập (mã trạng thái " + r.status + ")");
            }
        }
        return token;
    }

    // ---------- tiện ích đọc JSON bằng biểu thức chính quy (JSON của hệ thống đơn giản, đủ dùng)
    static Integer firstInt(String body, String key) {
        if (body == null) {
            return null;
        }
        Matcher m = Pattern.compile("\"" + key + "\"\\s*:\\s*(\\d+)").matcher(body);
        return m.find() ? Integer.valueOf(m.group(1)) : null;
    }

    static List<Integer> allInts(String body, String key) {
        List<Integer> out = new ArrayList<>();
        if (body == null) {
            return out;
        }
        Matcher m = Pattern.compile("\"" + key + "\"\\s*:\\s*(\\d+)").matcher(body);
        while (m.find()) {
            out.add(Integer.valueOf(m.group(1)));
        }
        return out;
    }

    /** Tìm đối tượng JSON phẳng (không lồng) có trường field bằng value. */
    static String findObject(String json, String field, String value) {
        if (json == null) {
            return null;
        }
        Matcher m = Pattern.compile("\\{[^{}]*\"" + field + "\"\\s*:\\s*\"" + Pattern.quote(value) + "\"[^{}]*\\}").matcher(json);
        return m.find() ? m.group() : null;
    }

    public static String letters(int n) {
        Random r = new Random();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < n; i++) {
            sb.append((char) ('a' + r.nextInt(26)));
        }
        return sb.toString();
    }

    // ---------- thương hiệu
    public String brandingName() {
        Res r = send("GET", Config.get("brandingApi") + "/branding/", null, false);
        Matcher m = Pattern.compile("\"name\"\\s*:\\s*\"([^\"]*)\"").matcher(r.body);
        return m.find() ? m.group(1) : null;
    }

    // ---------- phòng
    public List<Integer> roomIds() {
        return allInts(send("GET", Config.get("roomApi") + "/room/", null, false).body, "roomid");
    }

    public int roomCount() {
        return roomIds().size();
    }

    public int firstRoomId() {
        return roomIds().get(0);
    }

    public int createRoom(String name, int price) {
        String json = "{\"roomName\":\"" + name + "\",\"type\":\"Single\",\"accessible\":true,"
                + "\"image\":\"https://example.com/room.png\",\"description\":\"Phong kiem thu QA\","
                + "\"features\":[\"WiFi\"],\"roomPrice\":" + price + "}";
        Res r = send("POST", Config.get("roomApi") + "/room/", json, true);
        Integer id = r.status == 201 ? firstInt(r.body, "roomid") : null;
        if (id == null) {
            throw new RuntimeException("Tạo phòng bằng API thất bại, mã " + r.status + ": " + r.body);
        }
        return id;
    }

    public Integer roomIdByName(String name) {
        String obj = findObject(send("GET", Config.get("roomApi") + "/room/", null, false).body, "roomName", name);
        return firstInt(obj, "roomid");
    }

    public Integer roomPriceByName(String name) {
        String obj = findObject(send("GET", Config.get("roomApi") + "/room/", null, false).body, "roomName", name);
        return firstInt(obj, "roomPrice");
    }

    public void deleteRoom(int id) {
        send("DELETE", Config.get("roomApi") + "/room/" + id, null, true);
    }

    // ---------- đặt phòng
    public Res createBooking(int roomId, String first, String last, LocalDate in, LocalDate out) {
        String json = "{\"roomid\":" + roomId + ",\"firstname\":\"" + first + "\",\"lastname\":\"" + last
                + "\",\"depositpaid\":false,\"bookingdates\":{\"checkin\":\"" + in + "\",\"checkout\":\"" + out
                + "\"},\"email\":\"qa@example.com\",\"phone\":\"01234567890\"}";
        return send("POST", Config.get("bookingApi") + "/booking/", json, false);
    }

    public int createBookingId(int roomId, String first, String last, LocalDate in, LocalDate out) {
        Res r = createBooking(roomId, first, last, in, out);
        Integer id = r.status == 201 ? firstInt(r.body, "bookingid") : null;
        if (id == null) {
            throw new RuntimeException("Tạo booking bằng API thất bại, mã " + r.status + ": " + r.body);
        }
        return id;
    }

    public List<Integer> bookingIds(int roomId) {
        return allInts(send("GET", Config.get("bookingApi") + "/booking/?roomid=" + roomId, null, true).body, "bookingid");
    }

    public void deleteBooking(int id) {
        send("DELETE", Config.get("bookingApi") + "/booking/" + id, null, true);
    }

    /** Xóa các booking của phòng mà không có trong danh sách trước đó. */
    public void deleteNewBookings(int roomId, List<Integer> before) {
        for (Integer id : bookingIds(roomId)) {
            if (!before.contains(id)) {
                deleteBooking(id);
            }
        }
    }

    // ---------- tin nhắn
    public int createMessage(String name, String subject, String description) {
        String json = "{\"name\":\"" + name + "\",\"email\":\"qa@example.com\",\"phone\":\"01234567890\",\"subject\":\""
                + subject + "\",\"description\":\"" + description + "\"}";
        Res r = send("POST", Config.get("messageApi") + "/message/", json, false);
        Integer id = r.status == 201 ? firstInt(r.body, "messageid") : null;
        if (id == null) {
            throw new RuntimeException("Tạo tin nhắn bằng API thất bại, mã " + r.status + ": " + r.body);
        }
        return id;
    }

    private String messageObject(String subject) {
        return findObject(send("GET", Config.get("messageApi") + "/message/", null, false).body, "subject", subject);
    }

    public Integer messageIdBySubject(String subject) {
        return firstInt(messageObject(subject), "id");
    }

    public boolean isMessageRead(String subject) {
        String obj = messageObject(subject);
        return obj != null && Pattern.compile("\"read\"\\s*:\\s*true").matcher(obj).find();
    }

    /** Xóa mọi tin nhắn có trường name đúng bằng giá trị cho trước (dùng để dọn tin "You have a new booking!"). */
    public void deleteMessagesByName(String name) {
        String body = send("GET", Config.get("messageApi") + "/message/", null, false).body;
        List<Integer> ids = new ArrayList<>();
        if (body != null) {
            Matcher m = Pattern.compile("\\{[^{}]*\"name\"\\s*:\\s*\"" + Pattern.quote(name) + "\"[^{}]*\\}").matcher(body);
            while (m.find()) {
                Integer id = firstInt(m.group(), "id");
                if (id != null) {
                    ids.add(id);
                }
            }
        }
        for (Integer id : ids) {
            deleteMessage(id);
        }
    }

    public void deleteMessage(int id) {
        send("DELETE", Config.get("messageApi") + "/message/" + id, null, true);
    }
}
