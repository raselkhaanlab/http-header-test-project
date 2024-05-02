const { createReadStream } = require("fs");
const http = require("http");

//create http server
const server = http.createServer((req, res) => {
  //set header content type
  const path = req.url;
  res.setHeader("Access-Control-Allow-Origin", "https://*.local.com");
  if (path.includes(".js")) {
    res.setHeader("Content-Type", "text/javascript");
    return createReadStream("./server3.client.js").pipe(res, { end: true });
  }

  res.setHeader("Content-Type", "text/html");
  return createReadStream("./server3.html").pipe(res, { end: true });
});

server.listen(3000, () => console.log("Server 3 listen on port: ", 3000));
