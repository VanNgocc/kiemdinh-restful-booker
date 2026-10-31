package rbp;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.Properties;

/** Đọc cấu hình: tham số -D, rồi biến môi trường (viết hoa), rồi config.properties. */
public final class Config {
    private static final Properties P = new Properties();

    static {
        try (InputStream in = Config.class.getResourceAsStream("/config.properties")) {
            if (in != null) {
                P.load(new InputStreamReader(in, StandardCharsets.UTF_8));
            }
        } catch (Exception e) {
            throw new RuntimeException("Không đọc được config.properties", e);
        }
    }

    private Config() {
    }

    public static String get(String key) {
        String v = System.getProperty(key);
        if (v != null && !v.isEmpty()) {
            return v;
        }
        v = System.getenv(key.toUpperCase());
        if (v != null && !v.isEmpty()) {
            return v;
        }
        return P.getProperty(key);
    }

    public static int seconds(String key, int def) {
        try {
            return Integer.parseInt(get(key));
        } catch (Exception e) {
            return def;
        }
    }
}
