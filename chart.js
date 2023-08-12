const maxTemp = data.main.temp_max;
const minTemp = data.main.temp_min;
const feelsLike = data.main.feels_like;

    // Crear un nuevo gráfico
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Temperatura Máxima', 'Temperatura Mínima', 'Sensación Térmica'],
            datasets: [{
                label: 'Temperaturas',
                data: [maxTemp, minTemp, feelsLike],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
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