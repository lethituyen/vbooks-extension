function execute() {
    return Response.success([
        { title: "Cập Nhật", input: "update", script: "gen.js" },
        { title: "Tất cả", input: "All", script: "source.js" },
    ]);
}