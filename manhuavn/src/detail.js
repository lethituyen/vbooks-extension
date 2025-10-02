load("config.js");
function execute(url) {
    if(url.indexOf('manhuavn.top') > 0){
        var sid = fetch(url).text().match(/setuprate\('([0-9a-f]{24})',\d+(\.\d+)?\);/)[1]
    }else{
        var sid = url.split('/').pop()
    }
    let response = fetch(`${BASE_API}/api/android/getdetailstoryandroidwithkhung?sStoryID=${sid}`);
    if (response.ok) {
        let json = response.json().data.story;
        let genres = [];
        json.StoryTheLoai.forEach(e => {
            genres.push({
                title: e.TenTheLoai,
                input: e.Id,
                script: "source.js"
            });
        });
        return Response.success({
            name: json.StoryName,
            cover: BASE_IMAGE+json.StoryImage,
            author: json.author,
            description: json.StoryDescription,
            genres: genres,
            detail: json.StarRate + " đánh giá<br>" + json.StoryTitleLastChap + "<br>" + json.StoryUpdateTime,
            ongoing: json.IsFull === 0
        });
    }
    return Response.success('Many Request!');
}
