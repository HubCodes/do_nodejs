/*
 * map, filter, reduce
 * 
 * 자바스크립트 배열에서 사용 가능한 위 세 가지 메서드를 설명합니다.
 */

const array = [3, 5, 7, 2, 11, 8];

console.log(array.filter((x) => x % 2 == 0));
` filter 메서드는 배열을 순회하며 배열 원소를 전달된 콜백함수로 넘기는데, 
  콜백함수의 반환값이 참이라면 그 원소를 새로 생성되는 배열에 넣고, 거짓이
  라면 건너뜁니다.
`

console.log(array.filter((_, i) => i > 3));
console.log(array.slice(4));
` filter에 넘기는 콜백은 다양하게 오버로딩될 수 있는데, 이 예시는 두
  번째 인수로 인덱스를 받을 수 있도록 한 것입니다. 인덱스가 3보다 크다면 
  참 값을 반환하므로, 아래의 slice와 같은 결과를 얻게 됩니다.
`

console.log(array.map((x) => x / 2));
` map 메서드는 전달된 콜백에 배열 원소를 전달합니다. map은 새로 생성되는 
  배열에 콜백의 반환값을 추가해가는 형태로 작동합니다. map 역시 콜백을 여
  러 형식으로 받아들이도록 설계되었습니다.
`

console.log(array.reduce((base, x) => base + x));
` reduce는 약간 특이합니다. 마치 다른 프로그래밍 언어에서 본 fold 계열 
  메서드를 떠올리게 하는데, 콜백의 첫 번째 인자로는 '누산' 된 결과를, 두 
  번째 인자로는 순회 중인 배열에서 꺼내진 값을 전달합니다. 위 예시는 배열
  에서 합을 구하고 있습니다.
`

console.log(array.reduce((base, _, i) => {
  if (i > 3) {
    base.push(array[i]);
  }
  return base;
}, []));

` filter의 동작을 reduce로도 흉내낼 수 있습니다. 위 예시는 콜백 다음의
  두 번째 인자인 initialValue에 []를 넘겼습니다.
`