/**
 * wood per cft = 50;
 * chair per pieces = 500;
 * table per pieces = 1500;
 * bed per pieces = 3000;
 */

function demandOfFuniture(chair, table, bed){
    const chairPrice = chair * 500;
    const tablePrice = table * 1500;
    const bedPrice = bed * 3000;
    const totalPrice = chairPrice + tablePrice + bedPrice;
    return totalPrice;
} 

const total = demandOfFuniture(2,1,2);
console.log(total)