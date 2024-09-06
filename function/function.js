// Take four parameters. Multiply the four numbers and then return the result
function multiply(num1, num2, num3, num4){
    const result = num1 * num2 * num3 * num4;
    return result;
}

const total = multiply(5,2,3,10)
// console.log(total)


// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function myNumbers(number){
    if( number % 2 === 1 ){
        const result = number * 2;
        return result;
    }else{
        const result = number / 2;
        return result;
    }
}

const result = myNumbers(100)
const result1 = myNumbers(15)
// console.log(result, '--------', result1)

// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers){
    let sum = 0;
    for ( const number of numbers){
        sum+=number
    }
    const size = numbers.length;
    const average = sum / size
    return average;
}

const arr = [1,2,3,4,5,6,7,8,9,10]

const result2 = make_avg(arr);
// console.log(`Avarage = ${result2}`)


// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(str){
    const result = str.match(/0/gi)
    const totalZero = result.length;
    return totalZero;
}

const binaryString = '00101100111';
const totalZero = count_zero(binaryString);
// console.log('total Zero is', totalZero)


// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(number){
    if ( number % 2 === 0 ){
        return `even number is ${number}`
    }
    return `odd number is ${number}`
}

const oddEven = odd_even(20)
const evenOdd = odd_even(25)
console.log(oddEven, evenOdd)

