/* chart js canvas begins here */
/* Main chart section / cash in / cash out / net amount */
const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June'
    // 'July',
    // 'August',
    // 'September',
    // 'October',
    // 'November',
    // 'December'
  ];

const options = {
    animation:true,
    scales: {
        x: {
            ticks: {
                color: 'rgba(255,255,255,0.5)',
                font: {
                    size: 14,
                },
            },
            grid: {
                color:'rgba(255,255,255,0.09)',
            },
        },
        y: {
            ticks: {
                color: 'rgba(255,255,255,0.5)',
                font: {
                    size: 14,
                },
            },
            grid: {
                color:'rgba(255,255,255,0.09)',
            },
        },
    },
    plugins: {
        tooltip: {
            intersect:false,
            backgroundColor: '#fff',
            titleColor:'#000',
            bodyColor:'#000'
        },
        legend: {
            display: false,
        },
        
    },
    // plugins: [htmlLegendPlugin],
    elements: {
        point: {
            borderWidth:5,
        },
        line: {
            borderWidth:2,
            // tension:0.4
        }
    }
}
const data = {
    labels: MONTHS,
    datasets: [{
        data: [100,204,220,340,330,440],
        label: 'Cash Inflow',
        borderColor: 'rgba(170, 118, 255, 1)',
    },
    {
        data: [450,300,200,340,330,540],
        label: 'Cash Outflow',
        borderColor: 'rgba(254, 190, 21, 1)',
    },
    {
        data: [500,300,400,350,360,480],
        label: 'Net Amount',
        borderColor: 'rgba(25, 178, 254, 1)',
    }
]
}

const ctx = document.getElementById('myChart');
const myChart = new Chart(
    ctx,
        {
            type:'line',
            data,
            options
        }
)

// Customized HTML Legends for chart 
function checkbox() {
    const legend = document.getElementById('legend-container');
    myChart.data.datasets.forEach((dataset, index) => {
       // console.log(dataset);

    //checbox added here
    let checkbox = document.createElement('input');
    let container = document.createElement('div');
    checkbox.type = 'checkbox';
    checkbox.name = dataset.label;
    checkbox.value = index;
    checkbox.id = `dataset${index}`;
    checkbox.className = 'form-check-custom';
    checkbox.style.backgroundColor = dataset.borderColor;
    checkbox.style.borderColor = dataset.borderColor;
    checkbox.checked = true;
    // add label
    let label = document.createElement('label');
    label.htmlFor = `dataset${index}`;

    //console.log(dataset.borderColor);
    let labelText = document.createTextNode(dataset.label);
   
    label.appendChild(labelText);
    container.appendChild(checkbox);
    container.appendChild(label);
    legend.appendChild(container);
    })
}

function checkboxEffect(chart, element) {
    const index = element.target.value;
    //console.log(chart);
    if(chart.isDatasetVisible(index)) {
        chart.hide(index);
    } else {
        chart.show(index);
    }
};
checkbox();

const dataset0 = document.getElementById('dataset0');
const dataset1 = document.getElementById('dataset1');
const dataset2 = document.getElementById('dataset2');

dataset0.addEventListener('change', (e) => {
    checkboxEffect(myChart, e);
    if(dataset0.checked === false) {
       
        dataset0.style.backgroundColor = '#fff';
    } else {
        dataset0.style.backgroundColor = myChart.data.datasets[0].borderColor; 
    }
});
dataset1.addEventListener('change', (e) => {
    checkboxEffect(myChart, e)
    if(dataset1.checked === false) {
       
        dataset1.style.backgroundColor = '#fff';
    } else {
        dataset1.style.backgroundColor = myChart.data.datasets[1].borderColor; 
    }
});
dataset2.addEventListener('change', (e) => {
    checkboxEffect(myChart, e)
    if(dataset2.checked === false) {
       
        dataset2.style.backgroundColor = '#fff';
    } else {
        dataset2.style.backgroundColor = myChart.data.datasets[2].borderColor; 
    }
});


/* Min chart section / Income and expense summary ends here */

/* Cash out chart */

const cashoutoptions = {
    animation:true,
    animations: {
        radius: {
          duration: 400,
          easing: 'linear',
          loop: (context) => context.active
        }
      },
    hoverRadius: 10,
    hoverBackgroundColor: 'white',
    interaction: {
      mode: 'nearest',
      intersect: false,
      axis: 'x'
    },
    maintainAspectRatio: false,
    scales: {
        x: {
            display: false,
        },
        y: {
            display: false,
        //  ticks: {
        //     color: 'red',
        //     }
        },
        
    },
    elements: {
        point: {
            backgroundColor:'#fff',
            borderWidth: 3,
        },
        line: {
            borderWidth:2,
            tension:0.4,
            borderColor:'rgba(254, 190, 21, 1)',
        }
    },
    plugins: {
        tooltip: {
            intersect:false,
            backgroundColor: '#fff',
            titleColor:'#000',
            bodyColor:'#000'
        },
        legend: {
                display: false,
        },
        
    }
}
const cashoutdata = {
    labels: MONTHS,
    datasets: [{
        data: [320,319,321,322,324,320],
        label: '',
    }
]
}
const cashout = document.getElementById('my-chart-cashout');
const chartcashout = new Chart(
    cashout,
        {
            type:'line',
            data: cashoutdata,
            options: cashoutoptions
        }
)
/* cahsin chart begins here */
const cashinoptions = {
    animation:true,
    animations: {
        radius: {
          duration: 400,
          easing: 'linear',
          loop: (context) => context.active
        }
      },
    hoverRadius: 10,
    hoverBackgroundColor: 'white',
    interaction: {
      mode: 'nearest',
      intersect: false,
      axis: 'x'
    },
    maintainAspectRatio: false,
    scales: {
        x: {
            display: false,
        },
        y: {
            display: false,
        //  ticks: {
        //     color: 'red',
        //     }
        },
        
    },
    elements: {
        point: {
            backgroundColor:'#fff',
            borderWidth:5,
        },
        line: {
            borderWidth:2,
            tension:0.4,
            borderColor:'rgba(170, 118, 255, 1)',
        }
    },
    plugins: {
        tooltip: {
            intersect:false,
            backgroundColor: '#fff',
            titleColor:'#000',
            bodyColor:'#000'
        },
        legend: {
                display: false,
        },
    }
}
const cashindata = {
    labels: MONTHS,
    datasets: [{
        data: [320,300,330,350,350,310],
        label: '',
    }
]
}
const cashin = document.getElementById('my-chart-cashin');
const chartcashin = new Chart(
    cashin,
        {
            type:'line',
            data: cashindata,
            options: cashinoptions
        }
);
/* chart cashin ends here */

/* cost breakdown chart begins here */
const costoptions = {
    animation:true,
    borderWidth: 1,
    scales: {
        x: {
            display: false,
        },
        y: {
            display: false,
        //  ticks: {
        //     color: 'red',
        //     }
        },
        
    },
    plugins: {
        tooltip: {
            intersect:false,
            backgroundColor: '#fff',
            titleColor:'#000',
            bodyColor:'#000'
        },
        legend: {
                display: false,
        },
        title: {
            display: true,
            text: 'Total Expense'
        }
    }
}
const costdata = {
    labels: MONTHS,
    datasets: [{
        data: [320,300,330,350,350,310],
        label: '',
    }
]
}
const costbreak = document.getElementById('my-chart-doughnut');
const chartcost = new Chart(
    costbreak,
        {
            type:'doughnut',
            data: costdata,
            options: costoptions
        }
);
/* chart cashin ends here */