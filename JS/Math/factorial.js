function factorial(n) {
    let product = 1;
    for (let i = 2; i <= n; i++) {
        product *= i;
    }
    return product;
};

console.log(factorial(4)); //24
console.log(factorial(5)); //120
console.log(factorial(6)); //720

// Time Complexity: O(n)