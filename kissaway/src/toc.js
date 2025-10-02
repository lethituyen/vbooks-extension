function execute(url) {
    const MID_URL_REGEX = /-([^.]+)\.html/;
    const match = MID_URL_REGEX.exec(url);
    const mangaId = match[1];
    var randomStr = generateRandomStr(25);
    var response = fetch(`https://klz9.com/${randomStr}.lstc?slug=${mangaId}`,{
        method : 'GET',
        headers: {
            referer: url,
        }
    })
    if(response.ok){
        const doc = response.html()
        var el = doc.select("a.chapter")
        let list = [];
        el.forEach(item =>{
            list.push({
                name: item.text(),
                url: item.attr('href'),
                host: 'https://klz9.com'
            })
        })
        return Response.success(list.reverse());
    }
    return Response.error("Lõi");
}
function generateRandomStr(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}