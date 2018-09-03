/*
 * strict mode
 * 
 * JavaScript의 strict mode에 관해 설명합니다.
 */

'use strict';

` use strict 선언은 JS 인터프리터에게 '엄격 모드' 로 불리우는, 몇 가지 제약
  사항 (하지만 더 안전한) 이 적용된 해석 모드를 활성화하게 만듭니다. 이 선언은
  항상 최상단 (함수 또는 스크립트의) 에 위치해야 하며, 선언을 취소할 수는 없습
  니다. 엄격 모드와 반대되는 모드는 일반 모드라고 부릅니다.
`

foo = 3;

` 이 코드는 엄격 모드가 아니었다면 동작했을 테지만, 엄격 모드에서는 선언되지 않은
  변수에 접근하는 것이 허용되지 않습니다. 이 외에도 엄격 모드에는 몇몇 안전장치가
  추가되는데, 다음은 그 예시입니다.
`

with (foo) {
  // do something with foo
}

// 읽기 전용 프로퍼티: 에러!
var bar = {
  get a() {
    return 0; 
  },
};
bar.a = 3;

// 같은 이름의 매개변수를 만들고 있습니다.
function f(a, a) {

}

var someOctal = 03;
// 대신에..
var someOctalGood = 0o3;

