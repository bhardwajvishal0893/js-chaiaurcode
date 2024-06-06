function sayMyName(){
    console.log("Vishal");
}
sayMyName() //sayMyName is calling sayMyName is reference
function addToNumbers(num1,num2) // here values are parameters
{
    console.log(num1+num2);
}
function addToNumbersResult(num1,num2) // here values are parameters
{
    let result = num1+num2;
    return result; // After return nothing will be executed
}
addToNumbers(5,4) // arguments 
addToNumbers(3+"4"); //will return 34
addToNumbers("3"+4); //will return 34
const result = addToNumbersResult(5,5);
console.log("Result : ",result); // will return undefined because we are just logging 
//function userLoginMessage(username = "Vishal"){
function userLoginMessage(username){
    // if(username === undefined)
    //     {
    //         console.log("Please enter user name");
    //         return;
    //     }
        if(!username)
            {
                console.log("Please enter user name");
                return;
            }
    return `${username} logged in just now`;
}
// let resultStr = userLoginMessage("Vishal");
let resultStr = userLoginMessage();

console.log(resultStr); // undefined logged in now will be returned if not passring any attribute 

//function calculateCartPrice(...num1){ //will get the values as array of values
function calculateCartPrice(val1,val2,...num1){ 
    return num1; //will return [400,500]
}
console.log(calculateCartPrice(100,200,400,500)) 

const user = {
    username : "Vishal",
    price : 199
}

function handleObject(anyObject){
    console.log(`UserName is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);
handleObject({
    username:"Sammy",
    price : "10000000"
})

const myArray = [100,200,400,500];
function returnSecondArray(getArray)
{
    return getArray[1];
}

const resultArray = returnSecondArray(myArray);
console.log(resultArray);