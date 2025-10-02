load('config.js')
function execute(url, page) {
    if (!page) page = '1';
    const response = fetch(`${BASE_API}/getAllComics?page=${page}&limit=36&sort=${url}&genres=T%E1%BA%A5t+c%E1%BA%A3`);
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
        let next = json.pagination.current_page <= json.pagination.total_pages? (json.pagination.current_page+1).toString() : null;
        return Response.success(list, next); 
    }

    
}