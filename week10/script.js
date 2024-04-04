// Objects:
let obj ={
    key:'value',
    thing:'thing',
    num: 5,
    bool:5 <10,
    arr:[1,2,3,4,5],
    car:{
        model: 'ford focus',
        color:'gold'
    },
    func: ()=>{
        console.log('i am in a object');
    }
}
obj.num
obj.func()
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
// for (const [key ,value] of Object.entries(obj)) {
//     console.log(`this is the key: ${key}, this is the value: ${value}`);
// }
// let toBeobjet = [['a' ,'nadav'], ['b' ,40], ['c', 'true']]
// console.log(Object.fromEntries(toBeobjet));
// // Exercise:
// let myObj = {
//     name : "John",
//     lastName : "Doe",
//     age : 25,
//     friends : ["Mark", "Lucie", "Ana"]
// }
// myObj.length
// console.log(myObj);
// for (const [key ,value] of Object.entries(myObj)) {
//     // console.log(`this is the key: ${key}, this is the value: ${value}`);
// }
// Object Destructuring:
let toBeobjet = [['a' ,'nadav'], ['b' ,40], ['c', 'true']]
let newObj = Object.fromEntries(toBeobjet)
console.log(newObj);
let {a: person ,b: num ,c:bool}= newObj
// let {key: varName} = nameofObject
let myObj2 = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Ana"]
}
let {name:John ,lastName :lname ,age:Johnage ,friends :friendsarr} =myObj2
// // דוגמא
// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
//   };
//   console.log(Object.keys(object1));

let {name, lastName, age, friends}= myObj2
// console.log(lastName);
// console.log(name);

function sayHey ({name, lastName, age, friends }){
console.log(name, lastName, age, friends);
}
sayHey(myObj2)

let obj2 ={
    key:'value',
    thing:'thing',
    num: 5,
    bool:5 <10,
    arr:[1,2,3,4,5],
    car:{
        model: 'ford focus',
        color:'gold'
    },
    func: ()=>{
        // console.log('i am in a object');
    }
}
let {car: {model ,color} ,key} = obj2
console.log(model ,color ,key);

let myCar={
    model: 'skoda octavia',
    color: 'white'    
}
let myCar1 = myCar
let myCar2 = {...myCar}
myCar.year= 2024

console.log(myCar1);
console.log(myCar2);