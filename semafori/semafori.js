const resetBot = document.querySelector('#reset');
const controlBot = document.querySelector('#check');

let randNum = 0;

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
    let str = dec2bin(randNum);
    let el = document.querySelector('#numero-binario');
    el.textContent = str;
}


resetBot.addEventListener('click', setNum);

controlBot.addEventListener('click', function (event){
    let data = document.querySelector('#controllo').value;
    dec = Number(data);
    // console.log(`il valore inserito è ${dec}`);
    for(let i = 0; i < 6; i++, dec = Math.trunc(dec/2)) {
	let pin = document.querySelector(`#pin${i+1}`);
	if(dec % 2 === 1) {
	    pin.style.background = 'green';
	} else {
	    pin.style.background = 'red';
	}
    }
    if(isNaN(data)) {
	alert("L'input inserito non è corretto, ci si aspetta un numero.");
	return ;
    } else if(Number(data) === randNum) {
	alert('Complimenti il numero è corretto.');
    } else {
	alert('Ahi ahi, il numero è sbagliato. Prova di nuovo.');
    }
    
})

setNum();
