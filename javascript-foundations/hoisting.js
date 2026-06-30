
function Hosit(){
    // output:  undefined
    // reason: var is hoisted and variable initialized with undefined in creation phase
    console.log(language);
    var language = "JavaScript";

    // output : referance error
    // reason : let is hoisted and but JS doesnot allow initialization for let

    try {
        console.log(city);
    } catch (error) {
        console.log(error.message);
    }

    let city = "Pune";

    // output : referance error
    // reason : const is hoisted and but JS doesnot allow initialization for const
    try {
        console.log(country);
    } catch (error) {
        console.log(error.message);
    }

    const country = "India";
}


    //output : undefined and Google
    //reason : console log is inside the function and while creation its initilize with undefined because JS found  varibale in same scope and second while execution JS initilize value
var company = "OpenAI";

function showCompany() {
    console.log(company);

    var company = "Google";

    console.log(company);
}

showCompany();

// output : "Hello"
// reason : function is hoisted and initilize undefined while creation phase but in execution its render Hello 

greet();

function greet() {
    console.log("Hello");
}

// output : "Hello"
// reason : var variable is hoisted and initilize undefined while creation phase but in execution its render Hello 

function greet() {
    console.log("Hello");
}

greet();

var greet = function () {
    console.log("Hello");
};

// output :  referance  error
try {
    sayHi();
} catch (error) {
    console.log(error.message);
}

const sayHi = () => {
    console.log("Hi");
};


Hosit();