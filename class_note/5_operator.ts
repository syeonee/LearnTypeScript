//연산자를 이용한 타입 정의
//타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는 과정
function logMessage(value: string){
  console.log(value);
}

var sehos: string | number | boolean;
function logMessage2(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('string or number x');
}

logMessage2('hello');
logMessage2(100);

//유니온 타입의 특징
interface Developerr {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

const askSomeone = (someone: Developerr | Person) => {
  someone.name;  //유니온 타입으로 여러 타입이 변수에 들어갈 수 있는 경우에는 공통 속성만 사용할 수 있다.
  // someone.skill;   
  // someone.age;
}

askSomeone({name: 'dev', skill: 'ts'});
askSomeone({name: 'person', age: 20});

//인터섹션 - 모든 타임을 하나로 합친 타입 
const askSomeone1 = (someone: Developerr & Person) => {
  someone.name;  //Developer 와 Person 모두 만족해서 skill,age속성에 에러가 생기지 않는다
  someone.skill;   
  someone.age;
}

askSomeone({name: 'dev', skill: 'ts', age: 20});



