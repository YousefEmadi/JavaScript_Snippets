/*
    final JS exam
    By: https://github.com/Yousef-Emadi
    Date: 22-Feb-2021
*/

//form part of web page
const nameInputEl = document.getElementById('nameInput');
const ageInputEl = document.getElementById('ageInput');
let drinkVolume = 0;
let pokemon = "tess";

//result part of the web page
const resultWrapperEl = document.querySelector('#resultWrapper');
let resultTrayEl = document.createElement('fieldset');
resultTrayEl.innerHTML = "hello";


/////////////////////////////          Drink part of output    //////////////////////////////////
/*
The quanitty of the drink can be calculted as 30 ml for each year of age.
For instance, if the age is 10 years the beverage quantity would be 10* 30 = 300 ml.
If the age is less than 18, then water otherwise beer.
*/

function beverageFinder(){
    let drinkType = "Beer";
    if (ageInputEl.value < 18) drinkType = "Water";
    resultTrayEl.innerHTML = nameInputEl.value + ", you can drink up to " + drinkVolume + " ml of " + drinkType;
}

/////////////////////////////           Pokemon Prize part of output with Promises   /////////////////////////////////

function pokemonFinder(){

    drinkVolume = ageInputEl.value * 30;
    let myUrl = "https://pokeapi.co/api/v2/pokemon/" + drinkVolume;

    let myPromise = fetch(myUrl);

    myPromise.then(response => {
        return (response.json())
    }).then(pokemon => {
        return pokemon
    }).then(obj => {
        resultTrayEl.innerHTML += ". You also win a " + obj.name;
        resultTrayEl.innerHTML +=`<br><br><img src="https://img.pokemondb.net/artwork/large/${obj.name}.jpg" alt="${obj.name}" width="100" height="100"><br>`;

    }).catch(function () {
        resultTrayEl.innerHTML += ". We Cannot give you a prize at the moment.";
        resultTrayEl.innerHTML +=`<br><img src="./sadFace.jpg" alt="sad Face" width="100" height="100"><br>`;
    })
}

/////////////////////////////           Final output   /////////////////////////////////

function showResult() {
    resultWrapperEl.appendChild(resultTrayEl);
    beverageFinder();
    pokemonFinder();
}
