load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    var doc = fetch(url).html();
    if (doc) {
        var imgs = doc.select(".content_detail img");
        var data = [];
        imgs.forEach(e => {
            data.push({link: e.attr("src")});
        })
        return Response.success(data);
    }
    return null;
}