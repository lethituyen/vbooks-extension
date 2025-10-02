let BASE_URL = 'https://monkeyd.net.vn';

try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}