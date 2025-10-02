function execute(key, page) {
    if(!page) page = '1';
    data = JSON.stringify({"page_limit":12,"text":key,"category":[],"genres":[],"status":0,"word":0,"time":"","sort":"desc","sort_type":0,"page":page})
    //let response = POST("",{data})
    let response = fetch('https://www.myrics.com/search/search', {
        method: "POST", // GET, POST, PUT, DELETE, PATCH
        body: data
    })
    let $ = response.json()
    let list = [];
    let allBook = $.data.list;
    allBook.forEach(book => {
        list.push({
            name: book.novel_title,
            link: `/novels/${book.id}`,
            cover: book.image,
            description: book.pen_name,
            host: 'https://www.myrics.com',
        })
    });
    return Response.success(list)
}