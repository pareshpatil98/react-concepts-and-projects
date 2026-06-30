//Create a function that returns another function which prints your name.
function Outer(){
    let name = "Paresh"
    function inner(){
        console.log(name);
    }
    return inner();
}
Outer();

function Counter(){
    var count = 0
    function countCounter(){
        count++;
        console.log(count);
    }
    return countCounter;
}
const counter = Counter();
counter();
counter();
counter();
counter();

function createAccount(){
    let balance = 0
    return {
        deposit(amount){
            balance += amount
        },

        getBalance(){
            console.log(balance)
        },
    } 
}

const account = createAccount();

account.deposit(500);
account.deposit(300);
account.getBalance();


function createCounter(){
    var count = 0
    function counter(){
        count++;
        console.log(count)
    }
    return counter;
}
const counterA = createCounter();
const counterB = createCounter();

counterA();
counterA();

counterB();

counterA();

counterB();