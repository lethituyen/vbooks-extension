load('config.js')
function execute(url) {
    const sid = url.split('/').pop();
    const json = fetch(`${BASE_API}/api/comics/${sid}/chapters`).json()
    let data = [];
    json.chapters.forEach(e =>
        data.push({
            name: e.name,
            url:  `${BASE_API}/comic/${sid}/${e.slug}`,
            host: BASE_URL
        })
    )
    return Response.success(data.reverse()); 
}