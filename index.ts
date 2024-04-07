import inquirer from "inquirer";
let runAgain = 1
for (let i = 0; i <runAgain; i++){

interface UserInput {
    inputCurrency:string,
    inputAmount:number,
    outputCurrency:string
}
let userInput:UserInput = await inquirer.prompt([
    {
        type:"list",
        name: "inputCurrency",
        choices:["Pakistani Rupee","US Dollor", "Saudi Riyal"],
        message:"Select your input currency"
    },
    {
        type:"number",
        name:"inputAmount",
        message:"Enter your amount to convert"
    },
    {
        type:"list",
        name:"outputCurrency",
        choices:["Pakistani Rupee","US Dollor", "Saudi Riyal"],
        message:"Select your output currency"
        }
])
const input = userInput.inputCurrency
const amount = userInput.inputAmount
const output = userInput.outputCurrency
if(input === "Pakistani Rupee"){
    if(output === "US Dollor"){
        console.log(`The amount of ${amount} Pakistani Rupee = ${amount/281} US Dolor`);
    }
    else if(output === "Saudi Riyal"){
        console.log(`The amount of ${amount} Pakistani Rupee = ${amount/75} Saudi Riyal`);
    }
}
else if(input === "US Dollor"){
    if(output === "Pakistani Rupee"){
        console.log(`The amount of ${amount} US Dollor = ${amount*281} Pakistani Rupee`);
    }
    else if(output === "Saudi Riyal"){
        console.log(`The amount of ${amount} US Dollor = ${amount*3.75} Saudi Riyal`);
    }
}

else if(input === "Saudi Riyal"){
    if(output === "US Dollor"){
        console.log(`The amount of ${amount} Saudi Riyal  = ${amount/3.75} Dollor`);
    }
    else if(output === "Pakistani Rupee"){
        console.log(`The amount of ${amount} Saudi Riyal = ${amount*75} Pakistani Rupee`);
    }
}

    const ans = await inquirer.prompt({
        type:"input",
        name:"again",
        message:"Are you want another conversion ? (y/n)"
    })
    if(ans.again === "y"){
        runAgain++

    }
}