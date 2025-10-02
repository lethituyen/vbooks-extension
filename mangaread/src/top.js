function execute(url, page) {
    if (!page) page = '0';
    const doc = fetch('https://www.mangaread.org/wp-admin/admin-ajax.php',{
        method : "POST",
        body : {
            "action": "madara_load_more",
            "page": page,
            "template": "madara-core/content/content-archive",
            "vars[orderby]": "meta_value_num",
            "vars[paged]": "1",
            "vars[posts_per_page]": "38",
            "vars[post_type]": "wp-manga",
            "vars[post_status]": "publish",
            "vars[meta_key]": "_latest_update",
            "vars[sidebar]": "right",
            "vars[manga_archives_item_layout]": "default"
        }
    }).html();
    const data = [];
    var el = doc.select(".page-listing-item .page-item-detail")
    el.forEach(e =>{
        data.push({
            name: e.select("h3.h5 a").first().text(),
            link: e.select("h3.h5 a").first().attr("href"),
            cover: e.select(".item-thumb img").first().attr("src"),
            description: e.select(".list-chapter > div:nth-child(1) a").text(),
            host: "https://www.mangaread.org"
        })
    });
    return Response.success(data, parseInt(page) + 1 + "")
}