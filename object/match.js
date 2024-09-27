const mobiles = [
    {id:1, name:'sumsung', price:25000},
    {id:2, name:'Symphony', price:10000},
    {id:3, name:'xiomi', price:20000},
    {id:4, name:'Realme', price:15000},
    {id:5, name:'Infinix', price:11000},
    {id:6, name:'Walton', price:8000},
    {id:7, name:'Narzo', price:12000},
    {id:8, name:'Vivo', price:15000},
    {id:9, name:'oppo', price:13000},
    {id:10, name:'iphone', price:120000},
]

const search = prompt('Search here')
function matchMobile(mobiles, search){
    for ( m of mobiles){
        if ( m.name.toLowerCase().includes(search.toLowerCase())){
            return m;
        }else if (m.name.toLowerCase().includes(search.toLowerCase()) === undefined){
            return 'data not found'
        }
    }
}

const result = matchMobile(mobiles, search);
console.log(result)