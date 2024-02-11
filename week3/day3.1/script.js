// Conditionals
let num =3
let num2 = 7
let str= ''
// if(str == 'thing'){
//     console.log(hello);

// if (num > num2){
// }

// }
// אם זה לא נכון תפעל 
// if (!(num >= num2)){
// }
// console.log('hello');

// > גדול
// < קטן
// ==
// >=
// <=
// ===

// if (5=='5') {
//     console.log('condition is true');
// }

if (5 == '5') {
    console.log('condition is true');
}

// && אם שתיהם נכונים
// || אם זה או זה

// if (num < num2 || num == num2) {
//     console.log('');
    
// }
// if (num > num2 && num == num2) {
//     console.log('');
    
// }

// if else
let password =''

// if (password == '123456') {
//     console.log('welcom!');
// } else {
//     console.log('incorrect password');
    
// }

let sarah= prompt()

if (sarah < 18) {
    alert('Sorry, you are too young to drive this car.');
    
} else if (sarah == '18') {
     alert('Congratulations on your first year of driving');

}
else
{
    alert('Powering On. Enjoy the ride!');
}

// Switch Case אלטרנטיבה ל if

let person ='yaffa'

switch (person){
    case 'nadav':
        console.log('nadav');
        break

    case 'yaffa':
        console.log('yaffa');
        break

    default:
        console.log('invalid name');
}
// break עוצר/מפסיק


// Objects מתחלק ל- 2 דברים
// keyword= מפתח) השם של המשתנה
// value = הערך(אחרי השווה)

let obj= {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}
console.log(obj.firstName, obj[firstName]);

let obj2= {
    firstName: "nadav",
    lastName: "sofer",
    age: 25,
    eyeColor: "green"
}

obj.food = 'pizza'
obj.age =45
delete obj.eyeColor

console.log(obj);