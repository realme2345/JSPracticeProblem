//Sequence PracticeProble
//Read a single digit number and write the number in word
let ran=Math.floor(Math.random()*10)+1;
if(ran==1)
console.log("One");
else if(ran==2)
console.log("Two");
else if(ran==3)
console.log("Three");
else if(ran==4)
console.log("Four");
else if(ran==5)
console.log("Five");
else if(ran==6)
console.log("Six")
else if(ran==7)
console.log("Seven")
else if(ran==8)
console.log("Eight")
else
console.log("Nine");
//Read a Number and Display the week day
let random=Math.floor(Math.random()*10)%7;
if(random==0)
console.log("SunDay");
else if(random==1)
console.log("MonDay");
else if(random==2)
console.log("TueDay");
else if(random==3)
console.log("WedDay");
else if(random==4)
console.log("ThurDay");
else if(random==5)
console.log("FroDay");
else
console.log("satDay");
//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
let num=9846;
let thousand = (num /1000);
let a=num%1000;
console.log("Thousand : " + Math.floor(thousand));
let hun = a / 100;
console.log("Hundreds : " + Math.floor(hun));
let b = num % 100;
let ten = b/ 10 ;
console.log("Tens : " + Math.floor(ten)) ;
let c=num%10
let one = c / 1
console.log("Units : " + Math.floor(one));
//Arthamatic operation
let k=10;
let l=20;
let m=30;
let d=k + l * m;
let e=m + k / l;
let f=k % l + m;
let g=k * l + m;
const arr=[];
arr.push(d,e,f,g);
console.log("Maximum num : " + Math.max(...arr));
console.log("Maximum num : " + Math.min(...arr));