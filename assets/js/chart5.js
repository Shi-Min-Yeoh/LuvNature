const ctx8 = document.getElementById('dugongChart');

const data8 = {
    labels: ['1980', '1990', '2000', '2010', '2020'],
    datasets: [{
        label: 'Dugong Population',
        data: [2000, 1800, 1500, 1200, 1000], // Replace with actual dugong population data
        borderColor: 'grey',
        borderWidth: 2,
        fill: false,
    }]
};

new Chart(ctx8, {
    type: 'line',
    data: data8,
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

const ctx9 = document.getElementById('bluewhaleChart');

const data9 = {
    labels: ['1980', '1990', '2000', '2010', '2020'],
    datasets: [{
        label: 'Blue Whale Population',
        data: [5000, 4800, 4500, 4200, 3800], // Replace with actual blue whale population data
        borderColor: 'blue',
        borderWidth: 2,
        fill: false,
    }]
};

new Chart(ctx9, {
    type: 'line',
    data: data9,
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

