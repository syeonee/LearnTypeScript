class Person {
  constructor(name, age){
    console.log('생성 되었습니다.');
    this.name = name;
    this.age = age;
  }
}

var seho = new Person('세호', 30);
console.log(seho);