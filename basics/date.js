// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log((myDate.toLocaleString()));
console.log(myDate.toJSON());
console.log(myDate.toTimeString());

let myCreated = new Date(2023,0,23); //months start with 0
console.log(myCreated);
console.log(myCreated.toLocaleString());
let myCreated1 = new Date("2023-01-23");
let myCreated2 = new Date("02-24-2000");
console.log(myCreated2);
let timeStamp = myCreated.getTime();
console.log(timeStamp);
console.log(Math.floor(Date.now()/1000));
console.log(myCreated.getMonth()+1); //month starts with 0 number