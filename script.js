anychart.onDocumentReady(function() {

  // set the data
  var data = {
      header: ["Name", "Month"],
      rows: [
        ["March", 150],
        ["May", 87],
        ["July", 175],
        ["October", 204]
  ]};

  // create the chart
  chart = anychart.column();
  
  // add the data
  chart.data(data);

  // set the chart title
  chart.title("Mentees we onboarded for the year 2022");

  // draw
  chart.container("container");
  chart.draw();
});
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