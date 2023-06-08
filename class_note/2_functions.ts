// 함수의 파라미터에 타입을 정의하는 방식
function sum1(a: number, b: number) {
  return a + b;
}

// 함수의 반환 값에 타입을 정의하는 방식
function sum2(a, b): number{
  return 10;
}

//합수에 타입을 정의하는 방식
function sum3(a: number, b: number): number {
  return a + b;
}


//JS는 sum3(10,20,30,40); 이렇게 파라미터를 여러개 더 넣어도 상관없지만
//TS는 여러게+ or 적게- 못넣고 타입 정의한 만큼만 넣을 수 있다.

// 합수의 옵셔널 파라미터 - 1개도 넣고싶고 2개도 넣고싶을 때
function log(a: string, b?: string) {

}