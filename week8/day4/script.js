// 🌟 Exercise 1 : Scope

// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }


// #1.1 - run in the console:
// a=3
// funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
//error cant change const

// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// //a=0 and then a=5 
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?
// // the same as one


//#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }
//a= test
// a= test


// #4.1 - run in the console:
// funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?

//#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
//2=5
//a=2

// 🌟 Exercise 2 : Ternary Operator

// function winBattle(){
//     return true;
// }

// let winBattle = () =>{
//     return true;
// }

// let experiencePoints;

// if (winBattle() == true) {
//     experiencePoints = 10;
// } else {
//     experiencePoints =1;
// }
// console.log(experiencePoints);


// 🌟 Exercise 3 : Is It A String ?

const isString=(value)=> typeof value === "string";
console.log(isString("hello"));
console.log(isString([1, 2, 4, 0]));


// 🌟 Exercise 4 : Colors
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];
colors.forEach((color, index) => {
  const position = index + 1;
  const suffix =
    position >= 11 && position <= 13
      ? ordinal[0]
      : ordinal[position % 10] || ordinal[0];
  console.log(`${position}${suffix} choice is ${color}.`);
});

// Exercise 6 : Bank Details

let bankAmount = 1200
let amount = 17;
let details = ["+200", "-100", "+146", "+167", "-2900"]
details.forEach((element, i) => {
    return details[i]=element*0.17
    
});
console.log(details);
