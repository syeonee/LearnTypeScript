// enum Shoes {
//   Nike,
//   Adidas
// }
// 이렇게 값을 지정해주지 않으면 맨처음 값에 0이 들어가고 이후에는 1씩 더해진다.

enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스'
}

var myShoes = Shoes.Nike;
console.log(myShoes);

//

enum Answer {
  Yes = 'Y',
  No = 'N'
}

function askQuestion(answer: Answer) {
  if (answer == Answer.Yes){
    console.log('정답입니다.');
  }
  if (answer === Answer.No){
    console.log('오답입니다.');
  }
}

askQuestion(Answer.Yes);
// askQuestion('Yes');