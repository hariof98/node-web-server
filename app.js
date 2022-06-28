const http = require("http");
const port = 3000;
const fs = require("fs"); // for all file handlings

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", "UTF-8", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("ERROR: Page Not Found!");
    } else {
      console.log("Request was made:" + req.url);
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, function (error) {
  if (error) {
    console.log("Something went wrong!", error);
  } else {
    console.log("Server is running on port", port);
  }
});
