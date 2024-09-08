// shopping cart
const clothes = [
    {name:'shirt', price:500, quantity:5},
    {name:'pant', price:400, quantity:2},
    {name:'shoose', price:600, quantity:1},
    {name:'t-shirt', price:200, quantity:4}
]

function demandOfCloth(clothes){
    let sum = 0;
    for ( const cloth of clothes ){
        const quantity = cloth.quantity;
        const totalPrice = cloth.price * quantity;
        sum += totalPrice
        
    }
    return sum;
}

const total = demandOfCloth(clothes)
console.log(total)