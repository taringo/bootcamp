// Functions בלוק של הקוד המאפשר לנו להשתמש בו מספר פעמים
//עושה דברים דינמיים עם פרמטר)()
// function evenOdd(num) {
//     console.log(num);
// }
// evenOdd(183);


// (index % 2 == 0)זוגי או אי זוגי

// function evenOdd() {
//     console.log(189);
// for (let index = 0; index < 189; index++) {
//     if (index % 2 == 0) { 
//         console.log(index + ' is even');
//     } else {
//         console.log(index + ' is odd');
//     }
// }}
// evenOdd(30);
// evenOdd(15);
// evenOdd(150);
// evenOdd(183);

function evenOdd(num, num2) {
    console.log(num);
for (let index = 0; index < num; index++) {
    if (index % 2 == 0) { 
        console.log(index + ' is even');
    } else {
        console.log(index + ' is odd');
    }
}}
evenOdd(30, 2);
evenOdd(15, 3);
evenOdd(150, 7);
evenOdd(183, 10);

function age(myAge){
console.log(myAge*2);
console.log(myAge*2*1.2);
}
age(22)

function five(params) {
    return 5
}
function hello(name) {
    return name
    console.log(name);
}
console.log(`${hello('shosh')} is great`);

console.log(five() + 4);


let num2 = 0
function counter (){
    let num = 0
    console.log(num);
    console.log(num2);
    num++
    num2++
    console.log(num);
    console.log(num2);
}

counter()
counter()

// Objects 
this 
let obj = {
    add: function (num3, num4) {
        return num3+ num4
    },
    name: 'nadav',
    greeting: function(){
            return `hello ${this.name}, how are you? `

    },

}

console.log(obj.add(35, 23));
console.log(obj.greeting());