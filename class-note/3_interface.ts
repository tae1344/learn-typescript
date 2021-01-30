interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
let seho: User ={
  age: 22,
  name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User){
  console.log(user);
}
const iron = {
  name: '아이언맨',
  age: 100
}
getUser(iron);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;

sum = function(a: number, b: number): number {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10;


// 딕셔너리 패턴
interface StringRegexDictionary {
  // key : value
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}



// 인터페이스 확장
interface Person{
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

let capt: Developer = {
  name: 'cpat',
  age: 22,
  language: 'ts'
}
