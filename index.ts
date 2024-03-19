#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter 2nd Number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);
// console.log(answer);
if(answer.operator==="addition"){
    console.log(answer.firstNumber+answer.secondNumber)
}
else if(answer.operator==="subtraction"){
    console.log(answer.firstNumber-answer.secondNumber)
}
else if(answer.operator==="multiplication"){
    console.log(answer.firstNumber*answer.secondNumber)
}
else if(answer.operator==="division"){
    console.log(answer.firstNumber/answer.secondNumber)
}else{
    console.log("please select correct operator")
}

