// prices는 배열이며, 각 요소는 매일의 주식 가격입니다.
// 만약 한 번만 거래할 수 있다면(사고 팔수 있다면)
// 제일 큰 이익은 얼마일까요?

const prices = [7, 1, 5, 3, 6, 4];

const stock = (prices) => {
  let profitResutlArr = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      profitResutlArr.push(profit);
    }
  }
  return Math.max(...profitResutlArr);
};
