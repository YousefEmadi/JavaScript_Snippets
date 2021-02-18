/*JS Project CalculatorVer1
    By: Yousef Emadi
    usef.emadi@gmail.com
    15-Feb-2021
*/


///////////////////// input keyboard functions  ///////////////////////////

let num1EL = document.querySelector('#num1');
let num2EL = document.querySelector('#num2');
let resultValueEl = document.querySelector('#resultValue');


///////////////////// output calculator functions  ///////////////////////////

function add(){
    resultValueEl.textContent = Number(num1EL.value) + Number(num2EL.value) ;
    return false;
}

function sub(){
    resultValueEl.textContent = Number(num1EL.value) - Number(num2EL.value) ;
    return false;
}


function multiply(){
    resultValueEl.textContent = Number(num1EL.value) * Number(num2EL.value) ;
    return false;
}

function divide(){
    resultValueEl.textContent = Number(num1EL.value) / Number(num2EL.value);
    return false;
}

function cl(){
    num1EL.value = "";
    num2EL.value = "";
    resultValueEl.textContent = "" ;
    return false;
}





