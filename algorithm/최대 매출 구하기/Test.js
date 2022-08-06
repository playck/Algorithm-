// 기간(N)이 10이고 K=3이면
// N의 기간동안 연속된 K일의 매출이 가장 높은 금액을 구하세요.

const solution = (k, arr) => {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
};

let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
solution(3, arr);
