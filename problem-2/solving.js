// find largest number form three number
const num1= 50;
const num2= 70;
const num3= 95;

function getMax(num1, num2, num3){
    if ( num1 > num2 && num1 > num3){
        console.log('num1 is biggest: ', num1)
    }else if( num2 > num1 && num2 > num3 ){
        console.log('num2 is biggest: ', num2)
    }else{
        console.log('num3 is biggest: ', num3)

    }
}

// getMax(num1, num2, num3)

// find max number from an array
const numbers = [10,50,60,80,55,70,95,98,65]
function findLagestNumber(numbers){
    let max = numbers[0];
    for ( const num of numbers){
        if ( max < num){
            max = num
        }
    }
    return max;
}
const maxNumber = findLagestNumber(numbers);
// console.log(maxNumber)

// find min number from an array
const number = [85,50,60,80,55,70,95,98,65]
function findLagestNumber(number){
    let min = number[0];
    for ( const num of number){
        if ( min > num){
            min = num
        }
    }
    return min;
}
const minNumber = findLagestNumber(number);
// console.log(minNumber)


