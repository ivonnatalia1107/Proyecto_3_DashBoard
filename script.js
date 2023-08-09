import { urlApi } from "./fetch.js";

let code = [];
let value = [];

async function renderData() {

    const chileansCurrency = await urlApi("https://api.gael.cloud/general/public/clima")
    code = chileansCurrency.map(chileanCurrency => chileanCurrency.Estacion)
    value = chileansCurrency.map(chileanCurrency => chileanCurrency.Temp)
    console.log(value)
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

renderData()