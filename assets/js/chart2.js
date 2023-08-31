const ctx2 = document.getElementById('turtleChart');

const data2 = {
    labels: ['1980', '1990', '2000', '2010', '2020'],
    datasets: [{
        label: 'Turtle Population',
        data: [120000, 110000, 95000, 80000, 75000], // Replace with actual turtle population data
        borderColor: 'green',
        borderWidth: 2,
        fill: false,
    }]
};

new Chart(ctx2, {
    type: 'line',
    data: data2,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Population'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Year'
                }
            }
        }
    }
});

const ctx3 = document.getElementById('tapirChart');

const data3 = {
    labels: ['1980', '1990', '2000', '2010', '2020'],
    datasets: [{
        label: 'Tapir Population',
        data: [3000, 2800, 2400, 1800, 1500], // Replace with actual tapir population data
        borderColor: 'white',
        borderWidth: 2,
        fill: false,
    }]
};

new Chart(ctx3, {
    type: 'line',
    data: data3,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Population'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Year'
                }
            }
        }
    }
});


