// 반장 투표 결과 가장 많은 표를 가진 사람을 리턴하세요
// Hash Map 사용
const solution = (arr) => {
  let answer;
  let SH = new Map();
  for (let x of arr) {
    if (SH.has(x)) {
      SH.set(x, SH.get(x) + 1);
    } else {
      SH.set(x, 1);
    }
  }
  let max = 0;
  for (let [key, val] of SH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
};

const arr = ["B", "A", "C", "B", "B", "C", "C", "A", "B"];

solution(arr);
