const apiKey = config.SECRET_KEY;
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchCityFormElement = document.getElementById("search-form");
const searchCityTextElement = document.getElementById("city-text");

async function getWeatherData(city) {
  try {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    document.getElementById("temp").innerHTML = data.main.temp + ` °C`;
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("humidity").innerHTML = data.main.humidity + `%`;
    document.getElementById("wind").innerHTML = data.wind.speed + ` km/h`;
  } catch (error) {
    console.log(error);
  }
}

searchCityFormElement.addEventListener("submit", submitCity);

function submitCity(event) {
  event.preventDefault();

  getWeatherData(searchCityTextElement.value); //
}
