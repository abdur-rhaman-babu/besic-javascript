// Write a function to convert temperature from Celsius to Fahrenheit.
function celciousToFahren(celcious){
    const fahren = celcious * (9/5) + 32
    return fahren + '° fahrenheit';
}
// console.log(celciousToFahren(50))

// Write a function to convert temperature from Fahrenheit to Celsius.
function fahrenheitToCelcious(fahrenheit){
    const celcious = (fahrenheit - 32) * 5/9
    return celcious + '° celcious';
}
// console.log(fahrenheitToCelcious(122))


// Returns a random integer from 10 to 20:
function genarateRand(num1, num2){
    const rand = Math.floor(Math.random() * num1) + num2;
    return rand;
}

const randResult = genarateRand(10, 10)
// console.log(randResult)

// You are given an array of numbers. Count how many times the a number is repeated in the array.

const numbers = [5,6,11,12,98, 5]

function repeatedNumber (){
    
}

// Write a function to count the number of vowels in a string.
const string = 'A quick brown fox jumps over the lazy dog';
let vowels = 'aeiouAEIOU'

function countVowels (string){
   let count = 0;
    for ( const str of string){
        if ( vowels.includes(str)){
            count++;
        }
    }
    return count;
}

const result = countVowels(string);
console.log(result)