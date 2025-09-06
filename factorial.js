const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

console.log ("factorial Application");

console.log ("1. Say hello");
console.log ("2.Compute Factorial");
console.log ("3. Exit");

rl.question("enter your choice (1-3)", choice =>{
    if(choice==="1"){
        console.log ("hello there!");
    } else if (choice==="2"){
        console.log ("factorial!");
    } else if (choice==="3"){
         console.log ("exit!");
    } else{
        console.log("Invalid Choice.Please Try Again");
    }

})