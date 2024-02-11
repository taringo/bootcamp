function infoAboutMe(params) {
    let hello = `my name is yaffa i'm 36 years old i like to travel`
    console.log(hello);
}
infoAboutMe ('yaffa', 36, 'travel')



function infoAboutPerson(name, age, Color) {
    let me = `i am ${name} i'm ${age}  my favorite color is ${Color}`
    console.log(me);

}
infoAboutPerson ('lilach', 27, 'yellow')
infoAboutPerson ('david', 30, 'blue')



function calculateTip(params) {
    let bill =Number (prompt ('how much money?'))
    let tip;
    if (bill < 50) {
        tip = bill * 0.2
    } else if (bill >= 50 && bill <= 200){
        tip =bill * 0.15

    }else if (bill > 200) {
    tip = bill * 0.1
    } else {
        console.log('not a number');
    } 

}

const isDivisible=()=>{
    let sum = 0
for (let number = 0; number < 500; number++) {
    if (number % 23 === 0) {
        console.log(number);
        sum= sum+ number

    }
}
console.log(sum);
}
isDivisible()




const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 



// let yaffa = 10
// for (let index = 0; index < 10; index++) {
// let jaffa = 10
// console.log(yaffa);
// console.log(jaffa);
// yaffa++
// jaffa++
// }