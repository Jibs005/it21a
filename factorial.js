const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Factorial Application");
console.log("1. Say hello");
console.log("2. Compute Factorial");
console.log("3. Exit");

rl.question("Enter your choice (1-3): ", choice => {
    if (choice === "1") {
        console.log("Hello there!");
        rl.close();
    } else if (choice === "2") {
        rl.question("Enter a number to compute the factorial: ", numstr => {
            let num = parseInt(numstr);

            if (isNaN(num) || num < 0) {
                console.log("Please enter a non-negative integer");
            } else {
                let fact = 1;
                for (let i = 2; i <= num; i++) {
                    fact *= i;
                }
                console.log(`The factorial of ${num} is ${fact}`);
            }
            rl.close();
        });
    } else if (choice === "3") {
        console.log("Exit!");
        rl.close();
    } else {
        console.log("Invalid choice. Please try again");
        rl.close();
    }
});
