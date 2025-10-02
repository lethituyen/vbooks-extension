function execute() {
    return Response.success([
        {title: "Cập nhật", input: "https://www.mangaread.org", script: "top.js"},
        {title: "Manga", input: "https://www.mangaread.org/manga-genre/manga", script: "gen.js"},
        {title: "Manhwa", input: "https://www.mangaread.org/manga-genre/manhwa", script: "gen.js"},
        {title: "Manhua", input: "https://www.mangaread.org/manga-genre/manhua", script: "gen.js"}
    ]);
}