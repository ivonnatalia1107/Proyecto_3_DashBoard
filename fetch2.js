const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";
const apiKey = "0087de59eceafec6ae96f68244d45721";
const searchBox = document.querySelector('input');
const searchBtn = document.querySelector('button');
const cardContainer = document.querySelector('.card-container')

export async function checkWeatherForDays(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json()

    console.log('Mostrando pronostico del clima para 5 días')
    console.log(data)

    cardContainer.innerHTML = '';

    const forecasts = data.list;

    for (let i = 0; i < forecasts.length; i += 8) {
        const forecast = forecasts[i];

        const date = new Date(forecast.dt * 1000);
        const dayOfWeek = date.toLocaleString('es-ES', { weekday: 'short' });
        const temperature = forecast.main.temp;
        const weatherCondition = forecast.weather[0].main;
        const roundedTemperature = Math.round(temperature);
        const card = document.createElement('div');
        card.classList.add('weather-card');

        const iconImg = document.createElement('img');

        if (weatherCondition === "Clouds") {
            iconImg.src = "images/clouds.png";
        }
        else if (weatherCondition === "Clear") {
            iconImg.src = "images/clear.png";
        }
        else if (weatherCondition === "Rain") {
            iconImg.src = "images/rain.png";
        }
        else if (weatherCondition === "Drizzle") {
            iconImg.src = "images/drizzle.png";
        }
        else if (weatherCondition === "Mist") {
            iconImg.src = "images/mist.png";

        }

        iconImg.alt = forecast.weather[0].description;

        const temperatureText = document.createElement('p');
        temperatureText.textContent = `${roundedTemperature}°C`;

        const dayText = document.createElement('p');
        dayText.textContent = dayOfWeek;

        card.appendChild(iconImg);
        card.appendChild(temperatureText);
        card.appendChild(dayText);

        cardContainer.appendChild(card);
    }
}

searchBtn.addEventListener("click", () => {
    checkWeatherForDays(searchBox.value);



})

searchBox.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        checkWeatherForDays(searchBox.value);

    }
})