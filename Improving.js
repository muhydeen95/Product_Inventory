// JavaScript Syntax


//      Variables - containers or box used to store data values/ The are generally split into three primary categories  (let, const, var)

//      Data Types - JavaScript is not just about the "box" (the variable), but what we or you actually put inside it.

//          Data types are generally split into two categories (Primitive - simple values, Objects - Complex Collections)

//          Primitive Data Types - String, Number, Boolean, Undefined, Null

//          Complex Collections - Arrays (are for ordered list), Objects (are for describing one specific thing in detail)

const characterName = "Jinx";
let level = 1;
let inventory = ["sword", "sheild", "magic" ];
let stats = {
    health: 100,
    isAlive: true,
    //stats.health = stats.health - damage
};

//  Methods 
//      In JavaScript, Arrays (like your inventory) have special built-in tools called "methods" to help change them.

//      Adding an Item - To add a new item to the end of your list, use ".push()". it's like tossing a new item into the back of a backpack.

inventory.push("health potion", "magic map");

//      Updating a Specific Item
//          What if your "Sword" breaks and becomes a "Broken Sword"? You can target a specific spot in the using its index (remember, counting starts at 0).

inventory[0]="Broken sword"

// Operators
//      Are the symbols we use to perform calculations or change values. When we use them to update variable, we usually combine them with the assignment operator

let damage = 120;
level++;
stats.health-= damage;


//  Checking Types - If you ever get confused about what's inside a variable, JavaScript has a built in inspector called "typeof"

console.log(typeof inventory)
console.log(typeof characterName)

// This is the "Print" button for JavaScript:
console.log("Character Name:", characterName);
console.log("Character Stats:", stats);
console.log("Character Level:", level);
console.log("Character Inventory:", inventory);

//  An if statement is a way to make decisions in your code based on conditions. It checks if something is true or false and then runs different code depending on the result.

if (stats.health > 0 ) {
    console.log("Survived with" + stats.health + "HP!");
} else {
    console.log("The hero has fallen.");
}

//  Functions - are reusable blocks of code that perform a specific task. They help keep your code organized and avoid repetition.

//     To create a function, you use the "function" keyword, followed by a name, parentheses, and curly braces. Inside the curly braces, you put the code that you want the function to execute when it's called.

//     To create a function, you need:
//          1. The "function" keyword
//          2. A name for the function (should be descriptive of what it does)
//          3. Parentheses "()" - can include parameters (inputs) if needed
//          4. Curly braces "{}" - to enclose the code block that defines what the function does

function heal(amount) {
    stats.health += amount;
    console.log("Healed for " + amount + " HP. Current health: " + stats.health);
}