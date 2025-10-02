function execute(url) {
    const gdata = fetch(url+'/ajax/chapters/').html();
    gdata.select('.c-new-tag').remove();
    var el = gdata.select(".listing-chapters_wrap li a");
    const data = [];
    el.forEach(e => {
        data.push({
            name: e.text(),
            url: e.attr("href"),
            host: "https://www.mangaread.org"
        })
    });
    return Response.success(data.reverse());
}