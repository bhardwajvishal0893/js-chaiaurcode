let score = "99";
console.log(typeof score);
let scoreNum = Number(score);
console.log(typeof scoreNum);
console.log(scoreNum); // will return 99 as number
// Now lets see something unique
let score1 = "99ab";
let score1Num = Number(score1)
console.log(typeof score1Num); // will return number as output
console.log(score1Num); // will return NaN

let flag = null;
console.log(typeof flag);
let flagNum = Number(flag);
console.log(typeof flagNum); // will return number as type
console.log(flagNum); // will return 0 value for flagNum var 

let bool = true;
console.log(typeof bool);
let boolNum  = Number(true);
console.log(typeof boolNum);
console.log(boolNum); // will return 1 as bool is true

let isLoggedIn = 1;
let boolIsLoggedIn = Boolean(isLoggedIn);
console.log(boolIsLoggedIn);
// 1=>true 0=>false ""=>false "Vishal"=>true
