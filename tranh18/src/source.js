load('config.js');
function execute(url, page) {
    if (!page) page = '1';
    let response = fetch(`${BASE_URL}/comics/?tag=${url}&area=-1&end=-1&page=${page}`);
    if (response.ok) {
        let doc = response.html();
        let data = [];
        doc.select("ul.mh-list li").forEach(e => {
            data.push({
                name: e.select("a").first().attr('title'),
                link: e.select("a").first().attr("href"),
                cover: `${BASE_URL}${e.select("p.mh-cover").attr("style").match(/\(([^)]+)\)/)[1]}`,
                description: e.select(".chapter").first().text(),
                host: BASE_URL
            });
        });

        return Response.success(data, (parseInt(page) + 1) + "");
    }
    return null;
}