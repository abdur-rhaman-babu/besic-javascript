// Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// const reversed= colors.reverse()
// console.log(reversed)


// array push method
let rev_string = []
for ( let i = colors.length - 1; i >=0; i--){
    // rev_string.push(colors[i])
}

// console.log(rev_string)

for ( let i = 0; i < colors.length; i++ ){
    // rev_string.unshift(colors[i])
}
// console.log(rev_string)


// using while loop
let n = colors.length - 1;
while( n >=0 ){
    // rev_string.push(colors[n])
    n--
}
// console.log(rev_string)

let m = 0;
while ( m < colors.length ){
    rev_string.unshift(colors[m])
    m++
}
// console.log(rev_string)

// Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers = [12, 98, 5, 41, 23, 78, 46];

for ( let i = 0; i < numbers.length; i++ ){
    if ( numbers[i]%2 === 0){
        // console.log(numbers[i])
    }
}

// Use a for...of loop to concatenate all the elements of an array into a single string.
let singleString = ''
var numbers1 = ['Tom', 'Tim', 'Tin', 'Tik']
for ( let num of numbers1){
    singleString+=num
}
// console.log(singleString)
// console.log(typeof singleString)

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
const statement = 'I am a hard working person'
const splitStatement = statement.split(' ')
// console.log(splitStatement)
const newStatement = []
for ( let i = 0; i < splitStatement.length; i++){
    newStatement.unshift(splitStatement[i])
}
const joinStatement = newStatement.join(' ')
console.log(joinStatement)

