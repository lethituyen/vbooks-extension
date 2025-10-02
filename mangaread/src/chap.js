function execute(url) {
    var doc = fetch(url).html();
    var el = doc.select(".reading-content img");
    const data = [];
    el.forEach(e => {
        data.push(e.attr("src").trim());
    })
    return Response.success(data);
}