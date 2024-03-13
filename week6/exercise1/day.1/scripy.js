// function sayHello() {
//    console.log('hello'); 
// }
// setTimeout(sayHello, 5000)

// setTimeout(() => {
//   alert('nadav')
// }, 5000);

// setTimeout(() => {
//     alert("The sales end in 10min ! " )
// }, 5000);

// let conter = 0
// let intervalName =setInterval(() => {
//     if (conter >= 5) {  
//         clearInterval(intervalName)
//     }
//     console.log(conter);
//     conter++
// }, 3000);

// // let Conter= 0
// // let countUP= setInterval(() => {
// //     if (Conter) {
        
// //     }
// // }, 1000);

let cont = 10
let up = setInterval(() => {
    if (cont ==0 ) {
        clearInterval(up)
    }
    console.log(`The sales end in ${cont} sec`);
    cont--
}, 1000);


let body = document.querySelector(body)[0]
let button = document.createElement




