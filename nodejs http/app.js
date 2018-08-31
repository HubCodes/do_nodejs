/*
 * nodejs http
 * 
 * Node.js의 http API에 관해 설명합니다.
 */


` Node.js는 스트림 기반의 http API를 제공합니다. 이 API는 이벤트 이미터를
  구현하고 있습니다. 따라서, 쉽게 이벤트 기반 http 서버를 구현하는 토대로
  이 API를 활용 가능합니다.
`

const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  const { method, url, headers } = req;
  ` req 객체는 ReadableStream을 구현하고 있습니다. 즉, 네트워크로부터 전송
    되어 오는 http 메시지를 스트림 취급하여 읽어들일 수 있다는 것입니다.
    req.method는 http 메서드를 나타내고, url은 서버 상 자원의 위치를 나타
    냅니다.
  `

  console.log('method:', method);
  console.log('url:', url);

  const userAgent = headers['user-agent'];
  ` headers 객체는 요청 http 메시지의 헤더를 나타냅니다. node.js는 헤더를
    파싱할 때 모두 소문자로 바꾼다는 사실을 유념해야 합니다. 
  `

  let body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  });
  req.on('end', () => {
    body = Buffer.concat(body).toString();
  });

  ` 만약 요청 바디가 필요할 경우 (POST나 PUT 메서드와 같이) 바디 데이터를 받
    기 위해서는 스트림으로부터 데이터를 읽어들여야 합니다. 이를 위해 Node.js
    가 제공하는 인터페이스는, data 이벤트 리스너에 제공된 콜백을 통해 Buffer
    객체를 넘겨주는 것입니다. 서버 프로그램은 쪼개져 오는 버퍼를 모아, 그것이
    문자열이라는 사실을 알고 있다면 body를 위와 같은 코드로 가져올 수 있게
    됩니다.
  `
  
  req.on('error', (err) => {
    ` 이 곳에서는 에러 객체를 받아 에러 상황을 핸들링할 수 있습니다. 
    `
  });

  res.statusCode = 500;
  res.setHeader('Content-Type', 'text/plain');
  res.writeHead(200, {
    'Content-Type': 'text/json'
  });
  res.write('Lorem ipsum');
  res.write('dolor sit');
  res.end('amet');
  ` 위 코드는 response 객체를 이용하는 방법에 대해 설명하고 있습니다. 
    statusCode 필드를 통해서는 응답 상태 코드를 설정할 수 있습니다.
    setHeader 메서드를 통해서는 헤더를 설정할 수 있고, writeHead를 통해서
    응답 코드와 명시적인 헤더 설정이 가능합니다. write를 통해서는 출력 스트림
    에 쓰는 것처럼 데이터를 보내다가, end를 통해 데이터의 끝을 알립니다.
  `
  req.pipe(res);
  ` 둘 모두 스트림이라는 특징을 활용하면 이러한 코드도 가능합니다. 이를 통해
    에코 (echo) 동작을 쉽게 구현할 수 있습니다.
  `
});
