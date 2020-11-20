// d3.json("../data/samples.json", function (data) {
//     console.log(data);
// });

// // function to call in the data from the samples.json File. 

// console.log(data);

// var names = data.map(row => row.names)
// console.log(names);

// var samples = data.map(row => row.samples)
// console.log(samples);

// var ids = samples[0].map(row => row.id)
// console.log(ids);
// var idTest = data.filter(id => { id.ids == "945" });
// console.log(idTest)

//--------------------------------Printing the Data---------------------------------
var test_4 = d3.keys(data[0]);
console.log(test_4)

var test_3 = d3.values(data[0]);
console.log(test_3)



// var test_5 = d3.keys(data[0]["names"]);
// console.log(test_5)

var names = d3.values(data[0]["names"]);
console.log(names)

// var test_7 = d3.keys(data[0]["samples"]);
// console.log(test_7)
// var test_8 = d3.values(data[0]["samples"]);
// console.log(test_8)

// var test_9 = d3.keys(data[0]["samples"][0]);
// console.log(test_9)
// var test_10 = d3.values(data[0]["samples"][0]);
// console.log(test_10)
//----------------------------------------------------------------------------------

//---------------------------------Sorting the Data---------------------------------
data.sort((a, b) => b[0]["samples"][1]["sample_values"] - a[0]["samples"][1]["sample_values"]);


//----------------------------------------------------------------------------------

//--------------------------------Printing the Data---------------------------------
var test_11 = d3.keys(data[0]["samples"][1]["sample_values"]);
// console.log(test_11)
// This will be the the x axis for hw01.png
var sampleValues = d3.values(data[0]["samples"][0]["sample_values"]);
// console.log(sampleValues)

var test_13 = d3.keys(data[0]["samples"][0]["otu_ids"]);
// console.log(test_13)
// This will be the the x axis for hw01.png
var OTUIds = d3.values(data[0]["samples"][0]["otu_ids"]);
// console.log(OTUIds)

var test_14 = d3.keys(data[0]["samples"][0]["otu_labels"]);
// console.log(test_14)
var OTULabels = data[0]["samples"][0]["otu_labels"]
// console.log(OTULabels)
//----------------------------------------------------------------------------------



//-----------------------------Slice the First 10 Objects----------------------------
var sampleValuesTop10 = data[0]["samples"][0]["sample_values"].slice(0, 10);
// console.log(sampleValuesTop10)
var OTUIdsTop10 = data[0]["samples"][0]["otu_ids"].slice(0, 10);
// console.log(OTUIdsTop10)
//----------------------------------------------------------------------------------

sampleValuesTop10.reverse();
OTUIdsTop10.reverse();

// console.log(x)
// console.log(y)

//------------------------------Creating the Bar Chart------------------------------
trace1 = {
    // x: d3.values(data[0]["samples"][10]["sample_values"]),
    // y: d3.values(data[0]["samples"][10]["otu_ids"]),
    x: sampleValuesTop10,
    y: OTUIdsTop10.map(row => "OTU" + row),
    type: "bar",
    name: "Bar Chart",
    text: data[0]["samples"][0]["otu_labels"],
    orientation: "h"
}

var data = [trace1];

var layout = {
    title: "Top 10 Samples Results",
    xaxis: {
        title: "Sample Values"
    },
    yaxis: {
        title: "Sample IDs",
        autorange: true,
    },
    margin: { t: 30, l: 150 }
}

Plotly.newPlot("bar", data, layout)
//----------------------------------------------------------------------------------

//-----------------------------Creating the Bubble Chart----------------------------
trace2 = {
    // x: d3.values(data[0]["samples"][10]["sample_values"]),
    // y: d3.values(data[0]["samples"][10]["otu_ids"]),
    x: OTUIds,
    y: sampleValues,
    mode: "markers",
    name: "Bubble Chart",
    text: OTULabels,
    marker: {
        size: sampleValues,
        color: OTUIds,
    }
}

var data = [trace2];

var layout = {
    title: "Bubble Chart",
    xaxis: {
        title: "Sample IDs"
    },
    yaxis: {
        title: "Sample Values",
        autorange: true,
    },
    // margin: { t: 30, l: 150 }
}

Plotly.newPlot("bubble", data, layout)
//----------------------------------------------------------------------------------

//---------------------------------Display Metadata---------------------------------
// HTML div tag ID = "sample-metadata"

trace2 = {
    // x: d3.values(data[0]["samples"][10]["sample_values"]),
    // y: d3.values(data[0]["samples"][10]["otu_ids"]),
    x: OTUIds,
    y: sampleValues,
    mode: "markers",
    name: "Bubble Chart",
    text: OTULabels,
    marker: {
        size: sampleValues,
        color: OTUIds,
    }
}

var data = [trace2];

var layout = {
    title: "Bubble Chart",
    xaxis: {
        title: "Sample IDs"
    },
    yaxis: {
        title: "Sample Values",
        autorange: true,
    }
}

Plotly.newPlot("bubble", data, layout)
//----------------------------------------------------------------------------------

//-----------------------Event Listener, Drop Down List Box ------------------------
// HTML div tag ID = "sample-metadata"


function optionChanged() {
    // console.log("You Changed Something.");

    var dropdown = d3.select("#selDataset");

    var dropdownVaule = dropdown.property("value");
    console.log(dropdownVaule);
}

//----------------------------------------------------------------------------------

//---------------------------Drop Down List Box Options ----------------------------
var dropdown = document.getElementById("selDataset"),
    arr = names;

for (var i = 0; i < arr.length; i++) {
    var option = document.createElement("option"),
        txt = document.createTextNode(arr[i]);
    option.appendChild(txt);
    option.setAttribute("value", arr[i]);
    dropdown.insertBefore(option, dropdown.lastChild);
}
//----------------------------------------------------------------------------------


//----------------------------------------------------------------------------------
// var dropdown = d3.select("#selDataset");
// var dropdownVaule = dropdown.property("value");

// var options = names;
// // console.log(names);

// dropdown.addEventListener("click", () => {
//     var options = names.map(name => `<option value= ${name}>${name}</option.`).join("\n")

//     select.innerHTML = options;
// })




// for (var i = 0; i < options.length; i++) {
//     var opt = options[i];
//     var el = d3.select("option");
//     el.textContent = opt;
//     el.value = opt;
//     d3.select(el);
// }
//----------------------------------------------------------------------------------


// //------from the tutor----------
// // var Idtest = data.filter(id => id.ids == 945);
// // console.log(Idtest);
// var result = Idtest[0];
// var result_2 = Object.values(data.names)
// // var result_2 = Object.entries(Idtest)
// console.log(result_2);

// // var Idtest = data.filter(id => { id.names == 945 });
// // console.log(Idtest);








// console.log(samples: "940");

// var sample_values = samples[0].map(row => row.sample_values)
// console.log(sample_values[10]);

// var id = sample_values.map(row => row.id)
// console.log(id);


// function selectID(id) {
//     return id.samples[0] === "945"
// }
// var Test = data.filter(selectID)
// --------OR the arrow function--------
// var Test = data.filter(id => { id.samples[0] = "945" })

// console.log(Test)