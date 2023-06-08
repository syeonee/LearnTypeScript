//JS 문자열 선언
var str = 'hello';

//TS 문자열 선언
let str1: string = 'hello';

//JS 배열 선언
let arr: Array<number> = [1,2,3];
let heroes: Array<string> = ['Capt', 'Thor','Hulk'];
let items: number[] = [1,2,3]; //배열 리터럴로도 사용 가능하다


//TS 튜플 - 들어갈 타입을 여러개로 지정해줄 수 있다.
let addresss: [string, number] = ['gangnam',30];

//TS 객체
let obj: object = {};

let person: {name: string, age: number} = {
  name: 'thor',
  age: 100
}


//TS 진위값
let show: boolean = true;