// 1부터 100사이 자연수가 적힌 N장의 카드가 있다. 중복된 숫자를 가진 카드도 여러장 있을 수 있다
// 이 중 3장을 뽑아 각 카드의 적힌 수를 합한 값을 기록하고 그 값 중 K번째로 큰 수를 출력하세요

const solution = (n, k, card) => {
  let answer = 0;
  let temp = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let x = j + 1; x < n; x++) {
        temp.add(card[i] + card[j] + card[x]); // Set 자료구조에 값 넣어주는 메소드 .add
      }
    }
  }
  let sortedTemp = Array.from(temp).sort((a, b) => b - a);
  answer = sortedTemp[k - 1];
  return answer;
};

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
