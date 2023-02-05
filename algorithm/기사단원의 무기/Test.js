// https://school.programmers.co.kr/learn/courses/30/lessons/136798

const solution = (numbers, limit, power) => {
  let result = 0;
  let nights = Array.from({ length: numbers }, (_, i) => i + 1);

  function getDivisors(num) {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisors.push(i);
        if (num / i != i) divisors.push(num / i);
      }
    }
    return divisors.length;
  }

  for (let night of nights) {
    let count = getDivisors(night);
    count <= limit ? (result += count) : (result += power);
  }

  return result;
};
