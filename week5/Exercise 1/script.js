let container = document.getElementById('container')
console.log(container);

let pete = document.getElementsByTagName('li')[1]
console.log(pete);
pete.textContent = 'Richard'

let Sarah = document.getElementsByTagName('li')[3]
let ul = document.getElementsByClassName('list')[1]
ul.removeChild(Sarah)


for (nazz of nazma) {
    
    let ul = document.createElement(ul)
    ul.textContent=nazz
    ul.classList.add('nazz', nazz)
    ul.appendChild(ul)
  
}
