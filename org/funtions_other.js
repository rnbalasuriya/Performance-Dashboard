var categories_oth = [
		'Rangika', 
		'Hakeem', 
		'Stephi', 
		'Uneshka', 
		'Jason',
		'Fiyaza',
		'Shanojan'
		];

var volume;
var productivity;
var daily_productivity;
var feedback;


var dataArrFD =   [{
            name: 'Rangika',
            y: 0
        }, {
            name: 'Hakeem',
            y: 0
        }, {
            name: 'Stephi',
            y: 0
        }, {
            name: 'Uneshka',
            y: 0
        }, {
            name: 'Fiyaza',
            y: 0
        },
		{
            name: 'Jason',
            y: 0
        },
		{
            name: 'Shanojan',
            y: 0
        }];
	
var dataArrDPr = [{
            name: 'Rangika',
            y: 80.60
        }, {
            name: 'Hakeem',
            y: 75
        }, {
            name: 'Stephi',
            y: 94.13
        }, {
            name: 'Uneshka',
            y: 76.56
        }, {
            name: 'Fiyaza',
            y: 86.11
        },
		{
            name: 'Jason',
            y: 72.27
        },
		{
            name: 'Shanojan',
            y: 39.65
        }];	
		
  var dataArrPr = [{
            name: 'Rangika',
            y: 32.24
        }, {
            name: 'Hakeem',
            y: 18
        }, {
            name: 'Stephi',
            y: 30.12
        }, {
            name: 'Uneshka',
            y: 36.75
        }, {
            name: 'Fiyaza',
            y: 20.67
        },
		{
            name: 'Jason',
            y: 23.13
        },
		{
            name: 'Shanojan',
            y: 12.69
        }];
		
  var dataArrV = [{
            name: 'Rangika',
            y: 273
        }, {
            name: 'Hakeem',
            y: 146
        }, {
            name: 'Stephi',
            y: 538.5
        }, {
            name: 'Uneshka',
            y: 552.5
        }, {
            name: 'Fiyaza',
            y: 186
        },
		{
            name: 'Jason',
            y: 1003
        },
		{
            name: 'Shanojan',
            y: 571
        }];

function getAllOther(){
	
	volume = [273,146,538.5,552.5,186,1003,571];
	productivity = [32.24,18,30.12,36.75,20.67,23.13,12.69];
	daily_productivity = [80.60,75,94.13,76.56,86.11,72.27,39.65];
	feedback = [0,0,0,0,0,0,0];
	
	getChartsOther();
} 



function getChartsOther(){
	
	//var x = document.getElementById("DemoOther");
	//x.className = x.className.replace(" w3-show", "");
	
	Highcharts.theme = {
	"colors": [
"#41B5E9",
"#FA8832",
"#059296",
"#EF5350",
"#0097A7",
"#00BFA5",
"#F57F17",
"#82B1FF",
"#FFCA28",
"#FF5252",
"#FF80AB",
"#CE93D8",
"#8C9EFF",
"#EEFF41",
"#F9A825"
],
"chart": {
"style": {
"fontFamily": "Roboto",
"color": "#666666"
}
},
"title": {
"align": "left",
"style": {
"fontFamily": "Roboto Condensed",
"fontWeight": "bold"
}
},
"subtitle": {
"align": "left",
"style": {
"fontFamily": "Roboto Condensed"
}
},
"legend": {
"align": "right",
"verticalAlign": "bottom"
},
"xAxis": {
"gridLineWidth": 1,
"gridLineColor": "#F3F3F3",
"lineColor": "#F3F3F3",
"minorGridLineColor": "#F3F3F3",
"tickColor": "#F3F3F3",
"tickWidth": 1
},
"yAxis": {
"gridLineColor": "#F3F3F3",
"lineColor": "#F3F3F3",
"minorGridLineColor": "#F3F3F3",
"tickColor": "#F3F3F3",
"tickWidth": 1
},
"plotOptions": {
"line": {
"marker": {
"enabled": false
}
},
"spline": {
"marker": {
"enabled": false
}
},
"area": {
"marker": {
"enabled": false
}
},
"areaspline": {
"marker": {
"enabled": false
}
},
"arearange": {
"marker": {
"enabled": false
}
},
"bubble": {
"maxSize": "10%"
}
}
};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
	
	Highcharts.chart('volume_bar', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Volume Based Analysis '
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: categories_oth,
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Volume',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' '
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    
    credits: {
        enabled: false
    },
    series: [{
        name: 'Volume',
        data: volume
    }]
});



Highcharts.chart('volume_pie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Volume Based Analysis'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
	credits: {
        enabled: false
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true,
			innerSize: '60%'
        }
    },
    series: [{
        name: 'Volume',
        colorByPoint: true,
        data: dataArrV
    }]
});


	Highcharts.chart('productivity_bar', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Productivity Based Analysis '
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: categories_oth,
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Productivity',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' '
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    
    credits: {
        enabled: false
    },
    series: [{
        name: 'Productivity',
        data: productivity
    }]
});



Highcharts.chart('productivity_pie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Productivity Based Analysis'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
	credits: {
        enabled: false
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true,
			innerSize: '60%'
        }
    },
    series: [{
        name: 'Productivity',
        colorByPoint: true,
        data: dataArrPr
    }]
});


	Highcharts.chart('daily_productivity_bar', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Daily Productivity Based Analysis '
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: categories_oth,
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Productivity',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' '
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    
    credits: {
        enabled: false
    },
    series: [{
        name: 'Productivity',
        data: daily_productivity
    }]
});



Highcharts.chart('daily_productivity_pie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Daily Productivity Based Analysis'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
	credits: {
        enabled: false
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true,
			innerSize: '60%'
        }
    },
    series: [{
        name: 'Productivity',
        colorByPoint: true,
        data: dataArrDPr
    }]
});


	Highcharts.chart('feedback_bar', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Feedback Based Analysis '
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: categories_oth,
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Feedback',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' '
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    
    credits: {
        enabled: false
    },
    series: [{
        name: 'Feedback',
        data: feedback
    }]
});



Highcharts.chart('feedback_pie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Feedback Based Analysis'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true,
			innerSize: '60%'
        }
    },
    series: [{
        name: 'Feedback',
        colorByPoint: true,
        data: dataArrFD
    }]
});
	
	
}


