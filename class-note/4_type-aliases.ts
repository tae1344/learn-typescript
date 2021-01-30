// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
}

let john: Person = {
  name: 'john',
  age: 30
}

type MyString = string;
let str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean};
function getTodo(todo: Todo){

}

// 타입 별칭 vs 인터페이스 : 가장 큰 차이는 타입의 확장 가능 / 불가능
