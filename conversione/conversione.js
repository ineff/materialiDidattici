const convBot = document.querySelector('#convBot');
const inputData = document.querySelector('#toConv');
const startBase = document.querySelector('#startBase');
const endBase = document.querySelector('#endBase');
const resLabel = document.querySelector('#res');

const getHex = (char) => Number('0x'+char);
const hexDigit = (num) => (num < 10) ? num:
      {10:'A',11:'B',12:'C',13:'D',14:'E',15:'F'}[num];

/**
*  Function for reading a number in a specified base
*   @param {string} input: the string repr of the number
*  @param {number} base: the base in which the number is written
*  @return {number}: the number represented by input
*/
function getNum(input, base) {
    let res = 0;
    let dim = input.length;
    if(2 <= base && base <= 10) {
	for(let count=0;count < dim;++count) {
	    res += Number(input[dim-1-count])*Math.pow(base,count);
	}
	return res;
    }
    else if(base === 16) {
	for(let count=0; count < dim;++count) {
	    res += Number(getHex(input[dim-1-count]))*Math.pow(16,count);
	}
	return res;
    }
    else {
	alert('Base inserita non valida.');
	return;
    }
}


/**
* write a number in the specified base
* @param {number} num: the number to be written
* @param {number} base: the base in which to write the number
* @return : the string representing the number in the specified base
*/
function convNum(num, base) {
    let res = "";
    if(base >= 2 && base <= 10) {
	for(;num !== 0;num = Math.trunc(num/base)) {
	    res = (num % base).toString() + res;
	}
	return res;
    }
    else if(base === 16) {
	for(;num !== 0; num = Math.trunc(num/base)) {
	    res = hexDigit(num % 16).toString() + res;
	}
	return res;
    }
    else {
	alert('Base di output non valida.');
    }
}

function checkInput() {
    let errMsg = "";
    let startB = startBase.value;
    let endB = endBase.value;
    let input = inputData.value;
    if(startB === "--")
	errMsg += "Bisogna scegliere una base di partenza\n";
    if(endB === "--")
	errMsg += "Bisogna scegliere una base di arrivo\n";
    if((isNaN(inputData.value) && isNaN('0x'+inputData.value))||inputData.value === "")
	errMsg += "Bisogna inserire un numero da convertire\n";
    if(errMsg !== "") {
	alert(errMsg);
	return false;
    }
    /* The user has inserted the input, now we need to check
       that the input is written in the correct base */
    // to be completed
    return true;;
}

function convert() {
    if(!checkInput())
	return ;
    let inputBase = Number(startBase.value);
    let outputBase = Number(endBase.value);
    let num = getNum(inputData.value,inputBase);
    let outNum = convNum(num,outputBase);
    res.textContent = `Il numero in base ${outputBase} è ${outNum}`;
    return ;	
}

convBot.addEventListener('click',convert);
