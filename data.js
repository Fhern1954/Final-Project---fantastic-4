// d3.json("http://127.0.0.1:5000/countries", function(data) {
//     for (var i = 0; i < data.length; i++) {
//         console.log(data[i].country)
//     }
// })

function buildingredienttable() {
    // console.log(query_string)
    d3.json("http://127.0.0.1:5000/ingredients").then((data) => {
        console.log(data)

        var tableData = data;


        // Get a reference to the table body
        var tbody = d3.select("tbody");

        tbody.html("");

        var chkbox = document.createElement('input');
        chkbox.type = "checkbox";
        chkbox.id = "chk" ;
        chkbox.name = "chk" ;

        data.forEach(item => {
            var row = tbody.append("tr");
            Object.entries(item).forEach(([key, value]) => {
                
                var cell = row.append("td");
                // cell.append(chkbox)
                // td.appendChild(chkbox);
                // cell.append(chkbox);
                cell.text(value);
                // cell.Object(chkbox)
            });
        });
        // Object.entries(data => {
        //     console.log(data);
        //     var row = tbody.append("tr");
        //     Object.entries(data).forEach(([key, value]) => {
        //       var cell = row.append("td");
        //       cell.text(value);
        //     });

        // });    
    });
}

function buildGraph() {
    d3.json("http://127.0.0.1:5000/ingredient_count").then((data) => {
        console.log(data)
        var graphData = data;
        //Create lists to collect data to graph.
        var ingredients = [];
        var count = [];
       
        //Get data for the plots
        // for (var i = 0; i < data.length; i++) {
        //     if (graphData[i]..split(" ")[1]) {
        //         cost.push(graphData[i].budget.split(" ")[1]);
        //     }else{cost.push(0)}
        //     if (graphData[i].worldwide_gross_income.split(" ")[1]){
        //         revenue.push(graphData[i].worldwide_gross_income.split(" ")[1]);
        //     }else{revenue.push(0)}
        //     labels.push(graphData[i].title);
        // }
        // console.log(cost);
        // console.log(revenue);
        // console.log(labels);
        // var trace1 = {
        //     x: labels,
        //     y: cost,
        //     type: 'bar',
        //     name: 'Cost',
        //     width: 0.5,
        //     marker: {
        //         color: 'red'
        //     }
        // }
        // var trace2 = {
        //     x: labels,
        //     y: revenue,
        //     type: 'bar',
        //     name: 'Revenue',
        //     width: 1.0,
        //     marker: {
        //         opacity: 0.5,
        //         color: 'green'
        //     }
        // }
        // var barLayout = {
        //     title: 'Financial Performance',
        //     font:{family:'Arial bold',size:12,backgroundcolor:'#867E7E'},            
        //     xaxis: {
        //         tickangle: -45,
        //     },
        //     barmode: 'overlay'
        // };
        // var barData = [trace2, trace1];
        // Plotly.newPlot("bar", barData, barLayout);
    }
    )
}


// function optionChanged(filter_type, value) {
//     //Check the value of each options
//     var c_dropdown = d3.select("#selcountryDataset");
//     var g_dropdown = d3.select("#selgenreDataset");
//     var startyear_dropdown = d3.select("#selstartyearDataset");
//     var endyear_dropdown = d3.select("#selendyearDataset");
//     query_string = "?"
//     //if value exists, build query string
//     if (c_dropdown.property("value") && c_dropdown.property("value") != "All") {
//         country = c_dropdown.property("value");
//         query_string = query_string + "country=" + country + "&"
//     }
//     if (g_dropdown.property("value") && g_dropdown.property("value") != "All") {
//         genre = g_dropdown.property("value");
//         query_string = query_string + "genre=" + genre + "&"
//     }
//     if (startyear_dropdown.property("value")) {
//         startyear = startyear_dropdown.property("value");
//         query_string = query_string + "startyear=" + startyear + "&"
//     }
//     if (endyear_dropdown.property("value")) {
//         endyear = endyear_dropdown.property("value");
//         query_string = query_string + "endyear=" + endyear
//     }
//     // query_string="?"
//     // if country:
//     // query_string = query_string + "country=" + country + "&"
//     // if genre:
//     //query_string = query_string + "genre=" + genre + "&" 
//     // buildingredienttable(query_string);
//     // buildGraph(query_string);
//     // buildMap(query_string);
//     // getDemoInfo(id);
// }

function init() {

    
        buildingredienttable();
        buildGraph();


}


init();



