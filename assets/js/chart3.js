const ctx4 = document.getElementById('eagleChart');

const data4 = {
    labels: ['1980', '1990', '2000', '2010', '2020'],
    datasets: [{
        label: 'Steppe Eagle Population',
        data: [1200, 1000, 800, 600, 500], // Replace with actual steppe eagle population data
        borderColor: 'yellow',
        borderWidth: 2,
        fill: false,
    }]
};

new Chart(ctx4, {
    type: 'line',
    data: data4,
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


const ctx5 = document.getElementById('rhinoChart');

const data5 = {
    labels: ['1980', '1990', '2000', '2010', '2020'],
    datasets: [{
        label: 'Rhino Population',
        data: [10000, 8500, 7500, 6000, 4000], // Replace with actual rhino population data
        borderColor: 'grey',
        borderWidth: 2,
        fill: false,
    }]
};

new Chart(ctx5, {
    type: 'line',
    data: data5,
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

