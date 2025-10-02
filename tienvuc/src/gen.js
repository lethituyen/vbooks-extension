load('config.js')
function execute(url, page) {
    if(!page) page = '1';
    let response = fetch(BASE_URL+'/api/public-collections/'+url,  {
        method: "GET",
        queries: {
            page: page,
            limit: '10'
        }
    });
    if (response.ok){
        let data = response.json();
        const allPage = Math.floor(data.totalDocs/10) + 1;
        if (parseInt(page) < allPage){
            var next = parseInt(page) + 1;
        }
        let list = [];
        let allBook = data.docs;
        allBook.forEach(book => {
            if(book.vip === true) var vip = "【Truyện VIP】 ";
            else var vip = '';
            list.push({
                name: book.name,
                link: book.slug,
                cover: book.cover.domain+'/'+book.cover.url,
                description: vip+book.author.name,
                host: BASE_URL,
            })
        });
        return Response.success(list, next.toString())
    }
}