// https://school.programmers.co.kr/learn/courses/30/lessons/147355

const solution = (t, p) => {
  let result = 0;
  let pL = p.length;

  for (let i = 0; i < t.length; i++) {
    let tempNum = t.slice(i, pL + i);
    if (tempNum.length !== pL) break;
    if (tempNum <= p) result++;
  }
  return result;
};
