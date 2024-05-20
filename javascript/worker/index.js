const startTime = Date.now();
const numbers = [21, 37, 32, 12, 43, 10, 30, 15, 20];

function fibonacci(num) {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}


for (let i = 0; i < numbers.length; i++) {
    console.log(`Fibonacci of ${numbers[i]}: ${fibonacci(numbers[i])}`);
}
console.log(`Time taken: ${Date.now() - startTime}ms`);
