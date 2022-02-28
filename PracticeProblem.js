const arrays=[];
for(let i=0;i<=10;i++){
    let random=Math.floor(Math.random()*999)+100;
    arrays.push(random);
}
let Num=arrays.values();
for(let element of Num){
    console.log(element);
}
function print2largest(arr, arr_size)
{
    let i, first, second;
    if (arr_size < 2)
    {
        console.log(" Invalid Input ");
        return;
    }
    // sort the array
    arr.sort();
        // start from second last element as the largest element is at last
    for (i = arr_size - 2; i >= 0; i--)
    {
            // if the element is not equal to largest element
        if (arr[i] != arr[arr_size - 1]) 
        {
            console.log("The second largest element is " + arr[i]);
            return;
        }
    }
}

    // Driver program to test above function
let n = arrays.length;
print2largest(arrays,n);
function print2Smallest( arr, arr_size)
{
    let i, first, second;
 
    /* There should be atleast two elements */
    if (arr_size < 2)
    {
        document.write(" Invalid Input ");
        return;
    }
    first=Number.MAX_VALUE ;
    second=Number.MAX_VALUE ;
    for (let j= 0; j < arr_size ; j ++)
    {
        /* If current element is smaller than first
        then update both first and second */
        if (arr[j] < first)
        {
            second = first;
            first = arr[j];
        }
 
        /* If arr[i] is in between first and second
        then update second */
        else if (arr[j] < second && arr[j] != first)
            second = arr[j];
    }
    if (second == Number.MAX_VALUE )
        console.log("There is no second smallest element\n");
    else
        console.log("The smallest element is " + first + " and second "+
            "Smallest element is " + second +'\n');
}
    // Driver program
    let m = arrays.length;
    print2Smallest(arrays, m);
//Prime Factorisation
function primeFactors(n)
{
    const arr=[];
    // Print the number of 2s that divide n
    while (n % 2 == 0)
    {
        console.log(2 + " ");
        n = Math.floor(n / 2);
    }
 
    // n must be odd at this point So we can skip one element
    for(let i = 3; i <= Math.floor(Math.sqrt(n));i = i + 2)
    {
        // While i divides n, print i and divide n
        while (n % i == 0)
        {
            console.log(i + " ");
            n = Math.floor(n / i);
            arr.push(n);

        }
        
    }
    let num=arrays.values();
        for(let ele of num){
          console.log(ele);
        }
}
let l= 100;
primeFactors(l);
//Sum of three numbers are equal to zero
arr = [0, -1, 2, -3, 1];  
// Prints all triplets in arr[] with 0 sum   
    function findTriplets(arr) {
        let found = false;
        for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0)
                {
                    console.log(arr[i]);
                    console.log(" ");
                    console.log(arr[j]);
                    console.log(" ");
                    console.log(arr[k]);
                    console.log(" ");
                    found = true;
                }
            }
        }
        // If no triplet with 0 sum found in array
        if(found === false) {
            console.log(" not exist ");
        }
    }
   }
    findTriplets(arr);
