load("config.js");
function execute(url) {
    if(url.indexOf('manhuavn.top') > 0){
        var sid = fetch(url).text().match(/setuprate\('([0-9a-f]{24})',\d+(\.\d+)?\);/)[1]
    }else{
        var sid = url.split('/').pop()
    }
    let response = fetch(`https://mhvn.truyensieuhay.com/api/android/getlistchapterandroid`,{
        method: 'POST',
        body: {storyid: sid, ipage: '1', ipagesize: '10000', sort: '0'}
    });
    if (response.ok) {
        let chapters = [];
        response.json().data.list_chap.forEach(item => {
            chapters.push({
                name: item.Name,
                url : `${BASE_API}/${item.Id}`,
                pay : item.iChapVip === 1
            });
        });
        return Response.success(chapters.reverse());
    }
    return null;

}