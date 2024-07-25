const { add, multiply } = require("./math.js");
const greet = require("./greet.js");

console.log(greet("Webpack"));
console.log(`2 + 3 = ${add(2, 3)}`);
console.log(`4 * 5 = ${multiply(4, 5)}`);
