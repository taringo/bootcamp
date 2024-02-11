// 1. Declare three variables: one for a number, one for a string, and one for a boolean.
// Assign values to each variable and log them to the console.

// variable = number

let number = 3

console.log(number);

// variable = string

let string = "my name is yaffa"

console.log(string);

// variable = boolean

let boolean = 3>8

console.log(boolean);

// variable = null

let sarah = null

// variable = Array

let yaffa =[1,2,4,8,{shos:1}]

// variable = undefined

let may;
// variable = Object

let nadavcar = {

    model: 'ford focos',
    year: '1222',
    color : 'gold'
}


// 2. Use a loop to print the numbers 1 to 5 to the console.
// Bonus: Use a different type of loop to achieve the same result.

// loop= 

let numbers = [1, 2, 3, 4, 5,]

for (const number of numbers) {
 console.log(number);
}




// 3. Create an array of colors. Loop through each color and log '{color} is my #{number} favorite color.'

let colors = ["yellow", "blue", "red"]

for (const color of colors) {
    console.log(`${color} is my #${colors.indexOf(color)+1} favorite color`);
}

for (let i = 0; i < colors.length; i++) {
    console.log(`${colors[i]} is my #${i+1} favorite color`);
}

// 4. 
//     I. Create an object representing a person with properties: name, age, and profession.
//     Log the person's information to the console.

    // II. Create a function that takes a person object as a parameter. 
    // The function should check the age of the person to see if they're above drinking age(18). 
    // Log to the consule a short message to tell the person if they're below or above the drinking age, 
    // the message should include the person's name. 
    // Call the function with the person object you created earlier.

let person = {
    name: "taringo",
    age: 36,
    profession: 'kindergartner'
}

function properties (person) {
if (person.age>= 18) {
    console.log(person.name + " can drink");
}
else {
    console.log(person.name + " can't drink");
}
}
properties(person)



// 5. Write a function called 'calculateTax' that takes the total amount
// of a purchase and a tax rate as parameters, and returns the calculated tax.
// Call the function with a purchase amount of $100 and a tax rate of 8%,
// and log the result to the console.

function calculateTax(amount ,texrate) {
    let x= texrate/100
    return amount*x
}
calculateTax(100, 8)
console.log(calculateTax(100, 8));

function plus(num1 ,num2) {
    return num1+num2
}
console.log(plus(2,4));
console.log(plus(7,7));



// 6. Write two functions: 'doubleNumber' that takes a number
// and returns the double of that number, and 'squareAndDouble' that
// calls 'doubleNumber' and squares the result. Call 'squareAndDouble'
// with the initial number 4 and log the result to the console.

function doubleNumber(num) {
    return num*2
}

function squareAndDouble(num2) {
    let double = doubleNumber (num2)
    return double * double
}
console.log(squareAndDouble(16));

// 7. Create a button in HTML. Use JavaScript to add a click event listener that logs "Button clicked!" 
// to the console when the button is clicked.

let button = document.getElementById('clickMe')
button.addEventListener('click', ()=>{
    console.log("Button clicked!");

    // function button() {
    //     console.log('button clicked');
    //     button.addEventListener('click', buttonclicked)
        
    // }
})

// 8. Create a simple counter:
//     Display an initial counter value on the web page. the initial value should be 0.
//     Include three buttons labeled "Increase," "Decrease," and "Reset" on the page.
//     Implement functionality so that:
//         - Clicking "Increase" adds 1 to the counter.
//         - Clicking "Decrease" subtracts 1 from the counter.
//         - Clicking "Reset" sets the counter back to its initial value.



function number3(num1, num2) {
    return num1/num2

}
console.log(number3(15, 5));

let taringo = document.getElementById('taringo')

taringo.textContent= 'taringo'

