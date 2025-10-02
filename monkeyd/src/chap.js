function execute(url) {
    let response = fetch(url)
    if(response.ok){
        let textm = response.text()
        const map = {};
        const regex = /\.([a-z0-9\-]+):before\s*\{\s*content:\s*"([^"]+)";\s*\}/g;
        let match;
        while ((match = regex.exec(textm)) !== null) {
            var cls = match[1];
            var txt = match[2];
            map[cls] = txt;
        }
        let doc = Html.parse(textm);
        doc.select('p.signature').remove();
        doc.select('div.affClick').remove();
        let content = doc.select('#chapter-content-render p').html();
        content = content.replace(/<span class="([^"]+)"><\/span>/g, function(_, cls) {
            return map[cls] || '';
        }).replace(/\n/gi, "<br>")
            .replace(/&(nbsp|amp|quot|lt|gt);/g, "")
            .replace(/(\<br[\s]*\/?\>[\s]*)+/g, '<br>');
        return Response.success(content);
    }
    return null;
}