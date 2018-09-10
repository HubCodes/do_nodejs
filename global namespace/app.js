/*
 * global namespace
 * 
 * JS에서 전역 네임스페이스가 무엇이고, 어떻게 찾아내는지 설명합니다.
 */

console.log(global.process.argv);

` 환경에 따라 세부 내용은 다르지만 이 app.js 파일을 실행하면 node 바이너리의
  위치와 app.js 파일의 위치가 담긴 배열이 출력됩니다. 이를 통해 node.js의 
  process 객체가 전역 네임스페이스에 포함되어 있음을 알 수 있습니다.

  그런데 네임스페이스가 무엇일까요? 네임스페이스는 이름의 충돌을 막기 위한 장치
  로, 각각의 영역에 있는 이름들은 그 영역과 그 하위 영역에서 참조될 수 있습
  니다. 아래는 네임스페이스 계층 구조를 간단히 모식합니다.

                    | global |
                        |
              -----------------------
              |                     |
          | ns1 |               | ns2 |
              | 
    -----------------------------
    |           |               |
  | ns3 |    | ns4 |          | ns5 |

  위 구조에서 global 네임스페이스의 모든 요소들은 하위의 어떤 네임스페이스에서
  라도 참조될 수 있지만, ns1의 이름으로 지정된 대상은 ns2에서는 볼 수 없습니다.
  따라서, ns2에서 ns1의 요소를 참조할 때는 ns1.element와 같이 접근합니다.

  JS는 클로저를 통해 네임스페이스를 격리하는 모듈 패턴
  (https://github.com/HubCodes/do_nodejs/tree/master/closure)
  이 존재합니다.

  
  전역 네임스페이스가 네임스페이스 계층 구조의 최상위 요소라면, 이를 코드로 표
  현하고 싶을 때 어떻게 할 수 있을까요? C++ 이라면 ::std와 같이 했겠지만,
  JS는 명시적인 네임스페이스 선언을 가지고 있지 않습니다.
`

function getGlobal() {
  return this;
}

var self = getGlobal();
console.log(self.process.argv);

` 위 코드와 같은 결과를 출력합니다. 이는 this 바인딩의 함정(?) 과도 관련된 내용
  인데, 다른 어떤 this 힌트 (예: bind) 도 없을 경우 this가 전역 객체에 바인
  딩되는 특성을 이용한 것입니다.
`

function wantToGetGlobal() {
  'use strict';
  return this;
}

console.log(wantToGetGlobal());

` 물론 엄격 모드에서는 통하지 않습니다. 
`
