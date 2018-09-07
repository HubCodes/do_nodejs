/*
 * Date object
 * 
 * JS의 내장 Date객체에 관해 설명합니다.
 */

const nowObject = new Date();
const nowString = Date();

console.log('new Date() prototype: ', nowObject.constructor.prototype);
console.log('Date() prototype: ', nowString.constructor.prototype);

` new Date() 를 통해서는 Date 객체가 새로 생성되고, Date() 를 통해서는 현재 
  시간의 문자열 표현(UTC 기준)이 반환됩니다. 이는 new Date().toString() 을
  통해서도 얻을 수 있습니다.
`

console.log(new Date(Date.UTC(2018, 0, 21)));

` Date.UTC()를 이용하면 인자로 제공된 시각에 대한 타임스탬프를 반환합니다. Date
  생성자는 타임스탬프를 받아들이므로, UTC 시간을 기준으로 Date 객체를 이용하고 싶
  다면 위와 같은 방법을 사용할 수 있습니다. 주의할 점은, month(달)는 0부터 시작
  한다는 점입니다. 즉, 0~11의 범위를 갖습니다.
`

console.log(new Date(Date.parse('2018-01-21T13:20:34.216+09:00')));

` Date.parse()를 이용하면 문자열로부터 타임스탬프를 생성하여 Date객체를 만드는
  데에 사용할 수 있습니다. ECMA-262에 따르면, Date.parse가 받아들일 수 있는
  문자열 포맷은 다음과 같이 정의됩니다:

  YYYY  0000부터 9999사이의 값을 갖는 년도 숫자
  -     년-월-일 포맷 사이의 하이픈
  MM    01부터 12사이의 달
  DD    01부터 31사이의 일
  T     시각 요소의 시작을 알리는 구분자
  HH    00부터 24사이 값을 가지는 시간
  :     시:분:초 포맷 사이의 콜론
  mm    00부터 59까지의 분
  ss    00부터 59까지의 초
  .     밀리세컨드 구분자
  sss   밀리세컨드
  Z     타임존. Z이면 UTC, +혹은 -를 HH:mm 포맷에 붙여 타임존 표기 가능
`

console.log(nowObject.toDateString());

` 년월일을 영어 문자열로 반환합니다. 
`

console.log(nowObject.toTimeString());

` 시분초와 타임존을 영어 문자열로 반환합니다.
`
