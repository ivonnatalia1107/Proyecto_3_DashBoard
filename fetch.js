
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "0087de59eceafec6ae96f68244d45721";
const searchBox = document.querySelector('input');
const searchBtn = document.querySelector('button');
const displayTemperature = document.querySelector('.temperature');
const displayIcon = document.querySelector('.icon')

export async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json()
    displayTemperature.innerHTML = data.main.temp + "°C";
    console.log("Temperature:" + " " + data.main.temp)
    console.log(data)
    console.log(data.main.temp)
    console.log(data.main.temp_max)
    console.log(data.main.temp_min)
 //   console.log(data.weather[0].id) probando imagen


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    console.log('Displaying the weather of:' + ' ' + searchBox.value)

})



searchBox.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        checkWeather(searchBox.value);
        console.log('Displaying the weather of:' + ' ' + searchBox.value)        
}})
