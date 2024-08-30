let regularTicket = 800;
let age = 70;
let isStudent = true;


if(age < 10){
    console.log('Free')
}
else if(isStudent){
    console.log(regularTicket * 50 / 100)
}
else if(age >= 60 ){
    console.log(regularTicket - (regularTicket * 20 / 100))
}
else{
    console.log(regularTicket)
}