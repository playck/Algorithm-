// https://school.programmers.co.kr/learn/courses/30/lessons/67256

const solution = (numbers, hand) => {
  let result = [];
  let keypad = {
    1: [0, 3],
    2: [1, 3],
    3: [2, 3],
    4: [0, 2],
    5: [1, 2],
    6: [2, 2],
    7: [0, 1],
    8: [1, 1],
    9: [2, 1],
    "*": [0, 0],
    0: [1, 0],
    "#": [2, 0],
  };

  function findKeyDistance(targetKey, handKey) {
    return (
      Math.abs(keypad[targetKey][0] - keypad[handKey][0]) +
      Math.abs(keypad[targetKey][1] - keypad[handKey][1])
    );
  }

  // 현재 키 위치
  let keyL = "*";
  let keyR = "#";

  for (let num of numbers) {
    let answer = "";
    if (num % 3 === 1) {
      answer = "L";
      keyL = num;
    } else if (num % 3 === 0 && num !== 0) {
      answer = "R";
      keyR = num;
    } else {
      const left = findKeyDistance(num, keyL);
      const right = findKeyDistance(num, keyR);

      if (left > right) {
        answer = "R";
        keyR = num;
      } else if (left < right) {
        answer = "L";
        keyL = num;
      } else {
        if (hand == "left") {
          answer = "L";
          keyL = num;
        } else {
          answer = "R";
          keyR = num;
        }
      }
    }
    result.push(answer);
  }
  return result.join("");
};
