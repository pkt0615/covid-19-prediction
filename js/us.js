function us() {
    us_data = new Data(covid_data, "US");
    us_pred_data = new Data(pred_data, "US")

    var kbc = document.getElementById('usBarChart').getContext('2d');
    var klc = document.getElementById('usLineChart').getContext('2d');

    us_pred_total_data = [us_data.dataNumbers()[131]];
    for (i = 0; i < us_pred_data.dataNumbers().length; i++) {
        us_pred_total_data[i+1] = us_pred_total_data[i] + us_pred_data.dataNumbers()[i];
    }

    myChart = new Chart(kbc, {
        type: 'bar',
        data: {
            labels: us_data.dataKeys().slice(131, 160),
            datasets: [
                {
                    label: '미국 총 확진자 수',
                    data: us_data.dataNumbers().slice(131),
                    backgroundColor: 'rgba(178, 34, 52, 0.2)',
                    borderColor: 'rgba(178, 34, 52, 1)',
                    borderWidth: 1
                },
                {
                    label: '예측 총 확진자 수',
                    data: us_pred_total_data,
                    backgroundColor: 'rgba(60, 59, 110, 0.2)',
                    borderColor: 'rgba(60, 59, 110, 1)',
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

    myLineChart = new Chart(klc, {
        type: 'line',
        data: {
            labels: us_data.dataKeys().slice(131, 160),
            datasets: [
                {
                    label: '미국 전날 대비 확진자 증감',
                    data: us_data.dataDailyNumbers().slice(131),
                    backgroundColor: 'rgba(178, 34, 52, 0.2)',
                    borderColor: 'rgba(178, 34, 52, 1)',
                    borderWidth: 1
                },
                {
                    label: '예측 전날 대비 확진자 증감',
                    data: us_pred_data.dataNumbers(),
                    backgroundColor: 'rgba(60, 59, 110, 0.2)',
                    borderColor: 'rgba(60, 59, 110, 1)',
                    borderWidth: 1
                }
        ]
        }
    });
}
