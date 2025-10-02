load("config.js");

function execute(url) {
    let slug = url.split('/').pop();
    let bookId = fetch(`${BASE_API}/api/story-by-slug/${slug}`).json().id;
    let newtoken = fetch(BASE_HOST+'/api/auth/session').json().accessToken
    let response = fetch(`${BASE_API}/api/story/${bookId}/chapter-app?per_page=99999&page=1&order_by=ASC`,{
        method: 'GET',
        headers: {
            authorization: 'Bearer ' + newtoken,
        }
    });
    if (response.ok) {
        let chapters = [];
        response.json().forEach(item => {
            chapters.push({
                name: item.name,
                url: READER_URL + '/api/stories/'+slug+'/chapters/' + item.chapter_number,
                pay: item.price > 0
            });
        });
        return Response.success(chapters);
    }
    return null;

}