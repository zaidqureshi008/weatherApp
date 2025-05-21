//http://api.weatherapi.com/v1/current.json?key=8e26f5fa2ef24a808af152538252105&q=Mumbai&aqi=no

const temperatureField = document.querySelector(".temp p");
const locationField = document.querySelector(".time-location p");
const dataField = document.querySelector(".time-location span");
const weatherField = document.querySelector(".condition p");
const searchField = document.querySelector(".search-area");
const form = document.querySelector("form");

form.addEventListener("submit", searchForLocation);



let target = "Lucknow";
const fetchResults = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=8e26f5fa2ef24a808af152538252105&q=${targetLocation}&aqi=no`;



    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    let locationName = data.location.name 
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;
    updateDetails(locationName, time, temp, condition)
    
    
}
function updateDetails(locationName, time, temp, condition) {
    locationField.innerText = locationName;
    dataField.innerText = time;
    temperatureField.innerText = temp + "°C";
    weatherField.innerText = condition;
}   

function searchForLocation(e) {
    e.preventDefault();
    target = searchField.value;
    fetchResults(target)
}
fetchResults(target);