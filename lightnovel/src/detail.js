load('config.js')
function execute(url) {
    const doc = fetch(url).html()
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select("meta[itemprop='thumbnailUrl']").first().attr('content'),
        description: doc.select(".htmlcontent").text(),
        author: doc.select(".flex a[href~=tac-gia]").text(),
        detail: doc.select('.flex span b').text() + ' chương',
        ongoing:  doc.select('.flex span.font-bold').text().indexOf('Đang ra') > 0 ? true : false,
        host: BASE_URL
    });
}
