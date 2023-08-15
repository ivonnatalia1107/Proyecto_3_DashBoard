const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";
const apiKey = "0087de59eceafec6ae96f68244d45721";
const searchBox = document.querySelector('input');
const searchBtn = document.querySelector('button');

export async function checkWeatherForDays(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json()

   console.log(data) 


}

searchBtn.addEventListener("click", () => {
    checkWeatherForDays(searchBox.value);



})

searchBox.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        checkWeatherForDays(searchBox.value);
        
    }
})