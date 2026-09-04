const apikey = "14739a28246d183919dbf9a57a19cad9"

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
     
    const city = cityInput.value;

    if(city) {
        try {
            const weatherData = await getWeatherData(city)
            displayWeatherInfo(weatherData)
        }
        catch(err) {
            console.error(err)
            displayError(err)
        }
    }
    else {
        displayError("Please Enter a city")
    }
})

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    const response = await fetch(apiUrl)


    if(!response.ok) { 
        throw new Error("could not fetch weather data")
    }

    return await response.json()
}


function displayWeatherInfo(data){

    const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data
    card.textContent = "";
    card.style.display = "flex"
   
   const cityDisplay = document.createElement("h1");
   const tempDisplay = document.createElement("p");
   const humidityDisplay = document.createElement("p");
   const descDisplay = document.createElement("p");
   const weatherEmoji = document.createElement("p");

   cityDisplay.textContent = city;
   tempDisplay.textContent = `${(temp ).toFixed(1)}C`
   humidityDisplay.textContent = `Humidity ${humidity}%`
   descDisplay.textContent = description

   cityDisplay.classList.add("cityDisplay");
   tempDisplay.classList.add("cityDisplay");
   humidityDisplay.classList.add("humidityDisplay");
   descDisplay.classList.add("descDisplay")

   

   card.appendChild(cityDisplay)
   card.appendChild(tempDisplay)
   card.appendChild(humidityDisplay)
   card.appendChild(descDisplay)



}

function getWeatherInfo (data) {

}

function getWeatherEmoji(weatherId) {

}
function displayError(message) {
    const errorDisplay = document.createElement("p")
    errorDisplay.textContent = message;
    errorDisplay.classList.add(".errorDisplay");

    card.textContent = "";
    card.style.display ="flex"
    card.appendChild(errorDisplay)
}


