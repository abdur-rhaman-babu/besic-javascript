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

 