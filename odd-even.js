const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const evenNum = []
const arrFunction = (numbers) =>{
    for (let i = 0; i<=numbers.length; i++){
        if(i%2===0){
            evenNum.push(i)
        }
    }
    console.log(evenNum)
    let evenSum = 0;
    for ( let i = 0; i<evenNum.length; i++){
        evenSum += evenNum[i]
    }
    console.log(evenSum)
}
arrFunction(numbers)