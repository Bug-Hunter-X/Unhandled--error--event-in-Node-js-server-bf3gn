const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

const port = process.env.PORT || 3000;

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});