const user = {
    username : "Vishal",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`); //this is current context
        console.log(this); // this can be thought of as current instance or current object
    }
}

user.welcomeMessage(); // will give Vishal, Welcome to website
user.username = "Sammy";
user.welcomeMessage(); // will give Sammy, Welcome to website because context was changed
console.log(this); // will return empty because context is not there
//Window is the global object in browser so the above line 13 will return Window in Browser

//Arrow

// function chai(){
//     console.log(this); // this we should not use in function
// }
// chai()

// const chai = function(){
//     let username = "Vishal"
//     console.log(username);
// } 

//lets convert the above into Arrow
const chai = () => {
    let username = "Vishal"
    console.log(username);
} 
chai()

// ()=>{}
// const addTwo = (num1,num2) => {
//     return num1+num2;
// }
// console.log(addTwo(5,7))

//can be written like this as well
const addTwo = (num1,num2) => (num1+num2) // when we have curly braces return is required else not required
//const addTwo = (num1,num2) => ({username:"Vishal"})
console.log(addTwo(5,7))


