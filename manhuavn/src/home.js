function execute() {
    return Response.success([
        { title: "Cập nhật", input: "2", script: "gen.js" },
        { title: "Mới nhất", input: "0", script: "gen.js" },
        { title: "Hot nhất", input: "1", script: "gen.js" },
    ]);
}