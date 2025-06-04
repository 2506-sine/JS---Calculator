//Reference disppaly element //
const display =dicument.getElementById('display');

// Track if we have performed a calculation //
let justCalculated = false;

function appendTopDisplay(value){
    console.log('Button pressed:',value);

    alert('You pressed:' + value);
}

function clearDisplay() {
    console.log('Clear button pressed.');

    alert('Clear button was clicked');
}

function deleteLate() {
    console.log('Backspace button pressed.');

    alert('Backspace button was clicked');
}

function justCalculated() {
    console.log('Backspace button pressed.');

    alert('Equals button was clicked');
}

document.addEventListener('DOMContentLoaded',function() {
    console.log('Calculateor loaded successfully');
    console.log('Display elemt', display);

    if(display) {
       console.log('Current display value:',display.value);
    }
    else{
        console.log('Display elemt not found')
    }
})