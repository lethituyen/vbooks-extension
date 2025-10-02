load('config.js');
function execute(url, page) {
    if (!page) page = '1';
    let response = fetch(`${BASE_URL}${url}?page=${page}`);
    if (response.ok) {
        let doc = response.html();
        
        let data = [];
        doc.select(".flex[itemtype='https://schema.org/Book']").forEach(e => {
            data.push({
                name: e.select("h3 a").first().text(),
                link: e.select("h3 a").first().attr("href"),
                cover: e.select("a img").last().attr("src"),
                description: e.select(".text-txt_light_2 span").first().text(),
                host: BASE_URL
            });
        });

        return Response.success(data, (parseInt(page) + 1) + "");
    }
    return null;
}