load('config.js')
function execute() {
    let response = fetch(`https://mhvn.truyensieuhay.com/api/story/getlisttheloaiinweb`)
    if (response.ok){
        let el = response.json().data
        let data = []
        el.forEach( e =>{
            data.push({
                title: e.Name,
                input: e.Id,
                script: 'source.js'
            });
        })
        return Response.success(data)
    }
}