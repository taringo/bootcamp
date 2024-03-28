
let num = 5
function whatever() {
    console.log(num*2);
}
whatever()

// Function Expression
let func_name = function () {
    
}


function verify (name) {
    function isShosh () {
        return name == 'shosh'
    }
    if (isShosh()) {
        console.log('hey shosh');
    } else {
        console.log('not shosh');
    }
}
verify('shosh')

// Exercise
function add() {
    let counter = 0;
    function plus() {
        counter += 1;
        console.log(counter) ;
    }
    plus();  
  }
  
  add()