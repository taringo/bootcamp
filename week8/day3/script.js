// // function func() {
// //    let x = 'hello'
// //    if (condition) {
// //     console.log(x);
// //    } 
// // }
// // console.log(x);

// // let y = 'nadav'
// // function name() {
// //     console.log(y);
// // }


// function sayHello(name='nadav') {
//     console.log('Hello', name);
// }
// sayHello('sarah')
// sayHello('mazal')
// sayHello()

// // Conditional (Ternary) Operator

// let age = 18
// if (age < 18) {
//    console.log("Sorry, you're too young.");
//   } else {
//     console.log("Yay! You're old enough!");
//   }

//   age < 18 ? console.log("Sorry, you're too young."): console.log("Yay! You're old enough!"); console.log('exactly');

// let person = ''
// if (person == '') {
//     console.log(false);
// } else {
//     console.log(true);   
// }

// person == '' ? console.log(true): console.log(false);


// // Create a function to check the year given by the user
// // If the year is after 2000, you should display "You are in the 21st century", else you should display "You live in the Middle Age"

// let yearGiven = 2000
// yearGiven > 2000 ? console.log('You are in the 21st century'): console.log('You live in the Middle Age');

// const funcName2 = () => {
// }
// const add = (num1, num2) => {
//     return num1+ num2
// }
// const add2 = (num1, num2) => num1 + num2

// const sayHey = name => {
//     console.log(`hay, ${name}`);
// }

// const times2 = num => num*2
// function times(num) {
//     return num*2    
// }
// console.log(times2(25));

// const calculator = (num1, num2, sign) => {
//     return sign == '+' ? num1 + num2:
//     sign == '-' ? num1 - num2:
//     sign == '*' ? num1 * num2:
//     console.log('not supported');
// }
// console.log(calculator(2,5,'*'));
// console.log(calculator(2,5,'-'));
// console.log(calculator(2,5,'+'));

// let arr = [1, 2, 3, 4, 5]
// arr.forEach((item, index) => {  
//     console.log(`number is ${item} index is ${index}`);
//     arr [index] = arr [index] * 2
// });
// console.log(arr);

const numbers = [10,11,12,15,20];
numbers.forEach ((value, i) => {
if (value % 2 == 0 ) {
    console.log(value);
}})

let number = [10,11,12,15,20];
number.forEach((num, i) => {
    num % 2 == 0 ? console.log(num): undefined
})

let ifTrue= number.some((value, i) => {
    return (value < 13) 
})
console.log(ifTrue);

let ifAllTrue = numbers.every((value) =>{
    return (value>5)
})

const words = ["wow","hey","bye"];
let ifStartH= words.some ((value, i) => {
    return (value [0] == `h`)
})
console.log(ifStartH);

const word = ["hello","hey","hola"];
let ifStart= words.every ((value, i) => {
    return (value [0] == `h`)
})
console.log(ifStart);

const fruits = ["bananna", "orenge", "apple", "mango"];
