let title = document.getElementById ('title');
let titleByClass =document.getElementsByClassName('headers')[0];
let titleByTag= document.getElementsByTagName('h1')[0]
let titleBySelector =document.querySelector('.header')

let body= document.getElementsByTagName('body')[0]
    console.log(body.innerHTML);
let p = document.createElement('p')
p.textContent = 'hello world!!!'
p.style.backgroundColor='pink'
p.style.width='fit-content'
p.style.padding='16px'
body.appendChild(p)

let div = document.createElement('div')
div.innerHTML= '<h3 id="test">thing</h3> <h4 class= "headers">thing2</h4>'
div.classList.add('thing', 'fish')
div.classList.remove('fish')
div.classList.replace('thing', 'sarah')
body.appendChild(div)

// Form Properties
let personForm =document.forms[0]
let personForm2 = document.forms.personform
let element= personForm.elements
let age= element.age
let ageValue = age.Value
ageValue=50
console.log(ageValue);
// console.log(personForm2);

