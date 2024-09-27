function calculateTax(income, expenses) {
    if ( income < 0 || expenses < 0 || income < expenses){
        return 'Invalid Input'
    }else{
        const profit = income - expenses;
        const calculatedTax = profit * .20;
        return calculatedTax;
    }
}

function sendNotification(email) {
    const countSymbol = email.split('@').length - 1;

    if ( countSymbol !== 1 ){
        return 'Invalid Email';
    }
    
    const notificationMessage = email.split('@').join(' sent you an email from ')
    return notificationMessage
    
}

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


function calculateFinalScore(obj) {

    if ( typeof obj !== 'object' || obj.testScore > 50 || obj.schoolGrade > 30 || typeof obj.isFFamily !== 'boolean'){
        return 'Invalid Input';
    }else{
    let farmer = 0;
    obj.isFFamily ? farmer = 20 : farmer = 0;
    const finalScore = obj.testScore + obj.schoolGrade + farmer;
    if( finalScore >= 80){
        return true;
   }else {
        return false;
   }
   } 
}


function  waitingTime(waitingTimes  , serialNumber) {
    if ( !Array.isArray(waitingTimes) || typeof serialNumber !== 'number' || waitingTimes.length >= serialNumber){
        return 'Invalid Input';
    }else{
        const serial = serialNumber - 1;
        const size = waitingTimes.length;
        const remainingPerson = serial - size;
        let sum = 0;
        for ( const time of waitingTimes){
            sum+=time
        }
       
        const avarage = Math.round(sum / size);
        const remainingTime = remainingPerson * avarage;
        return remainingTime;
    }
}

