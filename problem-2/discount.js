// discount price
 function discountPrice (quantity) {
    if ( quantity <= 100 ){
        const total = quantity * 100;
        return total;
    }else if( quantity <= 200 ){
        const total = quantity * 80;
        return total;
    }else{
        const total = quantity * 70;
        return total;
    }
 }

 const totalPrice =  discountPrice(102);
//  console.log(totalPrice)

// calculate money
/**
 * ticket per pieces 120 tk
 * sentry 500 tk
 * 8 number of staff 50 tk
 */
function calculateMoney (sell){
    const sentry = 500;
    const price = 120;
    const stafSalary = 50;
    const staff = 8;

    const totalStafSalary = staff * stafSalary;
    const totalTicketSell = price * sell;
    const remaining = totalTicketSell - (sentry + totalStafSalary)

    if ( sell < 0){
        return 'Please input positive value'
    }else{
        return remaining;
    }
  
}

const totalRem = calculateMoney(0)
console.log(totalRem)