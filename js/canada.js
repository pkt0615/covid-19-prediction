canada_data = new Data(covid_data, "Canada");
canada_pred_data = new Data(pred_data, "Canada")

var kbc = document.getElementById('canadaBarChart').getContext('2d');
var klc = document.getElementById('canadaLineChart').getContext('2d');

canada_pred_total_data = [canada_data.dataNumbers()[131]];
for (i = 0; i < canada_pred_data.dataNumbers().length; i++) {
    canada_pred_total_data[i+1] = canada_pred_total_data[i] + canada_pred_data.dataNumbers()[i];
}

var myChart = new Chart(kbc, {
    type: 'bar',
    data: {
        labels: canada_data.dataKeys().slice(131, 160),
        datasets: [
            {
                label: '캐나다 총 확진자 수',
                data: canada_data.dataNumbers().slice(131),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: '예측 총 확진자 수',
                data: canada_pred_total_data,
                backgroundColor: 'rgba(99, 132, 255, 0.2)',
                borderColor: 'rgba(99, 132, 255, 1)',
                borderWidth: 1
            }
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var myLineChart = new Chart(klc, {
    type: 'line',
    data: {
        labels: canada_data.dataKeys().slice(131, 160),
        datasets: [
            {
                label: '캐나다 전날 대비 확진자 증감',
                data: canada_data.dataDailyNumbers().slice(131),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: '예측 전날 대비 확진자 증감',
                data: canada_pred_data.dataNumbers(),
                backgroundColor: 'rgba(99, 132, 255, 0.2)',
                borderColor: 'rgba(99, 132, 255, 1)',
                borderWidth: 1
            }
    ]
    }
});