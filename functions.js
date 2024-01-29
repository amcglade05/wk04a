// use the command 'node functions' to get the sum to run on the terminal
// make sure to always save before running
// === to make sure the data type and the content are the same
// == is true, === is false

const add1 = (a, b) => {

    //let result = a + b;
    //return result;
    return a + b;
};

const add2 = (a, b) => a + b;

console.log(add1(4,45));
console.log(add2(9,23423));


//if the day is wednesday it will print as true for the plant needed to be watered if its not it will print false
const plantNeedsWaterA = (day) => {
if(day === "Wednesday"){
}else{
    return false;
}
};

const plantNeedsWaterA2 = (day) => {
    let result = false;
    if(day === "Wednesday"){
        result = true;
    }
    return result;
};

//will ask the date from the system
console.log(new Date());

//will get a number equal to the day of the week e.g. 1 = Monday
//will then take that number and compare it to the array list to print out what day it is
let date = new Date();
let day = date.getDay();
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday"];
day = weekdays[day];
console.log(day);

//will check what day it is and if that day is what day the plant needs to be watered
console.log(plantNeedsWaterA2("Monday"));