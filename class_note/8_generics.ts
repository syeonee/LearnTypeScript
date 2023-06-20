function logText(text){
  console.log(text);
  return text;
}

logText(10);
logText('하이');
logText(true);

function logText2<T>(text: T): T {
  console.log(text);
  return text;
}

logText2<string>('hi');


//단순히 파라미터의 타입을 다르게 받기 위해서 코드를 중복으로 사용하여 함수를 생성
function logText4(text: string){
  console.log(text);
  return text;
}

function logNumber(num: number){
  console.log(num);
  return num;
}

//유니온 타입을 사용해서 여러가지 타입을 파라미터로 줄 수 있게 해주더라도
// 여러가지 타입의 공통된 속성만 사용해서 별루
function logNumber2(num: number){
  console.log(num);
  return num;
}


function logTextt<T>(text: T): T {
  console.log(text);
  return text;
}

const strr = logTextt<string>('abcv');
strr.split('')
const login = logTextt<boolean>(true);


interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<number> = {value: 10, selected: true};


//제네릭 타입 제한 1 - 

function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}

logTextLength<string>(['hi', 'abc']);

//제네릭 타입 제한 2
interface LengthType {
  length: number;
}

function logTextLengthh<T extends LengthType>(text: T): T {
  text.length;
  return text;
}


// 제네릭 타입 제한 3
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T{
  return itemOption;
}

getShoppingItemOption('name');