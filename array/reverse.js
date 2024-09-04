const number = [1,2,3,4,5,6,7,8,9,10];
// const reversed = number.reverse()
// console.log(reversed)
// for( i = 0; i < reversed.length; i++){
//     console.log(reversed[i])
// }

// let rev_numbers = [];
// for( i = 0; i < number.length; i++){
//     rev_numbers.unshift(number[i])
// }
// // console.log(rev_numbers)

let rev_numbers = [];
for( i = number.length - 1; i >= 0; i--){
    rev_numbers.push(number[i])
}
// console.log(rev_numbers)

