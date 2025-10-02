function execute(url) {
    var doc = fetch(url).html();
    var imgs = []
    content = doc.select('.comicpage img')
        .forEach(e => {
            let img = e.attr("data-original");
            if(img.indexOf('top.jpg') == -1)
                imgs.push(img)
        });
    return Response.success(imgs);

}