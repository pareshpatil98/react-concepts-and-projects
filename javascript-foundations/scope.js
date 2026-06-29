const { lazy } = require("react");

const company = "OpenAI";

function showCompany(){
    console.log(company)
}

function greet(){
    const message = "Hello";
    console.log(message);
}

function first(){
    const language = "JavaScript"
}

function second(){
    console.log(language)
}

function printCompany() {
  const company = "Google";
  console.log(company);
}

showCompany();
greet();
second();
printCompany();
console.log(message);



/**** what is scope:
    scope define where varibale can be accessed within the program

    why scope are important:
    scope are use to control the visibility , without scope will have name conflict and it could also raise bugs

    what is global scope:
    its a scope where variable is declared out side of every function and block , its belongs to global scope

    what is function scope:

    varibale declared inside of the function can only access with that function.
    */