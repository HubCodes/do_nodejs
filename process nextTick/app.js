/*
 * process nextTick
 * 
 * Node.js의 process.nextTick에 대해 설명합니다.
 * 
 */

process.nextTick(() => {
  console.log("Hello, world!");
});

` Node.js 공식 문서에 따르면, process.nextTick은 항상 이벤트 루프가 진행되기
  전에 콜백을 실행합니다. 이러한 특성이 무엇을 보장해줄까요?
`

const fs = require('fs');

fs.readFile(__filename, (err, data) => {
  // something to do
  console.log("Before");

  process.nextTick(() => console.log("Hello, world!"));

  console.log("After");
});

` Before, After가 출력된 이후 Hello, world!가 출력됩니다. 그 이유는 
  process.nextTick이 poll에서 실행되고 있었을 readFile의 콜백의 나머지 부분 
  다음에 코드가 실행되는 것을 보장하면서도, 이벤트 루프가 진행되기 이전에 콜백
  을 실행하는 것을 보장하기 때문입니다.
`