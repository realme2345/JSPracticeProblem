//Repetition Practice Problems with for loop
//a program that takes a command-line argument n and prints a table of the
//powers of 2 that are less than or equal to 2^n.
let num=10
for(let i=0;i<=num;i++)
{
    let power=2**i
    if(power<=2**num)
    {
        console.log(power);
    }
}

//a program that takes a command-line argument n and prints the nth harmonic number
let j, n=5
let sum=0;
for(j=1;j<=n;j++)
{
    let harmonic=(1/j);
    console.log(harmonic);
    sum=sum+harmonic;
}
console.log("Sum : "+sum);

//a program that takes a input and determines if the number is a prime.
let m=30
for(let i=2;i<m;i++)
{
    if(m%i!=0)
    {
        console.log("Given number is  a prime number");
        break;
    }
    else{
        console.log("Given number is not prime Number");
        break;
    }
}

// program to print prime numbers between the Range numbers
let k=100;
let arr=[];
// looping from lowerNumber to higherNumber
for (let i = 1; i <= k; i++) {
    let flag = 0;
    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
        arr.push(i);
    }
}
console.log("The Count of Prime Number" + arr.length);

//computes a factorial of a number
let f=5;
let mul=1;
for(let i=1;i<=f;i++)
{
    mul=mul*i;
}
console.log("The Factorial : " + mul);
//integer is the value for which we are finding prime factors
var integer = 50;
//find divisors starting with 2
for (let i = 2; i < integer/2; i++)
{
  if (integer % i == 0)
   {
       console.log(i);
     //check if divisor is prime
        for (let j = 2; j < i; j++)
        {
            if (i % j == 0)
            {
                console.log(i + " is  not a prime number");
                break;
            }
            else
            {
                console.log(i + " is a Prime Number ");
                break;
            }
        }
    }
}
