//Object
// const person = {
//   fname: "Daniel",
//   lname: "Robin",
//   age: 27,
// };

// console.log(person.fname);

//Array
// const colors = ["red", "blue", "yellow"];
// console.log(colors[2]);

//DOM query selector

// const h1 = document.querySelector("h1");
// console.log(h1.parentElement);
// console.log(h1.innerText);
// h1.style.backgroundColor = "red";

// const ul = document.querySelector("ul");
// console.log(ul);
// console.log(ul.children[1].textContent);
// ul.children[1].textContent = "Avi";

//Selector- > querySelectorAll

// const uls = document.querySelectorAll("ul");
// const secondUl = uls[1];
// console.log(secondUl);

//query selector with ID

// const list = document.querySelector("#myList");

//Exercise1
//get div
// const div = document.querySelector("div");
// console.log(div);

// const body = document.querySelector("body");
// console.log(body.children[0]);

// //get ul
// console.log(body.children[1]);

// const ul = document.querySelector("ul");

// console.log(ul);

//get pete

// const li = document.querySelectorAll("li");
// console.log(li[1]);

// const ul = document.querySelector("ul");
// console.log(ul.children[1]);

//Creating new elements -> 3 steps
//->create
//->תוכן
//->append . who is parent?

// const newH2 = document.createElement("h2");
// const newP = document.createElement("p");
// const body = document.querySelector("body");

// newH2.innerText = "This is h2 from script";
// newH2.style.border = "2px dotted blue";
// newH2.style.textAlign = "center";
// newP.innerText = "This is p from script";
// newP.style.border = "2px solid red";

// body.append(newH2, newP);

// const div = document.querySelector("div");
// console.log(div.innerText);

//Remove
// const ul = document.querySelector("ul");
// ul.remove();

//Exercise
// const allLi = document.querySelectorAll("li");
// console.log(allLi[0]);
// console.log(allLi[1]);
// console.log(allLi[2]);
// console.log(allLi[3]);

// for (let li of allLi) {
//   console.log(li);
// }

//Attributes
//Check if attribute exists
// const ul = document.querySelector("ul");
// const ul2 = document.querySelectorAll("ul")[1];
// console.log(ul.hasAttribute("id"));

//Check attribute value
// console.log(ul.getAttribute("name"));

//Set an attribute
// ul.setAttribute("id", "red");
// ul2.setAttribute("id", "blue");

// const body = document.querySelector("body");
// const img = document.createElement("img");

// img.style.width = "150px";
// img.setAttribute("src", "https://i.pinimg.com/originals/c3/76/f4/c376f426f888e6223ec55fa2a5a6aa82.jpg");

// body.append(img);

// const a = document.querySelector("#dI");
// const banana = a.getAttribute("href");
// console.log(banana);

//Classlist !!!

// const p = document.querySelector("p");
// p.classList.add("red", "blue");
// p.classList.remove("blue", "red");