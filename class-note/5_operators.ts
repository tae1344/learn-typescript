
// Union Type - 한 가지 이상의 타입을 정하고 싶을 때
let james: string | number | boolean;

function logMessage(value: string | number){
  // Type Guard 형태
  if(typeof value === 'number'){
    // 여기 안에서 value는 number 타입이다.(즉, 관련 api나 속성들 사용가능)
    value.toLocaleString();
  }
  if(typeof value === 'string'){
    value.toString();
  }
  throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);


interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  // Deloper 와 Person 둘 다 될수 있기에, TS에서는 공통된 속성(보장된 속성)만 제공한다!
  // 만약 모든 속성을 사용하고자 하면 Type Guard 형식을 사용해야 한다
  someone.name
}


// 인터셉션 타입 (&)
let iron: string & number; // -> never 타입
function askSomeone2(someone: Developer & Person) {
  // 타입 가드가 필요없이 모든 속성들을 바로 접근가능하다.
  someone.age
  someone.skill
  someone.name
}





