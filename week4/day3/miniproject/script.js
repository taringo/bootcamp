
function playTheGame () {
    
    let conf = confirm(`do you want to play the game?`)
    if (conf == true){
        let prop = prompt('pick a number 0-10')
        if(!(isNaN(prop))) {
            if (prop >=0 && prop <= 10 ) {
                let computerNumber = Math.floor(math.random() * 10)

            } else {
                alert('sorry, number not in range')
            }
    
        } else { 
           alert('sorry, not a Number')
}

    } else {
        alert(`ok ty, bye!`)
    }
}





function compareNumbers (userNumber,computerNumber)  {

if (userNumber == computerNumbertrue) {

    alert('WINNER!!!!!')
    
}

if (computerNumber > userNumber ) {

    alert ('computre number is bigger')
    
}

}