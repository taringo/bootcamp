function sayHello() {
    alert('hello!!!')
}
let cake = document.getElementById('cake')
cake.addEventListener('click', sayHello)
cake.addEventListener('click', ()=> {
    console.log('shosh');
})

// onmouseover(על)	
// onmouseout(רק אם ניצא ממנו)	
function hello1() {
    console.log('helloYaffa');
}
let h1= document.getElementById('hello')
h1.addEventListener('mouseover', hello1 )
function hello2 (params) {
    console.log('beyYaffa');
}
h1.addEventListener('mouseout', hello2)

let getInfo =document.getElementById('getinfo')
getInfo.addEventListener('click', (e)=>{
    console.log(e.target);
    console.log(e.type);
    console.log(e);
})