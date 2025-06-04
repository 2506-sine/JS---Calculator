//Reference display element //
const display = document.getElementById('display');

// Track if we have performed a calculation //
let justCalculated = false;

function appendTopDisplay(value){
    console.log('Button pressed:',value);

    let CurrentValue = display.value;

    if (justCalculated && !isNaN(value)) {
        display.value = value;
        justCalculated = false;
        return;
    }

    // If current display show 0 and user enters a number , we wanna replace the 0
    if (CurrentValue === "0" && !isNaN(value)) {
        display.value = value;
    } else if (CurrentValue === '0' && value ==='.') {
        display.value = CurrentValue + value;
    } 
    else if(value ==='.') {
        // Get the last number in the display //
        let lastNumber = CurrentValue.spli('/[+\-*/').pop();
        // Only add the decimal if the current number doesnt have ont//
        if (lastNumber.includes('.')){
            display.value = CurrentValue + value
        }

    }
    else {
        display.value = CurrentValue + value;
    }

    // Reset the justCalculated flag when user starts typing//
    justCalculated = false;

    console.log('Display updated to: ',display.value);
   
}

function clearDisplay() {
    console.log('Clear button pressed.');

    display.value = '0';
    justCalculated = false;

    display.style.backgroundColor = '#f0f0f0';
    setTimeout(()=> {
        display.style.backgroundColor ='' ;
    },150);

   
}

function deleteLate() {
    console.log('Backspace button pressed.');

    let CurrentValue = display.value;

    // If theres only one character or its 0, reset to 0 //
     if (CurrentValue.length <= 1 || CurrentValue === '0') {
        display.value = '0';
     }
     else{
        display.value = CurrentValue.slice(0,-1);
     }
}

function justCalculated() {
    console.log('Backspace button pressed.');

    alert('Equals button was clicked');
}

document.addEventListener('keydown',function(event) {
    console.log ('Key pressed', event.key);

    if (event.key >= '0' && event.key <= '9') {
        appendTopDisplay(event.key)
    }
    else if (event.key =='.'){
        appendTopDisplay('.');
    }
    else if (event.key == '+'){
        appendTopDisplay('+');
    }
    else if (event.key ==='-'){
        appendTopDisplay('-');
    }
    else if (event.key === '*'){
        appendTopDisplay('*');
    }
    else if (event.key ==='/'){
        event.preventDefault();
        appendTopDisplay('/')
    }
    
    else if (event.key == 'Enter'|| event.key ==='=') {
        calculate();
    }
    else if (event.key === 'Enscape'|| event.key === 'c'|| event.key ==='c') {
        clearDisplay();
    }
    else if (event.key ==='Backspace') {
        deleteLate();
    }

})

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