const myMarks = 92;
const friendMarks = 70;

if(myMarks > 80){
   if(friendMarks > 80){
    console.log('go for lunch')
   }
   else if(friendMarks < 80 && friendMarks >=60){
    console.log('good luck next')
   }
   else if(friendMarks < 60 && friendMarks >=40){
    console.log('keep your friends message')
   }
   else{
    console.log('Block your friend')
   }
}
else{
    console.log('go to home and sleep and act sad')
}