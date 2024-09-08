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
console.log(randResult)