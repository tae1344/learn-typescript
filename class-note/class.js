

class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log('생성 완료');
    this.name = name;
    this.age = age;
  }
}

let tae = new Person('태연', 20); // 생성 완료
console.log(tae);