
const ctx = document.getElementById('endangeredChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Vulnerable', 'Endangered', 'Critically Endangered'],
        datasets: [{
            label: '# of animals',
            data: [450, 200, 105],
            borderWidth: 1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            subtitle: {
                display: true,
                text: 'Number of threatened animal species in Malaysia on the IUCN Red List in 2022, by category'
            }
        },
        layout:{
            autoPadding: true
        }
    }
});

const ctx1 = document.getElementById('tigerChart');

const data1 = {
    labels: ['1980', '1990', '2000', '2010', '2020'],
    datasets: [{
        label: 'Tiger Population',
        data: [40000, 32000, 25000, 3900, 3900], // Replace with actual tiger population data
        borderColor: 'orange',
        borderWidth: 2,
        fill: false,
    }]
};

new Chart(ctx1, {
    type: 'line',
    data: data1,
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
    }});
    
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
    