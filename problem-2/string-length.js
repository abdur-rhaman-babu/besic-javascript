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
console.log(smallest) 