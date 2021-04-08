const http = require("http");

const hostname = "sub1.gobruce.us";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  if (req?.headers?.cookie?.includes("bruce")) {
    res.end("I SEE the bruce cookie");
  } else {
    res.setHeader("Set-Cookie", "bruce=123456");
    res.end("I SET the bruce cookie");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
