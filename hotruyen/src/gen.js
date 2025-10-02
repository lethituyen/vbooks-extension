load('config.js')
function execute(url, page) {
    if (!page) page = '1';
    const response = fetch(url+"?pg="+page)
    let doc = response.html()

    var next = doc.select(".pagination").select("li.active + li").text()
    const el = doc.select("#newupdate .uitem")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".title").first().text(),
            link: e.select("a").first().attr("href"),
            description: e.select(".author").first().text(),
            host: BASE_URL
        })
    }

    return Response.success(data, next)
}