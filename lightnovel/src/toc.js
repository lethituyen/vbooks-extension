load('base64.js')
function execute(url) {
    let slug = url.split('/').pop()
    let response = fetch(`https://api.quykiep.com/api/book/get-chapter-list-version-2/${slug}/21`)
    if (response.ok){
        let json = response.json()
        let data = JSON.parse(Base64.decode(json.data))
        let list = []
        data.forEach((book) => {
            list.push({
                name: book.name,
                url: url +'/'+ book.slug
            })  
        })
        return Response.success(list)
    }
}