
// TS 타입 선언 예시
let str: string = 'hello';
let num: number = 10;
let arr: Array<number> = [1,2,3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk'];
let items: number[] = [1,2,3];

// TS 튜플 - 모든 인덱승에 타입이 지정된 배열형태
let address: [string, number] = ['gangnam', 100];

// TS 객체
let obj: object = {};
// let person: object = {
//   name: 'capt',
//   age: 27
// };

let person: {name: string, age: number}={
  name: 'Thor',
  age: 200
}

// TS 진위값
let show: boolean = true;