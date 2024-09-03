// Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
for( let i = 1; i<=40; i++){
    if( i%2===1){
        continue;
    }
    // console.log(i)
}

// display odd number from 55 to 85 and skip the numbers divisible by 5.
for( let i = 1; i<=40; i++){
    if( i%5===0){
        continue;
    }
    // console.log(i)
}

// fizzbuzz
for( let i = 1; i<=50; i++){
    if( i%3===0 && i%5===0 ){
        console.log('fizzbuzz', i)
    }
    else if( i%5===0 ){
        console.log('buzz', i)
    }
    else if( i%3===0){
        console.log('fizz', i)
    }else{
        console.log('not fizz or not buzz',i)
    }
}