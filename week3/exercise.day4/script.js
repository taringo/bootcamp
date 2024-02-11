// 🌟 Exercise 1: Simple If/Else Statement

let x= 10
let y= 15
if (x>y) {
    console.log('x is bigger');
} else {
    console.log('y is bigger');  
}

// 🌟 Exercise 2: Chihuahua
let newDog = 'Chihuahua'
newDog.length;
console.log(newDog.length);
console.log(newDog.toLowerCase());
console.log(newDog.toUpperCase());

if (newDog == 'chihuahua') {
    console.log('I love Chihuahuas, it’s my favorite dog breed');
} else {
    console.log('I dont care, I prefer cats');
}

// // 🌟 Exercise 3: Even Or Odd
let number=prompt('Please enter a number')
let numbers=parseInt(number)
    console.log(number);   

if (number ) {
}

// Prompt the user for a number and convert it to an integer
let userInput = prompt("Please enter a number:");
if (userInput % 2 === 0) {
        console.log(userInput + 'is an even number');
} else {
    console.log(userInput +'is an odd number');    
}


// 🌟 Exercise 4: Group Chat
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
console.log(users);
if (users.length === 0) {
    console.log(users [0]+ 'no one is online');
}
if (users.length === 1) {
    console.log(users[1]+'is online');
}
if (users.length === 2) {
    console.log(users[1,2]+'are online');
}
else {
    console.log(users.length); 
}

