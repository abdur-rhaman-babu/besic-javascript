const peoples = [
    {name:'Meena', age:20},
    {name:'Rina', age:15},
    {name:'Sucorita', age: 22}
]

let ageSum = 0
for ( const people of peoples){
    ageSum += people.age;
}
// console.log(`Total age of all people ${ageSum}`)

const result = peoples.reduce((acc, curr)=> acc + curr.age ,0)
// console.log(result)