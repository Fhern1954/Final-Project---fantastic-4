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

        

        data.forEach(item => {
            var row = tbody.append("tr");
            Object.entries(item).forEach(([key, value]) => {
                var cell = row.append("td");
                if (value) {
                    
                
                   
                // var chkbox = document.createElement('input');
                // chkbox.type = "checkbox";
                // chkbox.value = value;
                // chkbox.id = "chk" ;
                // chkbox.name = "chk" ;
                    var chkbox = cell.append("input");
                    chkbox.attr("value", value);
                    chkbox.attr("type", "checkbox");
                    chkbox.attr("id", value.replace("'", "").replace("*", "").replace("&", "").replaceAll(" ", "_"));
                    var label = cell.append("label");
                    label.attr("for", value);
                    label.text(value);
                }
                // chkbox.attr("type", "checkbox");
                // chkbox.attr("id", value);
                // cell.append(chkbox)
                // td.appendChild(chkbox);
                // cell.append(chkbox);
                // cell.text(value);
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

var finalingredients = [];

// features = [0,0,0,0,0,0,0]
// for user_input:
//     if user_input:
//         features[data[user_input]] = 1

// data = {
//     "cream": 1,
// }


function user_selections(){

    var user_selection = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    d3.json("data/just_ingredients.json").then((data) => { 
        var data = data["Ingredients"];

        console.log(data);
        Object.entries(data).forEach(([key, value]) => {
            console.log(d3.select("#" + value.replace("'", "").replace("*", "").replace("&", "").replaceAll(" ", "_")))
            // console.log(d3.select)
            if (d3.select("#" + value.replace("'", "").replace("*", "").replace("&", "").replaceAll(" ", "_")).property("checked")){
                console.log(key)
                user_selection[key] = 1
            }
        });

        console.log(user_selection);
        d3.json('http://127.0.0.1:5000/model', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user_selection)
        }).then(data => {
            console.log("Result: " + data.result)

            var body = d3.select('form')
            body.append("input")
                .attr('type','text')
                .attr('name','rating')
                .attr('value', data.result)
        });

    //     for (i = 0; i < data.length; i++) {
    //         console.log(data[i])
    //         if (d3.select("#(data[i])").checked);
    //             user_selection[data[i]] = 1
    // }
    })
    // + ' input[type="checkbox"]:checked
   
    // d3.json('http://127.0.0.1:5000/model', function(error, data){
    //     console.log(data)
    // })
    // .header("Content-Type", "application/json")
    // .send("POST", JSON.stringify({"data": user_selection}));
        
    // console.log(finalingredients);   

        }
 
function init() {

    
        buildingredienttable();
        // buildGraph();


}


init();



