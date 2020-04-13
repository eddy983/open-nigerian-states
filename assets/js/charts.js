//? POPULATION CHART

var barChartData = {
  labels: [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019"
  ],
  datasets: [
    {
      label: "Igbo",
      backgroundColor: "#009DE4",
      data: [3000000, 500000, 6000000, 7000000, 3000000, 5000000, 7000000, 9000000, 2000000]
    },
    {
      label: "Yoruba",
      backgroundColor: "#0164B3",
      data: [4000000, 7000000, 3000000, 6000000, 10000000, 7000000, 600000, 5000000, 3000000]
    },
    {
      label: "Hausa",
      backgroundColor: "#335073",
      data: [10000000, 7000000, 4000000, 600000, 9000000, 7000000, 8000000, 3000000, 2000000]
    },
    {
      label: "Others",
      backgroundColor: "#F5A84C",
      data: [6000000, 900000, 7000000, 3000000, 10000000, 7000000, 400000, 7000000, 5000000]
    }
  ]
};

var chartOptions = {
  responsive: true,
  legend: {
    position: "bottom"
  },
  title: {
    display: true,
    text: "Lagos Population By Ethnic Group, Annual (2019)"
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        callback: function (value, index, array) { return (value < 1000000) ? value / 1000 + 'K' : value / 1000000 + 'M'; }
      }
    }]
  }
}

window.onload = function () {
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "bar",
    data: barChartData,
    options: chartOptions
  });
};


//? POPULATION CHART

var ctx = document.getElementById('myChart');
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: data,
  options: options
});

data = {
  datasets: [{
    data: [10, 20, 30]
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'Red',
    'Yellow',
    'Blue'
  ]
};




// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',

//     // The data for our dataset
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45]
//         }]
//     },

//     // Configuration options go here
//     options: {}
// });

// let ctx = document.getElementById('myChart').getContext('2d');
// let labels = ['Pizza 🍕', 'Taco 🌮', 'Hot Dog 🌭', 'Sushi 🍣'];
// let colorHex = ['#FB3640', '#EFCA08', '#43AA8B', '#253D5B'];

// let myChart = new Chart(ctx, {
//   type: 'pie',
//   data: {
//     datasets: [{
//       data: [30, 10, 40, 20],
//       backgroundColor: colorHex
//     }],
//     labels: labels
//   },
//   options: {
//     responsive: true,
//     legend: {
//       position: 'bottom'
//     },
//     plugins: {
//       datalabels: {
//         color: '#fff',
//         anchor: 'end',
//         align: 'start',
//         offset: -10,
//         borderWidth: 2,
//         borderColor: '#fff',
//         borderRadius: 25,
//         backgroundColor: (context) => {
//           return context.dataset.backgroundColor;
//         },
//         font: {
//           weight: 'bold',
//           size: '10'
//         },
//         formatter: (value) => {
//           return value + ' %';
//         }
//       }
//     }
//   }
// })