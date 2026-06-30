

function World(){
    if(true){
        var population= 192;
    }
    console.log(population);
}
/** var is function-scoped, not block-scoped. anf becuase of that var is accesiable to function */

function India(){
    if (true){
        let public = 23323;
    }
    try {
        console.log(public);
    } catch (error) {
        console.log("An error occurred:", error.message);
    }
}
function WorldMap(){
    const country = "India";
    try{
        country = "USA"; 
    } catch(error){
        console.log(error.message);
    }
}

function Fruits(){
    const fruits = ["Apple", "Banana"];

    fruits.push("Orange");

    try{
        console.log(fruits);
    } catch(error){
        console.log(error.message);
    }
}

function Profile(){
    const user= {
        name: "paresh"
    }
    user.name = "ram"
    console.log(user.name);
}

World();
India();
WorldMap();
Fruits();
Profile();
// 1. Difference between var, let and const?
//  var is function based scope / let and const are block based variable 
//  let can be reassinged but const connot reasign

// 2. Why can we use push() on a const array?
//  push() work on const becuase it not doing reassigning it does mutation means its just modify varible value without creating new array so JS allow this.

// // 3. Why does const throw an error during reassignment?
//  when we do reassingment JS try to create new memory for that variable but in JS const is binding with memory so it throw error 
