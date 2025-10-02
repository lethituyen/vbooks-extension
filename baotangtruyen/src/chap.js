load('config.js')
function execute(url) {
    var json = fetch(url).json();
    var imgs = [];
    json.images.forEach(e => {
        if (e.indexOf('top.jpg') == -1) {
            imgs.push(BASE_API + e);
        }
    });

    return Response.success(imgs);
}