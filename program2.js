/*
Project Euler Question id 2

------Even Fibonacci numbers-------

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

*/

function fib() {
 	var a = 1;
    var b = 1;
    var sum = 0;
    var evenSum = 0;
    while(1) {
     	sum = a + b;
        if (sum >= 4000000) {
         	break;   
        }
        a = b;
        b = sum;
        if (sum % 2 == 0) {
         	evenSum = evenSum + sum;  
        }
    }
    return evenSum;
}

alert(fib());

// Answer : 4613732