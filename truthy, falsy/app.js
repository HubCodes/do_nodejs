/*
 * truthy, falsy
 * 
 * 자바스크립트의 true(와 그렇게 취급되는 값들), false(와 그렇게 취급되는 값들)
 * 에 대해 설명합니다.
 */

if (!undefined) {
  console.log('1. !falsy');
}

if (!null) {
  console.log('2. !falsy');
}

if (!false) {
  console.log('3. !falsy');
}

if (!0) {
  console.log('4. !falsy');
}

if (!NaN) {
  console.log('5. !falsy');
}

if (!'') {
  console.log('6. !falsy');
}

` JS는 불린 타입이 존재합니다. 하지만, 불린 타입이 아닌 값들 역시 존재하죠.
  때문에 JS는 그러한 요소들을 불린 타입으로 바꿀 수 있게 해 놓았습니다. 위
  의 여러 조건문들은 그러한 요소들을 불린 취급한 예시입니다. 정확히는, JS에
  서 falsy로 취급되는 것들을 모아 두었습니다. 왜냐하면, 저것 외에는 모두 
  truthy로 취급되기 때문입니다. (심지어 빈 배열마저도!)
`

console.log(Boolean(!undefined));
console.log(Boolean(!null));
console.log(Boolean(!false));
console.log(Boolean(!0));
console.log(Boolean(!NaN));
console.log(Boolean(!''));
