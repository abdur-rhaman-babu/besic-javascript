const numbers = [33,50,79,78,90,101,30]

const result = []
for ( const num of numbers){
    if (   num % 10 === 0 ){
        result.push(num)
    }
}
// console.log(result)

const filtered = numbers.filter(num => num % 10 === 0)
// console.log(filtered)

function callback(num){
   return num % 10 === 0;
}

const result2 = numbers.filter(callback)
// console.log(result2)

const findNumber = numbers.find(num => num % 10 === 0)
console.log(findNumber)