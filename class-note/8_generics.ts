// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10); // 숫자 10
// logText('hi'); // 문자열 hi

//-------------------------
// 제네릭 문법
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

logText('hi'); // function logText<"hi">(text: "hi"): "hi"
logText<string>('hi'); // function logText<string>(text: string): string

//-------------------------
// 기존 타입 정의 방식과 제네릭의 차이점
// 함수 중복 선언 방식 문제점!!
// 동일한 코드를 단순히 타입을 받기 위해 중복하는 불필요함이 존재하는 경우
function logText2(text:string) {
  console.log(text);
  return text;
}

function logNumber(num: number) {
  console.log(num);
  return num;
}

logText2('a');
const num = logNumber(10);


// 유니온 타입을 이용한 선언 방식의 문제점!
function logText3(text:string | number) {
  console.log(text);
  return text;
}
// a: string | number 처럼 2가지의 타입을 중복하기에 한 타입에 대한 메서드나 api를 쓰지 못한다?
const a = logText3('a');
logText3(10);

//----------------------

interface Dropdown {
  value: string;
  selected: boolean;
}
const obj: Dropdown = { value: "10", selected: false };


interface Dropdown2<T> {
  value: T;
  selected: boolean;
}
const obj2: Dropdown2<string> = { value: 'abc', selected: false };



// 제네릭 타입 제한
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach((text) => {
    console.log(text);
  })
  return text;
}
logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;

}

function logTextLength2<T extends LengthType> (text: T): T {
  text.length;
  return text;
}


// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name");