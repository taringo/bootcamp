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