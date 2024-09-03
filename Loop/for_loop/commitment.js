// "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

for ( let i = 1; i<=60; i++){
    // console.log('I will invest at least 6 hrs every single day for next 60 days!', i)
}


// Find all the odd numbers from 61 to 100.

for( let i = 61; i<=100; i++){
    if( i%2===1 ){
        // console.log(i)
    }
}

// Find all the even numbers from 78 to 98.

for( let i = 78; i<=98; i++){
    if( i%2===0 ){
        // console.log(i)
    }
}

// Display sum of all the odd numbers from 91 to 129.

let oddSum = 0;
for( let i = 91; i<=129; i++){
    if( i%2===1 ){
        // console.log('odd',i)
        oddSum+=i
    }
}
// console.log(oddSum)

// Display sum of all the even numbers from 51 to 85.

let evenSum = 0;
for( let i = 51; i<=85; i++){
    if( i%2===0 ){
        // console.log('even',i)
        evenSum+=i
    }
}
// console.log(evenSum)

// Generate a multiplication table for number 9
const number = 9;
for( let i = 1; i<=10; i++){
    let result = number * i
    console.log(`${number} x ${i} = ${result}`)
}