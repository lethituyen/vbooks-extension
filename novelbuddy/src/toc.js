function execute(url) {
    var sid = fetch(url).text().match(/var\s+bookId\s*=\s*(\d+)/)[1];
    var doc = fetch(`https://novelbuddy.com/api/manga/${sid}/chapters?source=detail`).html();
    var el = doc.select(".chapter-list li")
    const data = [];
    for (var i = 0;i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select('.chapter-title').text(),
            url: e.select('a').attr("href"),
            host: "https://novelbuddy.com"
        })
    }
    return Response.success(data.reverse());
}