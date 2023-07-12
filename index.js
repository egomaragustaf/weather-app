const apiKey = "658b8b7b6d5e6d062f321705ff457f3e";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchCityFormElement = document.getElementById("search-form");
const searchCityTextElement = document.getElementById("city-text");

async function getWeatherData(city) {
  try {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

searchCityFormElement.addEventListener("submit", submitCity);

function submitCity(event) {
  event.preventDefault();

  getWeatherData(searchCityTextElement.value); //
}
