load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    var doc = fetch(url).html();
    if(doc) {
        var list = [];
        var el = doc.select(".list_chap a");
        el.forEach(e => {
            list.push({
                name: e.text(),
                url: e.attr("href"),
                host: BASE_URL,
            });
        })
        return Response.success(list.reverse());
    }
    return null;
}