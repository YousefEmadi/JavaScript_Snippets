/*
    gitHubRepositoryFinder JS Project
    By: Yousef Emadi
    Date: 18-Feb-2021
*/

let fieldset1El = document.getElementById('fieldset1');
let inputEl = document.getElementById('input');
let validationMessageTrayEl = document.getElementById('validationMessageTray');
let validationFlag = true;
let resultWrapperEl = document.querySelector('#resultWrapper');
let resultFlag = false;

/////////////////////////////           Validating for the error message             ///////////////////////////////////////

function validate() {
    if (inputEl.value === "") {
        fieldset1El.appendChild(validationMessageTrayEl);
        validationMessageTrayEl.innerHTML = "User name must be filled in";
        validationFlag = false;
        return false;
    }
}


/////////////////////////////           API Part             ///////////////////////////////////////

/*
function name   : xhrFetchInfoAPI
developed by    : https://github.com/Yousef-Emadi
parameter       : url(string)
function for fetch information via API XHR interaction with a url
uses 2 functions: xhrResultHandler,xhrErrorHandler
 */
function xhrFetchInfoAPI() {

    let xhrObj = new XMLHttpRequest();
    let url = `https://api.github.com/users/${inputEl.value}/repos`;
    xhrObj.open("GET", url, true);
    xhrObj.send();
    xhrObj.onload = xhrResultHandler;
    xhrObj.onerror = xhrErrorHandler;
}

function xhrResultHandler(resp) {
    let resultObj = JSON.parse(resp.target.response);

    resultObj.forEach(repo => {
        let newFieldset = document.createElement('fieldset');
        resultWrapperEl.appendChild(newFieldset);
        newFieldset.innerHTML =
            `<details>
                <summary>${repo.name}</summary>
                <p><strong>Description:</strong> ${repo.description}</p>
                <a href="${repo.html_url}">${repo.html_url}</a>
            </details>`

    });
    resultFlag = true;
}


function xhrErrorHandler(err) {
    alert("Something went wrong. Please try again later. the error status was " + err.target.status);
}

/////////////////////////////           reset             ///////////////////////////////////////
function reset() {
    if (validationFlag === false) {
        fieldset1El.removeChild(validationMessageTrayEl);
        validationFlag = true
    };
    if (resultFlag === true) {
        resultWrapperEl.innerHTML= "";
        resultFlag = false;
    };
    inputEl.value = "";


}

/////////////////////////////           Final Result            ///////////////////////////////////////

function finalResult() {
    validate();
    xhrFetchInfoAPI();
}
