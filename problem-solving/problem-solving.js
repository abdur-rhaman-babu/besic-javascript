// convert inch to feet
function inchToFeet (inch){
    const result = inch / 12
    return result;
}

const result = inchToFeet(65)
// console.log(result.toFixed(1))

function inchToFeet1 (inch){
    const divisible = inch / 12
    const remaing = inch % 12
    const result = Math.round(divisible) + ' feet' + " " + remaing + ' inch'
    return result;
}

const result2 = inchToFeet1(75)
// console.log(result2)

// mile to kilo
function mileToKilo(mile){
    const result = mile * 1.60934
    return result;
}

const totalmile = mileToKilo(10)
// console.log(totalmile)

// kilometer to mile
function kiloToMile (kilo){
    const result = kilo * 0.621371;
    return result;
}

const totalKilo = kiloToMile(5)
// console.log(totalKilo)

// check leap year
function checkLearYear(year){
    if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
        return year + 'is leap year'
    }else{
        return year + ' is not leap year'
    }
}

const leapYear = checkLearYear(2025)
// console.log(leapYear)

// odd avarage with for loop
function oddAvarage(numbers){
    const oddNumbers = []
    for ( let i = 0; i < numbers.length; i++){
        if( numbers[i] % 2 === 1){
            oddNumbers.push(numbers[i])
        }
    }
   
    let sum = 0;
    for ( let i = 0; i < oddNumbers.length; i++){
        sum+=oddNumbers[i]
    }
   const oddSize = oddNumbers.length;
   const result = sum / oddSize
   return result;
}
const arr = [11,12,22,28,15,17,21,24,14]

const avarageOfOdd = oddAvarage(arr)
// console.log('avarage', avarageOfOdd)

// avarage even number 
function avarageOfEven (numbers){
    const evenNumebers = []
    for ( let number of numbers){
        if( number % 2 === 0){
            evenNumebers.push(number)
        }
    }

    let sum = 0;
    for ( let evenNumber of evenNumebers){
        sum+=evenNumber;
    }
    const evenSize = evenNumebers.length;
    // console.log(evenSize, sum)
    const result = sum / evenSize;
    return result;
}

const evenOfAvarage = avarageOfEven(arr);
// console.log('Avarage of even Number ', evenOfAvarage)


// find duplicate number using for of loop
const studentLists = ['sakib', 'sumon', 'siyam', 'raju', 'emon', 'ashik', 'sakib','siyam','sumon','sumon'];
function findDuplicateName (students){
    const unique = []
    for ( let student of students){
        if( unique.includes(student) === false ){
            unique.push(student)
        }
    }
    return unique;
}

const uniqueStudent = findDuplicateName(studentLists)
// console.log(uniqueStudent)

// identify the duplicate numbers
const numbers = [5,7,10,12,5,9,11,9,5,11]
function findDuplicateNumbers(numbers){
    const unique = []
    for ( let i = 0; i < numbers.length; i++){
        if ( !unique.includes(numbers[i])){
            unique.push(numbers[i])
        }
    }
    return unique;
}

const uniqueNumber = findDuplicateNumbers(numbers);
console.log(uniqueNumber)