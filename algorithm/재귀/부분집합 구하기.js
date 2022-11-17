const solution = (n) => {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  function DFS(v) {
    if (v === n + 1) {
      // 부분집합 종착역
      let temp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) temp += i + " ";
      }
      temp && answer.push(temp.trim());
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer;
};

solution(3);
