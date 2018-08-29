/*
 * closure
 * 
 * JS의 대표적 특징 중 하나인 클로저에 관해 설명합니다.
 */

` 클로저는 함수 안에서 정의된 함수로, 자신이 생성될 때의 환경을 기억하는 특징
  을 가지고 있습니다. 
`

function outer(arg) {
  return function (inner) {
    return inner + arg;
  };
}

console.log(outer(3)(5));

` 가장 간단한 클로저의 예시입니다. outer 함수는 익명함수를 만들어 리턴하고 있
  는데, 반환된 익명함수는 자신의 외부 환경을 기억하고 있습니다.
`

function iam_module() {
  let name = '';
  let height = 0;
  function changeName(newName) {
    name = newName;
  }
  function changeHeight(newHeight) {
    height = newHeight;
  }
  return {
    setName(name) {
      changeName(name);
    },
    getName() {
      return name;
    },
    setHeight(height) {
      changeHeight(height);
    },
    getHeight() {
      return height;
    },
  };
}

const human = iam_module();
const human2 = iam_module();
human.setHeight(170);
human2.setHeight(180);
console.log(human.getHeight());
console.log(human2.getHeight());

` 클로저를 이용하면 다른 언어의 접근 제한자를 어느 정도 흉내낼 수 있습니다.
  위의 예시에서, 클로저가 캡처한 외부 환경(즉 iam_module 함수의 지역 변
  수) 이 iam_module 함수에서 전역으로 제어가 반환된 뒤에도 유지되면서
  코드 상에서 접근은 불가능하지만 메서드를 이용해 상태를 컨트롤하는 것이 가
  능한 상태가 만들어졌습니다. 마치 private 같습니다.
`

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 300);
}

` 위 코드는 예상과 달리 5를 5번 출력하게 됩니다. 그 이유는 클로저가 반복 
  변수 i를 캡처하여 자유 변수로 만들지 않았기 때문입니다. var는 블록 스코
  프가 아닌 함수 스코프로 변수를 만들기 때문에, 루프가 스코프를 만들지 않
  게 되고, 결국 클로저는 아무것도 캡처하지 않습니다. 클로저는 외부 스코프
  의 변수를 캡처하지만, 전역 스코프의 것은 캡처하지 않습니다.
`

// #1
for (var j = 0; j < 5; j++) {
  (function (x) {
    setTimeout(function() {
      console.log(x);
    }, 300);
  })(j);
}

// #2
for (let k = 0; k < 5; k++) {
  setTimeout(function () {
    console.log(k);
  }, 300);
}

` 첫 번째 방법은 IIFE를 이용하여, 클로저가 캡처 가능한 외부 스코프를 만들어
  위에서 보았던 문제를 해결하고 있습니다. 두 번째 예시는 let를 이용하여 블
  록 스코프를 만듭니다. 따라서 클로저는 k를 잘 캡처하고 있습니다.
`
