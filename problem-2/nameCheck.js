// name check
const letters = 'aeiouyw';
const name = [1,2,3,45];
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
console.log(result)