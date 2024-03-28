// 🌟 Exercise 1 : Change The Article
let h1 =document.querySelector('h1')
console.log(h1);

let article=document.getElementsByTagName('article')[0]
article.lastElementChild.remove()

let h2 = document.getElementsByTagName('h2')[0]
h2.addEventListener('click', () => {h2.style.backgroundColor = 'red'
})

let h3 = document.getElementsByTagName('h3')[0]
h3.addEventListener('click', () => {h3.style.display = 'none'
})

let button = document.getElementById('click')
button.addEventListener('click', ()=>{
    let p= document.getElementsByTagName('p')
    for (const iterator of p) {
        iterator.style.fontWeight='bold'
    }
})
h1.addEventListener

h1.addEventListener('mouseover', () =>{
    let funt= Math.floor(Math.random() * 100);
   h1.style.fontSize= `${funt}px`;
})

// let p = document.getElementsByTagName[1] 
// p.addEventListener('mouseover'), () => {   
// }

// 🌟 Exercise 2 : Work With Forms

// let form = document.querySelector('form')[0]
// console.log(form);




// let inputs = document.querySelector('input')
// console.log(inputs);

// let form =document.forms[0]
// console.log(form);
// let sId =document.getElementById('fname')
// console.log(sId);
// let sId2 =document.getElementById('lname')
// let noname =form.elements.firstname
// console.log(noname);
// let noname2 =document.getElementsByName("lastname")[0]
// console.log(noname2);
// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//    let nnnn= noname.value
//    let mmmm= noname2.value
//    console.log(nnnn);
//    console.log(mmmm);
//    let ul =document.getElementsByClassName("usersAnswer")[0]
//    let li =document.createElement('li')
//    let li2 =document.createElement('li')
//    li.textContent =nnnn
//    li2.textContent =mmmm
//    ul.appendChild(li)
//    ul.appendChild(li2)
// })