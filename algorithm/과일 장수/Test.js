// https://school.programmers.co.kr/learn/courses/30/lessons/135808

const solution = (k, m, score) => {
  let answer = 0;
  let temp = [];
  score = score.sort((a, b) => b - a);
  for (let x of score) {
    temp.push(x);
    if (temp.length === m) {
      let price = temp[temp.length - 1] * m;
      answer += price;
      temp = [];
    }
  }

  return answer;
};
