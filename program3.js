/*
Project Euler Question id 3

------Largest prime factor-------

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

var n;

function primeFactor(n) {
    var factor = [];
    for (var i = 2; i <= n; i++) {
        if (n % i == 0) {
            n = n / i;
            factor.push(i);
        }
    }
    return factor;
}
alert(primeFactor(600851475143));

// Answer : 6857
