load('config.js')
function execute() {
    let response = fetch(BASE_URL)
    if (response.ok){
        let el = response.html().select('.dropdown-menu li a')
        let data = []
        let count = 0;
        el.forEach(e => {
            if (count < 43) { 
                data.push({
                    title: e.text(),
                    input: e.attr('href').split('com').pop(),
                    script: 'gen.js'
                });
                count++;
            }
        });
        return Response.success(data)
    }
}