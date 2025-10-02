function execute(url) {
    let doc = fetch(url).html();
    let content = doc.select(".smiley").html();
    content = content.replace(/\n/gm, '<br>')
            .replace(/&(nbsp|amp|quot|lt|gt|bp|emsp);/g, "")
            .replace(/(<br\s*\/?>( )?){2,}/g, '<br>')
            .replace(/<img[^>]*>/gi, '')
            .replace(/<\/?p[^>]*>/gi, '');
    return Response.success(content);
}