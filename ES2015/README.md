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