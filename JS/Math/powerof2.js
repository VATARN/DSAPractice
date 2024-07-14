function isPowerOfTwo(n) {
    if (n < 2) return false;
    while (n > 1) {
        if (n % 2 !== 0) return false;
        n = n / 2;
    }
    return true;
}

console.log(isPowerOfTwo(1)); //false
console.log(isPowerOfTwo(2)); //true
console.log(isPowerOfTwo(3)); //false
console.log(isPowerOfTwo(16)); //true

// Time Complexity: O(log(n))

function isPowerOfTwoBitwise(n) {
    if (n < 2) return false;
    return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitwise(1)); //false
console.log(isPowerOfTwoBitwise(2)); //true
console.log(isPowerOfTwoBitwise(3)); //false
console.log(isPowerOfTwoBitwise(16)); //true

// Time Complexity: O(1)