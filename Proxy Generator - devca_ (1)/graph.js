// user order line
const xValues = ["Jan", "Feb", "Mar", "Apr", "May", "June"];
new Chart("myChart", {
type: "line",
data: {
labels: xValues,
datasets: [{
data:[300, 700, 2000, 500, 4000, 200],
borderColor: "#7D83FF", // Line color
fill: false
}]
},
options: {
legend: {
display: false
},
ticks: {
fontColor: "#F1F1F5" // Color of x-axis labels
},
scales: {
xAxes: [{
display: true, // Hide x-axis labels
gridLines: {
color: "#F1F1F5" // Color of x-axis grid lines

}
}],
yAxes: [{
display: false, // Hide y-axis labels and grid lines
gridLines: {
color: "#F1F1F5" // Color of y-axis grid lines
}
}],
},
}
});

// user-order round
const xlValues = ["Pending", "Completed"];
const yValues = [12,8];
const barColors = [
  "#7D83FF",
  "#BECDE4"
];

new Chart("myChart2", {
  type: "doughnut",
  data: {
    labels: xlValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  legend: {
    display: false,
  },
  options: {
    title: {
      display: true,
      // text: "text"
    },
    legend: {
      display: false
    }
  }
});

// user dashboard line
const xaValues = ["Jan", "Feb", "Mar", "Apr", "May", "June"];
new Chart("myChart-dashboard1", {
type: "line",
data: {
labels: xValues,
datasets: [{
data:[300, 700, 2000, 500, 4000, 200],
borderColor: "#7D83FF", // Line color
fill: false
}]
},
options: {
legend: {
display: false
},
ticks: {
fontColor: "#F1F1F5" 
},
scales: {
xAxes: [{
display: true, 
gridLines: {
color: "#F1F1F5" 
}
}],
yAxes: [{
display: false, 
gridLines: {
color: "#F1F1F5" 
}
}],
},
}
});
// user-dashboard round
const xbValues = ["Balance", "Total Spent" , "Bonus"];
const ybValues = [35, 60,40];
const barbColors = [
  "#00B795",
  "#FF7EAB",
  "#007FFF"
];

new Chart("myChart-dashboard2", {
  type: "doughnut",
  data: {
    labels: xbValues,
    datasets: [{
      backgroundColor: barbColors,
      data: ybValues
    }]
  },
  legend: {
    display: false,
  },
  options: {
    title: {
      display: true,
      // text: "text"
    },
    legend: {
      display: false
    }
  }
});
// user-proxy-generator round
const xcValues = ["Remaining", "Used" ];
const ycValues = [35, 60];
const barcColors = [
  "#FF8686",
  "#FFDBDB"
];

new Chart("myChart-generator", {
  type: "doughnut",
  data: {
    labels: xcValues,
    datasets: [{
      backgroundColor: barcColors,
      data: ycValues
    }]
  },
  legend: {
    display: false,
  },
  options: {
    title: {
      display: true,
      text: "5GB",
      fontColor: '#FF8686', 
      fontSize: 24,     
      fontWeight: '700'
    },
    legend: {
      display: false
    }
  }
});
// user-support round
const xdValues = ["Open", "Solved" ];
const ydValues = [35, 60];
const bardColors = [
  "#E6F8F1",
  "#00B795"
];

new Chart("myChart-support", {
  type: "doughnut",
  data: {
    labels: xcValues,
    datasets: [{
      backgroundColor: barcColors,
      data: ycValues
    }]
  },
  legend: {
    display: false,
  },
  options: {
    title: {
      display: true,
      text: "15",
      fontColor: '#FF8686', 
      fontSize: 24,     
      fontWeight: '700'
    },
    legend: {
      display: false
    }
  }
});

// user order line
const xwValues = ["JAN", "FAB", "MAR", "APR", "MAY", "JUNE" , "JUL" , "AUG" , "SEP" , "OCT" , "NOV" , "DEC"];
new Chart("walletTwo", {
type: "line",
data: {
labels: xwValues,
datasets: [{
data:["0", "100", "200", "300" ,"400"],
borderColor: "transparent", // Line color
fill: false
}]
},
options: {
legend: {
display: false
},
ticks: {
fontColor: "#F1F1F5" // Color of x-axis labels
},
scales: {
xAxes: [{
display: true, // Hide x-axis labels
gridLines: {
color: "#F1F1F5",
lineWidth: 7  // Color of x-axis grid lines

}
}],
yAxes: [{
display: true, // Hide y-axis labels and grid lines
gridLines: {
color: "transparent" // Color of y-axis grid lines
}
}],
},
}
});


// admin - user - acquisition round
const xuValues = ["Remaining", "Used" ];
const yuValues = [35, 60];
const baruColors = [
  "#00B795",
  "#8BF9E4"
];

new Chart("admin-aquisition", {
  type: "doughnut",
  data: {
    labels: xuValues,
    datasets: [{
      backgroundColor: baruColors,
      data: yuValues
    }]
  },
  legend: {
    display: false,
  },
  options: {
    title: {
      display: true,
      text: "170",
      fontColor: '#FFFFE8', 
      fontSize: 24,     
      fontWeight: '700'
    },
    legend: {
      display: false
    }
  }
});
// admin-order round
const xvValues = ["Open", "Solved" ];
const yvValues = [35, 60];
const barvColors = [
  "#BECDE4",
  "#7D83FF"
];

new Chart("admin-order", {
  type: "doughnut",
  data: {
    labels: xvValues,
    datasets: [{
      backgroundColor: barvColors,
      data: yvValues
    }]
  },
  legend: {
    display: false,
  },
  options: {
    title: {
      display: true,
      text: "58",
      fontColor: '#FFFFE8', 
      fontSize: 24,     
      fontWeight: '700'
    },
    legend: {
      display: false
    }
  }
});


// user dashboard line
const xValuesuk = ["Jan", "Feb", "Mar", "Apr", "May", "June"];
new Chart("uk", {
type: "line",
data: {
labels: xValues,
datasets: [{
data:[300, 700, 2000, 500, 4000, 200],
borderColor: "rgba(0, 183, 149, 0.8)", 
      backgroundColor: "rgba(0, 183, 149, 0.2)",
fill: true
}]
},
options: {
legend: {
display: false
},
ticks: {
fontColor: "#F1F1F5" 
},
scales: {
xAxes: [{
display: false, 
gridLines: {
color: "rgba(0, 183, 149, 1)" 
}
}],
yAxes: [{
display: false, 
gridLines: {
color: "rgba(0, 183, 149, 1)" 
}
}],
},
}
});
// user dashboard line
const xValuesuae = ["Jan", "Feb", "Mar", "Apr", "May", "June"];
new Chart("uae", {
type: "line",
data: {
labels: xValues,
datasets: [{
data:[300, 700, 2000, 500, 4000, 200],
borderColor: "rgba(0, 183, 149, 0.8)", 
      backgroundColor: "rgba(0, 183, 149, 0.2)",
fill: true
}]
},
options: {
legend: {
display: false
},
ticks: {
fontColor: "#F1F1F5" 
},
scales: {
xAxes: [{
display: false, 
gridLines: {
color: "rgba(0, 183, 149, 1)" 
}
}],
yAxes: [{
display: false, 
gridLines: {
color: "rgba(0, 183, 149, 1)" 
}
}],
},
}
});
// user dashboard line
const xValuesusa = ["Jan", "Feb", "Mar", "Apr", "May", "June"];
new Chart("usa", {
type: "line",
data: {
labels: xValues,
datasets: [{
data:[300, 700, 2000, 500, 4000, 200],
borderColor: "rgba(0, 183, 149, 0.8)", 
      backgroundColor: "rgba(0, 183, 149, 0.2)",
fill: true
}]
},
options: {
legend: {
display: false
},
ticks: {
fontColor: "#F1F1F5" 
},
scales: {
xAxes: [{
display: false, 
gridLines: {
color: "rgba(0, 183, 149, 1)" 
}
}],
yAxes: [{
display: false, 
gridLines: {
color: "rgba(0, 183, 149, 1)" 
}
}],
},
}
});
// user dashboard line
const xValuesger = ["Jan", "Feb", "Mar", "Apr", "May", "June"];
new Chart("ger", {
type: "line",
data: {
labels: xValues,
datasets: [{
data:[300, 700, 2000, 500, 4000, 200],
borderColor: "rgba(0, 183, 149, 0.8)", 
      backgroundColor: "rgba(0, 183, 149, 0.2)",
fill: true
}]
},
options: {
legend: {
display: false
},
ticks: {
fontColor: "#F1F1F5" 
},
scales: {
xAxes: [{
display: false, 
gridLines: {
color: "rgba(0, 183, 149, 1)" 
}
}],
yAxes: [{
display: false, 
gridLines: {
color: "rgba(0, 183, 149, 1)" 
}
}],
},
}
});
// user dashboard line
const xValuesindia = ["Jan", "Feb", "Mar", "Apr", "May", "June"];
new Chart("india", {
type: "line",
data: {
labels: xValues,
datasets: [{
data:[300, 700, 2000, 500, 4000, 200],
borderColor: "rgba(0, 183, 149, 0.8)", 
      backgroundColor: "rgba(0, 183, 149, 0.2)",
fill: true
}]
},
options: {
legend: {
display: false
},
ticks: {
fontColor: "#F1F1F5" 
},
scales: {
xAxes: [{
display: false, 
gridLines: {
color: "rgba(0, 183, 149, 1)" 
}
}],
yAxes: [{
display: false, 
gridLines: {
color: "rgba(0, 183, 149, 1)" 
}
}],
},
}
});
// user dashboard line
const xValuessinga = ["Jan", "Feb", "Mar", "Apr", "May", "June"];
new Chart("singa", {
type: "line",
data: {
labels: xValues,
datasets: [{
data:[300, 700, 2000, 500, 4000, 200],
borderColor: "rgba(0, 183, 149, 0.8)", 
      backgroundColor: "rgba(0, 183, 149, 0.2)",
fill: true
}]
},
options: {
legend: {
display: false
},
ticks: {
fontColor: "#F1F1F5" 
},
scales: {
xAxes: [{
display: false, 
gridLines: {
color: "rgba(0, 183, 149, 1)" 
}
}],
yAxes: [{
display: false, 
gridLines: {
color: "rgba(0, 183, 149, 1)" 
}
}],
},
}
});
// admin-dashboard1
// user dashboard line
const xmValues = ["Jan", "Feb", "Mar", "Apr", "May", "June"];
new Chart("admin-dashboard1", {
type: "line",
data: {
labels: xValues,
datasets: [{
data:[300, 700, 2000, 500, 4000, 200],
borderColor: "#7D83FF",
fill: false
}, 
{
  data: [1000, 1200, 800, 1500, 3000, 1000], 
  borderColor: "rgba(0, 183, 149, 0.8)", 
  fill: false
}

]
},
options: {
legend: {
display: false
},
ticks: {
fontColor: "#F1F1F5" 
},
scales: {
xAxes: [{
display: true, 
gridLines: {
color: "#F1F1F5" 
}
}],
yAxes: [{
display: false, 
gridLines: {
color: "#F1F1F5" 
}
}],
},
}
});