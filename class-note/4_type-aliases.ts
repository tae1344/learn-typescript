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