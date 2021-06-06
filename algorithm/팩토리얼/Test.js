// 재귀 알고리즘 구현
// 재귀를 사용하여 팩토리얼을 구현하세요.

const factorial = (n) => {
  if (n === 0) return 1;

  return n * factorial(n - 1);
};
