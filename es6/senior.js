const instractor = [
    {name:'Nodi', age:28, position:'Senior'},
    {name:'Akil', age:26, position:'Junior'},
    {name:'Sobuj', age:30, position:'Senior'},
]

const result = []
for ( const senior of instractor){
    if ( senior.position === 'Senior'){
        result.push(senior)
    }
}
// console.log(result)

const result2 = instractor.filter(senior => senior.position === 'Senior')
console.log(result2)