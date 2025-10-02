function execute(url) {
    const sid = url.split('/').pop()
    let $1 = fetch(url).html()
    let token = $1.select('meta[name=csrf-token]').attr("content")
    let page =1
    let list = []
    let totalpage =2
    while(page<=totalpage){
    data= {
        "page_limit":12,
        "id":sid,
        "sort":"asc",
        "page":page++
       }
    let response = fetch(`https://www.myrics.com/novels/menu`, {
        method: "POST", // GET, POST, PUT, DELETE, PATCH
        headers: {
            "X-Csrftoken": token,
            "referer": url
        },
        body : JSON.stringify(data)
    })
    let $ = response.json().data
    totalpage =$.total_page
    $.list.forEach((book) => {
        list.push({
            name: book.title,
            url: "https://www.myrics.com/chapters/"+ book.id,
            pay: book.coin!="0",
        })  
    })
    }
    return Response.success(list)
}