/*
 * Object prototype
 * 
 * JS의 프로토타입에 관해 설명합니다.
 */

` JS에는 프로토타입이라고 하는, 다른 프로그래밍 언어에서 찾기 힘든 독특한
  특징이 존재합니다. 프로토타입을 통해 객체가 할 수 있는 행동이 정의되고
  객체의 상태 또한 정의된다는 점에서는(특히 '부모' 프로토타입에 의해 상태
  와 행동이 확장되는 형태를 취할 때는) 마치 클래스와 비슷한 느낌입니다.
`

function Foo() {
  this.a = 0;
  this.b = 'default constructor';
}

Foo.prototype.var1 = 10;

Object.defineProperty(Foo.prototype, 'var2', { value: 12 });

let obj = new Foo();
console.log(obj.var1);
console.log(obj.var2);

` 위 코드는 생성자 함수와 프로토타입을 통해 새로운 객체를 만들고 속성에 접근
  하는 예시입니다. 
`

let obj2 = new obj.__proto__.constructor(); // same as `new Foo.prototype.constructor();`
console.log(obj2.var1);
console.log(Foo.prototype == obj2.__proto__);   // true
console.log(Foo.prototype.constructor == Foo);  // true
console.log(obj2.__proto__);

` 프로토타입을 이루는 요소에는 실제 프로토타입의 역할을 하는 프로토타입 객체와,
  상위 단계의 프로토타입 객체를 가리키고 있는 프로토타입 링크가 있습니다.
  31라인의 코드와 주석이 그러한 특징을 나타내고 있는데, obj의 __proto__가
  곧 상위 단계의 프로토타입 객체(여기서는 Foo.prototype)을 가리키고 있으
  므로 생성자 함수를 호출할 수 있게 됩니다. 여기서 __proto__ 가 바로 프로
  토타입 링크이고, 프로토타입 객체는 Foo.prototype 입니다.
`
