// ==========================================
// Arrow Functions Practice
// ==========================================

/*
What is an Arrow Function?
--------------------------
Arrow functions are a shorter way to write functions in JavaScript.
They were introduced in ES6 to make the syntax cleaner and easier to read.
*/

/*
Why were Arrow Functions introduced?
------------------------------------
- Less code
- Cleaner syntax
- No need to write the function keyword
- Most importantly, they don't create their own `this`.
  Instead, they use `this` from the surrounding scope.
*/

/*
How are they different from Regular Functions?
----------------------------------------------
Regular functions have their own `this`.

Arrow functions inherit `this` from where they are created (lexical scope).

Because of this, arrow functions are great for callbacks,
but not for object methods.
*/

/*
Can an Arrow Function be used as a constructor?
-----------------------------------------------
No.

Arrow functions don't have their own `this` or prototype,
so they cannot be called with the `new` keyword.
*/


// ==========================================
// 1. Convert regular functions to arrow functions
// ==========================================

// Regular Function
function greet(name) {
  return `Hello ${name}`;
}

// Arrow Function
const greetArrow = (name) => {
  return `Hello ${name}`;
};

console.log(greetArrow("Paresh"));


// Regular Function
function square(number) {
  return number * number;
}

// Arrow Function
const squareArrow = (number) => {
  return number * number;
};

console.log(squareArrow(5));


// ==========================================
// 2. Implicit Return
// ==========================================

// If there is only one expression,
// we can skip the return keyword.

const add = (a, b) => a + b;

console.log(add(10, 20));


// ==========================================
// 3. Regular object method
// ==========================================

const user = {
  name: "Paresh",

  greet() {
    console.log("Regular Method:", this.name);
  },
};

user.greet();


// ==========================================
// 4. Arrow function inside setTimeout
// ==========================================

const employee = {
  name: "Paresh",

  greet() {
    setTimeout(() => {
      console.log("Arrow inside setTimeout:", this.name);
    }, 1000);
  },
};

employee.greet();


// ==========================================
// 5. Arrow function used as an object method
// ==========================================

const person = {
  name: "Paresh",

  greet: () => {
    console.log("Arrow Method:", this.name);
  },
};

person.greet();

/*
Output:
Arrow Method: undefined

Reason:
Arrow functions don't have their own `this`.
So here, `this` is NOT the person object.
It comes from the outer scope instead.
*/


// ==========================================
// 6. Arrow functions cannot be constructors
// ==========================================

const Student = (name) => {
  this.name = name;
};

// Uncomment the line below to see the error
// const student = new Student("Paresh");

/*
TypeError: Student is not a constructor

Reason:
Arrow functions don't have their own
- this
- prototype

That's why they cannot be used with `new`.
*/