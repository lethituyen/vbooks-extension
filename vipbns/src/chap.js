load('config.js');
load('crypto.js');
function execute(url) {
    let newtoken = fetch(BASE_HOST+'/api/auth/session').json().accessToken
    if (!newtoken) {
        return Response.error("Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại.");
    }
    let response = fetch(url, {
        method: 'GET',
        headers: {
            authorization: 'Bearer ' + newtoken,
        }
    });
    if (response.ok) {
        let data = response.json().data;
        if (data && data.content) {
            return Response.success(data.public_content+"<br>Nội dung chương đã bị mã hóa!<br> Nếu muốn sử dụng extension này liên hệ discord @Nhocconsr hoặc phamgiavang@gmail.com!'");
        } else {
            return Response.success("Đây là chương mất tiền đăng nhập tài khoản vào bằng vbook để đọc.'");
        }
    }
}
