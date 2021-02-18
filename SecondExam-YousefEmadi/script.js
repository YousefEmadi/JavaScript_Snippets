/*JS Second Exam
    By: Yousef Emadi
    usef.emadi@gmail.com
    17-Feb-2021
*/

//creat an array of objects for foods
let foods = [];

//initialized the text content of output list in DOM
let foodListTrayEL = document.querySelector('#foodListTray');
foodListTrayEL.innerHTML = "";

// creat elements from input DOM
let foodNameEL = document.querySelector('#foodName');
let caloriesEL = document.querySelector('#calories');

//reset function to reset the input box for the next user entry
function reset() {
    foodNameEL.value = "";
    caloriesEL.value = "";
}

// function for add each input entry to array of objects
function addFood() {

    let food = {
        "name": foodNameEL.value,
        "calories": caloriesEL.value,
    };
    foods.push(food);

    //cal the function to show the entire food objects with a fresh list
    showSortedList();
    reset();
}

// this function is dedicated to sort and creat the final text result for the DOM
function showSortedList() {
    //refresh the list text on HTML
    foodListTrayEL.innerHTML = "";

    //sort the array of objects in order of calories ascending for each time prior display
    foods.sort(function (a, b) {
        return a.calories - b.calories;
    });

    //add the string to ul element of DOM
    for (let i = 0; i < foods.length; i++) {
        foodListTrayEL.innerHTML += "<li>" + foods[i].name + " - " + foods[i].calories + "</li>";
    }
}

//function to clear the list and get app ready to create a new list
function clearList() {
    foods = [];
    foodListTrayEL.innerHTML = "";
}