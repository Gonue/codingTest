absolutes = [4, 7, 12];
signs = [true, false, true];

function solution(absolutes, signs) {
  for (let i = 0; i < signs.length; i++) {
    signs[i] === true ? (absolutes[i] = +absolutes[i]) : (absolutes[i] = -absolutes[i]);
    console.log(signs[i]);
    console.log(absolutes);
  }
  var answer = absolutes.reduce((acc, curr) => acc + curr);
  console.log(answer);
  // return answer;
}

solution(absolutes, signs);
