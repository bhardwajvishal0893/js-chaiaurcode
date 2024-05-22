const score = 400;
console.log(score); // type of score is number

const number = new Number(100);
console.log(number); // type of score is object
console.log(number.toString()); // will convert number to a string object and will enable all the string related properties
console.log(number.toString().length);
console.log(score.toFixed(2));

const num1 = 24.8989;
console.log(num1.toPrecision(4));
const num2 = 100000000000000;
console.log(num2.toLocaleString()); // will return 100,000,000,000,000
console.log(num2.toLocaleString('en-IN'));

//---------------MATHLIB---------------

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4,5,2,1));
console.log(Math.max(4,2,1,5));
console.log((Math.random()*10) +1);
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min)
