// Depending on memory usage we have primitive and non primitive data types

// 7 types : String, Number, Boolean, bigint, Null, Undefined, Symbol -> to make a value unique

// Reference types (Non Primitive) Array Object Functions

// JS is a dynamically typed language

const score  = 100;
const scoreStr = "100";
const id = Symbol("101");
const idNew = Symbol("101");
console.log(id === idNew);

const heros = ["Hanuman Ji","SuperMan","Batman","IronMan","WonderWoman"];

let myObj = {
    name:"Vishal",
    age : 24
}

console.log(myObj.age);

const myFunc = function(){
    console.log("Hello World");
}

// typeof null is an object

console.log(typeof myObj); // object
console.log(typeof myFunc); // function

//MEMORY STACK(PRIMITIVE) AND HEAP(NON PRIMITIVE)
let youtubeName = "vishalbhardwaj.com"
// stack is bit above bit first in last out

let anotherName = youtubeName; // you are given a copy of youtubeName
youtubeName = "sumansingh.com"
console.log(youtubeName);
console.log(anotherName);

let userOne = {
    email : "xyz@gmail.com",
    upi : "2045@ybl"
}

let userTwo = userOne //not a copy but a reference of same userOne so if we change userTwo value than userOne value will change as well because of same reference
userTwo.email = "qwerty@gmail.com"
console.log(userTwo.email);
console.log(userOne.email);

