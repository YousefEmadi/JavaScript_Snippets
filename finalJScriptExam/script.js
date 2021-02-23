/*
    final JS exam
    By: https://github.com/Yousef-Emadi
    Date: 19-Feb-2021
*/

//form part of web page
const nameInputEl = document.getElementById('nameInput');
const ageInputEl = document.getElementById('ageInput');
let drinkVolume = 0;

//result part of the web page
const resultWrapperEl = document.querySelector('#resultWrapper');
let resultTrayEl = document.createElement('fieldset1');
resultTrayEl.innerHTML = "";


/////////////////////////////          Drink part of output    //////////////////////////////////
/*
The quanitty of the drink can be calculted as 30 ml for each year of age.
For instance, if the age is 10 years the beverage quantity would be 10* 30 = 300 ml.
If the age is less than 18, then water otherwise beer.
*/

function beverageFinder(){
    let drinkType = "Beer";
    drinkVolume = ageInputEl.value * 30 ;
    if (ageInputEl.value < 18) drinkType = "Water";
    resultTrayEl.innerHTML = nameInputEl.value + ", you can drink up to " + drinkVolume + " ml of " + drinkType;
}


/////////////////////////////           Pokemon Prize part of output    //////////////////////////////////
/*
function name   : jQueryFetchInfoAPI
developed by    : https://github.com/Yousef-Emadi (JS Personal library)
parameter       : url(string)
function for fetch information via API JQuery interaction with a url
uses 3 functions: jQueryResultHandler,jQueryErrorHandler, jQueryFinallyFunc
 */
function jQueryFetchInfoAPI(url) {
    $.ajax(url).done(jQueryResultHandler).fail(jQueryErrorHandler);
}
function jQueryResultHandler(resp) {
    console.log(resp);
    resultTrayEl.innerHTML += ". You also win a " + resp.forms[0].name;
    resultTrayEl.innerHTML +=`<br><br><img src="https://img.pokemondb.net/artwork/large/${resp.forms[0].name}.jpg" alt="${resp.forms[0].name}" width="100" height="100"><br>`;
}

function jQueryErrorHandler() {
    resultTrayEl.innerHTML += ". We Cannot give you a prize at the moment.";
    resultTrayEl.innerHTML +=`<br><img src="./sadFace.jpg" alt="sad Face" width="100" height="100"><br>`;
}


/////////////////////////////           final result        ////////////////

function showResult(){
    resultWrapperEl.appendChild(resultTrayEl);
    beverageFinder();
    jQueryFetchInfoAPI("https://pokeapi.co/api/v2/pokemon/"+ drinkVolume);
}
