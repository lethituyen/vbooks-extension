function execute(url) {
    const sid = url.split('/').pop()
    let $1 = fetch(url).html()
    let token = $1.select('meta[name=csrf-token]').attr("content")
    let response = fetch(`https://www.myrics.com/authors/api_novel_detailed/${sid}`, {
        method: "POST", // GET, POST, PUT, DELETE, PATCH
        headers: {
            "X-Csrftoken": token,
            "referer": url
        },
    })
    let detail = response.json().data
    if(detail.finish_type === "連載中") var ongoing = true;
    else var ongoing = false;
    return Response.success({
        name: detail.title,
        cover: detail.image,
        author: detail.type,
        description: detail.long_summary,
        detail: detail.category+'<br>Views : '+detail.view_count,
        ongoing : ongoing,
        host: "https://tienvuc.vn"
    });
}