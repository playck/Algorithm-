// 10진수 N의 숫자가 들어오면 2진수로 변환해서 출력하세요

const solution = (n) => {
  let answer = "";
  function DFS(n) {
    if (n === 0) return;
    DFS(parseInt(n / 2));
    answer += n % 2;
  }
  DFS(n);
  return answer;
};

solution(125);
