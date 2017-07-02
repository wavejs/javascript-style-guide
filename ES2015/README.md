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

### Whitespace

- 들여쓰기는 `2 speces`를 사용합니다.
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