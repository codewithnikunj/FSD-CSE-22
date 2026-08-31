const nums = [5, 65, , 6, 6, 6, 1, 3, 2, 3]
const even = nums.filter((i) => (i % 2));
console.log("numbers", nums)
console.log("even", even)
const square = even.map((i) => (i * i))
console.log("square", square)
const sum = square.reduce((s, i) => (s + i))
console.log("sums=", sum)