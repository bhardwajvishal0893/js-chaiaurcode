const name = "Vishal";
const gitRepo = 60;

//console.log(name+gitRepo+" $ "); // We should avoid this way of adding strings in js
// We will use backticks
console.log(`Hello my name is ${name} and number of git repos is ${gitRepo}`); // mrre readable
const fullName = new String("Vishal Bhardwaj") // same thing its just that you are using new string object to create this variable
// The above is creating string by String Object which allows us to use lot of string methods
console.log(fullName[0]);
console.log(fullName.__proto__);
const str = "DemoString"
console.log(str.toUpperCase()); // toUpperCase is a method
console.log(str.length) // length is property for string 
console.log(str.charAt(2));
console.log(str.indexOf('m'))
console.log(str.substring(0,2)); // second param is not included

console.log(str.slice(-9,4)); // negative can be used
const str2 = "    hello   "
console.log(str2.trim());

const link = "http//:prep-insta.dev/aws%20env.com"

console.log(link.replace("%20","-"));

console.log(typeof link.split('-'));