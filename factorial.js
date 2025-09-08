const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout

})
function mainMenu(){
    console.log("Factorial Application");

console.log ("factorial Application");

console.log ("1. Say hello");
console.log ("2.Compute Factorial");
console.log ("3. Exit");

rl.question("enter your choice (1-3)", choice =>{
    if(choice==="1"){
        console.log ("hello there!");
    } else if (choice==="2"){
        console.log ("factorial!");
        rl.question("enter a number to the factorial", numstr =>{
            
            let num = parseint (numstr);

            if(isNaN(num) || num < 0){
                console.log("please enter a non-negative integer");
            } else { 
                let factorial = 1;
                for (let i = 2; i <= num; i++){
                    fact *= i;
                }
                console.log("the factorial of "+ num + " is " + fact);
            }
             backToMenu();
        });
        function backToMenu(){
    console.log("--------");
    console.log("1. Back to menu");
    console.log("2. Exit");

    rl.question("What would you like to do next? (1-2): ", (backtoMenuChoice) => {
        if(backtoMenuChoice ==="1"){
            console.clear();
            mainMenu();
    } else if (choice==="3"){
         console.log ("exciting programming!");
         rl.close();
    } else{
        console.log("Invalid Choice.Please Try Again");
    }

})      