function execute(key, page) {
    if (!page) page = '1';
    const doc = fetch(`https://www.mangaread.org/?s=${key}&post_type=wp-manga`).html()
    const el = doc.select(".c-tabs-item__content")
    const data = [];
    el.forEach(e =>{
        data.push({
            name: e.select(".post-title a").first().text(),
            link: e.select(".post-title a").first().attr("href"),
            cover: e.select(".tab-thumb img").first().attr("src"),
            description: e.select(".chapter a").first().text(),
            host: "https://www.mangaread.org"
        })
    });
    return Response.success(data)
}