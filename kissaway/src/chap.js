function execute(url) {
    const doc = fetch(url).html();
    let cid = doc.select('input[id="chapter"]').attr('value');
    var randomNum = generateRandomString(30);
    let response = fetch(`https://klz9.com/${randomNum}.iog?cid=${cid}`,{
        method : 'GET',
        headers: {
            referer: url,
        }
    });
    if (response.ok) {
        const doc2 = response.html();
        const el = doc2.select("img.chapter-img");
        const data = [];

        el.forEach((e) => {
            const linkImg = e.attr("src").replace('\n\r', '');
            data.push({
                "link": linkImg,
                "referer": "https://klz9.com"
            });
        });
        return Response.success(data);
    }
    
}
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}