// function calculateTax(income, expenses) {
//     if ( income < 0 || expenses < 0 || income < expenses){
//         return 'Invalid Input'
//     }else{
//         const profit = income - expenses;
//         const calculatedTax = profit * .20;
//         return calculatedTax;
//     }
// }
// console.log(calculateTax(10000, 3000))
// console.log(calculateTax(34000, 1753))
// console.log(calculateTax(5000, 1500))
// console.log(calculateTax(7000, 7000))
// console.log(calculateTax(-5000, 2000))
// console.log(calculateTax(6000, -1500))

// function sendNotification(email) {
//     const countSymbol = email.split('@').length - 1;

//     if ( countSymbol !== 1 ){
//         return 'Invalid Email';
//     }
    
//     const notificationMessage = email.split('@').join(' sent you an email from ')
//     return notificationMessage
    
// }

// console.log(sendNotification('zihad@gmail.com'))
// console.log(sendNotification('farhan34@yahoo.com'))
// console.log(sendNotification('nadim.naem5@outlook.com'))
// console.log(sendNotification('fahim234.hotmail.com'))
// console.log(sendNotification('sadia8icloud.com'))

function checkDigitsInName(name) {
    if( typeof name !== 'string'){
        return 'Invalid Input'
    }else{
        let hasNumbers = false;
        for ( const n of name){
            if ( !isNaN(n) && n !== " "){
                hasNumbers = true;
                break;
            }
        }
        return hasNumbers;
    }
}

// console.log(checkDigitsInName('Raj123'))
// // console.log(checkDigitsInName('Sumon'))
// console.log(checkDigitsInName('n9ayeem'))
// console.log(checkDigitsInName('e1mu3'))
// console.log(checkDigitsInName('Suman'))
// console.log(checkDigitsInName('Name2024'))
// console.log(checkDigitsInName('!@#'))
// console.log(checkDigitsInName(["Raj"]))

// function calculateFinalScore(obj) {
//     let farmer = 0;
//     obj.isFFamily ? farmer = 20 : farmer = 0;
//     const finalScore = obj.testScore + obj.schoolGrade + farmer;

//     if ( typeof obj !== 'object' || obj.testScore > 50 || obj.schoolGrade > 30 || typeof obj.isFFamily !== 'boolean'){
//         return 'Invalid Input';
//     }else{

//     if( finalScore >= 80){
//         return true;
//    }else {
//         return false;
//    }

//    } 
// }

// console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }))
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }))
// console.log(calculateFinalScore("hello" ))
// console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }))

