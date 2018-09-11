/*
 * constructor function
 * 
 * js의 생성자 함수에 관해 설명합니다.
 */

// #1
const obj1 = {
  a: 'Hello',
};

// #2
function Constructor() {
  this.a = 'Hello';
}
const obj2 = new Constructor();

console.log(obj1.a);
console.log(obj2.a);

` JS에서 객체를 생성하는 방법은 여러 가지가 있습니다. 첫 번째는 obj1과 같이,
  객체 리터럴을 통해 생성하는 방법이고, 두 번째는 생성자 함수를 이용하는 방법
  입니다. 두 방법 모두 각각의 특징을 가지고 있지만, 여기서는 생성자 함수에 관
  해 보도록 하겠습니다.
`

function People(name, age, height, weight) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.weight = weight;
  this.eat = function eat(food) {
    console.log('Eating food', food);
  };
}

const p1 = new People('Hub', 23, 172, 65);
const p2 = new People('Good', 22, 182, 70);

p1.eat('bulgogi');
p2.eat('juice');

` 생성자 함수는 마치 클래스와 비슷한 역할을 할 수 있고, 위 예시에서도 어디서
  많이 본 듯한(?) 클래스 예시를 볼 수 있습니다. 
`

People.prototype = new Constructor();

const p3 = new People('ya', 22, 177, 64);
p3.a = 12345;
const p4 = new People('ya', 22, 177, 64);
console.log('p3.a: ', p3.a);
console.log('p4.a: ', p4.a);

` 위 코드는 상속을 받는 예시입니다. 
`
