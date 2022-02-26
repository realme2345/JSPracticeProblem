//find degF or degC based on their Conversion Selection.
function CTOF(celsius) 
{
  let cTemp = celsius;
  let cToFahr = cTemp * 9 / 5 + 32;
  let  result = (cTemp+ " celsius is '" + cToFahr+   "   Fahrenit");
    console.log(result);
}

function FTOC(fahrenheit) 
{
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
  let results = (fTemp+ " Fahrenit is "  + fToCel + " Celsius");
  console.log(results);
}
CTOF(60);
FTOC(45);
//function to check if the two numbers are Palindromes
function palin(Num){
    let rem, temp, final = 0;
    temp = Num;
	while(Num>0)
	{
		rem = Num%10;
		Num= parseInt(Num/10);
		final = final*10+rem;
	}
	if(final==temp)
	{
		console.log("The number is Palindrome");
	}
    else
	{
		console.log("The number is not palindrome");
	}
}
palin(121);
//function to check if the two numbers are Palindromes
function Palindrome(number)
	{
        for (let i = 1; i <= number; i++) 
        {
            let flag = 0;
            // looping through 2 to user input number
            for (let j = 2; j < i; j++) 
            {
                if (i % j == 0) 
                {
                    flag = 1;
                    break;
                }
            }
            // if number greater than 1 and not divisible by other numbers
            if (i > 1 && flag == 0) 
            {
                console.log(i);
            }
		    let rem, temp, final = 0;
		    temp = i;
		    while(i>0)
		    {
			   rem = i%10;
			   i = parseInt(number/10);
			   final = final*10+rem;
		    }
		    if(final==temp)
		    {
			   console.log(final + "  The number is Palindrome");
		    }
        }
	}
    Palindrome(100);