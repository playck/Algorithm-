// 서로 같은 길이의 문자열이 아나그램인지를 알아보는 알고리즘을 구현하세요

const solution = (str1, str2) => {
  let answer = "Y";
  let SH = new Map();
  for (let x of str1) {
    if (SH.has(x)) SH.set(x, SH.get(x) + 1);
    else SH.set(x, 1);
  }
  for (let x of str2) {
    if (!SH.has(x) || SH.get(x) === 0) return "N";
    else {
      SH.set(x, SH.get(x) - 1);
    }
  }
  return answer;
};

let a = "AbaAeCe";
let b = "baeeACA";

solution(a, b);
