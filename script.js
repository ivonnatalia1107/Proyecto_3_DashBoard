

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "0087de59eceafec6ae96f68244d45721";
const searchBox = document.querySelector('input');
const searchBtn = document.querySelector('button');
const prueba = document.querySelector('.parrafo');


async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json()
    prueba.innerHTML = data.main.temp;
    console.log("Temperature:" + " " + data.main.temp)
    console.log(data)
    console.log(data.main.temp)
    console.log(data.main.temp_max)
    console.log(data.main.temp_min)



    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: code,
            datasets: [{
                label: 'Valor del peso Chileno en diferentes cambios',
                data: value,
                borderWidth: 1

            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    console.log('Displaying the weather of:' + ' ' + searchBox.value)

})





