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

### Comma

- `Object`, `Array` 등을 선언 또는 할당시 multiline으로 작성하는 경우 마지막 속성에도 `,`를 추가해야 합니다.

> 소스 버전관리 도구를 사용하는 경우, `trailling comma`가 없는 경우, 단순 `comma`의 추가도 변경내역으로 표시되어, 불필요한 이력을 발생시킬 수 있습니다.

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

### Whitespace

- 들여쓰기는 `2 spaces`를 사용합니다.
- `Callback Hell`, `Split panels` 등에 적합합니다.  
  처음에 4를 사용하다가 2로 바꿀때 낯설긴 했지만 익숙해지는데 오래 걸리지는 않았습니다. :)

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