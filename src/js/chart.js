(function () {
    var options = {
        series: [32, 56, 34, 77],
        chart: {
            type: "donut",
            with: 300
        },
        legend: {
            show: true,
            position: 'bottom'
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "85%",
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontWeight: 400,
                            offsetY: 20,
                            color: undefined,
                        },
                        value: {
                            show: true,
                            fontSize: '28px',
                            fontWeight: 600,
                            offsetY: -20,
                            color: undefined,
                            formatter: function (val) {
                                return val
                            }
                        },
                        total: {
                            show: true,
                            label: 'Proyek Tahun Ini',
                            color: '#696974',
                            fontWeight: 400,
                            fontSize: 14,
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b
                                }, 0)
                            }
                        }
                    }
                },
            },
        },
        labels: ["Provinsi", "Lokasi", "Kota", "Proyek"],
        colors: ["#1565D8", "#FFC542", "#FF6D00", "#3DD598"],
    };
    var chart = document.querySelector("#top-device");

    if (chart != null) {
        new ApexCharts(chart, options).render();
    }
})();
(function () {
    var options = {
        series: [
        {
          name: "High - 2013",
          data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
          name: "Low - 2013",
          data: [12, 11, 14, 18, 17, 13, 13]
        }
      ],
        chart: {
        height: 350,
        type: 'line',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      colors: ['#77B6EA', '#545454'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 1
      },
      title: {
        text: 'Pertumbuhan Sub Komunitas',
        align: 'left'
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      markers: {
        size: 8
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        title: {
          text: 'Month'
        }
      },
      yaxis: {
        title: {
          text: 'Temperature'
        },
        min: 5,
        max: 40
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
      };

    var chart = document.querySelector("#performance-by-day");

    if (chart != null) {
        new ApexCharts(chart, options).render();
    }
})();