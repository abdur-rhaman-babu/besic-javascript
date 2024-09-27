const oddNumber = [1,3,5,7,9]

const evenNumber = []
for ( const num of oddNumber){
    const even = num + 1;
    evenNumber.push(even)
}

// console.log(evenNumber)

const result = oddNumber.map(num => num + 1)
console.log(result)