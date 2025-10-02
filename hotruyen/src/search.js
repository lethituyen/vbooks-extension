function execute(key, page) {
    if (!page) page = '1';
    const response = fetch(`https://hotruyen1.com/tim-truyen?sn=${key}&pg=${page}`)
    let doc = response.html()
    var next = doc.select(".pagination").select("li.active + li").text()

    const el = doc.select("#searchresult .sitem")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".title a").first().text(),
            link: e.select(".title a").first().attr("href"),
            cover: e.select("img").first().attr("data-src"),
            description: e.select(".author").first().text(),
            host: "https://hotruyen1.com"
        })
    }

    return Response.success(data, next)
}