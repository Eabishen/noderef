const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our Home Page");
  }

  if (req.url === "/about") {
    res.end("This is about");
  }

  res.end(
    `<h1 class='text-primary'>page not yet created</h1> <p>Go back to homepage</p>`
  );
});

server.listen(5000);
