// Array Map : Transforming


let names= ['nadav', 'yaffa', 'sarah']

let capitaNames = names.map((name) => {
    return name[0]= name[0].toUpperCase() + name.slice(1)
})
console.log(capitaNames);
console.log(names);

// Array Filter : Filtering

let numbers = [500, 45, 30, 3, 2]
let valueTimesIndex = numbers.map((num, index) =>{
    return `${num} * ${index} = ${num*index}`
})
console.log(valueTimesIndex);

myArr = [10,20,30,40];

let newArr = myArr.map((val, i, arr) => {
  return {
    value: val,
    index: i
  };
});
console.log(newArr);

let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let filterdList = words.filter((word, index)=>{
return word.length>6
});


// Array Reduce

let reducedNumber= myArr.reduce((acc, num) => {
    return acc+num
})
console.log(reducedNumber);


let party = [
    {
      desert: 'Chocolate Mousse',
      calories: 30,
    },
    {
      desert: 'Apple Pie',
      calories: 15,
    },
    {
      desert: 'Croissant',
      calories: 50,
    },
    {
      desert: 'Strawberry Icecream',
      calories: 5,
    },
  ]

let calories =party.reduce((acc, dish)=>{
    if (dish.desert == 'Apple Pie') {
    return acc}
    else{
       return acc+dish.calories
    }

},0)
console.log(calories);

// Destructuring Assignment

let name1, name2, name3
[name1, name2, name3] = ['nadav', 'sarah', 'david']

console.log(name1, name2, name3);


// Spread Operator

let o= 'odaya'
let a = 'arial'
let fullList =[o, a, ...names]
console.log(fullList);

// Rest Operator

let arr =[ 10, 54 ,87, 23, 49, 54]
let [num1, num2, ...otherNums]= arr
console.log(otherNums);

// Cloning Arrays

let arr2= arr
let [...arr3] = arr
arr.push(37)

console.log('arr2:', arr2);
console.log('arr3', arr3);


let alphabets = ["A", ..."BCD", "E"];
console.log(alphabets);