// let persoName= document.forms.personform
// console.log(personform);
let nameInpot= document.getElementById('name')
let nameResult= document.getElementById('nameResult')
nameInpot.addEventListener('input', (event)=>{
    // console.log(event.target.value);
    nameResult.textContent= event.target.value
})
personform.addEventListener('submit', (event)=>{
e.preventDefult()
console.log(event);
})

// disabled
