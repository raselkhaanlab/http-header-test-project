const { createReadStream } = require("fs");
const http = require("http");
// Define username and password (you should replace these with your own authentication logic)
const username = "username";
const password = "password";

// Function to parse authorization header and extract credentials
function parseAuthorizationHeader(authorization) {
  if (!authorization) return null;

  const encodedCredentials = authorization.replace("Basic ", "");
  const decodedCredentials = Buffer.from(encodedCredentials, "base64").toString(
    "utf-8"
  );
  const [user, pass] = decodedCredentials.split(":");

  return { user, pass };
}

// Function to check if the provided credentials are valid
function isAuthorized(credentials) {
  return credentials.user === username && credentials.pass === password;
}

//create http server
const server = http.createServer((req, res) => {
  //set header content type
  const path = req.url;
  if (req.url === "/logout" && req.method === "GET") {
    // Clear credentials on the client side
    res.writeHead(401, { "WWW-Authenticate": 'Basic realm="Restricted Area"' });
    res.end("Loggedout successfully!\n");
  }
  if (path == "/") {
    const { headers } = req;
    const { authorization } = headers;

    // Parse authorization header
    const credentials = parseAuthorizationHeader(authorization);

    // Check if credentials are valid
    if (credentials && isAuthorized(credentials)) {
      // Authorized
      res.writeHead(200, { "Content-Type": "text/html" });
      return createReadStream("./server1.html").pipe(res, { end: true });
    } else {
      // Unauthorized
      res.writeHead(401, {
        "WWW-Authenticate": 'Basic realm="Restricted Area"',
      });
      res.end("Access denied. Please provide valid credentials.\n");
    }
  }
  if (path == "/api") {
    return res.end(JSON.stringify({ hello: "hi" }));
  }
});

server.listen(3000, () => console.log("Server 1 listen on port: ", 3000));
