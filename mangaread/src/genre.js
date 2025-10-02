function execute() {
    const doc = fetch("https://www.mangaread.org").html();
    const el = doc.select("ul.sub-menu > li a");
    const data = [];
    el.forEach(e => {
        data.push({
           title: e.text(),
           input: e.attr('href'),
           script: 'gen.js'
        });
    });
    return Response.success(data);
}