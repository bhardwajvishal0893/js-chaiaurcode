console.log(2>1);
console.log(2==2);
console.log(2!=2);
console.log(4<=8);

console.log("2">1); // will return true because JavaScript is smart
console.log("02">1); // will return true because JavaScript is smart but make sure to use same data types
                     // cause typescript will not allow this

console.log(null>0); // false cause in comparison we treat null as number as 0
console.log(null>=0); // true because in comparison we treat null as number as 0
console.log(null==0); // false because null and 0 are not the same

console.log(undefined == 0); //will always return false in all comparison or equality check
// === strict check will check the value plus the datatype
console.log("2" === 2); // will return false


// We should avoid the conversion like above we should write clean code
