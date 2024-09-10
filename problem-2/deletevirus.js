// deletevirus
const arr = [0,1,10,null,undefined,NaN,-10,true, 55, 60, '', 'hello']
const arr1 = ['124', null, NaN, {num:2}]
const string = 'hoiweruwjrekl'

function deleteVirus(numbers){
    if (!Array.isArray(numbers)){
        return 'plese input an array'
    }
    let newArr = []
    for ( const number of numbers){
        if ( typeof number === 'number' && !isNaN(number)){
            newArr.push(number)
        }
    }
    return newArr;
}

const result = deleteVirus(arr);
console.log(result)