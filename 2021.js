anychart.onDocumentReady(function() {

    // set the data
    var data = [
        {x: "Mobile App Development", value: 106 },
        {x: "Data Science", value: 174},
        {x: "Web Development", value: 223}
  
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
    chart.container('total');
    chart.draw();
    
    });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  anychart.onDocumentReady(function() {
  
    // set the data
    var data = {
        header: ["Name", "Month"],
        rows: [
          ["Lagos",	165],
          ["Ogun",	46],
          ["Osun",	82],
          ["Kwara",	35],
          ["FCT",	25],
          ["Rivers", 4],
          ["Oyo",	90],
          ["Kano",	7],
          ["Niger",	7],
          ["Edo",	3],
          ["Enugu",  2],
          ["Malaysia", 4],
          ["Ebonyi",  1],
          ["Abia",    2],
          ["Katsina", 2],
          ["Kogi",    2],
          ["Wales",  2],
          ["Plateau",  2],
          ["Adamawa",  1],
          ["Anambra",  1],
          ["Glasgow",  1],
          ["Delta",    2],
          ["Saudi",    1],
          ["Akwa Ibom", 1],
          ["Kebbi",    1],
          ["Gombe",    1],
          ["Zamfara",  1,]
          ["Kaduna",  3],
          ["Ondo",	5]
          
    ],
    backgroundColor: ["red", "blue", "green", "blue", "red"]
  };
  
    // create the chart
    chart = anychart.column();
    
    // add the data
    chart.data(data);
  
    // set the chart title
    chart.title("Location Of Mentees");
  
    // draw
    chart.container("location");
    chart.draw();
  });
  
  
  anychart.onDocumentReady(function() {
  
    // set the data
    var data = {
        header: ["Name", "Month"],
        rows: [
          ["BSC",	248],
          ["Post Graduate",	42],
          ["SSCE",	96],
          ["NCE",	9],
          ["OND",	34],
          ["HND",	39],
          ["Undergraduate",	14],
          ["B Tech",	1],
          ["Masters",	1]
    ]};
  
    // create the chart
    chart = anychart.column();
    
    // add the data
    chart.data(data);
  
    // set the chart title
    chart.title("Mentees Highest Academic Qualifications");
  
    // draw
    chart.container("academic qualification");
    chart.draw();
  });
  
  anychart.onDocumentReady(function() {
  
    // set the data
    var data = [
        {x: "Male", value: 312},
        {x: "Female", value: 191}
  
    ];
    //,exploded: true
    // create the chart
    var chart = anychart.pie();
    
    // set the chart title
    chart.title("Gender Count Of Mentees");
    
    // sort elements
    chart.sort("desc");
    // add the data
    chart.data(data);
    // set legend position
    chart.legend().position("right");
    // set items layout
    chart.legend().itemsLayout("horizontal");
    
    // display the chart in the container
    chart.container('gender');
    chart.draw();
    
    });
  
    anychart.onDocumentReady(function() {
  
      // set the data
      var data = {
          header: ["Name", "Month"],
          rows: [
            ["Employed",	123],
            ["Student",	    173],
            ["Unemployed",  207]
      ]};
    
      // create the chart
      chart = anychart.column();
      
      // add the data
      chart.data(data);
    
      // set the chart title
      chart.title("Employement Status Of Mentees");
    
      // draw
      chart.container("container");
      chart.draw();
    });
    
  
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
  