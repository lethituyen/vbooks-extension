load('config.js');
function execute(key, page) {
    if (!page) page = '1';
    let response = fetch(`${BASE_URL}/tim-kiem?search=${key}&page=${page}`);
    if (response.ok) {
        let doc = response.html();
        let next = doc.select(".pagination").select("li[aria-current='page'] + li").first().text()
        let data = [];
        doc.select(".product-grid .card").forEach(e => {
            data.push({
                name: e.select("a h3").first().text(),
                link: e.select("a").first().attr("href"),
                cover: e.select("a img").last().attr("data-src"),
                description: e.select(".post-on").first().text(),
                host: BASE_URL
            });
        });

        return Response.success(data, next);
    }
    return null;
}