let title1 = document.getElementById('title')
let titel2 = document.getElementsByClassName('titlse')[0]
let title3 = document.querySelector('#title')
let titel4 = document.getElementsByTagName('h1')
title1.textContent='hello word'

let button = document.createElement('button')
button.textContent= 'click here'


let body = document.getElementsByTagName('body')[0]
button.style.backgroundColor= 'black'
button.style.color= 'white'
button.style.padding ='8px'
body.appendChild(button)

button.addEventListener('click', ()=>{
    setTimeout(()=>{
        console.log('hello world');
    },3000)
    let conter = 1
    let intervalName= setInterval(()=>{
        if (conter == 5){
            clearInterval(intervalName)
        }
        console.log(conter);
        conter++
    }, 500)
    
})