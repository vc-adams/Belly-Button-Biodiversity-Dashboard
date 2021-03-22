// var names = data[0]["names"]
// console.log(Object.keys(data));
// console.log(data.map(row => row[1]));

// // var dates = data.dataset.data.map(row => row[0]);

// // console.log(dates)

// d3.json("data/samples.json").then(function (data) {
//     console.log(data);
// });



// function metadata(sample) {
//     d3.json("samples.json").then((data) => {
//         var jsonData = data.jsonData;
//         var metadataResults = jsonData.filter(objectSample => objectSample.id == sample);

//         var subjectMetadata = metadataResults[0];
//         console.log(subjectMetadata)
//     });
// }
// metadata(940)



// // // function to call in the data from the samples.json File. 

// // console.log(data);

// // var names = data.map(row => row.names)
// // console.log(names);

// // var samples = data.map(row => row.samples)
// // console.log(samples);

// // var ids = samples[0].map(row => row.id)
// // console.log(ids);
// // var idTest = data.filter(id => { id.ids == "945" });
// // console.log(idTest)
// var tableData = data;
// // console.log(Object.keys(data));
// // console.log(tableData)

// var tableData0 = tableData[0]
// // console.log(Object.keys(tableData0));
// // console.log(tableData0)

// var names = tableData[0]["names"]
// // console.log(Object.keys(names));
// // console.log(names)


// var samples = tableData[0]["samples"]//["id"]
// console.log(Object.keys(samples));
// console.log(samples)


// function dateFilter(names2) {
//     return names2.samples.id == "1253"
// };
// var userSelectedSubjectSampleValues = tableData.filter(dateFilter);
// console.log(sightingsFilteredList)

// // // //--------------------------------Testing Filter---------------------------------
// // let arr = [
// //     { id: 15 },
// //     { id: -1 },
// //     { id: 0 },
// //     { id: 3 },
// //     { id: 12.2 },
// //     {},
// //     { id: null },
// //     { id: NaN },
// //     { id: 'undefined' }
// // ]

// // let invalidEntries = 0

// // function filterByID(names) {
// //     if (names.id == "1253") {
// //         return true
// //     }
// //     invalidEntries++
// //     return false;
// // }

// // let arrByID = names.filter(filterByID)

// // console.log('Filtered Array\n', arrByID)
// // // Filtered Array
// // // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

// // console.log('Number of Invalid Entries = ', invalidEntries)
// // // Number of Invalid Entries = 5


//---------------------------Drop Down List Box Options ----------------------------
d3.json("data/samples.json").then((importedData) => {
    var dropdown = document.getElementById("selDataset");
    // var arr = subjectsIdNo;

    for (var i = 0; i < importedData.names.length; i++) {
        var option = document.createElement("option"),
            txt = document.createTextNode(importedData.names[i]);
        option.appendChild(txt);
        option.setAttribute("value", importedData.names[i]);
        dropdown.insertBefore(option, dropdown.lastChild);
    }
})

//----------------------------------------------------------------------------------
function app(selectedSubject) {
    d3.json("data/samples.json").then((importedData) => {
        var data = importedData;
        console.log(data);

        var subjectsIdNo = data.names;
        console.log("This is subjectsIdNo:")
        console.log(subjectsIdNo)

        //-------------------------------------Test-----------------------------------------
        // var test = "945"
        // console.log(test);

        console.log(selectedSubject);
        var selectedSubjectIdNo = selectedSubject.toString();
        console.log(selectedSubject);
        // var selectedSubjectIdNo = '"' + subjectIdNo + '"'
        // var selectedSubjectIdNo = selectedSubjectIdNo.toString();

        // console.log(selectedSubjectIdNo);
        var subjectIndexNo = data.samples.map(function (e) { return e.id; }).indexOf(selectedSubjectIdNo);
        console.log(subjectIndexNo);

        var subjectMetaData = data.metadata[subjectIndexNo];
        // console.log(Object.keys(metaData));
        // console.log(metaData)

        var subjectSampleValuesArray = data.samples[subjectIndexNo].sample_values;
        // console.log(Object.keys(subjectSampleValuesArray));
        // console.log(subjectSampleValuesArray)

        var subjectSampleOtuIdsArray = data.samples[subjectIndexNo].otu_ids;
        console.log(Object.keys(subjectSampleOtuIdsArray));
        console.log(subjectSampleOtuIdsArray)

        var subjectSampleOTULabelsArray = data.samples[subjectIndexNo].otu_labels;

        //----------------------------------------------------------------------------------

        //----------------------------------------------------------------------------------


        //---------------------------------Display Metadata---------------------------------
        // function displayMetadata(subjecetIndexNoMetadata) {
        var panelBody = d3.select("#sample-metadata");

        d3.selectAll("p").remove("p");

        panelBody.append("p").text(`ID: ${subjectMetaData.id}`);
        panelBody.append("p").text(`Ethnicity: ${subjectMetaData.ethnicity}`);
        panelBody.append("p").text(`Gender: ${subjectMetaData.gender}`);
        panelBody.append("p").text(`Age: ${subjectMetaData.age}`);
        panelBody.append("p").text(`Location: ${subjectMetaData.location}`);
        panelBody.append("p").text(`bbtype: ${subjectMetaData.bbtype}`);
        panelBody.append("p").text(`wfreq: ${subjectMetaData.wfreq}`);


        // }

        // for (var i = 0; i < arr.length; i++) {
        //     var option = document.createElement("option"),
        //         txt = document.createTextNode(arr[i]);
        //     option.appendChild(txt);
        //     option.setAttribute("value", arr[i]);
        //     dropdown.insertBefore(option, dropdown.lastChild);
        // }
        //----------------------------------------------------------------------------------


        //-------------------------------------Bar Chart------------------------------------
        //----------------------------Sorting the Data Decending----------------------------
        subjectSampleValuesArray.sort((a, b) => a - b).reverse();
        // OR
        // subjecetSamplesArray.sort((a, b) => b - a);

        //----------------------------------------------------------------------------------
        //----------------------------Slice the First 10 Objects----------------------------
        var subjectSampleValuesArrayTop10 = subjectSampleValuesArray.slice(0, 10);
        // var sampleValuesTop10 = data.samples[60].sample_values.slice(0, 10);
        console.log(subjectSampleValuesArrayTop10)

        var subjectSampleOtuIdsArrayTop10 = subjectSampleOtuIdsArray.slice(0, 10).map(OTUIds => `otu: ${OTUIds}`).reverse(); // data[0]["samples"][60]["otu_ids"].slice(0, 10);
        // var OTUIdsTop10 = data.samples[60].otu_ids.slice(0, 10).map(OTUIds => `otu: ${OTUIds}`).reverse(); // data[0]["samples"][60]["otu_ids"].slice(0, 10);
        console.log(subjectSampleOtuIdsArrayTop10)

        subjectSampleValuesArrayTop10.reverse();
        subjectSampleOtuIdsArrayTop10.reverse();
        //----------------------------------------------------------------------------------
        //------------------------------Creating the Bar Chart------------------------------

        // function buildBarChart(subjecetIndexNo) {
        trace1 = {
            // x: d3.values(data[0]["samples"][10]["sample_values"]),
            // y: d3.values(data[0]["samples"][10]["otu_ids"]),
            x: subjectSampleValuesArrayTop10,
            y: subjectSampleOtuIdsArrayTop10, //.map(row => "OTU" + row),
            type: "bar",
            name: "Bar Chart",
            text: subjectSampleOTULabelsArray,
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
        // }
        //----------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------


        //-----------------------------Creating the Bubble Chart----------------------------
        // function buildBubbleChart(subjecetIndexNo) {
        trace2 = {
            // x: d3.values(data[0]["samples"][10]["sample_values"]),
            // y: d3.values(data[0]["samples"][10]["otu_ids"]),
            x: subjectSampleOtuIdsArray,
            y: subjectSampleValuesArray,

            mode: "markers",
            name: "Bubble Chart",
            text: subjectSampleOTULabelsArray,
            marker: {
                size: subjectSampleValuesArray,
                color: subjectSampleOtuIdsArray,
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
        // }
        //----------------------------------------------------------------------------------
    })
}


// ----------------------- Event Listener, Drop Down List Box------------------------
// function optionChanged() {
//     // console.log("You Changed Something.");

//     dropdown = d3.select("#selDataset");
//     dropdownValue = dropdown.property("value");

//     console.log(dropdownValue);
// }
// var selection = ""
function optionChanged(selection) {
    console.log(selection);

    app(selection)
    // displayMetadata(subjecetIndexNoListener);
    // buildBarChart(subjecetIndexNoListener);
    // buildBubbleChart(subjecetIndexNoListener);
}

// console.log(sampleChosen);
// var subjecetIndexNo = data.samples.map(function (e) { return e.id; }).indexOf(sampleChosen);
// console.log(subjecetIndexNo);

//----------------------------------------------------------------------------------



// // // // ------------------------------------------------------------------------------------------------------------------------------------------------------------ // // // // 
// // TO SETUP AN INITIALIZE FUNCTION THAT'LL POPULATE THE DROPDOWN, SELECT A RANDOM DEFAULT ID AND CALL THE PLOT GRAPH AND METADATA FUNCTIONS TO POPULATE LANDING PAGE // // // // 
// // // // ----------------------------------------------------------------------------------------------------------------------------------------------------------- // // // //
function initialize() {
    var selector = d3.select('#selDataset');

    // d3.json("data/samples.json").then((bbData) => {

    //     var idNames = bbData.names;
    //     // console.log(idNames)

    //     idNames.forEach((sample) => {
    //         selector
    //             .append("option")
    //             .text(sample)
    //             .property("value", sample);
    //     });

    //     //         // Select a sample from your data and call your build charts and metadata functions.
    //     selectedID = idNames[Math.floor(Math.random() * idNames.length)]
    app(940)
    // plotGraphsLoop(selectedID)
    // metaDataSearchLoop(selectedID)
    // console.log(selectedID)

    // });
}

initialize()











// //--------------------------------Printing the Data---------------------------------
// data is coming from the .js file
// console.log(Object.keys(data));
// console.log(data);



// var eachSampleArray = data.samples.map(row => row[0]);
// console.log(eachSampleArray)

// var names = d3.values(data[0]["names"]);




// var test_7 = d3.keys(data[0]["samples"]);
// console.log(test_7)
// var test_8 = d3.values(data[0]["samples"]);
// console.log(test_8)

// var test_9 = d3.keys(data[0]["samples"][0]);
// console.log(test_9)
// var test_10 = d3.values(data[0]["samples"][0]);
// console.log(test_10)

// var test_15 = d3.values(data[0]["samples"][3]["sample_values"]);
// console.log(test_15)
//--------------------------------Printing the Data---------------------------------



//--------------------------------Variables for Plots----------------------------------
// var test_11 = d3.keys(data[0]["samples"][1]["sample_values"]);
// // console.log(test_11)
// This will be the the x axis for hw01.png
// var sampleValues = data.samples[0].sample_values;
// var sampleValues = d3.values(data[0]["samples"][0]["sample_values"]);
// console.log(sampleValues)

// var test_13 = d3.keys(data[0]["samples"][0]["otu_ids"]);
// // console.log(test_13)
// This will be the the y axis for hw01.png
// var OTUIdsD3 = d3.values(data.samples[60].otu_ids);
// var OTUIds = data.samples[0].otu_ids;
// console.log(OTUIdsD3)
// console.log(OTUIds)

// var test_14 = d3.keys(data[0]["samples"][0]["otu_labels"]);
// // console.log(test_14)
// var OTULabels = data.samples[0].otu_labels
// console.log(OTULabels)


//----------------------------------------------------------------------------------







// console.log(names)





    // // //--------------------------------------Filter--------------------------------------
    // // function userSelectedSubject(subject) {
    // //     return subject[0]["names"].value = "940"
    // // }



    // // var filteredToSubject = data.filter(userSelectedSubject)
    // // console.log(filteredToSubject)

    // // //----------------------------------------------------------------------------------




    // // //----------------------------------------------------------------------------------
    // // // var dropdown = d3.select("#selDataset");
    // // // var dropdownVaule = dropdown.property("value");

    // // // var options = names;
    // // // // console.log(names);

    // // // dropdown.addEventListener("click", () => {
    // // //     var options = names.map(name => `< option value = ${ name } > ${ name }</option.`).join("\n")

    // // //     select.innerHTML = options;
    // // // })




    // // // for (var i = 0; i < options.length; i++) {
    // // //     var opt = options[i];
    // // //     var el = d3.select("option");
    // // //     el.textContent = opt;
    // // //     el.value = opt;
    // // //     d3.select(el);
    // // // }
    // // //----------------------------------------------------------------------------------


    // // // //------from the tutor----------
    // // // // var Idtest = data.filter(id => id.ids == 945);
    // // // // console.log(Idtest);
    // // // var result = Idtest[0];
    // // // var result_2 = Object.values(data.names)
    // // // // var result_2 = Object.entries(Idtest)
    // // // console.log(result_2);

    // // // // var Idtest = data.filter(id => { id.names == 945 });
    // // // // console.log(Idtest);








    // // // console.log(samples: "940");

    // // // var sample_values = samples[0].map(row => row.sample_values)
    // // // console.log(sample_values[10]);

    // // // var id = sample_values.map(row => row.id)
    // // // console.log(id);


    // // // function selectID(id) {
    // // //     return id.samples[0] === "945"
    // // // }
    // // // var Test = data.filter(selectID)
    // // // --------OR the arrow function--------
    // // // var Test = data.filter(id => { id.samples[0] = "945" })

    // // // console.log(Test)


// d3.select("#selDataset").on("change", updatePage);
//     function updatePage(dropdownValue) {
//         console.log("you changed the dropdown to:")

//         var dropdown = d3.select("#selDataset");
//         var dropdownValue = dropdown.property("value");
//         console.log(dropdownValue);
//     }