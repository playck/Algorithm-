// https://school.programmers.co.kr/learn/courses/30/lessons/42889

const solution = (N, stages) => {
  let stageFailRatio = [];
  for (let i = 1; i < N + 1; i++) {
    let stage = stages.filter((el) => el >= i).length;
    let clear = stages.filter((el) => el === i).length;
    stageFailRatio.push({ ratio: clear / stage, stage: i });
  }
  stageFailRatio.sort((a, b) => {
    if (a.ratio === b.ratio) return a.stage - b.stage;
    else return b.ratio - a.ratio;
  });
  return stageFailRatio.map((obj) => obj.stage);
};
