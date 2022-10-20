// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/92334

const solution = (id_list, report, k) => {
  const newRepo = [...new Set(report)];
  let out = [];
  let mail = Array(id_list.length).fill(0);
  let count = Array(id_list.length).fill(0);

  for (let repo of newRepo) {
    let outUser = repo.split(" ")[1];
    let outIdx = id_list.indexOf(outUser);
    count[outIdx] += 1;

    if (count[outIdx] >= k) {
      out.push(id_list[outIdx]);
    }
  }

  for (let repo of newRepo) {
    let a = repo.split(" ")[0]; // 신고자
    let b = repo.split(" ")[1]; // 신고당한사람

    if (out.indexOf(b) >= 0) {
      let idxA = id_list.indexOf(a);
      mail[idxA] += 1;
    }
  }
  return mail;
};
