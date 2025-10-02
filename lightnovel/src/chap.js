load('config.js')
load('base64.js')
function execute(url) {
    let response = fetch(url)
    if(response.ok){
        let txt = response.text()
        let contentx = txt.match(/content":"(.*)","d/)[1]
        let datax = txt.match(/data":"(.*)","g/)
        if (datax && contentx){
            let content = contentx.replace(/\\n/gi, "<br>")
            let r = getContent(datax[1])
            let cons = gerSortContent(r)
            cons.forEach(item => content += item)

            return Response.success(content);
        }else{
            let doc = Html.parse(txt)
            let content = doc.select('#chapterContent p').html()
                .replace(/\n/gi, "<br>")
                .replace(/(\<br[\s]*\/?\>[\s]*)+/g, '<br>');
            return Response.success(content);
        }
    }
    return Response.error("Lỗi không xác định!"); 
}
function gerSortContent(r){
        // Khởi tạo biến để lưu trữ kết quả cuối cùng
    var sortContent = [];

    // Biểu thức chính quy để tìm các thẻ <t...>
    var i = /<t(\d{1,})>([^</>]{1,})<\/t(\d{1,})>/gi;

    // Lặp qua từng phần tử của mảng r
    for (var c = 0; c < r.length; c++) {
        var u = r[c];
        var match;
        if ((match = i.exec(u)) !== null) {
            var processedSegments = [];
            do {
                var order = parseInt(match[1], 10);
                var content = match[2].replace('&nbsp;', ' '); // Loại bỏ &nbsp;
                processedSegments.push({ order: order, content: content });
                match = i.exec(u);
            } while (match !== null);

            processedSegments.sort(function(a, b) {
                return a.order - b.order;
            });
            var x = processedSegments.map(function(segment) {
                return segment.content;
            }).join(" ");
            sortContent.push("<br>" + x);
        } else {
            sortContent.push(u);
        }
    }
    return sortContent
}
function getContent(str) {
    let decontent = Base64.decode(str.split('').reverse().join(''))
        .replace(/<br>|<br\/>|<p>|<\/p>/g, "\n")
        .replace(/\n{2,}/gi, "\n")
        .split("\n");
    return decontent;
}
