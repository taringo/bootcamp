function cTof(celsius) {
    let times9 = celsius *9
    let divide5 = times9 / 5
    let plus32 = divide5 + 32
    return plus32

}

console.log(cTof(17));


function times9(number) {
    let out =number * 9
    return out

}
let times9Out = times9(17)

function divide5(number) {
    let out =number / 5
    return out
}
let divid5Out = (divide5(times9Out))

function plus32(number) {
    let out = number + 32
    return out
}

console.log(plus32(divid5Out));

let addressNumber = "1142,  9";

let addressStreet = "herzel";

let country = "isreal, kiriat malachi"



// let globalAddress = "i live in" + addressStreet +  " " + addressNumber  + ", " + "in " countr;
    
// console.log (globalAddress)

console.log(1 + "2");

let birth = 1986
// console.log(birth);

let futureyear = 2025

let Calculate = birth - futureyear

console.log( "i will be " +  Calculate + "in this year");