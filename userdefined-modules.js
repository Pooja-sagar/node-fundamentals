/* 
Page 5
In calculator.js we have exported the calculator sample API  and I am trying to import it now
So, to import we used require function
By following this we can achive resubailty 
*/
// since I am exporting class I am using the variable in pascal case in the below line
const Calculator = require('./calculator');
const calc = new Calculator();
console.log(`Add: ${calc.add(5, 6)}`);
console.log(`Multiply: ${calc.multiply(5, 6)}`);