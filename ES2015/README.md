# Wave.js ES2015 Style Guide

## Rules

### Array

- 배열 생성시 생성자 패턴을 사용하지 않습니다.

```javascript

// bad
const cities = new Array('seoul', 'tokyo', 'bangkok');

// good
const cities = ['seoul', 'tokyo', 'bangkok'];

```

### Brace

- `if`, `while` 문을 `single-line`으로 사용하는 경우에도, 반드시 `curly brace`를 포함하여야 합니다.

```javascript

// bad
if (cities.length) destroy(cities[0]);

while (cities.length) destroy(cities(cities.length - 1));

// good
if (cities.length) { destroy(cities[0]) };

while (cities.length) { destroy(cities(cities.length - 1)) };

```

### Comma

- `Object`, `Array` 등을 선언 또는 할당시 multiline으로 작성하는 경우 마지막 속성에도 `,`를 추가해야 합니다.

> 소스 버전관리 도구를 사용시, `trailling comma`를 사용하지 않으면, 단순 `comma`의 추가도 변경내역으로 표시되어, 불필요한 이력을 발생시킬 수 있습니다.

```javascript

// bad
const cities = [
  'seoul',
  'tokyo',
  'bangkok'
];

const city = {
  name: 'seoul',
  code: 01
};

const niceCities = ['paris','berlin',];

// good
const cities = [
  'seoul',
  'tokyo',
  'bangkok',
];

const city = {
  name: 'seoul',
  code: 01,
};

const niceCities = ['paris','berlin'];

```

- `multiline` 으로 작성 시 `comma`의 위치는 해당 속성, 인자의 뒤로 위치시킵니다.

```javascript

// bad
const cities = [
  'seoul'
  , 'tokyo'
  , 'bangkok'
];

// good
const cities = [
  'seoul',
  'tokyo',
  'bangkok',
];

```

- `comma` 사용 시 반드시 그 앞은 공백이 없어야 하며, 뒤로 `1 Space`를 추가합니다.

```javascript

// bad
const cities = ['seoul','tokyo','bangkok'];

// good
const cities = ['seoul', 'tokyo', 'bangkok'];

```

### Grammar

- `var`대신 `const` 또는 `let`을 사용합니다.
- 기본 `const`를 사용하며, 재할당이 필요한 변수에만 예외적으로 `let`을 사용하도록 합니다.

> 변수의 유효범위를 효과적으로 지정하여, 의도하지 않은 변수 오염등을 효과적으로 방지할 수 있습니다.

```javascript

// bad
var count = cities.length;
if (count > 0) {
  var result = destroyAll(cities);
}

// good
const count = cities.length;
if (count > 0) {
  const result = destroyAll(cities);
}

```

- `debugger`구문은 개발환경에서만 사용하며, production 단계에서는 해당 구문을 반드시 삭제합니다.

```javascript

// bad in production
if (cities.length) {
  debugger;
}

// good
if (cities.length) {
  //debugger; or remove this statement.
}

```

- 변수 사용시 해당 변수가 선언된 구문이전에 사용하지 않도록 주의합니다.

> ES6 환경에서는 `const`, `let`의 사용을 통해 변수 유효범위가 명확해졌으므로, hoisting을 의도하고 작성하는 경우 예기치 못한 오류 및 버그가 생길 수 있습니다.

```javascript

// bad
console.log(cities);
const cities = ['seoul', 'tokyo', 'bangkok'];

// good
const cities = ['seoul', 'tokyo', 'bangkok'];
console.log(cities);

```

- 사용되지 않는 변수는 삭제하거나 주석 처리를 합니다.
- Rules: `no-unused-vars`

> 사용되지 않는 변수는 불필요한 공간을 차지하며, 코드 해석에 혼동되는 요소가 됩니다.

```javascript
// bad
function getCityName() {
  const city = 'seoul'; // warning!

  return 'seoul';
}

// good
function getCityName() {
  // const city = 'seoul'; // annotation or delete

  return 'seoul';
}
```

### Newline

- 메서드 체이닝(method chainging)을 사용하는 경우, 줄바꿈을 이용해 구분합니다.
- 줄바꿈시에도 들여쓰기 규칙은 그대로 유지합니다. (2spaces)

> git diff 사용 시 변경된 부분을 명확히 파악할 수 있습니다.

```javascript

// bad
$('body').append('<div/>').style({ maginTop: '1px' }).show();

// good
$('body')
  .append('<div/>')
  .style({ maginTop: '1px' })
  .show();

```

- 다음 구문뒤에는 줄바꿈을 추가해 구분합니다.
  * directive ('use strict' 등)
  * const, let, var
- 각 구문들을 연속으로 사용 가능하지만, 이외의 경우에는 줄바꿈을 추가해야합니다.

```javascript

// bad
'use strict'
const myCity = 'seoul';

// good
'use strict'

const myCity = 'seoul';

// bad
let myCity = 'seoul';
myCity = 'tokyo';

// good
let myCity = 'seoul';

myCity = 'seoul';

// good
'use strict';
'use asm';

// good
const country = 'korea';
let myCity = 'seoul';

myCity = 'seoul';

```

- `return` 문 사용시 반드시 줄바꿈 후 사용합니다.

> pros. 명확한 구분을 통해 가독성을 높일 수 있습니다.

```javascript

// bad
const destoryCity = (cityName) => {
  destory(cityName);
  return `You destroied ${cityName}!!`;
};

// good
const destoryCity = (cityName) => {
  destory(cityName);

  return `You destroied ${cityName}!!`;
};

```

### Object

- `single-line` 으로 Object를 작성하는 경우, `curly-brace` 안쪽으로 `1 space`씩을 포함시키도록 합니다.

```javascript

// bad
const cityModel = {name: 'string', year: 'number'};

// good
const cityModel = { name: 'string', year: 'number' };

```

### Operators

- 동등연산자(`==`) 대신, 일치연산자(`===`)를 사용합니다.

```javascript

// bad
if (cities[0] == 'seoul') {
  cities.push('seoul');
}

// good
if (cities[0] === 'seoul') {
  cities.push('seoul');
}

```

### Whitespace

- 들여쓰기는 `2 spaces`를 사용합니다.

> `Callback Hell`, `Split panels` 등에 적합합니다. 4에서 2로 바꿀때 낯설긴 했지만 익숙해지는데 오래 걸리지는 않았습니다. :)

```javascript

// bad
function getCity() {
.return 'seoul';
}

// bad
function getCity() {
....return 'seoul';
}

// good
function getCity() {
..return 'seoul';
}

```

- `SwitchCase` 들여쓰기

```javascript

// bad
switch (city) {
case 'seoul':
  // ...
  break;
case 'tokyo':
  // ...
  break;
case 'bangkok':
  // ...
  break;
default:
  // ...  
}

// good
switch (city) {
  case 'seoul':
    // ...
    break;
  case 'tokyo':
    // ...
    break;
  case 'bangkok':
    // ...
    break;
  default:
    // ...  
}

```

- `Function` 선언 시 익명함수(Anonymous)는 괄호 앞에 반드시 `1 space`를 추가합니다. 기명함수(named)의 경우에는 괄호 사이의 공백을 허용하지 않습니다.

```javascript

// Anonymous
// bad
const getCity = function() {
  return 'seoul';
};

// good
const getCity = function () {
  return 'seoul';
}

// Named
// bad
function getCity () {
  return 'seoul';
}

// good
function getCity() {
  return 'seoul';
}

```