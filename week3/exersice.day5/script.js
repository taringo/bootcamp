// 🌟 Exercise 1 : List Of People
const people = ["Greg", "Mary", "Devon", "James"];
const peopleOne = people.splice(1);
console.log(peopleOne);
peopleOne.splice(2, 1, "jason");
peopleOne.push("yaffa");
console.log(peopleOne);
const maryIndex = peopleOne.indexOf("Mary");
console.log(maryIndex);
console.log(peopleOne);
const newPeople = peopleOne.slice(1, 3);
console.log(newPeople);
const foo = newPeople.indexOf("FOO");
console.log(foo);
// becuse we dont have inside the array foo
const last = newPeople.length - 1;

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
const peopletwo = ["Greg", "Mary", "Devon", "James"];
for (let i = 0; i < peopletwo.length; i++) {
  if (peopletwo[i] === "Devon") {
    console.log("Devon");
    break;
  }
}
// 🌟 Exercise 2 : Your Favorite Colors
const colors = ['yellow', 'blue', 'black', 'white', 'red']
for (let index = 0; index < colors.length; index++) {
  let color = "My # " + (index + 1) + " choice is " + colors[index];

  console.log(color);
}
// שאלת בונוס

// 🌟 Exercise 3 : Repeat The Question
let num1 = prompt("write a number")
// console.log(num1);
if (!isNaN(num1)) {
  console.log(num1);

}




// // 🌟 Exercise 4 : Building Management
// const building = {
//   numberOfFloors: 4,
//   numberOfAptByFloor: {
//     firstFloor: 3,
//     secondFloor: 4,
//     thirdFloor: 9,
//     fourthFloor: 2,
//   },
//   nameOfTenants: ["Sarah", "Dan", "David"],
//   numberOfRoomsAndRent: {
//     sarah: [3, 990],
//     dan: [4, 1000],
//     david: [1, 500],
//   },
// };
// const firstFloor = building.numberOfAptByFloor.firstFloor;
// const thirdFloor = building.numberOfAptByFloor.thirdFloor;
// const total = `${thirdFloor + firstFloor}`;
// console.log(total);
// const dan = bu

// // 🌟 Exercise 5 : Family

// const family = {
//   father: 'moshe',
//   mother: 'tikva',
//   children: ['david', 'adi', 'rivka'],
//   grandchildren : 
// }