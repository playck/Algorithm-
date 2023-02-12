// https://school.programmers.co.kr/learn/courses/30/lessons/17681

const solution = (n, arr1, arr2) => {
  let answer = [];
  let formattedArr1 = [];
  let formattedArr2 = [];

  for (let i = 0; i < arr1.length; i++) {
    let temp = arr1[i].toString(2);
    if (temp.length > n) {
      formattedArr1.push(temp);
    } else {
      formattedArr1.push("0".repeat(n - temp.length) + temp);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let temp = arr2[i].toString(2);
    if (temp.length >= n) {
      formattedArr2.push(temp);
    } else {
      formattedArr2.push("0".repeat(n - temp.length) + temp);
    }
  }

  for (let i = 0; i < n; i++) {
    let x1 = formattedArr1[i];
    let x2 = formattedArr2[i];
    let temp = [];
    for (let j = 0; j < n; j++) {
      let t = x1[j] + x2[j];
      if (t > 0) {
        temp.push("#");
      } else {
        temp.push(" ");
      }
    }
    answer.push(temp.join(""));
  }

  return answer;
};
