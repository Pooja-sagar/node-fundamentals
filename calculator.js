/* 
Page 4
Create my own module and using it multiple times as I need it
*/

// Created below sample API
class Calculator {
    add(a, b) {
        return a + b;
    }
    multiply(a, b) {
        return a * b;
    }
}

// using the above sample API 
var calc = new Calculator();
console.log(calc.add(5, 6));

//If I want to share it with others  - i.e, export it to another program
module.exports = Calculator;

