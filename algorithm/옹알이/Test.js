// https://school.programmers.co.kr/learn/courses/30/lessons/133499

const solution = (babbling) => {
  let answer = 0;
  let double = ["ayaaya", "yeye", "woowoo", "mama"];

  while (babbling.length) {
    let word = babbling.pop();
    if (double.some((v) => word.includes(v))) continue;
    word = word
      .replaceAll("aya", "1")
      .replaceAll("ye", "2")
      .replaceAll("woo", "3")
      .replaceAll("ma", "4");
    word = word.replace(/[1234]/g, "");
    if (word.length === 0) answer++;
  }

  return answer;
};
