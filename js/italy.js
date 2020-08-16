function italy() {
    italy_data = new Data(covid_data, "Italy");
    italy_pred_data = new Data(pred_data, "Italy")

    var ibc = document.getElementById('italyBarChart').getContext('2d');
    var ilc = document.getElementById('italyLineChart').getContext('2d');

    italy_pred_total_data = [italy_data.dataNumbers()[131]];
    for (i = 0; i < italy_pred_data.dataNumbers().length; i++) {
        italy_pred_total_data[i+1] = italy_pred_total_data[i] + italy_pred_data.dataNumbers()[i];
    }

    myChart = new Chart(ibc, {
        type: 'bar',
        data: {
            labels: italy_data.dataKeys().slice(131, 160),
            datasets: [
                {
                    label: '이탈리아 총 확진자 수',
                    data: italy_data.dataNumbers().slice(131),
                    backgroundColor: 'rgba(206, 43, 55, 0.2)',
                    borderColor: 'rgba(206, 43, 55, 1)',
                    borderWidth: 1
                },
                {
                    label: '예측 총 확진자 수',
                    data: italy_pred_total_data,
                    backgroundColor: 'rgba(0, 146, 70, 0.2)',
                    borderColor: 'rgba(0, 146, 70, 1)',
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

    myLineChart = new Chart(ilc, {
        type: 'line',
        data: {
            labels: italy_data.dataKeys().slice(131, 160),
            datasets: [
                {
                    label: '이탈리아 전날 대비 확진자 증감',
                    data: italy_data.dataDailyNumbers().slice(131),
                    
                    backgroundColor: 'rgba(206, 43, 55, 0.2)',
                    borderColor: 'rgba(206, 43, 55, 1)',
                    borderWidth: 1
                },
                {
                    label: '예측 전날 대비 확진자 증감',
                    data: italy_pred_data.dataNumbers(),
                    backgroundColor: 'rgba(0, 146, 70, 0.2)',
                    borderColor: 'rgba(0, 146, 70, 1)',
                    borderWidth: 1
                }
        ]
        }
    });
}