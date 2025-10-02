load('config.js');
function execute(url, page) {
    if (!page) page = '1';
    let response = fetch(`${BASE_API}/api/newstory/getBoLoc`,{
        method: 'POST',
        body: {ListTheLoai: ';'+url, iStatus: '-1', iSort: '2', ipage: page, ipagesize: '25'}
    });
    if (response.ok) {
        let json = response.json().data;
        let books = [];

        json.list.forEach(item => {
            books.push({
                name: item.StoryName,
                link: BASE_API + '/' + item.Id,
                cover: BASE_IMAGE+'/'+item.StoryImage,
                description: item.StoryTitleLastChap,
            });
        });
        if(json.list.length === 0){
            var next = null;
        }else{
            var next = parseInt(page) + 1 + ""
        }
        return Response.success(books, next);
    }
    return null;
}