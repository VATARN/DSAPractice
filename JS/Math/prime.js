function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(1)); //false
console.log(isPrime(7)); //true
console.log(isPrime(8)); //false

// Time Complexity: O(n)

function optimizedIsPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(optimizedIsPrime(1)); //false
console.log(optimizedIsPrime(7)); //true
console.log(optimizedIsPrime(8)); //false   

// Time Complexity: O(sqrt(n))