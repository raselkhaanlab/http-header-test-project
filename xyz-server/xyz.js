const { createReadStream } = require("fs");
const http = require("http");

//create http server
const server = http.createServer((req, res) => {
  console.log("server4");
  //set header content type
  res.writeHead(200, { "Content-Type": "text/html" });
  return createReadStream("./xyz.html").pipe(res, { end: true });
});

server.listen(3000, () => console.log("xyz server listen on port: ", 3000));
