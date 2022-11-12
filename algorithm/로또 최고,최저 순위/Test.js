https://school.programmers.co.kr/learn/courses/30/lessons/77484

const solution = (lottosm, win_nums) => {
    let answer=[]
    const arr = [6,6,5,4,3,2,1]
    let count=0
    let zeroCount=0
    for(let i=0; i<6; i++){
      if(win_nums.includes(lottosm[i])) count++
      if(lottosm[i]===0) zeroCount++
    }
    answer.push(arr[count+zeroCount] ,arr[count])
    return answer
  }
  
  solution([45, 4, 35, 20, 3, 9],[20, 9, 3, 45, 4, 35] )