load('config.js')
function execute(key, page) {
    if (!page) page = '1';
    const response = fetch(`${BASE_API}/getAllComics?page=1&limit=10&name=${key}`);
    if (response.ok) {
        let json = response.json();
        let list =[]
        json.data.forEach(e => {
            list.push({
                name: e.name,
                link: e.slug,
                cover: BASE_API + "/thumbnails/" + e.thumbnail,
                description: e.author,
                host: BASE_URL
            })
        });
        return Response.success(list); 
    }
}