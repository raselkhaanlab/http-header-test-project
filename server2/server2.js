const { createReadStream } = require("fs");
const http = require("http");

//create http server
const server = http.createServer((req, res) => {
  //set header content type
  const path = req.url;
  res.setHeader("Set-Cookie", [
    "cookie1=strict; Path=/; HttpOnly; SameSite=Strict;",
    "cookie2=lax; Path=/; HttpOnly; SameSite=Lax;",
    "cookie3=none; Path=/; HttpOnly; SameSite=None; Secure;",
  ]);
  res.setHeader("Access-Control-Allow-Origin", "https://xyz.com");
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "PUT");
  res.setHeader("Access-Control-Allow-Credentials", true);
  // res.setHeader("Strict-Transport-Security", " max-age=60; includeSubDomains");
  // res.setHeader("Access-Control-Expose-Headers", "*.");
  // res.setHeader("Clear-Site-Data", `"*"`);
  if (path.includes(".js")) {
    console.log("server 2 js requested");
    res.setHeader("Content-Type", "text/javascript");
    // res.setHeader("Cache-Control", "public, max-age=30");
    return createReadStream("./server2.client.js").pipe(res, { end: true });
  }
  res.setHeader("Content-Type", "text/html");
  return createReadStream("./server2.html").pipe(res, { end: true });

  //Add cors headers
  // if (path == "/") {
  // return createReadStream("./server2.html").pipe(res, { end: true });
  // }
  // if ("link" == path) {
  //   return createReadStream("./index1.html").pipe(res, { end: true });
  // }
});

server.listen(3000, () => console.log("Server 2 is listen on port: ", 3000));
