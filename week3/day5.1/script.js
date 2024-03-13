// loop 
// forof רשימות
let numbers = [1,2,3,4,5]
for (const number of numbers) {
    console.log(number + 10);
}

let names =['nadav', 'yaffa', 'israel']
for (const name of names) {
    console.log(name.toUpperCase());
}


// forin אובייקטים ספציפית על השמות
let obj = {
    name: 'nadav',
    age: 25
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, '-', obj[key]);
        
    }
}

// forloop=בסיס
for (let index = 0; index < 9; index++) {
    console.log('hello');
}

// While Loop כל עוד זה נכון תעשה
let conter = 0
while (conter < names.length) {
    conter++
    console.log(conter);
    // conter++
}

// dowhile  יבדוק את הקוד ואז יעשה את התנאי (הוא יפעל לפחות פעם אחת)
// do {
//     conter++
//     console.log(conter);
// } while (conter < names.length);


for (let number1 = 0; number1 < 15; number1++) {
if (number1 % 2 === 0) {
    console.log(number1 + ' is even');
    
} else {
    console.log(number1 + ' is odd');
}
}

let name1= ["john", "sarah", 23, "Rudolf",34]
for (let index = 0; index < name1.length; index++) {
    if (typeof name1[index] == 'string') {
        let nameItam = name1[index]
        if (!(nameItam[0] === nameItam.toUpperCase()[0])) {
            console.log(nameItam);
        }
        
    }
}



