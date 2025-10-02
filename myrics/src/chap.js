function execute(url) {
    let response = fetch(url, {
        method: "GET", // GET, POST, PUT, DELETE, PATCH
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36",
            "referer": url
        },
    })
    let $ = response.html()
    let content = $.select(".wysiwyg").html();
    content = content.replace(/<script[^>]*>.*<\/script>/gm, '')
        .replace(/\n/gm, '')
        .replace(/<[a-z]+ style.*?>.*?<\/[a-z]+>/gm, '')
        .replace(/(<br\s*\/?>( )?){2,}/g, '<br>')
    return Response.success(content);
}