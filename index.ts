const server = Bun.serve({
  fetch(req: Request): Response | Promise<Response> {
    return new Response(Bun.file("./index.html"));
  },
  port: process.env.PORT || 3000,
});
console.log(`Listening on http://localhost:${server.port} ...`);
