function solution(s) {
  let str = s.toUpperCase().split("");
  if (!str.includes("P") && !str.includes("Y")) {
    return true;
  }
  let countP = 0;
  let countY = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "P") {
      countP++;
    } else if (str[i] === "Y") {
      countY++;
    }
  }
  if (countP === countY) {
    return true;
  } else {
    return false;
  }
}
