/*  
Page 2 
 Java - Package ,  C# - Namespace, JS - Module
 Modules are used to put the logically related stuff together
 Modules are used to avoid naming collesions eg: Java.IO.File , Pooja.IO.File (Same program we can use classes with same name which is available in two different modules)
 Modules are used to provide the clear saperation that file is the class belongs to Java and file is the class whcih belongs to pooja module
 Module plays a very important role in javascripts 
 To create a module in javascript we need to understand the concept called IIFI (Immediately Invoking Function Expression)
 Before understanding IIFI  - We need to understand SELF INVOKING FUNCTION - A FUNCTION WHICH INVOKES ON ITS OWN ()();
 */
//SELF INVOKING FUNCTION - A FUNCTION WHICH INVOKES ON ITS OWN 
var i = (function () {
    return 5;
})();
console.log(typeof (i));

//Calculator module
var Calculator = (function () {
    var addNumber = function (a, b) { return a + b }; // with the help of module I can encapsulate this logic i.e, I dont want to share this logic with the outside world untill and unless I am sharing this with the help of the object add: addNumber
    var subtractNumber = function (a, b) { return a - b };
    var multiplyNumber = function (a, b) { return a * b };
    var divideNumber = function (a, b) { return a / b };

    return {
        add: addNumber, // exposing the above encapsulated function to the outside world
        //subtract: subtractNumber, // If I am commenting this line then there is no way we can access subtractNumber
        multiply: multiplyNumber,
        divide: divideNumber

    }
})();
/* Scope of the variables (addNumber,subtractNumber,multiplyNumber,divideNumber) will be only between {} (curly brackets) it cannot be accessed outside 
   but if we are planning to expose the addNumber to the outside world then we can create the module with the concept IIFI and we can decide that add is 
   the key and it is pointing to variable addNumber. so, we can now access calculator.add(5,6)
*/

console.log(`Add using normal Calculator : ${Calculator.add(5, 6)}`);
//console.log(`Subtraction using normal Calculator : ${Calculator.subtract(5, 6)}`);
console.log(`Multiplication using normal Calculator : ${Calculator.multiply(5, 6)}`);
console.log(`Division using normal Calculator : ${Calculator.divide(5, 6)}`);


// Special Calculator Module  - the below module is an example for avoiding the naming collision. Also, using ES6 Syntax

var SplCalculator = (function () {

    const addNumber = (a, b, c) => a + b + c;
    const subtractNumber = (a, b, c) => a - b - c;
    const multiplyNumber = (a, b, c) => a * b * c;
    const divideNumber = (a, b, c) => a / b / c;

    return {
        add: addNumber,
        subtract: subtractNumber,
        multiply: multiplyNumber,
        divide: divideNumber
    }
})();

console.log(`Add using SplCalculator: ${SplCalculator.add(4, 5, 8)}`);
console.log(`Subtract using SplCalculator: ${SplCalculator.subtract(4, 2, 6)}`);
console.log(`Multiply using SplCalculator: ${SplCalculator.multiply(4, 2, 7)}`);
console.log(`Divide using SplCalculator: ${SplCalculator.divide(4, 2, 8)}`);
