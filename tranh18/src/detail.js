load('config.js')
function execute(url) {
    const doc = fetch(url).html()
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select(".cover img").first().attr('src'),
        description: doc.select("p.content").text(),
        author: "Unknown",
        detail: doc.select('.subtitle').html().replace('\n','<br>'),
        host: BASE_URL
    });
}