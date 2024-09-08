// find chepeast phone
const phones  = [
    {name:'sumsung', price:20000},
    {name:'symphony', price:12000},
    {name:'Oppo', price:18000},
    {name:'xiomi', price:25000},
    {name:'realme', price:14000}
]

function getChepestPhone (phones){
    let min = phones[0]

   for ( const phone of phones){
        if ( min.price > phone.price){
            min = phone
        }
   }
   return min;
}

const minPhone = getChepestPhone(phones)
console.log(minPhone)