const tls = require('tls');
const fs = require('fs');
const { Transform } = require('stream');

const options = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem'),
  rejectUnauthorized: true,
};

const stream = new Transform({
  transform(chunk, encoding, callback) {
    this.push('Data: ' + (chunk.toString()));
    callback();
  }
});

const server = tls.createServer(options, (socket) => {
  socket.write('Hello, world!\n');
  socket.setEncoding('utf8');
  socket.pipe(stream).pipe(socket);
});

server.listen(8080);
