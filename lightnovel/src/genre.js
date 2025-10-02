function execute() {
    let response = fetch(`https://quykiep.com/the-loai`)
    if (response.ok){
        let el = response.html().select('.flex a.bg-hg_color_2')
        let data = []
        for (var i = 4; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
            title: e.text(),
            input: e.attr('href'),
            script: 'gen.js'
            });
        }
        return Response.success(data)
    }
}