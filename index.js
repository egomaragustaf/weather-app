const apiKey = "658b8b7b6d5e6d062f321705ff457f3e";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=jakarta";

async function getWeatherData() {
  const response = await fetch(apiURL + `&appid=${apiKey}`);
  const data = await response.json();

  console.log(data);
}

getWeatherData();
