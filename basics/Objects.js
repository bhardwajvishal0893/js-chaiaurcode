//Object literals

const user ={} //Object Literals
// Object.create using constructor will allow singleton object
const mySym = Symbol("key1")
const jsUser = {
    name:"Vishal",
    [mySym] : "key1Value", // for using Symbol [] is mandatory in key
    age:24,
    email:"vishal@gmail.com",
    lastLoginDate : ["Monday","Tuesday"],
    "full Name" : "Vishal Bhardwaj"
}
console.log(jsUser.name); // WIll work but the preffered is below
console.log(jsUser["name"]); // but we will need quotes because name is string format, suppose the key is "fullName", then . will not work in case you do that.
console.log(jsUser["full Name"]);


//Override values
jsUser.email="vishal@chatgpt.com"

//Freeze values
//Object.freeze(jsUser);
jsUser.email="vishal@microsoft.com" // value wont be changed but wont throw error as well

//function are type 1 citizens can be treated as variable 
jsUser.greeting = function(){
    console.log("Hello JSUSER");
}
console.log(jsUser); 
console.log(jsUser.greeting); //function wont be called reference will be returned
console.log(jsUser.greeting());
jsUser.greeting2 = function(){
    console.log(`Welcome my friend welcome ${this.name}`); //this will give every variable in the object
}
console.log(jsUser.greeting2());

//Singleton

//const tinderUser = new Object(); //using constructors this is a singleton object
const tinderUser = {};
tinderUser.id  = "101abc";
tinderUser.name = "Vishal";
tinderUser.isLoggedIn = true;
tinderUser.email = "loveyourlife@gmail.com"
const regularUser = {
    email:"something@gmail.com",
    fullName:{
        regularUserFullName:{
            firstName : "Vishal",
            lastName : "Bhardwaj" // multiple nestings are possible
        }
    }
};
console.log(regularUser.fullName.regularUserFullName.firstName);

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    99:"y",
    100:"z"
}

const obj3 = Object.assign({},obj1,obj2); // {} is the target and obj1,obj2 is source
const obj4 = {...obj1,...obj2};
console.log(obj3);

const arr1 = [1,2,3,4,5];
const arr2 = [96,97,98,99,100];
const arr3 = [...arr1,...arr2];
console.log(arr3);

const usersData = [
    //Array of objects possible
    {
        id:"101",
        name:"Test1"
    }, 
    {
        id:"102",
        name:"Test2"
    }
]
console.log(usersData[1].id);
console.log(Object.keys(obj2));
console.log(Object.values(obj2));
console.log(Object.entries(obj2)); // every value of the object will be created in an array form
console.log(obj2.hasOwnProperty("99"));





