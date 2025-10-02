load('config.js');
function execute(url) {
    let data = [];
    let doc = fetch(url).html();
    const anchors = doc.select('[role=navigation] a[href*="pagechap="]');
    if(anchors.length === 0) {
        return Response.success([url]);
    }
    let lastNumber = -1;
    anchors.forEach(anchor => {
        const href = anchor.attr('href'); 
        const match = href.match(/pagechap=(\d+)/);
        if (match) {
            const pageNumber = parseInt(match[1], 10);
            lastNumber = Math.max(lastNumber, pageNumber);    
        }
    });
    for (let i = 1; i <= lastNumber; i++) {
        data.push(url + "?pagechap=" + i);
    }
    return Response.success(data);
}
