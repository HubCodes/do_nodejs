const tls = require('tls');
const fs = require('fs');

const options = {
  ca: [ fs.readFileSync('server-cert.pem') ]
};

var socket = tls.connect(8080, 'localhost', options, () => {
  console.log('client connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket);
  process.stdin.resume();
});
socket.setEncoding('utf8');
socket.on('data', (data) => {
  console.log(data);
});

socket.on('end', () => {
  console.log('Ended')
});
