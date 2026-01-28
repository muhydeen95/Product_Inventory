//      JavaScript Syntax.....


//1. Variables: For storing data
//{
const name = "Dimeji";

const age = 23;

//\x1b[32m =Green
//\x1b[33m =Yellow
//\x1b[0m =Reset (to stop coloring)

//console.log("\x1b[32m", name, "\x1b[om");

//console.log(name);

console.log("hello", name);
// }

{
let age = "30";
age = 33;
}


//2. Data Types: also called a string. Anything that has a test, name, or sentence. Must be in either single or double quotations. Numbers can be decimal or point float. Also "Arrays". Arrays is a list of items/names/numbers.

//Array
{
const names = ["Dimeji", "Emilay", "Faith"]

console.log(names);
}


//Objects
{
    const user = {
        name: "Dimeji",
        age: 23,
        IsActive: true,
    };
    console.log(user.age);
}


//3. Functions: Reuseable codes
{
    function greet(name) {
        return "Hello" + " " + name;
}
console.log(greet("Dimeji"));
}