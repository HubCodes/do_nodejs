/*
 * setImmediate
 * 
 * Node.js의 setImmediate 함수에 관해 설명합니다.
 */

` Node.js하면 떠오르는 몇 가지 특징들이 있습니다. 비동기, 콜백, 이벤트 기반,..
  setImmediate는 그 중에서도 이벤트와 관련이 있는 함수입니다. 왜냐하면, 이벤트
  루프의 특정한 단계가 지나면 반드시 호출되도록 만들어져 있기 때문입니다.
`

setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});

` 이 코드의 실행 순서는 어떻게 될까요? 아마, 아무도 모를 것이라고 생각합니다. 
  setTimeout(callback, 0)과 setImmediate(callback) 을 실행하고 있는데,
  어떤 I/O 작업의 끝부분에 이 코드들이 배치된 것이 아니기 때문입니다. 그렇다면
  정의상 setTimeout은 0ms가 지나면 언제든(결국 언제든) 호출될 수 있고, 
  setImmediate는 이벤트 루프에서 I/O를 처리하고 등록된 콜백을 실행하는 단계
  가 끝나면 호출되도록 만들어져 있기 때문에, 어떤 콜백도 등록되지 않았고, 어떤
  I/O 작업도 없는 상황에서 실행 순서를 예측할 수는 없을 것입니다. 
`

const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});

` 그렇다면 I/O 작업 종료 직후 콜백 안에서 이 스크립트를 실행되도록 한다면 
  어떻게 될까요? setImmediate는 I/O 단계가 끝나면 실행되도록 만들어져 있다는
  사실과, setTimeout은 I/O 단계에서 등록될 경우 I/O 단계의 처리 순서상
  (실행이 필요한 타이머를 실행한 '다음에' 콜백 처리) 다음 번 I/O 단계로 실행
  이 미루어지게 됩니다. 
`
