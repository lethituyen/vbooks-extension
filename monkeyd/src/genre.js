function execute() {
    let response = fetch(`https://monkeyd.vn`)
    if (response.ok){
        let el = response.html().select('.dropdown-menu a.dropdown-item')
        let data = []
        for (var i = 1; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
            title: e.text(),
            input: e.attr('href'),
            script: 'source.js'
            });
        }
        return Response.success(data)
    }
}