load('config.js')
function execute(url) {
    const sid = url.split('/').pop();
    const json = fetch(`${BASE_API}/comic/${sid}`).json()
    return Response.success({
        name: json.name,
        cover: BASE_API + "/thumbnails/" + json.thumbnail,
        description: null ,
        author: json.author,
        detail: json.author + '<br>Creat at : ' + json.created_at,
        host: BASE_URL
    });
}