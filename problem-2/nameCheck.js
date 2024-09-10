// name check
const letters = 'aeiouyw';
const name = 'Hero';
function checkName(name, letters){
    if ( typeof name !== 'string'){
        return 'invalid input'
    }else{
       const lastletter =  name.slice(-1).toLowerCase()
    if ( letters.includes(lastletter)){
        return 'good name'
    }else {
        return 'bad name'
    }
   }
}
const result = checkName(name, letters)
// console.log(result)

const vowels = ['a','e','i','o','u','y','w']
const sureName = 'Heloo'

function checkName2(name,letters){
    
    if ( typeof name !== 'string'){
        return 'Invalid Input'
    }

    const names = name.slice(-1).toLowerCase()

    let result = false;
    for ( const letter of letters ){
        if( names === letter){
            result = true;
        }
    }
    return result ? 'Good Name' : 'Bad Name'
}

const result1 = checkName2(sureName, vowels)
// console.log(result1)e