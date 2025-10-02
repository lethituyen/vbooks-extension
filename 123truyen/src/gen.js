load('config.js');
function execute(url, page) {
    if (!page) page = '1';
    let response = fetch(url, {
        method: "GET",
        queries: {
            page: page
        }
    });
    if (response.ok) {
        let doc = response.html();
        let next = doc.select('ul.pagination').select('li.active + li').text();
        let data = [];
        doc.select(".index-intro .item").forEach(e => {
            data.push({
                name: e.select(".title h3").first().text(),
                link: e.select("a").first().attr("href"),
                cover: e.select("img").first().attr("src"),
                description: e.select(".text-center").first().text(),
                host: BASE_URL
            });
        });

        return Response.success(data, next);
    }
    return null;
}