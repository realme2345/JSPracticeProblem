//Sequence PracticeProble
// reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
const arr = [];
for(let i=0;i<=5;i++)
{
    let ran=Math.floor(Math.random()*900) + 100;
    arr.push(ran);
}
arr.forEach(function(ran) {
    console.log(ran);
  });
 console.log("The max value :" + Math.max(...arr));
 console.log("The max value :" + Math.min(...arr));
 //a program that takes day and month from the command line and prints true if 
 //day of month is between March 20 and June 20, false otherwise.
 let date=19
 let month=4;
 if (( (month <= 6 && date <= 20) && ((month >= 3 && date <= 20) && (date<31)) ))
 {
    console.log("True");
 }
 else{
     console.log("False");
 }
//the Year is a Leap Year or not a Leap Year. 
let year=2000;
if((year%4==0) &&((year%100!=0) || (year%400==0))){
    console.log("Year is a Leap year");
}
else
{
    console.log("Year is not Leap year");
}
//flip coin
let toss = Math.floor(Math.random()*10)%2;
if(toss==0)
{
    console.log("Head");
} 
else
{
    console.log("Tail");
}
