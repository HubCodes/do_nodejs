/*
 * this 바인딩
 * 
 * js의 this와 this바인딩 규칙을 설명합니다.
 */

` this란?
  다른 프로그래밍 언어들을 접한 경험이 있다면, this가 하는 역할에 대해 
  익숙할 것입니다. 객체의 상태를 관리하기 위한 강력한 도구이죠. this를
  통해 우리는 전역적으로 보여질 필요가 없는 수많은 상태와 흐름들을 보호
  하는 것이 가능해졌으니까요.

  저는 js를 처음 접했을 때, js가 가진 '객체 기반' 이라는 특성을 접하고
  한동안 그것을 완전히 이해했다고 착각하고 있었습니다. 다른 언어에서 접해
  본 적이 있다고 생각한 거죠. 하지만 js에서 this의 특성 덕분에 어떤 일
  이 가능한지 확인하고 나서, 그 생각을 바꾸게 되었습니다. 
`

console.log(this);
` 위 코드는 nodejs에서는 global 객체로, 브라우저에서는
  window 객체로 출력됩니다. 즉 nodejs에서는 바인딩된 
  전역 객체가 global이고, 브라우저에서는 window라는 것인데 이는 사용 
  환경상의 이유로 차이가 난다고 볼 수 있습니다. 
`

function foo() {
  console.log(this.a)
}

let _this = {
  a: 0,
  f: foo
};

_this.f();
` 암시적 바인딩
  간단하게 말해 점 왼쪽에 오는 객체가 this가 됩니다.
`

let _thos = {
  a: 0
};


foo.call(_thos);
` 명시적 바인딩
  Function.prototype.call을 이용한 방법으로, 첫 번째 인수가 this가 됩니다.
`

foo.bind(_thos)();
` 명시적 바인딩
  Function.prototype.bind를 이용한 방법으로, 마찬가지로 첫 번째 인수가 this
  이지만 한 번 바인딩되면 this가 고정되는 특징을 가지고 있습니다. 
`

foo.apply(_thos);
` 명시적 바인딩
  마찬가지로 프로토타입에 존재하는 apply를 이용한 방법으로, 첫 번째 인수가 this
  이고 함수에 추가로 넘길 인수가 필요하다면 배열로 묶어서 전달합니다. 소개한 셋 
  모두, 원본 함수는 변경되지 않습니다.
`

function Constructor(bar) {
  this.a = bar;
  this.f = foo;
  return this; // 딱히 필요하지는 않다
}

let baz = new Constructor('good');
baz.f();
` new 바인딩
  생성자 함수를 통해 반환된 객체에 바인딩됩니다.
`

