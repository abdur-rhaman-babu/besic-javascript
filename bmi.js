const heightFeet = 5.4;
const weight = 65;

const heightMeter = heightFeet * 0.3048

const bmi = weight / (heightMeter ** 2)

console.log(`BMI = ${bmi}`)

if(bmi < 18.5){
    console.log('Underweight')
}else if(bmi > 18.5 && bmi < 24.9){
    console.log('Normal')
}else if(bmi > 25.0 && bmi < 29.9){
    console.log('Overweight')
}
else if(bmi > 30.0 && bmi < 34.9){
    console.log('Obese class I')
}
else if(bmi > 35.0 && bmi < 39.9){
    console.log('Obese class II')
}else{
    console.log('Obese class III')
}