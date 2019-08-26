for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    
    
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("ChickenMonkey"); // // Only multiples of 5 and 7 will be ChickenMonkey
    } else if (currentNumber % 5 === 0) {
        console.log("Chicken"); // Only multiples of 5 will be Chicken
    } else if (currentNumber % 7 === 0) {
        console.log("Monkey"); // Only multiples of 7 will be Monkey
    } else {
        console.log(currentNumber); // Everything else will be plain numbers
    }

}



let bandNumber = 1;

const takeNumber = function (name) {
   
    let returnstring = bandNumber + ". " + name; // String concat
    bandNumber = bandNumber + 1; // Incrimenting the global counter
    return returnstring;
    

}

const scum = takeNumber("Galactic Scum");
console.log(scum);  // This should print "1. Galactic Scum" in the console, and so on.
console.log(takeNumber("A Better name than that")); // This should also work

const under = takeNumber("Underdogs");
console.log(under) ;