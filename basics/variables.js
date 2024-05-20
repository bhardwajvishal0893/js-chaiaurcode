// "use strict" if you write this it will treat all js code as new code

const accountId = 101 // will not be changed in later part of the code
let accountEmail = "vishal@gmail.com"
var accountPassword = "1234@"
accountCity = "Patna"
let accountState
//accountId = 202; // will not be allowed by node.js
console.log(accountId);

accountEmail = "vishal101@gmail.com"; // value will be updated
accountPassword  = "101@"; //value will be updated

accountCity = "Bengaluru";
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) // accountState will be undefined 

/*
    prefer not to use var
    because of issue in block or functional scope
*/

//alert(3+3); We are using node js not browser

let name = "Vishal";
let age = 24;
let netWorth = 10000000000000000000000000000000000n; // bigint just add n
let isRich = true;
/*
    Primitive Datetypes : number,bigint, string, boolean, null -> standalone type, undefined state, symbol => Unique
    Non Primitive : Object
    
    let xyz = null and let xyz = "" are two different things
*/

console.log(typeof(netWorth)); // will output bigint correctly
console.log(typeof(isRich));
console.log(typeof null);
console.log(typeof undefined); // no need to use brackets also when working with typeof
