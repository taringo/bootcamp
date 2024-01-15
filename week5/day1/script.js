document.getElementById('test').textContent = 'hello';
let titel2 = document.getElementsByTagName('h1')[1]
titel2.textContent = 'hello sarah'


    let state = false
function chngecolor() {

    if (state) {
        titel2.style.color = 'blue'
        state = false
    
        
    } else if (!state){ 
        titel2.style.color = 'yellow'
        state = true
        
    }
    
}