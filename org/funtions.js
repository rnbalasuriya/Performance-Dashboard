var categories = [];
var week1 = [];
var week2 = [];
var week3 = [];
var week4 = [];

var week1_hours = [];
var week2_hours = [];
var week3_hours = [];
var week4_hours = [];

var week1_real = [];
var week2_real = [];
var week3_real = [];
var week4_real = [];

var srph = [];
var week1_irph = [];
var week2_irph = [];
var week3_irph = [];
var week4_irph = [];

var coreVolume = [];

var coreVolumeW1 = 0;
var coreVolumeW2 = 0;
var coreVolumeW3 = 0;
var coreVolumeW4 = 0;

var corePr = [];
var corePrW1 = 0;
var corePrW2 = 0;
var corePrW3 = 0;
var corePrW4 = 0;

var coreFd = [];
var coreFdW1 = 0;
var coreFdW2 = 0;
var coreFdW3 = 0;
var coreFdW4 = 0;

var coreDPr = [];
var coreDPrW1 = 0;
var coreDPrW2 = 0;
var coreDPrW3 = 0;
var coreDPrW4 = 0;



function buildCharts() {

$.ajax({
    url: spreadsheetUrl,
    jsonp: 'doData',
    dataType: 'jsonp'
});
    
}

function buildChartsPer() {

$.ajax({
    url: spreadsheetUrlPerformance,
    jsonp: 'doDataPer',
    dataType: 'jsonp'
});
    
}


function buildChartsPerMonth() {

$.ajax({
    url: spreadsheetUrlMonthlyPerformance,
    jsonp: 'doDataPerMonth',
    dataType: 'jsonp'
});
    
}


$('#member').change(function () {
    var optionSelected = $(this).find("option:selected");
	memberSelected = optionSelected.val();
    buildCharts();
	 
 });
 
 
 $('#task').change(function () {
    var optionSelected = $(this).find("option:selected");
	taskSelected = optionSelected.val();
    buildCharts();
	 
 });
 
 $('#month').change(function () {
    var optionSelected = $(this).find("option:selected");
	monthSelected = optionSelected.val();
    buildCharts();
	 
 });
 
 
 $('#year').change(function () {
    var optionSelected = $(this).find("option:selected");
	yearSelected = optionSelected.val();
    buildCharts();
	 
 });
 
 
 $('#member_per').change(function () {
    var optionSelected = $(this).find("option:selected");
	memberSelected = optionSelected.val();
    buildChartsPer();
	buildChartsPerMonth();
	 
 });
 
 
 
 $('#month_per').change(function () {
    var optionSelected = $(this).find("option:selected");
	monthSelected = optionSelected.val();
    buildChartsPer();
	buildChartsPerMonth();
	 
 });
 
 
 $('#year_per').change(function () {
    var optionSelected = $(this).find("option:selected");
	yearSelected = optionSelected.val();
    buildChartsPer();
	buildChartsPerMonth();
	 
 });


function doData(data) {
	
    var results = [];
    var entries = data.feed.entry;
    var previousRow = 0;

    for (var i = 0; i < entries.length; i++) {
        var latestRow = results[results.length - 1];


        var cell = entries[i];


        var text = cell.content.$t;

        var row = cell.gs$cell.row;


        if (row > previousRow) {

            var newRow = [];


            newRow.push(text);

            results.push(newRow);


            previousRow++;
        } else {

            latestRow.push(text);
        }

    }

    handleResults(results);
}


function doDataPer(data) {
	
    var results = [];
    var entries = data.feed.entry;
    var previousRow = 0;

    for (var i = 0; i < entries.length; i++) {
        var latestRow = results[results.length - 1];


        var cell = entries[i];


        var text = cell.content.$t;

        var row = cell.gs$cell.row;


        if (row > previousRow) {

            var newRow = [];


            newRow.push(text);

            results.push(newRow);


            previousRow++;
        } else {

            latestRow.push(text);
        }

    }

    handleResultsPer(results);
}


function doDataPerMonth(data) {
	
    var results = [];
    var entries = data.feed.entry;
    var previousRow = 0;

    for (var i = 0; i < entries.length; i++) {
        var latestRow = results[results.length - 1];


        var cell = entries[i];


        var text = cell.content.$t;

        var row = cell.gs$cell.row;


        if (row > previousRow) {

            var newRow = [];


            newRow.push(text);

            results.push(newRow);


            previousRow++;
        } else {

            latestRow.push(text);
        }

    }

    handleResultsPerMonth(results);
}


function handleResults(spreadsheetData) {
	
categories = [];
week1 = [];
week2 = [];
week3 = [];
week4 = [];

week1_hours = [];
week2_hours = [];
week3_hours = [];
week4_hours = [];

week1_real = [];
week2_real = [];
week3_real = [];
week4_real = [];

srph = [];
week1_irph = [];
week2_irph = [];
week3_irph = [];
week4_irph = [];

coreVolume = [];
coreVolumeW1 = 0;
coreVolumeW2 = 0;
coreVolumeW3 = 0;
coreVolumeW4 = 0;

	
	
	var spreadsheetArray = [];
	
	//arr.filter(item => item.indexOf('RANDY') !== -1 && item.indexOf('string 2') !== -1);
	
	var uniqueNames = [];
	
	var spreadsheetArrayTemp = [];
	
	for (i = 0; i < spreadsheetData.length; i++) {
		var temp = {
			
			"TASK":spreadsheetData[i][0],
			"WEEK":spreadsheetData[i][1],
			"VAL1":spreadsheetData[i][2],
			"VAL2":spreadsheetData[i][3],
			"VAL3":spreadsheetData[i][4],
			"VAL4":spreadsheetData[i][5],
			"VAL5":spreadsheetData[i][6],
			"MONTH":spreadsheetData[i][7],
			"YEAR":spreadsheetData[i][8],
			"NAME":spreadsheetData[i][9]
		
		};
        
		
		spreadsheetArrayTemp.push(temp);

    }
	
	var agrObj;
	
	
	
	if(taskSelected!=="" && monthSelected!=="" && yearSelected!=="" && memberSelected!==""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.TASK=='"+taskSelected+"'")
						.Where("$.MONTH==='"+monthSelected+"'")
						.Where("$.YEAR==='"+yearSelected+"'")
						.Where("$.NAME==='"+memberSelected+"'")
						.ToArray();
	}
	else if(taskSelected!=="" && monthSelected!=="" && yearSelected!=="" && memberSelected===""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.TASK=='"+taskSelected+"'")
						.Where("$.MONTH==='"+monthSelected+"'")
						.Where("$.YEAR==='"+yearSelected+"'")
						
						.ToArray();
	}
	else if(taskSelected!=="" && monthSelected!=="" && yearSelected==="" && memberSelected!==""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.TASK=='"+taskSelected+"'")
						.Where("$.MONTH==='"+monthSelected+"'")
						
						.Where("$.NAME==='"+memberSelected+"'")
						.ToArray();
	}
	else if(taskSelected!=="" && monthSelected!=="" && yearSelected==="" && memberSelected===""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.TASK=='"+taskSelected+"'")
						.Where("$.MONTH==='"+monthSelected+"'")
						
						.ToArray();
	}
	
	else if(taskSelected!=="" && monthSelected==="" && yearSelected!=="" && memberSelected!==""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.TASK=='"+taskSelected+"'")
						
						.Where("$.YEAR==='"+yearSelected+"'")
						.Where("$.NAME==='"+memberSelected+"'")
						.ToArray();
	}
	else if(taskSelected!=="" && monthSelected==="" && yearSelected!=="" && memberSelected===""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.TASK=='"+taskSelected+"'")
						
						.Where("$.YEAR==='"+yearSelected+"'")
						
						.ToArray();
	}
	else if(taskSelected!=="" && monthSelected==="" && yearSelected==="" && memberSelected!==""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.TASK=='"+taskSelected+"'")
						
						.Where("$.NAME==='"+memberSelected+"'")
						.ToArray();
	}
	else if(taskSelected!=="" && monthSelected==="" && yearSelected==="" && memberSelected===""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.TASK=='"+taskSelected+"'")
						
						.ToArray();
	}
	
	else if(taskSelected==="" && monthSelected!=="" && yearSelected!=="" && memberSelected!==""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						
						.Where("$.MONTH==='"+monthSelected+"'")
						.Where("$.YEAR==='"+yearSelected+"'")
						.Where("$.NAME==='"+memberSelected+"'")
						.ToArray();
	}
	else if(taskSelected==="" && monthSelected!=="" && yearSelected!=="" && memberSelected===""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						
						.Where("$.MONTH==='"+monthSelected+"'")
						.Where("$.YEAR==='"+yearSelected+"'")
						
						.ToArray();
	}
	else if(taskSelected==="" && monthSelected!=="" && yearSelected==="" && memberSelected!==""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						
						.Where("$.MONTH==='"+monthSelected+"'")
						
						.Where("$.NAME==='"+memberSelected+"'")
						.ToArray();
	}
	else if(taskSelected==="" && monthSelected!=="" && yearSelected==="" && memberSelected===""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.MONTH==='"+monthSelected+"'")
						.ToArray();
	}
	
	else if(taskSelected==="" && monthSelected==="" && yearSelected!=="" && memberSelected!==""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.YEAR==='"+yearSelected+"'")
						.Where("$.NAME==='"+memberSelected+"'")
						.ToArray();
	}
	else if(taskSelected==="" && monthSelected==="" && yearSelected!=="" && memberSelected===""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.YEAR==='"+yearSelected+"'")
						
						.ToArray();
	}
	else if(taskSelected==="" && monthSelected==="" && yearSelected==="" && memberSelected!==""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.NAME==='"+memberSelected+"'")
						.ToArray();
	}
	else if(taskSelected==="" && monthSelected==="" && yearSelected==="" && memberSelected===""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.ToArray();
		
	}
	
	
				
	

	for (i = 0; i < agrObj.length; i++) {
		
		temNext=[];
		temNext.push(agrObj[i]["TASK"]);
		temNext.push(agrObj[i]["WEEK"]);
		temNext.push(parseFloat(agrObj[i]["VAL1"]));
		temNext.push(parseFloat(agrObj[i]["VAL2"]));
		temNext.push(parseFloat(agrObj[i]["VAL3"]));
		temNext.push(parseFloat(agrObj[i]["VAL4"]));
		temNext.push(parseFloat(agrObj[i]["VAL5"]));
		temNext.push(agrObj[i]["MONTH"]);
		temNext.push(agrObj[i]["YEAR"]);
		temNext.push(agrObj[i]["NAME"]);
		
		spreadsheetArray.push(temNext);
	}	
	
	//console.log(spreadsheetArray);

    for (i = 0; i < spreadsheetData.length; i++) {
        uniqueNames.push(spreadsheetData[i][0]);

    }

    $.each(uniqueNames, function(i, el) {
        if ($.inArray(el, categories) === -1) {
            categories.push(el);

        }
    });
	
	
	

    for (j = 0; j < categories.length; j++) {

		var srphData = 0;
        var week1Push = 0;
        var week1Hours = 0;
        var week1Real = 0;
        var week1Irph = 0;

        var week2Push = 0;
        var week2Hours = 0;
        var week2Real = 0;
        var week2Irph = 0;

        var week3Push = 0;
        var week3Hours = 0;
        var week3Real = 0;
        var week3Irph = 0;

        var week4Push = 0;
        var week4Hours = 0;
        var week4Real = 0;
        var week4Irph = 0;

        for (i = 0; i < spreadsheetArray.length; i++) {

            if (categories[j] === spreadsheetArray[i][0]) {

                if (spreadsheetArray[i][1] === "Week 1") {

                    week1Push = week1Push + parseFloat(spreadsheetArray[i][2]);
                    week1Hours = week1Hours + parseFloat(spreadsheetArray[i][3]);
                    week1Real = week1Real + parseFloat(spreadsheetArray[i][4]);
                    week1Irph = week1Irph + parseFloat(spreadsheetArray[i][5]);
					srphData = parseFloat(spreadsheetArray[i][6]);

                }

                if (spreadsheetArray[i][1] === "Week 2") {
                    week2Push = week2Push + parseFloat(spreadsheetArray[i][2]);
                    week2Hours = week2Hours + parseFloat(spreadsheetArray[i][3]);
                    week2Real = week2Real + parseFloat(spreadsheetArray[i][4]);
                    week2Irph = week2Irph + parseFloat(spreadsheetArray[i][5]);
                }

                if (spreadsheetArray[i][1] === "Week 3") {
                    week3Push = week3Push + parseFloat(spreadsheetArray[i][2]);
                    week3Hours = week3Hours + parseFloat(spreadsheetArray[i][3]);
                    week3Real = week3Real + parseFloat(spreadsheetArray[i][4]);
                    week3Irph = week3Irph + parseFloat(spreadsheetArray[i][5]);
                }

                if (spreadsheetArray[i][1] === "Week 4") {
                    week4Push = week4Push + parseFloat(spreadsheetArray[i][2]);
                    week4Hours = week4Hours + parseFloat(spreadsheetArray[i][3]);
                    week4Real = week4Real + parseFloat(spreadsheetArray[i][4]);
                    week4Irph = week4Irph + parseFloat(spreadsheetArray[i][5]);
                }


            }




        }

		//var volTemp = [];
		//volTemp["name"]=categories[j];
		//volTemp["y"]= week1Push + week2Push + week3Push + week4Push;
		
		var volTemp = {
			name: categories[j],
			y: week1Push + week2Push + week3Push + week4Push
		};
		
		coreVolumeW1 = coreVolumeW1 + week1Push;
		coreVolumeW2 = coreVolumeW2 + week2Push;
		coreVolumeW3 = coreVolumeW3 + week3Push;
		coreVolumeW4 = coreVolumeW4 + week4Push;
		
		coreVolume.push(volTemp);

        week4.push(parseFloat(week4Push));
        week4_hours.push(parseFloat(week4Hours));
        week4_real.push(parseFloat(week4Real));
        week4_irph.push(parseFloat(week4Irph));

        week1.push(parseFloat(week1Push));
        week1_hours.push(parseFloat(week1Hours));
        week1_real.push(parseFloat(week1Real));
        week1_irph.push(parseFloat(week1Irph));

        week2.push(parseFloat(week2Push));
        week2_hours.push(parseFloat(week2Hours));
        week2_real.push(parseFloat(week2Real));
        week2_irph.push(parseFloat(week2Irph));

        week3.push(parseFloat(week3Push));
        week3_hours.push(parseFloat(week3Hours));
        week3_real.push(parseFloat(week3Real));
        week3_irph.push(parseFloat(week3Irph));
		
		srph.push(parseFloat(srphData));



    }

    getCharts("");
	$('#cW1').html(coreVolumeW1);
	$('#cW2').html(coreVolumeW2);
	$('#cW3').html(coreVolumeW3);
	$('#cW4').html(coreVolumeW4);
	
	// Set core data cards
	
}


function handleResultsPer(spreadsheetData) {
	
categories = [];
week1 = [];
week2 = [];
week3 = [];
week4 = [];

week1_hours = [];
week2_hours = [];
week3_hours = [];
week4_hours = [];

week1_real = [];
week2_real = [];
week3_real = [];
week4_real = [];

week1_irph = [];
week2_irph = [];
week3_irph = [];
week4_irph = [];

coreVolume = [];
coreVolumeW1 = 0;
coreVolumeW2 = 0;
coreVolumeW3 = 0;
coreVolumeW4 = 0;

corePr = [];
corePrW1 = 0;
corePrW2 = 0;
corePrW3 = 0;
corePrW4 = 0;

coreFd = [];
coreFdW1 = 0;
coreFdW2 = 0;
coreFdW3 = 0;
coreFdW4 = 0;

coreDPr = [];
coreDPrW1 = 0;
coreDPrW2 = 0;
coreDPrW3 = 0;
coreDPrW4 = 0;

	
	
	var spreadsheetArray = [];
	
	//arr.filter(item => item.indexOf('RANDY') !== -1 && item.indexOf('string 2') !== -1);
	
	var uniqueNames = [];
	
	var spreadsheetArrayTemp = [];
	
	for (i = 0; i < spreadsheetData.length; i++) {
		var temp = {
			
			"NAME":spreadsheetData[i][0],
			"VAL1":spreadsheetData[i][1],
			"VAL2":spreadsheetData[i][2],
			"VAL3":spreadsheetData[i][3],
			"VAL4":spreadsheetData[i][4],
			"WEEK":spreadsheetData[i][5],
			"MONTH":spreadsheetData[i][6],
			"YEAR":spreadsheetData[i][7]
			
		
		};
        
		
		spreadsheetArrayTemp.push(temp);

    }
	
	var agrObj;
	
	
	
	if(monthSelected!=="" && yearSelected!=="" && memberSelected!==""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.MONTH==='"+monthSelected+"'")
						.Where("$.YEAR==='"+yearSelected+"'")
						.Where("$.NAME==='"+memberSelected+"'")
						.ToArray();
	}
	
	else if(monthSelected!=="" && yearSelected!=="" && memberSelected!==""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						
						.Where("$.MONTH==='"+monthSelected+"'")
						.Where("$.YEAR==='"+yearSelected+"'")
						.Where("$.NAME==='"+memberSelected+"'")
						.ToArray();
	}
	else if(monthSelected!=="" && yearSelected!=="" && memberSelected===""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						
						.Where("$.MONTH==='"+monthSelected+"'")
						.Where("$.YEAR==='"+yearSelected+"'")
						
						.ToArray();
	}
	else if(monthSelected!=="" && yearSelected==="" && memberSelected!==""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						
						.Where("$.MONTH==='"+monthSelected+"'")
						
						.Where("$.NAME==='"+memberSelected+"'")
						.ToArray();
	}
	else if(monthSelected!=="" && yearSelected==="" && memberSelected===""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.MONTH==='"+monthSelected+"'")
						.ToArray();
	}
	
	else if(monthSelected==="" && yearSelected!=="" && memberSelected!==""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.YEAR==='"+yearSelected+"'")
						.Where("$.NAME==='"+memberSelected+"'")
						.ToArray();
	}
	else if(monthSelected==="" && yearSelected!=="" && memberSelected===""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.YEAR==='"+yearSelected+"'")
						
						.ToArray();
	}
	else if(monthSelected==="" && yearSelected==="" && memberSelected!==""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.NAME==='"+memberSelected+"'")
						.ToArray();
	}
	else if(monthSelected==="" && yearSelected==="" && memberSelected===""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.ToArray();
		
	}
	
	console.log(agrObj);
				
	

	for (i = 0; i < agrObj.length; i++) {
		
		temNext=[];
		temNext.push(agrObj[i]["NAME"]);
		temNext.push(agrObj[i]["WEEK"]);
		temNext.push(parseFloat(agrObj[i]["VAL1"]));
		temNext.push(parseFloat(agrObj[i]["VAL2"]));
		temNext.push(parseFloat(agrObj[i]["VAL3"]));
		temNext.push(parseFloat(agrObj[i]["VAL4"]));
		temNext.push(agrObj[i]["MONTH"]);
		temNext.push(agrObj[i]["YEAR"]);
		
		
		spreadsheetArray.push(temNext);
	}	
	
	console.log(spreadsheetArray);

    for (i = 0; i < spreadsheetData.length; i++) {
        uniqueNames.push(spreadsheetData[i][0]);

    }

    $.each(uniqueNames, function(i, el) {
        if ($.inArray(el, categories) === -1) {
            categories.push(el);

        }
    });
	
	
	

    for (j = 0; j < categories.length; j++) {

        var week1Push = 0;
        var week1Hours = 0;
        var week1Real = 0;
        var week1Irph = 0;

        var week2Push = 0;
        var week2Hours = 0;
        var week2Real = 0;
        var week2Irph = 0;

        var week3Push = 0;
        var week3Hours = 0;
        var week3Real = 0;
        var week3Irph = 0;

        var week4Push = 0;
        var week4Hours = 0;
        var week4Real = 0;
        var week4Irph = 0;

        for (i = 0; i < spreadsheetArray.length; i++) {
			
			console.log(categories[j]);

            if (categories[j] === spreadsheetArray[i][0]) {

                if (spreadsheetArray[i][1] === "Week 1") {

                    week1Push = week1Push + parseFloat(spreadsheetArray[i][2]);
                    week1Hours = week1Hours + parseFloat(spreadsheetArray[i][3]);
                    week1Real = week1Real + parseFloat(spreadsheetArray[i][4]);
                    week1Irph = week1Irph + parseFloat(spreadsheetArray[i][5]);

                }

                if (spreadsheetArray[i][1] === "Week 2") {
                    week2Push = week2Push + parseFloat(spreadsheetArray[i][2]);
                    week2Hours = week2Hours + parseFloat(spreadsheetArray[i][3]);
                    week2Real = week2Real + parseFloat(spreadsheetArray[i][4]);
                    week2Irph = week2Irph + parseFloat(spreadsheetArray[i][5]);
                }

                if (spreadsheetArray[i][1] === "Week 3") {
                    week3Push = week3Push + parseFloat(spreadsheetArray[i][2]);
                    week3Hours = week3Hours + parseFloat(spreadsheetArray[i][3]);
                    week3Real = week3Real + parseFloat(spreadsheetArray[i][4]);
                    week3Irph = week3Irph + parseFloat(spreadsheetArray[i][5]);
                }

                if (spreadsheetArray[i][1] === "Week 4") {
                    week4Push = week4Push + parseFloat(spreadsheetArray[i][2]);
                    week4Hours = week4Hours + parseFloat(spreadsheetArray[i][3]);
                    week4Real = week4Real + parseFloat(spreadsheetArray[i][4]);
                    week4Irph = week4Irph + parseFloat(spreadsheetArray[i][5]);
                }


            }




        }

		//var volTemp = [];
		//volTemp["name"]=categories[j];
		//volTemp["y"]= week1Push + week2Push + week3Push + week4Push;
		
		var volTemp = {
			name: categories[j],
			y: week1Push + week2Push + week3Push + week4Push
		};
		
		var prTemp = {
			name: categories[j],
			y: week1Hours + week2Hours + week3Hours + week4Hours
		};
		
		var fdTemp = {
			name: categories[j],
			y: week1Real + week2Real + week3Real + week4Real
		};
		
		var dprTemp = {
			name: categories[j],
			y: week1Irph + week2Irph + week3Irph + week4Irph
		};
		
		coreVolumeW1 = coreVolumeW1 + week1Push;
		coreVolumeW2 = coreVolumeW2 + week2Push;
		coreVolumeW3 = coreVolumeW3 + week3Push;
		coreVolumeW4 = coreVolumeW4 + week4Push;
		
		coreVolume.push(volTemp);
		
		
		corePrW1 = corePrW1 + week1Hours;
		corePrW2 = corePrW2 + week2Hours;
		corePrW3 = corePrW3 + week3Hours;
		corePrW4 = corePrW4 + week4Hours;
		
		
	
		corePr.push(prTemp);
		

		
		coreFdW1 = coreFdW1 + week1Real;
		coreFdW2 = coreFdW2 + week2Real;
		coreFdW3 = coreFdW3 + week3Real;
		coreFdW4 = coreFdW4 + week4Real;
		
		coreFd.push(fdTemp);

		
		coreDPrW1 = coreDPrW1 + week1Irph;
		coreDPrW2 = coreDPrW2 + week2Irph;
		coreDPrW3 = coreDPrW3 + week3Irph;
		coreDPrW4 = coreDPrW4 + week4Irph;
		
		coreDPr.push(dprTemp);

        week4.push(parseFloat(week4Push));
        week4_hours.push(parseFloat(week4Hours));
        week4_real.push(parseFloat(week4Real));
        week4_irph.push(parseFloat(week4Irph));

        week1.push(parseFloat(week1Push));
        week1_hours.push(parseFloat(week1Hours));
        week1_real.push(parseFloat(week1Real));
        week1_irph.push(parseFloat(week1Irph));

        week2.push(parseFloat(week2Push));
        week2_hours.push(parseFloat(week2Hours));
        week2_real.push(parseFloat(week2Real));
        week2_irph.push(parseFloat(week2Irph));

        week3.push(parseFloat(week3Push));
        week3_hours.push(parseFloat(week3Hours));
        week3_real.push(parseFloat(week3Real));
        week3_irph.push(parseFloat(week3Irph));



    }

    getChartsPer("");
	$('#PcW1').html(coreVolumeW1);
	$('#PcW2').html(coreVolumeW2);
	$('#PcW3').html(coreVolumeW3);
	$('#PcW4').html(coreVolumeW4);
	
	// Set core data cards
	
}




function handleResultsPerMonth(spreadsheetData) {
	
	categories = [];


	var spreadsheetArray = [];
	
	
	var uniqueNames = [];
	
	var spreadsheetArrayTemp = [];
	
	for (i = 0; i < spreadsheetData.length; i++) {
		var temp = {
			
			"NAME":spreadsheetData[i][0],
			"VAL":spreadsheetData[i][1],
			"MONTH":spreadsheetData[i][2],
			"YEAR":spreadsheetData[i][3]
			
		
		};
        
		
		spreadsheetArrayTemp.push(temp);

    }
	
	var agrObj;
	
	
	
	if(monthSelected!=="" && yearSelected!=="" && memberSelected!==""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.MONTH==='"+monthSelected+"'")
						.Where("$.YEAR==='"+yearSelected+"'")
						.Where("$.NAME==='"+memberSelected+"'")
						.ToArray();
	}
	
	else if(monthSelected!=="" && yearSelected!=="" && memberSelected!==""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						
						.Where("$.MONTH==='"+monthSelected+"'")
						.Where("$.YEAR==='"+yearSelected+"'")
						.Where("$.NAME==='"+memberSelected+"'")
						.ToArray();
	}
	else if(monthSelected!=="" && yearSelected!=="" && memberSelected===""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						
						.Where("$.MONTH==='"+monthSelected+"'")
						.Where("$.YEAR==='"+yearSelected+"'")
						
						.ToArray();
	}
	else if(monthSelected!=="" && yearSelected==="" && memberSelected!==""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						
						.Where("$.MONTH==='"+monthSelected+"'")
						
						.Where("$.NAME==='"+memberSelected+"'")
						.ToArray();
	}
	else if(monthSelected!=="" && yearSelected==="" && memberSelected===""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.MONTH==='"+monthSelected+"'")
						.ToArray();
	}
	
	else if(monthSelected==="" && yearSelected!=="" && memberSelected!==""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.YEAR==='"+yearSelected+"'")
						.Where("$.NAME==='"+memberSelected+"'")
						.ToArray();
	}
	else if(monthSelected==="" && yearSelected!=="" && memberSelected===""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.YEAR==='"+yearSelected+"'")
						
						.ToArray();
	}
	else if(monthSelected==="" && yearSelected==="" && memberSelected!==""){
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.NAME==='"+memberSelected+"'")
						.ToArray();
	}
	else if(monthSelected==="" && yearSelected==="" && memberSelected===""){
		
		
		var curDate = new Date();
		var month = new Array();
		month[0] = "January";
		month[1] = "February";
		month[2] = "March";
		month[3] = "April";
		month[4] = "May";
		month[5] = "June";
		month[6] = "July";
		month[7] = "August";
		month[8] = "September";
		month[9] = "October";
		month[10] = "November";
		month[11] = "December";
		
		console.log(month[curDate.getMonth()].toUpperCase());
		console.log(curDate.getFullYear());
		
		agrObj = Enumerable.From(spreadsheetArrayTemp)
						.Where("$.MONTH==='"+month[curDate.getMonth()].toUpperCase()+"'")
						.Where("$.YEAR==='"+curDate.getFullYear()+"'")
						.ToArray();
		
	}
	
	console.log(agrObj);
				
	

	for (i = 0; i < agrObj.length; i++) {
		
		temNext=[];
		temNext.push(agrObj[i]["NAME"]);
		temNext.push(parseFloat(agrObj[i]["VAL"]));
		temNext.push(agrObj[i]["MONTH"]);
		temNext.push(agrObj[i]["YEAR"]);
		
		
		spreadsheetArray.push(temNext);
	}	
	
	console.log(spreadsheetArray);

    for (i = 0; i < spreadsheetData.length; i++) {
        uniqueNames.push(spreadsheetData[i][0]);

    }

    $.each(uniqueNames, function(i, el) {
        if ($.inArray(el, categories) === -1) {
            categories.push(el);

        }
    });
	
	
	var perBox = '';
	

    for (j = 0; j < categories.length; j++) {
		
		var userData = 0;
		
		perBox += '<div class="w3-col w3-container" style="width:16%">'+
			  
								  '<div class="w3-card-2 w3-center w3-round-xlarge">'+

								'<header class="w3-container w3-blue">'+
								  '<h3>'+categories[j]+'</h3>'+
								'</header>';
								
								perBox += '<div class="w3-container w3-padding" style="height:50px">';

        for (i = 0; i < spreadsheetArray.length; i++) {
			
			console.log(categories[j]);
			
			

            if (categories[j] === spreadsheetArray[i][0]) {

                
                    userData = userData + parseFloat(spreadsheetArray[i][1]);
                    
					perBox += '<p>'+ userData.toFixed(2) +' %</p>';

            }

			

        }
		
		perBox += '</div>';
		
		perBox += '</div>'+
								  
				'</div>';
		


    }
	
	$('#perBox').html(perBox);
 
	
}


function getChartsPer(name) {
	
	
   
    var dataArrV = [{
        name: 'Week 1',
        data: week1
    }, {
        name: 'Week 2',
        data: week2
    }, {
        name: 'Week 3',
        data: week3
    }, {
        name: 'Week 4',
        data: week4
    }];

    console.log(dataArrV);

    var dataArrPr = [{
        name: 'Week 1',
        data: week1_hours

    }, {
        name: 'Week 2',
        data: week2_hours

    }, {
        name: 'Week 3',
        data: week3_hours

    }, {
        name: 'Week 4',
        data: week4_hours

    }];

    console.log(dataArrPr);

    var dataArrFD = [{
        name: 'Week 1',
        data: week1_real
    }, {
        name: 'Week 2',
        data: week2_real
    }, {
        name: 'Week 3',
        data: week3_real
    }, {
        name: 'Week 4',
        data: week4_real
    }];

    console.log(dataArrFD);

    var dataArrDPr = [{
        name: 'Week 1',
        data: week1_irph
    }, {
        name: 'Week 2',
        data: week2_irph
    }, {
        name: 'Week 3',
        data: week3_irph
    }, {
        name: 'Week 4',
        data: week4_irph
    }];
	
	console.log(dataArrDPr);
	
	Highcharts.theme = {
	"colors": [
"#41B5E9",
"#FA8832",
"#059296",
"#EF5350",
"#CDDC39",
"#827717",
"#bf0063",
"#607D8B",
"#82B1FF",
"#FFCA28",
"#1B5E20",
"#FF80AB",
"#CE93D8",
"#8C9EFF",
"#EEFF41",
"#F9A825"
],
"chart": {
"style": {
"fontFamily": "Roboto",
"color": "#666666",
"backgroundColor": "#dddddd"
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
        valueSuffix: ' ',
		shared: true
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
    series: dataArrV
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
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
		shared: true
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
        data: coreVolume
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
        valueSuffix: ' ',
		shared: true
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
    series: dataArrPr
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
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
		shared: true
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
        data: corePr
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
        valueSuffix: ' ',
		shared: true
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
    series: dataArrDPr
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
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
		shared: true
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
        data: coreDPr
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
        valueSuffix: ' ',
		shared: true
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
    series: dataArrFD
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
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
		shared: true
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
	credits: {
        enabled: false
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
        data: coreFd
    }]
});

}


function getCharts(name) {

   
    var volumeData = [{
        name: 'Week 1',
        data: week1
    }, {
        name: 'Week 2',
        data: week2
    }, {
        name: 'Week 3',
        data: week3
    }, {
        name: 'Week 4',
        data: week4
    }];

    //console.log(volumeData);

    var hoursData = [{
        name: 'Week 1',
        data: week1_hours

    }, {
        name: 'Week 2',
        data: week2_hours

    }, {
        name: 'Week 3',
        data: week3_hours

    }, {
        name: 'Week 4',
        data: week4_hours

    }];

    ////console.log(hoursData);

    var realData = [{
        name: 'Week 1',
        data: week1_real
    }, {
        name: 'Week 2',
        data: week2_real
    }, {
        name: 'Week 3',
        data: week3_real
    }, {
        name: 'Week 4',
        data: week4_real
    }];

    ////console.log(realData);

    var irphData = [{
		type: 'column',
        name: 'Week 1',
        data: week1_irph
    }, {
		type: 'column',
        name: 'Week 2',
        data: week2_irph
    }, {
		type: 'column',
        name: 'Week 3',
        data: week3_irph
    }, {
		type: 'column',
        name: 'Week 4',
        data: week4_irph
    },
	{
        type: 'spline',
        name: 'SRPH',
        data: srph
        
    }
	];
	
	
	

    ////console.log(irphData);

    ////console.log(categories);
	
	Highcharts.theme = {
	"colors": [
"#41B5E9",
"#FA8832",
"#059296",
"#EF5350",
"#CDDC39",
"#827717",
"#bf0063",
"#607D8B",
"#82B1FF",
"#FFCA28",
"#1B5E20",
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
	
	Highcharts.chart('volume_pie_core', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Product Wise Volume'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
		shared: true
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
        data: coreVolume
    }]
});

    var volChart = Highcharts.chart('volume', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Volume Based Analysis ' + name
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: categories,
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
            valueSuffix: ' ',
			shared: true
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
        series: volumeData
    });

    ////console.log(volChart);

    Highcharts.chart('hours', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Hours Based Analysis ' + name
        },
        subtitle: {
            text: ''
        },

        credits: {
            enabled: false
        },

        xAxis: {
            categories: categories,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Hours'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: hoursData
    });


    Highcharts.chart('real', {

        title: {
            text: 'Real Time Spent Analysis ' + name
        },

        subtitle: {
            text: ''
        },

        yAxis: {
            title: {
                text: 'Total'
            }
        },
		tooltip: {
            valueSuffix: ' ',
			shared: true
        },

        xAxis: {
            categories: categories,
            crosshair: true
        },

        credits: {
            enabled: false
        },

        series: realData,

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });

    Highcharts.chart('irph', {
        title: {
            text: 'IRPH Analysis ' + name
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: categories,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'IRPH',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' ',
			shared: true
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
        series: irphData
    });


}

function get_json(url) {
    $.get(url, function(data, status) {
        ////console.log("Data: " + (data) + "\nStatus: " + status);
    });
}