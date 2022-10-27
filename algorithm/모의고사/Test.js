// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/42840

const solution = (answers) => {
  let answer = [];

  const a1 = [1, 2, 3, 4, 5];
  const a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let result = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (a1[i % a1.length] === answers[i]) result[0]++;
    if (a2[i % a2.length] === answers[i]) result[1]++;
    if (a3[i % a3.length] === answers[i]) result[2]++;
  }

  const maxValue = Math.max(...result);

  let idx = 0;
  for (let i = 0; i < result.length; i++) {
    if (maxValue === result[i]) answer[idx] = idx + 1;
    idx++;
  }

  return answer;
};

solution([1, 2, 3, 4, 5]);
