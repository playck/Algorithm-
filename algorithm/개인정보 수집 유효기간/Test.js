// https://school.programmers.co.kr/learn/courses/30/lessons/150370

const solution = (today, terms, privacies) => {
  let answer = [];
  let termsObj = {};
  let formattedToday = new Date(
    today.split(".")[0],
    Number(today.split(".")[1]) - 1,
    Number(today.split(".")[2]) + 1
  );

  for (let i = 0; i < terms.length; i++) {
    const [key, value] = terms[i].split(" ");
    termsObj[key] = Number(value);
  }

  for (let i = 0; i < privacies.length; i++) {
    let [date, term] = privacies[i].split(" ");

    date = new Date(
      date.split(".")[0],
      date.split(".")[1] - 1,
      date.split(".")[2]
    );
    date.setMonth(date.getMonth() + termsObj[term]);

    if (formattedToday > date) answer.push(i + 1);
  }

  return answer;
};
