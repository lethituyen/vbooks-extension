load('config.js')
function execute(url) {
    const doc = fetch(url).html()
    let genres = [];
    doc.select('.col-sm-9 a').forEach(e => {
        genres.push({
            title: e.text(),
            input: e.attr('href'),
            script: "source.js"
        })
    })
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select("meta[property='og:image']").first().attr('content'),
        description: doc.select(".ql-editor").text(),
        author: doc.select(".col-sm-9 a[href~=nhom-dich]").text(),
        detail: doc.select('.row .col-sm-9').get(0).text() +'<br>Team : '+doc.select(".col-sm-9 a[href~=nhom-dich]").text(),
        genres : genres,
        ongoing:  doc.select('.row .col-sm-9').text().indexOf('Đang phát hành') > 0 ? true : false,
        host: BASE_URL
    });
}