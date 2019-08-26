for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    
    
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("ChickenMonkey"); // Only 2, 4, 6 will appear
    } else if (currentNumber % 5 === 0) {
        console.log("Chicken"); // Only 2, 4, 6 will appear
    } else if (currentNumber % 7 === 0) {
        console.log("Monkey"); // Only 2, 4, 6 will appear
    } else {
        console.log(currentNumber);
    }

}



let bandNumber = 1;

const takeNumber = function (name) {
   
    let returnstring = bandNumber + ". " + name;
    bandNumber = bandNumber + 1;
    return returnstring;
    

}

const scum = takeNumber("Galactic Scum");
console.log(scum);  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs");
console.log(under) ;