let container = document.getElementById('container')
console.log(container);

let pete = document.getElementsByTagName('li')[1]
console.log(pete);
pete.textContent = 'Richard'

let Sarah = document.getElementsByTagName('li')[3]
let ul = document.getElementsByClassName('list')[1]
ul.removeChild(Sarah)


let firtName = document.getElementsByTagName('ul')
console.log(firtName);
for (const iterator of firtName) {
    iterator.firstElementChild.textContent='taringo'
    iterator.classList.add('student_list')
}
firtName[0].classList.add('university', 'attendance')

// 🌟 Exercise 2 : Users And Style
let div = document.getElementsByTagName('div')[1]
div.style.backgroundColor = 'lightBlue'
let li = document.getElementsByTagName('li')[4]
li.style.display= 'none'

let li2 = document.getElementsByTagName('li')[5]
li2.style.border='groove 1px red'

let body= document.getElementsByTagName('body')[0]
body.style.fontSize= '20px'

if (div.style.backgroundColor == 'lightblue') {
    // alert('Hello x and y')
}
console.log(div.style.backgroundColor);

// 🌟 Exercise 3 : Change The Navbar

let myId = document.getElementById('navBar')
console.log(myId);
myId.setAttribute("id", "socialNetworkNavigation");

let tag =document.createElement('li')
console.log(tag);
let textNode = document.createTextNode("Logout");
console.log(textNode);
tag.appendChild(textNode)
let ul2 = myId.children[0]
console.log(ul2.firstElementChild.textContent);
console.log(ul2.lastElementChild.textContent);


// 3.4
// Exercise 4 : My Book List
let allBooks = document.getElementsByClassName('listBooks')[0]
console.log(allBooks);
let BooksList = [
{
title: 'The Order',
author: 'daniel silba',
image : 'https://images-evrit.yit.co.il/Images/Products/NewBO/Products/30469/hamisdar_Master.jpg',
alreadyRead : false,
},
{
title: 'The Night She Disappeared',
author: 'lisa goal',
image : 'https://images-evrit.yit.co.il/Images/Products/NewBO/Products/31440/halila_shebo_nealmo_ekvotiha_Master.jpg',
alreadyRead : true, 
},
{
title: 'Disclaimer',
author: 'rana nait',
image : 'https://images-evrit.yit.co.il/Images/Products/NewBO/Products/31340/kesher_mekri_Master.png',
alreadyRead : true,
}]
for (const Book of BooksList) {
  let div =document.createElement('div')
  let title= document.createElement('h2')
  title.textContent= `${Book.title} written by ${Book.author}`
  let img= document.createElement('img')
  img.setAttribute('src', Book.image)
  img.style.width='100px'
  if (Book.alreadyRead==true) {
    title.style.color='red'
  }
  div.appendChild(title)
  div.appendChild(img)
  allBooks.appendChild(div)
}



