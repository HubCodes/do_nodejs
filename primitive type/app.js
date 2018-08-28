/* 
 * primitive type
 *
 * js의 원시 타입에 관해 설명합니다.
 */

const a = 1;

const b = 'String';

const c = true;

const d = null;

const e = undefined;


` 위 객체들은 각각 순서대로 Number, String, Boolean, null, undefined 타입입니
  다. 위 타입들이 바로 JS의 다섯 가지 원시 타입들입니다. 그 자체로는 메서드를 가지고 
  있지 않습니다. 그렇다면, 문자열을 슬라이스할 때 흔히 사용하는 아래와 같은 코드는 어떻
  게 동작할까요? 
`

console.log(b.slice(0, 3));

` 위와 같은 경우, js는 임시 String 객체를 만듭니다. 그리고 그것에 연산을 적용한 다음,
  임시 객체를 삭제하는 방식으로 동작하게 됩니다. 이는 숫자나 불린 역시 마찬가지입니다.
  null과 undefined는 특이한 경우로, 어떠한 연산도 가지고 있지 않습니다.
`

const x = a;

let y = b;

y = 'Str';

console.log(b);

console.log(y);

` 참조 타입과 달리 원시 타입 객체들은 복사 시 참조 대신 값이 그대로 복사됩니다. 따라서 
  한 쪽을 수정하는 일이 다른 쪽의 '수정'을 야기하지 않습니다.
`
