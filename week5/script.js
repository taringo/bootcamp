let title =document.getElementById('title')
title.textContent= 'hello'

title.style.color = 'red';

let body =document.getElementsByTagName('body')[0]
const p= document.createElement('p')
p.innerText="taringo"
p.classList.add('text')
console.log(body);
body.append(p)

// body.remove()

let myform =document.forms.personform
