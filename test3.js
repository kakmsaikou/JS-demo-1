let scores = [95,91,59,55,42,82,72,85,67,66,55,91]
let sum = scores.reduce((sum, item)=> item % 2 !== 0 ? sum + item : sum, 0)
console.log(sum) // 奇数之和：598 