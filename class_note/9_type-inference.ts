// 타입 추론 기본
var a = 'abc';

function getB(b = 10) {
  var c = 'hi';
  return b + c;
}

10+'10' // 1010

//타입 추론 2
interface Dropdown<T> {
  value: T;
  title: string;
}

var shoppingItem: Dropdown<string> = {
  value: 'abc',
  title: 'hello'
}

//타입 추론 3
interface Dropdownn<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  description: 'a',
  value: 'ab',
  tag: 'C'
}