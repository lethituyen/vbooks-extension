let BASE_URL = "https://be-app-vip.com";
let READER_URL = "https://reader.be-web-vip.com";
let BASE_API = "https://ngocsach.com";
let BASE_HOST = "https://bnsvip.net";
let B_TOKEN = "Nhocconsr"; 

try {
    if (CONFIG_TOKEN) {
        B_TOKEN = CONFIG_TOKEN;
    }
} catch (error) {
}
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}