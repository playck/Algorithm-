// https://school.programmers.co.kr/learn/courses/30/lessons/118666

const solution = (survey, choice) => {
  let answer = "";
  let personality = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  const getPoint = (survey, point) => {
    switch (point) {
      case 1:
        return (personality[survey[0]] += 3);
      case 2:
        return (personality[survey[0]] += 2);
      case 3:
        return (personality[survey[0]] += 1);
      case 4:
        return true;
      case 5:
        return (personality[survey[1]] += 1);
      case 6:
        return (personality[survey[1]] += 2);
      case 7:
        return (personality[survey[1]] += 3);
    }
  };

  const getBigPoint = (a, b) => {
    if (personality[a] > personality[b]) {
      answer += a;
    } else if (personality[a] < personality[b]) {
      answer += b;
    } else if (a.charCodeAt(0) > b.charCodeAt(0)) {
      answer += b;
    } else if (a.charCodeAt(0) < b.charCodeAt(0)) {
      answer += a;
    }
  };

  for (let i = 0; i < survey.length; i++) {
    getPoint(survey[i], choice[i]);
  }

  getBigPoint("R", "T");
  getBigPoint("C", "F");
  getBigPoint("J", "M");
  getBigPoint("A", "N");

  return answer;
};
