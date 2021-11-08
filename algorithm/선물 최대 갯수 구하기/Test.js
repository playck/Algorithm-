// 가지고 있는 예산은 한정되어 있고
// 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지를 구하자
// 상품 하나를 50% 할인해서 살수 있는 쿠폰이 있음 (배송비는 할인 미포함)

// 예산 28원 , [상품가격, 배송비]

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

const solution = (m, product) => {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
};

solution(28, arr); // 4
