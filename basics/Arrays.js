const myArr = [0,1,2,3,4,5,true,'hitesh'];
console.log(myArr[0]);
const myArr2 = new Array('Mumma','Daddy','Wifey','Me');
myArr.push(10);
myArr.push(12);
console.log(myArr);
myArr.pop();
console.log(myArr);
myArr.unshift(11); // add 11 to first element but will move all the elements
console.log(myArr);
myArr.shift();
console.log(myArr);
console.log(myArr.includes(5));
console.log(myArr.indexOf(3));
console.log(myArr.join()); //return type will be string
//Slice and Splice

const newArr = [1,2,3,4,5,6];
console.log('Our original Array ',newArr);
console.log("Sliced portion ",newArr.slice(1,4)); // 1 and 4 are indexes 4 is not included, slice will give that portion but will not change array
console.log("After slice Operation our Array ",newArr); // no change
console.log("Spliced operation",newArr.splice(2,4)); // 4 is inclusive here and will update the array which will only contain elements that are not in slice operation, it will display front start index and it will display end numbers for eg (2,4) means start from 2 index and include 4 elements afterwords
console.log("Our array after Splice Operation ",newArr);

const marvel_heros = ['Thor','IronMan','Captain America','Hulk'];
const dc_heros = ['BatMan','SuperMan','Wonder Woman','Flash'];
//marvel_heros.push(dc_heros); // becuase array can take any data so it pushes array not individual elements
//console.log(marvel_heros[4][1]);
console.log(marvel_heros.concat(dc_heros)); // return type is an object remember
const all_newheros = [...marvel_heros,...dc_heros];
console.log(all_newheros);
const another_array = [1,2,[4,5,6],7,[[11,12,14,15],9,10]];
const another_array2 = another_array.flat(Infinity);
console.log(another_array2);

console.log(
    Array.isArray("Vishal"));
console.log(Array.from("Vishal"));
console.log(Array.from({name:"Vishal"})); // will return an empty array
const obj1 = {
    name:"Vishal",
    age:24
}
console.log(obj1.age);

score1= 100;
score2=99;
score3=100;
score4=98;
console.log(Array.of(score1,score2,score3,score4));