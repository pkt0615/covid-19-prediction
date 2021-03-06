function germany() {
    germany_data = new Data(covid_data, "Germany");
    germany_pred_data = new Data(pred_data, "Germany")

    var gbc = document.getElementById('germanyBarChart').getContext('2d');
    var glc = document.getElementById('germanyLineChart').getContext('2d');

    germany_pred_total_data = [germany_data.dataNumbers()[131]];
    for (i = 0; i < germany_pred_data.dataNumbers().length; i++) {
        germany_pred_total_data[i+1] = germany_pred_total_data[i] + germany_pred_data.dataNumbers()[i];
    }

    myChart = new Chart(gbc, {
        type: 'bar',
        data: {
            labels: germany_data.dataKeys().slice(131, 160),
            datasets: [
                {
                    label: '독일 총 확진자 수',
                    data: germany_data.dataNumbers().slice(131),
                    backgroundColor: 'rgba(221, 0, 0, 0.2)',
                    borderColor: 'rgba(221, 0, 0, 1)',
                    borderWidth: 1
                },
                {
                    label: '예측 총 확진자 수',
                    data: germany_pred_total_data,
                    backgroundColor: 'rgba(255, 206, 0, 0.2)',
                    borderColor: 'rgba(255, 206, 0, 1)',
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

    myLineChart = new Chart(glc, {
        type: 'line',
        data: {
            labels: germany_data.dataKeys().slice(131, 160),
            datasets: [
                {
                    label: '독일 전날 대비 확진자 증감',
                    data: germany_data.dataDailyNumbers().slice(131),
                    backgroundColor: 'rgba(221, 0, 0, 0.2)',
                    borderColor: 'rgba(221, 0, 0, 1)',
                    borderWidth: 1
                },
                {
                    label: '예측 전날 대비 확진자 증감',
                    data: germany_pred_data.dataNumbers(),
                    backgroundColor: 'rgba(255, 206, 0, 0.2)',
                    borderColor: 'rgba(255, 206, 0, 1)',
                    borderWidth: 1
                }
        ]
        }
    });
}