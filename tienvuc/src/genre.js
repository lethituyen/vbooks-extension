load('config.js')
function execute() {
    let response = fetch(BASE_URL+'/api/categories/all');
    if (response.ok){
        let allCate = response.json();
        const data = [];
        allCate.forEach(item => {
            data.push({
                title: item.name,
                input: item.slug,
                script: 'cate.js'
            });
        });
        return Response.success(data);
    }
    return null;
}