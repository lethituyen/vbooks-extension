function execute() {
    return Response.success([
        { title: "Truyện Mới", input: "truyen-moi", script: "gen.js" },
        { title: "Truyện Full", input: "truyen-hoan-thanh", script: "gen.js" },
        { title: "Truyện Sáng Tác", input: "truyen-sang-tac", script: "gen.js" },
    ]);
}