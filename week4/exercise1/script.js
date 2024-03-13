// 🌟 Exercise 1 : Information
function infoAboutMe(params) {
    let hello = `my name is yaffa i'm 36 years old i like to travel`
    console.log(hello);
}
infoAboutMe ('yaffa', 36, 'travel')



function infoAboutPerson(name, age, Color) {
    let me = `i am ${name} i'm ${age}  my favorite color is ${Color}`
    console.log(me);

}
infoAboutPerson ('lilach', 27, 'yellow')
infoAboutPerson ('david', 30, 'blue')



function calculateTip(params) {
    let bill =Number (prompt ('how much money?'))
    let tip;
    if (bill < 50) {
        tip = bill * 0.2
    } else if (bill >= 50 && bill <= 200){
        tip =bill * 0.15

    }else if (bill > 200) {
    tip = bill * 0.1
    } else {
        console.log('not a number');
    } 

}

const isDivisible=()=>{
    let sum = 0
for (let number = 0; number < 500; number++) {
    if (number % 23 === 0) {
        console.log(number);
        sum= sum+ number

    }
}
console.log(sum);
}
isDivisible()



// 🌟 Exercise 4 : Shopping List

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

const shoppingList = [ "banana", "orange","apple",]

function myBill() {
    let totallPrice = 0
    for (const item of shoppingList) {
        if (stock[item]>0) {
            totallPrice=totallPrice+prices[item]
            stock[item]--
        }
    }
    return totallPrice
}
console.log(myBill());
console.log(stock);


// Exercise 5 : What’s In My Wallet ?

function changeEnough(itemPrice, amountOfChange) {
    let toall = 0
    let value =[10 ,5 , 2, 1]
    for (let i = 0; i < value.length; i++) {
        const element = value[i];
        toall=toall+element*amountOfChange[i]
    }
    if (toall >= itemPrice) {
        return true
    } else {
        return false
    }
}
console.log(changeEnough(300, [2, 7, 60, 100]));

// 🌟 Exercise 6 : Vacations Costs

function hotelCost() {
    let nightsNum = prompt('how many nights do you want to stay')
    if (!(isNaN(Number(nightsNum)))) {
        console.log(Number(nightsNum));
        return 140*nightsNum
    }
    else {
        hotelCost()
    }
}
hotelCost()
