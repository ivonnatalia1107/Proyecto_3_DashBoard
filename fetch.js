
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "0087de59eceafec6ae96f68244d45721";
const searchBox = document.querySelector('input');
const searchBtn = document.querySelector('button');
const displayTemperature = document.querySelector('.temperature');
const displayIconWeather = document.querySelector('.icon_weather');
const displayHumidity = document.querySelector('.humidity');
const displayWind = document.querySelector('.wind');
const displayCountry = document.querySelector('.country');
let cityName = document.querySelector('.city_name');
let myChart;


export async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json()
    console.log(data)

    if (data.cod === "404" || !city) {
        alert("Por favor, ingresa un parametro valido");
    } else {

       let cityNameInput = city;
        cityName.innerHTML = `${cityNameInput[0].toUpperCase() + cityNameInput.substring(1)}`;

        displayCountry.innerHTML = "(" + data.sys.country + ")";

        displayTemperature.innerHTML = "Temperatura:" + " " + Math.round(data.main.temp) + "°C";
        console.log("Temperatura promedio:" + " " + Math.round(data.main.temp))

        displayHumidity.innerHTML = "Humedad:" + " " + data.main.humidity + "%";
        console.log("Humedad:" + " " + data.main.humidity)

        displayWind.innerHTML = "Viento:" + " " + data.wind.speed + " " + "km/hr";
        console.log("Viento:" + " " + data.wind.speed)

    }

    if (data.weather[0].main === "Clouds") {
        displayIconWeather.src = "images/clouds.png";
    }
    else if (data.weather[0].main === "Clear") {
        displayIconWeather.src = "images/clear.png";
    }
    else if (data.weather[0].main === "Rain") {
        displayIconWeather.src = "images/rain.png";
    }
    else if (data.weather[0].main === "Drizzle") {
        displayIconWeather.src = "images/drizzle.png";
    }
    else if (data.weather[0].main === "Mist") {
        displayIconWeather.src = "images/mist.png";
    }



//CHART JS
    console.log("Desplegando grafico comparativo de:")
    console.log("Temperatura promedio:" + " " + data.main.temp)
    console.log("Temperatura minima:" + " " + data.main.temp_max)
    console.log("Temperatura maxima:" + " " + data.main.temp_min)

    if (myChart) {
        myChart.destroy();
    }
    const maxTemp = data.main.temp_max;
    const minTemp = data.main.temp_min;
    const feelsLike = data.main.feels_like;

    const ctx = document.getElementById('myChart');
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Temperatura Máx', 'Temperatura Mín', 'Sensación Térmica'],
            datasets: [{
                label: 'Temperaturas',
                data: [maxTemp, minTemp, feelsLike],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                color: 'rgb (255, 255, 255)',
                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: 'white'
                    },
                    grid: {
                        color: 'white'
                    }
                },
                x: {
                    ticks: {
                        color: 'white'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                },
                tooltip: {
                    callbacks: {
                        afterLabel: function (context) {
                            return '°C'
                        }

                    }

                }
            }

        }
    });
    searchBox.value = "";
    document.querySelector(".container_app").style.display = "flex";
    document.querySelector(".container_chart").style.display = "flex";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

    console.log('Desplegando la temperatura de:' + ' ' + searchBox.value)


})

searchBox.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        checkWeather(searchBox.value);
        console.log('Desplegando la temperatura de:' + ' ' + searchBox.value)
    }
})
