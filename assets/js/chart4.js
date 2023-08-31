const ctx6 = document.getElementById('rhinohornbillChart');

const data6 = {
    labels: ['1980', '1990', '2000', '2010', '2020'],
    datasets: [{
        label: 'Rhinoceros Hornbill Population',
        data: [1500, 1300, 1100, 900, 800], // Replace with actual rhinoceros hornbill population data
        borderColor: 'red',
        borderWidth: 2,
        fill: false,
    }]
};

new Chart(ctx6, {
    type: 'line',
    data: data6,
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

const ctx7 = document.getElementById('orangutanChart');

const data7 = {
    labels: ['1980', '1990', '2000', '2010', '2020'],
    datasets: [{
        label: 'Orangutan Population',
        data: [12000, 10000, 8000, 6000, 4500], // Replace with actual orangutan population data
        borderColor: 'orange',
        borderWidth: 2,
        fill: false,
    }]
};

new Chart(ctx7, {
    type: 'line',
    data: data7,
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

