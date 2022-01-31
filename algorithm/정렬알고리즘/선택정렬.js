// N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
// 정렬 방법은 선택정렬입니다.
// 오름차순으로 정렬된 수열을 출력합니다.

const solution = (arr) => {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }

  return answer;
};

let arr = [17, 8, 9, 21, 37, 30];

solution(arr);
