load("config.js");
function execute(key, page) {
    if (!page) page = '1';
    let response = fetch(BASE_URL + "/api/advanced-search", {
        queries: {
            q: key,
            per_page: "10",
            page: page,
        }
    });
    if (response.ok) {
        let json = response.json();
        let currentPage = json.current_page;
        let lastPage = json.last_page;

        let books = [];
        json.data.forEach(item => {
            books.push({
                name: item.name,
                link: BASE_HOST + '/truyen/' + item.slug,
                cover: item.cover,
                description: item.author.name + ', ' + item.chapters_count + ' chương',
            });
        });
        if (currentPage < lastPage) {
            return Response.success(books, (currentPage + 1) + "");
        }

        return Response.success(books);
    }
    return null;
}
