//Selection PracticeProble using the Switch Case
//Read a single digit number and write the number in word
let ran=Math.floor(Math.random()*10)+1;
switch(ran)
{
    case 1:
      console.log("One");
      break;
    case 2:
      console.log("Two");
      break;
    case 3:
      console.log("Three");
      break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
      console.log("Six");
      break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    default:
        console.log("Nine");
        break;
}
//Read a Number and Display the week day
let random=Math.floor(Math.random()*10)%7;
switch(random)
{
    case 0:
        console.log("SunDay");
        break;
    case 1:
        console.log("MonDay");
        break;
    case 2:
        console.log("TueDay");
        break;
    case 3:
        console.log("WedDay");
        break;
    case 4:
        console.log("ThurDay");
        break;
    case 5:
        console.log("Firday");
        break;
    default:
        console.log("SatDay");
        break;
}
//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
let num=9846;
let rand=Math.floor(Math.random()*4)+1;
switch(rand)
{
    case 1:
        let thousand = (num /1000);
        console.log("Thousand : " + Math.floor(thousand));
        break;
    case 2:
        let a=num%1000;
        let hun = a / 100;
        console.log("Hundreds : " + Math.floor(hun));
        break;
    case 3:
        let b = num % 100;
        let ten = b/ 10 ;
        console.log("Tens : " + Math.floor(ten)) ;
        break;
    case 4:
        let c=num%10
        let one = c / 1
        console.log("Units : " + Math.floor(one));
        break;
}
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