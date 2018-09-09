/*
 * object destructuring
 * 
 * JS의 object destructuring에 관해 설명합니다.
 */

let a, b;
[a, b] = [1, 3];
console.log(a); // 1
console.log(b); // 3

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

` 위와 같은 방법을 이용하면, 손쉽게 객체를 분해하거나 스왑할 수 있습니다.
  만약 남는 부분이 있다면 다음과 같이 할 수 있습니다.
`

let rest;

[a, b, ...rest] = [3, 5, 7, 9, 11];
console.log(rest);  // 7, 9, 11

` 물론 함수의 반환값을 무시하는 것도 가능합니다.
`

function f() {
  return [3, 5, 7];
}

[a, , b] = f();
console.log(a);
console.log(b);

const obj = {
  a: 'a',
  b: 'b',
};

({ a, b } = obj);
// { a, b } = obj; 작동하지 않습니다. { }가 블록으로 인식됩니다!
console.log(a); // a
console.log(b); // b
