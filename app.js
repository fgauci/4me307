const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>A Node.js Application</h1><h3>A demo application by Francesca Gauci</h3><h5>4ME307VT20 - Internet Architectures</h5>');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});