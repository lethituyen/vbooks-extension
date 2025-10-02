function execute(url) {
    let sid = fetch(url).html().select("#manga-chapters-holder").attr("data-id");
    var response = fetch('https://manhwahentai.me/wp-admin/admin-ajax.php', {
        method: "POST", // GET, POST, PUT, DELETE, PATCH
        headers: {
            accept: 'text/html, */*; q=0.01',
            'accept-language': 'vi,en;q=0.9,en-US;q=0.8',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0',
            'x-requested-with': 'XMLHttpRequest'
        },
        body:{
            post_id: sid,
            action:"ajax_chap"
        }
    })
    if (response.ok){
        let doc = response.html();
        doc.select('.c-new-tag').remove();
        var el = doc.select(".wp-manga-chapter a")
        const data = [];
        for (var i = el.size() - 1; i >= 0; i--) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: e.attr("href"),
                host: "https://manhwahentai.me"
            })
        }
        return Response.success(data);
    }
    return null;
}