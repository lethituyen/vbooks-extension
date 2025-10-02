load('config.js')
function execute(url) {
    var slug = url.split('/').pop();
    let reponse = fetch(BASE_URL+'/api/reading/'+slug+'/chapters');
    if (reponse.ok){
        let json = reponse.json();
        let allChap = json.docs
        let list = [];
        allChap.forEach(chap => {
            let buy = chap.coins > 0 & chap.isBought == false ? true : false;
            list.push({
                name: 'Chương '+chap.num+': '+chap.name,
                url: url+'/chuong-'+chap.num,
                pay: buy,
                host: BASE_URL
            })
        });
        return Response.success(list);
    }
    return null;
}