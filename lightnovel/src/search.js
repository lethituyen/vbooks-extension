load('config.js')
function execute(key, page) {
    let response = fetch(`https://quykiep.com/api/book-search`,{
        method : 'POST',
        body : {keyword: key}
    })
    if (response.ok){
        let $ = response.json()
        let list = []
        $.data.forEach(book => {
            list.push({
                name: book.name,
                link: `https://quykiep.com/truyen/${book.slug}`,
                cover: 'https://static.quykiep.com/cdn-cgi/image/w=150,f=auto'+book.coverUrl,
                description: book.lastChapterName,
                host: BASE_URL,
            })
        });
        return Response.success(list)
    }
}