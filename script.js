let counts = setInterval(updated);
let upto =0;
function updated(){
    var count= document.getElementById("counter");
    count.innerHTML=++upto;
    if(upto===956)
    {
        clearInterval(counts);
    }
}

function myMenu(){
  document.getElementById("menuList").style.display = "block"
  }
  myMenu();

function hide(){
  document.getElementById("menuList").style.display = "none";
  //alert("leave now");
  }
  hide();




// anychart.onDocumentReady(function() {

//   // set the data
//   var data = [
//       {x: "Coding", value: 316},
//       {x: "Non-coding", value: 198}

//   ];
//   //,exploded: true
//   // create the chart
//   var chart = anychart.pie();
  
//   // set the chart title
//   chart.title("Count of Coding and Non-coding intake");
  
//   // sort elements
//   chart.sort("desc");
//   // add the data
//   chart.data(data);
//   // set legend position
//   chart.legend().position("right");
//   // set items layout
//   chart.legend().itemsLayout("vertical");
  
//   // display the chart in the container
//   chart.container('total');
//   chart.draw();
  
//   });


















// anychart.onDocumentReady(function() {

//   // set the data
//   var data = {
//       header: ["Name", "Month"],
//       rows: [
//         ["Lagos",	132],
//         ["Ogun",	26],
//         ["Osun",	53],
//         ["Kwara",	22],
//         ["FCT",	8],
//         ["Malaysia", 1],
//         ["KSA",	1],
//         ["Rivers", 5],
//         ["Ghana",	1],
//         ["Oyo",	31],
//         ["Bauchi",	1],
//         ["Kaduna",	4],
//         ["Kano",	4],
//         ["Njadema",	1],
//         ["Kogi",	1],
//         ["Benue",	1],
//         ["Edo",	6],
//         ["Enugu",	1],
//         ["Zamfara",	1],
//         ["Ekiti",	2],
//         ["Kenya",	1],
//         ["Sokoto",	2],
//         ["Delta",	1],
//         ["Ondo",	9]
        
//   ],
//   backgroundColor: ["red", "blue", "green", "blue", "red"]
// };

//   // create the chart
//   chart = anychart.column();
  
//   // add the data
//   chart.data(data);

//   // set the chart title
//   chart.title("Coding Mentees Residential Area");

//   // draw
//   chart.container("resident");
//   chart.draw();
// });


// anychart.onDocumentReady(function() {

//   // set the data
//   var data = {
//       header: ["Name", "Month"],
//       rows: [
//         ["Lagos",	53],
//         ["Ogun",	16],
//         ["Osun",	47],
//         ["Kwara",	12],
//         ["FCT",	4],
//         ["Warrington",	1],
//         ["Borno",	2],
//         ["Rivers",	5],
//         ["Akwa Ibom",	3],
//         ["Oyo",	27],
//         ["Benue",	1],
//         ["Kaduna",	7],
//         ["Kano",	2],
//         ["Katsina",	2],
//         ["Kogi",	3],
//         ["Imo",	1],
//         ["Edo",	1],
//         ["Zamfara",	1],
//         ["Ekiti",	1],
//         ["Niger",	2],
//         ["Sokoto",	1],
//         ["Delta",	2],
//         ["Ondo",	8]
//   ]};

//   // create the chart
//   chart = anychart.column();
  
//   // add the data
//   chart.data(data);

//   // set the chart title
//   chart.title("Non-Coding Mentees Residential Area");

//   // draw
//   chart.container("resident-noncoding");
//   chart.draw();
// });

// anychart.onDocumentReady(function() {

//   // set the data
//   var data = [
//       {x: "Male coding", value: 307},
//       {x: "Female Coding", value: 140},
//       {x: "Male Non-coding", value: 307},
//       {x: "Female Non-coding", value: 140}

//   ];
//   //,exploded: true
//   // create the chart
//   var chart = anychart.pie();
  
//   // set the chart title
//   chart.title("Gender count of mentees from both pathway(Coding and Noncoding)");
  
//   // sort elements
//   chart.sort("desc");
//   // add the data
//   chart.data(data);
//   // set legend position
//   chart.legend().position("right");
//   // set items layout
//   chart.legend().itemsLayout("horizontal");
  
//   // display the chart in the container
//   chart.container('gender');
//   chart.draw();
  
//   });

//   anychart.onDocumentReady(function() {

//     // set the data
//     var data = {
//         header: ["Name", "Month"],
//         rows: [
//           ["Employed",	53],
//           ["Employed",	16],
//           ["Student",	53],
//           ["Student",	16],
//           ["Unemployed",	47],
//           ["Unemployed",	12]
//     ]};
  
//     // create the chart
//     chart = anychart.column();
    
//     // add the data
//     chart.data(data);
  
//     // set the chart title
//     chart.title("Employement status of Mentees on both pathway");
  
//     // draw
//     chart.container("container");
//     chart.draw();
//   });
  

//Donation tab===========================================================================
function showDiv(){
  // on click the donation details will be displayed
  document.getElementById("show-div").style.display = "block";
  
}
showDiv();

// hide donate tab------------------------------------------------
function hideDiv(){
  document.getElementById("show-div").style.display ="none";
    
  }
  
  hideDiv();
// var data = {
//   header: ["Name", "Death toll"],
//   rows: [
//     ["San-Francisco (1906)", 1500],
//     ["Messina (1908)", 87000],
//     ["Ashgabat (1948)", 175000],
//     ["Chile (1960)", 10000],
//     ["Tian Shan (1976)", 242000],
//     ["Armenia (1988)", 25000],
//     ["Iran (1990)", 50000]
// ]}
{/* <div id="container" style="width: 100%; height: 100%"></div>
<script>
    anychart.onDocumentReady(function() {

// set the data
var data = [
    {x: "Mobile Development", value: 2199995},
    {x: "Web Development", value: 3892931},
    {x: "Data Science", value: 2932248}
];
//,exploded: true
// create the chart
var chart = anychart.pie();

// set the chart title
chart.title("Learning Pathway: Area of Interest");

// sort elements
chart.sort("desc");
// add the data
chart.data(data);
// set legend position
chart.legend().position("right");
// set items layout
chart.legend().itemsLayout("vertical");

// display the chart in the container
chart.container('container');
chart.draw();

});
</script> */}
