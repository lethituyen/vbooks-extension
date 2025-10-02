load('config.js')
function execute() {
    let response = fetch(`https://tranh18.com/comics`)
    if (response.ok){
        let el = response.html().select('.cat-list a')
        let data = []
        for (var i = 1; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
            title: e.text(),
            input: e.text(),
            script: 'source.js'
            });
        }
        return Response.success(data)
    }
}