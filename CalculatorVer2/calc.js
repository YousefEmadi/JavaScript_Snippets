/*JS Project
    By: Yousef Emadi
    usef.emadi@gmail.com
    15-Feb-2021
*/


let monitorEL = document.querySelector('#monitor');
monitorEL.value = "";
let operator = "";
let param1 = 0;
let param2 = 0;
let residual = "";


///////////////////// input keyboard functions  ///////////////////////////

function returnNum0(){
    monitorEL.value = residual;
    monitorEL.value += 0;
    residual = monitorEL.value;
}
function returnNum1(){
    monitorEL.value = residual;
    monitorEL.value += 1;
    residual = monitorEL.value;
}
function returnNum2(){
    monitorEL.value = residual;
    monitorEL.value += 2;
    residual = monitorEL.value;
}
function returnNum3(){
    monitorEL.value = residual;
    monitorEL.value += 3;
    residual = monitorEL.value;
}
function returnNum4(){
    monitorEL.value = residual;
    monitorEL.value += 4;
    residual = monitorEL.value;
}
function returnNum5(){
    monitorEL.value = residual;
    monitorEL.value += 5;
    residual = monitorEL.value;
}
function returnNum6(){
    monitorEL.value = residual;
    monitorEL.value += 6;
    residual = monitorEL.value;
}
function returnNum7(){
    monitorEL.value = residual;
    monitorEL.value += 7;
    residual = monitorEL.value;
}
function returnNum8(){
    monitorEL.value = residual;
    monitorEL.value += 8;
    residual = monitorEL.value;
}
function returnNum9(){
    monitorEL.value = residual;
    monitorEL.value += 9;
    residual = monitorEL.value;
}
function cl(){
    monitorEL.value = "";
    residual="";
}
function plus(){
    operator = 'plus';
    param1 = Number(monitorEL.value);
    residual="";
}

function subtract(){
    operator = 'subtract';
    param1 = Number(monitorEL.value);
    residual="";
}

function multiply(){
    operator = 'multiply';
    param1 = Number(monitorEL.value);
    residual="";
}

function divide(){
    operator = 'divide';
    param1 = Number(monitorEL.value);
    residual = "";
}

function equal(){
    param2 = Number(monitorEL.value);
    switch (operator){
        case "plus": {result = param1 + param2; break}
        case "subtract": {result = param1 - param2; break}
        case "multiply": {result = param1 * param2;break}
        case "divide": {result = param1 / param2;break}
    }
    monitorEL.value = result;
    residual = "";
}




///////////////////// output calculator functions  ///////////////////////////





///////////////////// monitor functions  ///////////////////////////





