load('config.js');
function execute(url) {
    const doc = fetch(url).html()
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select(".p-3 img").first().attr('src'),
        description: doc.select('.p-3 .inline-block  p').html(),
        detail: doc.select(".p-3 .border .p-2 p a").text(),
        category: doc.select('.p-3 .border .p-2.leading-7 p a').html(),
        host: BASE_URL
    });
}