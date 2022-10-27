// https://school.programmers.co.kr/learn/courses/30/lessons/132267

// 갖다주는 빈병 = a
// 리턴 콜라 = b
// 가지고 있는 콜라병 = n

const solution = (a, b, n) => {
  let answer = 0;

  while (n >= a) {
    let remain = n % a;
    n = parseInt(n / a) * b;
    answer += n;
    n += remain;
  }

  return answer;
};

solution(2, 1, 20);
