/*
 * hasOwnProperty
 * 
 * JS Object.prototype 에 존재하는 hasOwnProperty에 대해 설명합니다.
 */

const obj = {
  aaa: 'aaa',
};

console.log(obj.hasOwnProperty('aaa'));
console.log(Object.prototype.hasOwnProperty.call(obj, 'aaa'));
console.log(Object.prototype.hasOwnProperty.call(obj, 'bbb'));


` hasOwnProperty는 this에 바인딩된 객체가 인자로 전달된 것과 같은 프로퍼티가
  존재하는 지 확인하고, 여부에 따라 불 값을 반환합니다.
`

console.log('aaa' in obj);

` in 연산자 역시 비슷한 역할을 수행하지만, 결정적인 차이는 in 연산이 프로토타입 
  체인을 따라가서 프로퍼티를 찾는다는 데에 있습니다. 따라서, 그러한 행동을 원하지
  않는다면 hasOwnProperty의 사용이 필수라고 할 수 있습니다.
`