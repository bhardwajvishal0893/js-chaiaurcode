// let a = 10;
// const b = 20;
// var c = 40; // var doesn't behave as it should with block scope

let d = 500;
if(true){
    let a = 10;
    const b = 20;
    var c = 40; // c = 40 will still behave the same
    let d = 50; // this d will be treated differently than the line 5 d but if say in scope it was d=50 without let then it will be updated
    console.log("Inner : ",d);
}
// console.log(a); // will cause exception a is undefined error expected
// console.log(b); // will cause exception a is undefined error expected
console.log(c); // will be printed correctly that should not be done because we wanted the scope to be in if block
// say a programmer wrote var = 400 before the if condition he will get v = 40 and he will have to figure out what is happening
console.log(d);

function one(){
    const username = "Vishal"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website); // this line will cause error Reference Error
    two();
}
//one();
// Inner function can access outer variables but reverse is not true
if(true)
    {
        const username = "Vishal"
        if(username === "Vishal")
            {
                const website = "youtube.com"
                console.log(username+website);
            }
        console.log(website);
    }


// +++++++++++++++++++++++++ Another function technique below +++++++++++++++++++++++++

const addTwo = function(num){
    return num+1;
}
console.log(addTwo(5));

// In normal function if you call function before function implementation it will work but in the second case it wont work
// Hosting