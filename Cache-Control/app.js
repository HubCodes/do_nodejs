/*
 * Cache-Control
 * 
 * http의 Cache-Control 헤더에 관해 설명합니다.
 */

` Cache-Control 헤더는 HTTP/1.1 명세에 정의되어 있으며, 캐싱 조건을 지정하는
  역할을 수행합니다. 여타 헤더와 마찬가지로, Cache-Control 헤더 역시 요청과
  응답 두 분류로 나뉩니다. 
`

` ** 요청 Cache-Control 헤더 옵션
  max-age=<seconds>
  max-stale[=seconds]
  min-fresh=<seconds>
  no-cache
  no-store
  no-transform
  only-if-cached

  1. max-age=<seconds>
  - 이 옵션은 리소스가 현재 시점으로부터 얼마나 유효할 지 정합니다. 

  2. max-stale[=seconds]
  - 더 이상 신선하다고 판단되지 않은 리소스를 받아들입니다. 만약 seconds옵션이
    정해져 있다면, '추가 수명'을 의미합니다.

  3. min-fresh=<seconds>
  - 클라이언트가 최소한 seconds초만큼 신선할 응답을 원한다는 것을 의미합니다.

  4. no-cache
  - 반드시 재검증 과정을 거치도록 합니다. 따라서 캐시된 사본이 존재하더라도, 
    일단 서버로 캐시된 사본이 유효한 지 검증하는 요청을 보내게 됩니다. 이 과정
    은 ETag를 사용해 이뤄집니다.

  5. no-store
  - 캐싱하지 않습니다.

  6. no-transform
  - Content-Encoding, Content-Range, Content-Type 헤더를 프록시가 변경하는
    것을 막습니다. 

  7. only-if-cached 
  - 클라이언트는 오직 캐시된 응답만을 원합니다. 

`

` ** 응답 Cache-Control 헤더 옵션
  must-revalidate
  no-cache
  no-store
  no-transform
  public
  private
  proxy-revalidate
  max-age=<seconds>
  s-maxage=<seconds>

  1. must-revalidate
  - 캐시는 캐시된 리소스를 사용하기 전에 기존 리소스가 신선한지 반드시 확인
    해야 합니다. 만료된 리소스는 사용될 수 없습니다.
  
  2. no-cache
  - 캐시된 리소스를 클라이언트에게 넘겨주기 전에 재검증 요청을 반드시 원 서버
    로 보내게 합니다.

  3. no-store
  - 리소스를 캐싱하지 않습니다.

  4. no-transform
  - Content-Encoding, Content-Range, Content-Type 헤더를 프록시가 변경하는
    것을 막습니다.

  5. public
  - 어떤 캐시든 이 응답을 캐시할 수 있습니다. 

  6. private 
  - 브라우저는 캐시할 수 있지만, 중간 캐시 서버들은 이 응답을 캐시할 수 없습니다.

  7. proxy-revalidate
  - must-revalidate와 같지만 프록시 등과 같은 공유 사용되는 캐시만 적용됩니다.

  8. max-age=<seconds>
  - seconds이후 응답이 신선하지 않게 됨을 의미합니다.

  9. s-maxage=<seconds>
  - max-age와 동일하지만 프록시와 같은 공유 사용되는 캐시만 적용됩니다.
`

const http = require('http');
http.createServer((req, res) => {
  res.setHeader('Cache-Control', 'max-age=300000');
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello, world!</h1>');
  res.end();
}).listen(8080);

` 위 코드를 실행하면 응답의 max-age가 300000초 (83.3시간) 인 응답이 전송됩니다.
`
