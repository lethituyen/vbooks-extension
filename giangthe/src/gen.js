function execute(url, page) {
    if (!page) page = '0';
    let response = fetch('https://giangthe.com/tim-kiem-truyen',{
        method: "GET",
        queries: {
            page : page,
            type : url,
            sort : '3',
        }
    });
    if (response.ok) {
        let doc = response.html();
        let next = doc.select(".pagination").select("li.active + li").text()
        let novelList = doc.select(".story-search .col-lg-4").map(e => ({
            name: e.select("span").first().text(),
            link: e.select("a").attr("href"),
            cover: e.select("img").attr("data-src"),
            description: null,
            host: "https://giangthe.com"
        }));
        return Response.success(novelList, next);
    }
    return null;
}