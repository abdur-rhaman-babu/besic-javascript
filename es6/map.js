
const numbers = [10,25,14,13,187,6,55];

function callback(num){
    return num * 2
}

const sum = numbers.map(callback)
// console.log(sum)

// numbers.forEach(num => console.log(num * 2))

const large = numbers.filter(num => num > 10)
// console.log(large)
const small = numbers.filter(num => num < 15)
// console.log(small)
const oddnum = numbers.filter(num => num % 2 === 1)
// console.log(oddnum)
const evenNum = numbers.filter( num => num % 2 === 0)
// console.log(evenNum)