/*
 * stream api
 * 
 * Node.js의 스트림 API를 다룹니다.
 */

` 스트림은 이름처럼, 흐르듯이 동작하는 컬렉션입니다. 스트림은 한 번에 모든
  데이터를 얻을 수 없고, 한 번에 가져올 수 있는 것은 부분 뿐입니다.
`

// process.stdin.pipe(process.stdout);

` 위 코드를 Node.js REPL에서 실행하면 이상한 현상이 벌어집니다. 문자를 입
  력하면 같은 문자가 두 번 입력되는 모습이 보여집니다. 이는 스트림과 표준 입
  출력의 특징이 어우러진 결과입니다.
`

'ps -al | grep code | cat -n'

` 위 쉘 코드는 현재 실행 중인 프로세스의 목록을 불러온 다음, code라는 이름의
  프로세스를 찾아서 라인 번호를 붙인 뒤 출력합니다. 중간에 붙어 있는 | 기호는
  좌측의 실행 결과를 우측의 입력으로 제공할 수 있도록 하는 파이프입니다. 
  위에서 본 process.stdin.pipe 역시 동일한 역할을 합니다. 위 코드는 결국
  표준 입력을 그대로 표준 출력에 연결하고 있는 것입니다. 물론 계속해서 파이프
  를 연결하는 것도 가능합니다.
`

const { Readable, Writable, Duplex, Transform } = require('stream');

` 스트림에는 네 가지 타입이 존재합니다. 읽기 가능, 쓰기 가능, 양방향, 가공이
  그것입니다. 읽기 가능 스트림은 스트림으로부터 읽어들이는 것만 가능하고, 쓰
  기 가능 스트림은 반대로 쓰는 것만 가능하고, 양방향은 말 그대로 읽고 쓰는 것
  이 가능하고, 가공 스트림은 입력 데이터를 가공해서 출력합니다. 그리고 이 스트
  림들은 모두 EventEmitter의 인스턴스이기 때문에, 언제든 이벤트를 emit할
  수 있습니다.
`

const readableStream = new Readable({
  read(size) {
    this.push('I am node.js\n');
  },
});

readableStream.pipe(process.stdout);

` 위 코드를 실행하는 순간, I am node.js 문장이 계속해서 출력될 것입니다. 
  read를 통해 계속 읽기 요청이 들어오고, push 연산이 진행되기 때문입니다.
  저런 방법 외에도, 데이터가 준비되면 readableStream.on() 메서드를 통
  해 처리할 이벤트 (대표적으로 data, end)에 대한 콜백을 설정할 수 있습
  니다.
`
