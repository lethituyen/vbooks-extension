function execute(url) {
    let cid = url.split('/').pop()
    let response = fetch('https://mhvn.truyensieuhay.com/api/story/getDetailChapterPostSec', {
        method: 'POST',
        body: {sChapterID: cid}
    })
    if(response.ok){
        let imgs = [];
        let json = response.json().data
        if(json.currentchap.ChapContent.length === 0){
            imgs.push('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4kgxo8Z2RBMLmkue7X7LtDmGEDLzPMNj3ex6qnaODTSeGvZtFxwjCXF4dqd9SxgWHJvBrJK5YImLR01b-iJSiSQ7KPOA-viJwSkbiZ27NSaU2Jl1UsQW6T0JcaFewv5v8yIT0aqN4hrdDs8URrTddk6Mx0MZFHIbpz0pTSUJLQ3dApoHLfRYVQj580ks/s0/thongbaocung.jpg')
            return Response.success(imgs)
        }
        let ccontent = json.currentchap.ChapContent
        let doc = Html.parse(ccontent)  
        let el = doc.select('img')
        el.forEach(e =>{
            imgs.push(e.attr('src'))
        })
        return Response.success(imgs)
    }
}