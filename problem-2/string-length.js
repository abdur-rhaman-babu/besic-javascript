// Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function findSmallestName (heights){
    let small = heights2[0]
    for ( const height of heights){
        if ( small.length > height.length){
            small = height;
        }
    }
    return small;
}

const smallest = findSmallestName(heights2)
// console.log(smallest) 

// Your task is to calculate the total budget required to buy electronics:
function calculateElectronicsBudget(laptop, tablet, mobile){
    const total = laptop + tablet + mobile;
    return total;
}

const totalMoney = calculateElectronicsBudget(35000, 15000, 20000)
// console.log(totalMoney)

