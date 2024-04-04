// 🌟 Exercise 1 : Find The Sum

let sum = (num1, num2) => num1+num2
  console.log(sum(28, 90));

//   🌟 Exercise 2 : Kg And Grams

function kilograms(weight) {
    return weight*1000;
  }
 console.log(kilograms(5));

let kilo = function (weights) {
    return weights * 1000
  }
  console.log(kilo(9)); 

let kiloGram = (weights) => weights* 1000;
console.log(kiloGram(9));

// 🌟 Exercise 3 : Fortune Teller

(function (numberChildren, partnerName, geographicLocation, jobTitle) {
    console.log(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberChildren} kids`);
  })(5, 'moshe', 'etiopia', 'cop');

//   🌟 Exercise 4 : Welcome
let nav =document.getElementsByClassName('navbar')[0]
console.log(nav);

(function (user) {
    let div= document.createElement('div')
    div.textContent= user 
    div.classList.add('mx-5')
    nav.append(div)
})("John")


// 🌟 Exercise 5 : Juice Bar
let Exercise5 = document.getElementById('Exercise5')
function makeJuice (size) {    
      let ingredients =[]
      function Juice(ingredients1, ingredients2, ingredients3) {
        ingredients.push(ingredients1, ingredients2, ingredients3)
      }
      function displayJuice() {
      Exercise5.textContent= `The client wants a ${size} juice, containing ${ingredients.join(', ')}`
    }
    Juice('Orange', 'apple', 'banna')
    Juice('lemon', 'kiwi', 'melon')
    displayJuice()
    console.log(ingredients);
} 
makeJuice('small')
