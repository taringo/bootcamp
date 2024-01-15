let thing = 'hello world';

console.log(thing);

let a = 5
let b = null;
let c = 5+20
let d = undefined;
let e = true;

// console.log(a + b);

console.log(a + thing);

console.log(a + b);

console.log(a + c);

console.log(a*30+6+(6+4));

console.log(null);

console.log(undefined);

console.log(true);

let string = `look it's the number ${a}`;
console.log(string)

longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise, my code is unreadable.";

console.log(longString.length);

console.log(longString.indexOf('needs'));

let country = 'kiriat malchi';

let addressStreet = 1142

let addressNumber = 9

console.log (country , addressStreet , addressNumber)

//alert('hello this is alert')
// let conf = confirm('are you learning?')
// if (conf== true) {
//     alert('good job!')
// }else{
//     alert('no good!')
// }
let prop = prompt('what is your favorite number?')
if (!(isNaN(prop))) {
if (prop==7){
    alert('hey sarah')
}else if (prop == 5){
    alert('hey nadav')
}else {
    alert('hey guest')
}

}