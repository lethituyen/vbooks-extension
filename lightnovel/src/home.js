function execute() {
    return Response.success([
        { title: "Truyện Dịch", input: "/truyen-dich-ds", script: "gen.js" },
        { title: "Truyện Convert", input: "/truyen-convert-ds", script: "gen.js" },
        { title: "Truyện Full", input: "/truyen-full-ds", script: "gen.js" },
    ]);
}