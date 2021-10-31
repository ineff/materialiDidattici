const resetBot = document.querySelector('#reset');
const controlBot = document.querySelector('#check');

const pins = [];
for(let i = 0; i < 6; i++) {
    pins.push(document.querySelector(`#pin${i+1}`));
    pins[i].addEventListener('click', toggleColor);
}

let randNum = 0;

function toggleColor(event) {
    let color = this.style.backgroundColor;
    this.style.backgroundColor = color === 'green' ? 'red' : 'green';
    return ;
}

/**
   A function that gets the binary representation
   of a number.
   @param dec {number}: the number to be represented 
   in binary 
   @return: the string representation of the number in binary
*/
function dec2bin(dec) {
    let str = "";
    for(;dec != 0;dec = Math.trunc(dec/2)) {
	//console.log((dec % 2).toString());
	str = (dec % 2).toString() + str;
    }
    return str;
}


/**
   A function that generates the random number 
   between 0 and 255
*/
function genNumber() {
    return Math.trunc(Math.random()*(64));
}

// exports.dec2bin = dec2bin;
// exports.genNum = genNumber;

function setNum(event) {
    // the callback for handling the reset action
    randNum = genNumber();
    let str = randNum.toString();
    let el = document.querySelector('#numero');
    el.textContent = str;
    for(let i = 0; i < pins.length; i++) {
	pins[i].style.backgroundColor = 'red';
    }
}


resetBot.addEventListener('click', setNum);

controlBot.addEventListener('click', function (event){
    dec = randNum
    let guess = 0;
    for (let i = 0;i < 6; i++) {
	guess += (pins[i].style.backgroundColor === 'green' ? 1 : 0)*(2**i);
    }
    if(guess === randNum) {
	alert('Complimenti il numero è corretto.');
    } else {
	alert(`Ahi ahi, il numero è sbagliato, quello che hai inserito è ${guess}. Prova di nuovo.`);
    }
    
})

setNum();
