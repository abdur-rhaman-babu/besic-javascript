// calculator
function additon(num1, num2){
    const sum = num1 + num2;
    return sum;
}

function subtruc(num1, num2){
    const sub = num1 - num2;
    return sub;
}

function multiply(num1, num2){
    const mult = num1 * num2;
    return mult;
}

function divide(num1, num2){
    const divide = num1 / num2;
    return divide;
}

function clculate (a, b, operation){
    if ( operation === 'add'){
        const sum = additon(a,b)
        return 'Sum is: ' +  sum
    }else if ( operation === 'sub'){
        const sub = subtruc(a,b)
        return 'Sub is: ' +  sub
    }else if( operation === 'mult'){
        const mult = multiply(a,b)
        return 'mult is: ' +  mult
    }
    else if( operation === 'div'){
        const div = divide(a,b)
        return 'div is: ' +  div
    }else{
        return "only 'add', 'sub, 'mult', 'div' opration is allowed"
    }
}

const result = clculate(10,20, 'div') ;
console.log(result)

