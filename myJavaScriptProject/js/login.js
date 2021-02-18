/*JS Project
    By: Yousef Emadi
    Date: 14-Feb-2021
    reference for the clock part of js code and date class methods: w3school.com
*/

/////////////////////////////           Date             ///////////////////////////////////////
///////////////////////////// reference for date class methods: w3school.com   //////////////////////////

//to format date in a easy-to-read way
function simpleDate(date){
    let days = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return days[date.getDay()] + ' ' + months[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear();
}
let d = new Date();
document.getElementById("currentDate").innerText = simpleDate(d);


/////////////////////////////           Clock             ///////////////////////////////////////
///////////////////////////// reference for clock code: w3school.com   //////////////////////////

function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h === 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("currentTime").textContent = h + ":" + m + ":" + s + " " + session;

    setTimeout(showTime, 1000);
}

showTime();

/////////////////////////////           Validating for the error message             ///////////////////////////////////////

let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password');
let outputTrayEl = document.getElementById('outputTray');

function validate() {

    outputTrayEl.innerHTML = "";
    let newDiv = document.createElement('div');
    outputTrayEl.appendChild(newDiv);

    if (emailEl.value === "" && passwordEl.value.length < 6) {
        newDiv.innerHTML = "Error! Please complete the form! " + "<br> * Email address must be filled in!" + " <br>* Password length must be at least 6 characters!";
        return false;
    }
    if (emailEl.value === "") {
        newDiv.innerHTML = "Error! Please complete the form! " + "<br> * Email address must be filled in!";
        return false;
    }
    if (passwordEl.value.length < 6) {
        newDiv.innerHTML = "Error! Please complete the form! " + " <br>* Password length must be at least 6 characters!";
        return false;
    }
    if (emailEl.value === "admin@yopmail.com" && passwordEl.value === "adminyopmail") {
        newDiv.innerHTML = "Developed by: Yousef Emadi<br><a href=\"mailto: usef.emadi@gmail.com\">usef.emadi@gmail.com</a>";
        weatherRequest();
        return false;
    } else {
        newDiv.innerHTML = "only authorized users can access to the system";
        return false;
    }
}

/////////////////////////////           AJAX             ///////////////////////////////////////

function weatherRequest() {
    let myXHR = new XMLHttpRequest();
    myXHR.open("GET", "http://dataservice.accuweather.com/forecasts/v1/daily/5day/56186?apikey=MYPtTokrw4UFLMEtIa4EO5YCRiJiqCuB&metric=true");
    myXHR.send();
    myXHR.addEventListener("load", fetchWeather);
    myXHR.onerror = errorHandler;
}

function fetchWeather(resp) {
    let respObj = JSON.parse(resp.target.response);
    let weatherTrayEL = document.querySelector('#weatherTray');
    console.log(respObj);
    let fiveDaysItems = "";
    for (let i = 0; i < 5; i++) {
        let dayItem = new Date(respObj.DailyForecasts[i].Date);
        fiveDaysItems += "<br><a href=\"" + respObj.DailyForecasts[i].Link + "\" id=\"days\" target=\"_blank\">" +
            simpleDate(dayItem) +
            "</a><br>Max: " +
            respObj.DailyForecasts[i].Temperature.Maximum.Value +
            respObj.DailyForecasts[i].Temperature.Maximum.Unit +
            "  Min: " +
            respObj.DailyForecasts[i].Temperature.Minimum.Value +
            respObj.DailyForecasts[i].Temperature.Minimum.Unit +
            "<br>Day: " +
            respObj.DailyForecasts[i].Day.IconPhrase +
            "  Night: " +
            respObj.DailyForecasts[i].Night.IconPhrase
    }
    weatherTrayEL.innerHTML = "<br>Weather in Montreal for the next 5 days!" + fiveDaysItems;
}

function errorHandler(err){
    alert("Weather information is not available temporarily. error status: " + err.target.status);
}


/////////////////////////////           Message of The Day             ///////////////////////////////////////

//array of messages
let bannerText = [
    "Love For All, Hatred For None",
    "Change the world by being yourself",
    "Every moment is a fresh beginning",
    "Never regret anything that made you smile",
    "Die with memories, not dreams",
    "Aspire to inspire before we expire",
    "Everything you can imagine is real",
    "Simplicity is the ultimate sophistication",
    "Whatever you do, do it well",
    "What we think, we become",
    "Yesterday you said tomorrow. Just do it",
    "Try to be a rainbow in someone’s cloud",
    "I don’t need it to be easy, I need it to be worth it",
    "Let the beauty of what you love be what you do",
    "May your choices reflect your hopes, not your fears",
    "Change the game, don’t let the game change you",
    "When words fail, music speaks",
    "It hurt because it mattered"
];

function showBanner() {
    let bannerEL = document.querySelector('#banner');
    let rand = Math.floor(Math.random() * bannerText.length);
    bannerEL.textContent = bannerText[rand];
}

showBanner();