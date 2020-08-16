korea_data = new Data(covid_data, "Korea");
korea_pred_data = new Data(pred_data, "Korea")

var kbc = document.getElementById('koreaBarChart').getContext('2d');
var klc = document.getElementById('koreaLineChart').getContext('2d');

korea_pred_total_data = [korea_data.dataNumbers()[131]];
for (i = 0; i < korea_pred_data.dataNumbers().length; i++) {
    korea_pred_total_data[i+1] = korea_pred_total_data[i] + korea_pred_data.dataNumbers()[i];
}

var myChart = new Chart(kbc, {
    type: 'bar',
    data: {
        labels: korea_data.dataKeys().slice(131, 160),
        datasets: [
            {
                label: '대한민국 총 확진자 수',
                data: korea_data.dataNumbers().slice(131),
                backgroundColor: 'rgba(238, 18, 41, 0.2)',
                borderColor: 'rgba(238, 18, 41, 1)',
                borderWidth: 1
            },
            {
                label: '예측 총 확진자 수',
                data: korea_pred_total_data,
                backgroundColor: 'rgba(21, 77, 158, 0.2)',
                borderColor: 'rgba(21, 77, 158, 1)',
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
        labels: korea_data.dataKeys().slice(131, 160),
        datasets: [
            {
                label: '대한민국 전날 대비 확진자 증감',
                data: korea_data.dataDailyNumbers().slice(131),
                backgroundColor: 'rgba(238, 18, 41, 0.2)',
                borderColor: 'rgba(238, 18, 41, 1)',
                borderWidth: 1
            },
            {
                label: '예측 전날 대비 확진자 증감',
                data: korea_pred_data.dataNumbers(),
                backgroundColor: 'rgba(21, 77, 158, 0.2)',
                borderColor: 'rgba(21, 77, 158, 1)',
                borderWidth: 1
            }
    ]
    }
});