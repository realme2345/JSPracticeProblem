//Repetition Practice Problems with for loop
//a program that takes a command-line argument n and prints a table of the
//powers of 2 that are less than or equal to 2^n.
let num=10
let i=0;
while(i<=num)
{
    let power=2**i
    if(power<=256)
    {
        console.log(power);
    }
    i++;
}
//Function to find nth magic number
let n = 5;
let pow = 1, answer = 0;
// Go through every bit of n
while (n != 0)
{
    pow = pow * 5;
 
// If last bit of n is set
    if ((n & 1) == 1)
    answer += pow;
    // proceed to next bit
    // or n = n/2
    n >>= 1;
}
console.log(answer);
//the Flip Coin problem till either Heads or Tails wins 11 times.
let m=50;
const arr=[];
const array=[];
for(let k=1;k<=m;k++)
{
    let random=Math.floor(Math.random()*2);
    if(random==1)
    {
        arr.push(random);
        if(arr.length==11)
        {
           console.log("Head is Reached 11 Times");
           break;
        }
    }
    else
    {
        array.push(random);
        if(array.length==11)
        {
            console.log("Tail is Reached 11 Times");
            break;
        }
    }
}

