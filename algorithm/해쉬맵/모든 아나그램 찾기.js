// 주어진 문자열(a,b) a에서 부분적으로 b의 아나그램이 되는 문자열 갯수를 찾으세요.

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

const solution = (a, b) => {
  let answer = 0;
  let SH1 = new Map();
  let SH2 = new Map();
  for (let x of b) {
    if (SH1.has(x)) SH1.set(x, SH1.get(x) + 1);
    else SH1.set(x, 1);
  }

  let len = b.length - 1;

  for (let i = 0; i < len; i++) {
    if (SH2.has(a[i])) SH2.set(a[i], SH2.get(a[i]) + 1);
    else SH2.set(a[i], 1);
  }
  let lt = 0;

  for (let rt = len; rt < a.length; rt++) {
    if (SH2.has(a[rt])) SH2.set(a[rt], SH2.get(a[rt]) + 1);
    else SH2.set(a[rt], 1);
    if (compareMaps(SH1, SH2)) answer++;
    SH2.set(a[lt], SH2.get(a[lt]) - 1);
    if (SH2.get(a[lt]) === 0) SH2.delete(a[lt]);
    lt++;
  }

  return answer;
};

let a = "bacaAacba";
let b = "abc";

solution(a, b);
