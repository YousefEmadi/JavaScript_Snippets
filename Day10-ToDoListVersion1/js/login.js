/*
    ToDo List JS Project
    By: https://github.com/Yousef-Emadi
    Date: 19-Feb-2021
*/

let fieldset1El = document.getElementById('fieldset1');
let inputEl = document.getElementById('input');
let validationMessageTrayEl = document.getElementById('validationMessageTray');
let validationFlag = true;
let resultWrapperEl = document.querySelector('#resultWrapper');


/////////////////////////////           Validating for the error message             //////////////////////////////////

function resetValidationError() {
    if (validationFlag === false) {
        fieldset1El.removeChild(validationMessageTrayEl);
        validationFlag = true
    }
}


function validateAndAdd() {
    if (inputEl.value === "") {
        fieldset1El.appendChild(validationMessageTrayEl);
        validationMessageTrayEl.innerHTML = "Something must be filled in";
        validationFlag = false;
        return false;
    }else
    {
/////////////////////////////           creat tray and text for each task starts from here         ////////////////

        resetValidationError();

        // create tray area for the task nad put the text in it
        let taskTrayEl = document.createElement('fieldset');
        resultWrapperEl.appendChild(taskTrayEl);
        taskTrayEl.innerHTML = inputEl.value;


        //toggle for done/undone task or remove the task from the array
        taskTrayEl.addEventListener('click',function (){
            taskTrayEl.classList.toggle("lineThroughStyle");
        });
        taskTrayEl.addEventListener('dblclick',function (){
            taskTrayEl.remove();
        });

        inputEl.value = "";
    }
}

