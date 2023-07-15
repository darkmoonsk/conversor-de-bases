const button = document.querySelector("#button");
const input = document.querySelector("#number");
const currentBaseSelector = document.querySelector("#current-base");
const finalBaseSelector = document.querySelector("#final-base");
const result = document.querySelector("#result");
const error = document.querySelector(".error");

button.addEventListener("click", () => {
    let finalNumber;
    const currentNumber = input.value
    const bases = {bin: 2, oct: 8, dec: 10, hex: 16};

    const fromBase = bases[currentBaseSelector.value];
    const toBase = bases[finalBaseSelector.value];

    console.log(isValidInput(fromBase, currentNumber))

    if(!isValidInput(fromBase, currentNumber)) {
        const index = currentBaseSelector.selectedIndex;
        const base = currentBaseSelector.options[index].text

        result.classList.add("hidden");
        error.classList.remove("hidden");
        error.innerHTML = `Por favor digite um numero ${base} válido`
        return;
    }

    error.classList.add("hidden");
    finalNumber = convertedBase(currentNumber, fromBase, toBase);

    result.innerHTML = `${currentNumber}<sub>${fromBase}</sub> <span>=</span> ${finalNumber}<sub>${toBase}</sub>`;
    result.classList.remove("hidden");
});


function convertedBase(number, fromBase, toBase){
    return parseInt(number, fromBase).toString(toBase).toUpperCase();
}

function isValidBinary(value){
    const binaryPattern = /^[01]+$/;
    return binaryPattern.test(value);
}

function isValidOctal(value){
    const octalPattern = /^[0-7]+$/;
    return octalPattern.test(value);
}

function isValidDecimal(value){
    const decimalPattern = /^[0-9]+$/;
    return decimalPattern.test(value);
}

function isValidHexadecimal(value) {
    const hexadecimalPattern = /^[0-9A-Fa-f]+$/;
    return hexadecimalPattern.test(value);
}

function isValidInput(currentBase, number){
    if(currentBase === 10) return isValidDecimal(number);
    if(currentBase === 2) return isValidBinary(number);
    if(currentBase === 8) return isValidOctal(number);
    if(currentBase === 16) return isValidHexadecimal(number);
}