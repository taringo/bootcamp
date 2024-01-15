let five = 5;
let x = 5;
let b = 1<10 ;

let a = [1,2,3,4,5, {age: 25}, []]
let o = {
    age: 25,
    list: [1,2,3,4,5],
    obj: {
        name: 'nadav'

    }
};
o.age
console.log(o.obj.name);
console.log(o.list[4]);

x = 10

const adi = (num) => {
    num * 2
};

let num = 10
if (1<10) {
    console.log('num is smaller then 10');
} else if (num > 10) {
    console.log('num is bigger then 10');
} else {
    console.log('num is equal to 10');
}

// let num2 =20
// while (num2 > 10) {
//     num--
    
// }

let numbers = [1,2,3,4,5]

for (const number of numbers) {
    console.log('this number is ${number}');
    
}


for (const key in o) {
     const element = o[key];

}

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    
}

const sentence = (name, age, color='blue') =>{
    let out = `hello i'm ${name}, i'm ${age} years old. my favorite color is ${color}`;
    return out
}

console.log(sentence('nadav', 25, 'red'));
console.log(sentence('shoshi', 12, 'yellow'));
console.log(sentence('nadav', 25,));



const wether = (x) => {
    let y = x*9/5+32
return '${x} in  celsius in equal to ${y} in fahrnheit'
}
console.log(wether(16));





let infolist = [
    {name: 'nadav', age: 25},
    {name: 'odaya', age: 25},
    {name: 'sarah', age: 27}
]


function info(name, age) {
    let out = `my name is ${name} and i'm ${age} years old. iwas born in ${2024-age}`
    
    console.log(out);
}

info(`nadav`, 25)

for (const iterator of infolist) {
    console.log(iterator);
    info(iterator.name, iterator.age)
    
}






