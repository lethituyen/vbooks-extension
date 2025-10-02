function execute() {
    return Response.success([
        { title: "更新日期", input: "", script: "gen.js" },
        { title: "青文學", input: "3", script: "source.js" },
        { title: "漫畫", input: "5", script: "source.js" },
        { title: "BL", input: "1", script: "source.js" },
    ]);
}