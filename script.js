// variable

var name = 'Abdur Rhaman Babu'
var age = 23;

// console.log(name + 'is a good student')
// console.log('He is' + ' ' + age +' ' + 'years old')

const hex = 0x15dd
const oct = 0o754

// console.log(hex, oct)

// logical operator
// anaul examination reuslt

var sumon = 90
var raza = 85
var badsha = 48
var sagor = 80

if( sumon > sagor && badsha < sagor){
    // console.log('Sumon is greater than sagor and badsha is greater than sagor')
}
else{
    // console.log('At least on condition is true')
}


var a = 50;
var b = 45;

if( a > b ){
    // console.log(a + ' is greater than ' + b)
}else{
    // console.log(a + ' is not greater than ' + b)
}

// var n = 5;


// if( n%2==0){
//     console.log(n + ' is even number')
// }else{
//     console.log(n + ' is odd number')
// }


const date = new Date()
const today = date.getMonth()

/*switch(today){
    case 6: 
        console.log('Today is Sutarday')
        break;
    case 0: 
        console.log('Today is Sunday')
        break;
    case 1: 
        console.log('Today is Monday')
        break;
    case 2: 
        console.log('Today is Tuesday')
        break;
    case 3: 
        console.log('Today is Wednessday')
        break;
    case 4: 
        console.log('Today is Trusday')
        break;
    case 5: 
        console.log('Today is friday')
        break;
    default: "input is not valid"
}*/

// ternary operator
// const n = 10;
// let str = ""

// if( n%2===0){
//     str = 'even'
// }else{
//     str = 'odd'
// }

// console.log(str)

// let result = n%2===0 ? 'enen' : 'odd'
// console.log(result)

const number = 20;
let result

for( let i = 0; i<=number; i++){
    if( i%2===0){
        result = i + ' is even number'
    }else{
        result = i + ' is odd number'
    }
}
const numbers = 20;
// let result

// for( let i = 0; i<=numbers; i++){
//     if( i%2===0){
//         console.log(i + ' is even number')
//     }else{
//         console.log(i + ' is odd number')
//     }
// }

// console.log(result)

for ( let i = 0; i<=20; i++){
    // console.log(i)
}


var name = 'Hello'
// var fullName = ''

// one way
if( name.length === 0){
    fullName = 'AR Babu'
}
else{
    fullName = name
} 

// console.log(fullName)

// way number 2

name.length === 0 ? fullName = 'AR Babu' : fullName = name

// console.log(fullName)

// way number 3

var fullName = name || 'AR Babu'
// console.log(fullName)


// for loop
// odd number if method
for ( i = 0; i<=10; i++){
    if( i%2 === 1){
    // console.log(`The odd number is ${i}`)
    }
}

// even number if method
for ( i = 0; i<=10; i++){
    if( i%2 === 0){
    // console.log(`The even number is ${i}`)
    }
}


// odd number && amphersize system
for ( i = 0; i<=10; i++){
    // i%2 === 1 && console.log(`The odd number is ${i}`)
}

// even number
for ( i = 0; i<=10; i++){
    // i%2 === 0 && console.log(`The even number is ${i}`)
}


// odd and even with if else

for ( i = 0; i<=10; i++){
    if (i%2===0){
        // console.log(`${i} is even number`)
    }else{
        // console.log(`${i} is odd number`)
    }
}


// odd and even with ternary

for ( i = 0; i<=10; i++){
        // i%2===0 ?  console.log(`${i} is even number`) : console.log(`${i} is odd number`)
    }


let sum = 0;
for (let i=1; i<=10; i++){
    // console.log(sum + '+' + i + '=' + (sum + i))
    // console.log(sum+i)
    sum += i
}
// console.log(sum)

// find largest number from an array
const arr = [10,30,25,16,17,38,19,15];

let largeNumber = arr[0]
for (let i = 0; i<=arr.length; i++){
    if( largeNumber < arr[i]){
        largeNumber = arr[i]
    }
}

// console.log(largeNumber)

var isRunning = true;
while(isRunning){
    var rand = Math.floor(Math.random() * 10 + 1)
        if(rand === 9){
            isRunning = false
            // console.log('you are winning chicken dinner')
        }else{
            // console.log('your random number is ' + rand)
        }
}

const studentName = ['Rahul','Sakib', 'Ali Hasan', 'Sagor', 'Mehedi', 'Badsha']

let preferName = studentName[0]
for( i = 1; i<=studentName.length; i++){
    if ('Badsha' === studentName[i] ){
        preferName = studentName[i]
    }
}
// console.log(preferName)

const sumNumber = [10,20,30,40,50]

let sum1 = 0;
for (let i =1; i<=sumNumber.length; i++){
//    console.log( sumNumber[i])
    sum1 += sumNumber[i]
}
// console.log(sum1)

// Nested Loop
/*
 * 1
 * 1 2
 * 1 2 3
 * 1 2 3 4 
 * 1 2 3 4 5
 */

var n = 5;
for (let i=1; i<=n; i++){
    let result = ''
    for (let j=1; j<=n; j++){
        result += '*'
    }
    // console.log(result)
}


let num = [1,2,3,4,5] 
let jokfol = 0
for(let i=1; i<=num.length; i++){
    jokfol += i
}
console.log(jokfol)