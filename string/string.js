// Count how many times a string has the letter a
let string = 'A quick brown fox jumps over the lazy dog. I am a student'
const result = (string.match(/a/g) || [])
// console.log(result.length)

// Count how many times a string has the letter a
let string1 = 'A quick brown fox jumps over the lazy dog.I am a student'
const result1 = (string1.match(/A/g) || string1.match(/a/g) )
// console.log(result1.length)

// Capitalize Every first Letter of each word in a String
const str = 'This a new Bangladesh now'
const splitStr = str.split(' ')
// console.log(splitStr)
let reverseStr = ''
for(let i=0; i<str.length; i++){
    reverseStr =   str[i] + reverseStr
    console.log(str[i])
}
// console.log(reverseStr)