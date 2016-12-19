

var imageArray = [
    "http://68.media.tumblr.com/4624c1de92c16a9208fca21bd12b34e8/tumblr_nyo8q8Zkl81sey30ro1_500.jpg",
    "http://data.whicdn.com/images/229567859/large.jpg",
    "http://data.whicdn.com/images/229567892/large.jpg",
    "http://data.whicdn.com/images/218701166/large.jpg",
    "http://data.whicdn.com/images/229567827/large.jpg",
    "http://data.whicdn.com/images/227102304/large.jpg",
    "http://data.whicdn.com/images/216304100/large.jpg",
    "http://data.whicdn.com/images/215367700/large.jpg",
    "http://data.whicdn.com/images/215359370/large.jpg",
    "http://data.whicdn.com/images/215127444/large.gif",
    "http://data.whicdn.com/images/213312957/large.jpg",
    "http://data.whicdn.com/images/267322955/large.jpg",
    "http://data.whicdn.com/images/267016130/large.jpg",
  
  ];
  
  var currentIndex = 0;
  

  function renderImage() {
    
    if (currentIndex < 0) {
      
    currentIndex = imageArray.length - 1;
    } else if (currentIndex >= imageArray.length) {
      currentIndex = 0;
    }
    
    $('#thePhoto').attr('src', imageArray[currentIndex]);
  }
  renderImage();
  
  $('#forwardBtn').on('click', function(){
    //this is what happens when it's clicked!
    currentIndex++;
    renderImage();
    
  })
 
 renderImage();
 
 $('#backBtn').on('click', function(){
    currentIndex--;
    renderImage();
    
  });
  
  
 var question = prompt("What's your name?");
  var outputString = "Happy Holidays, " + name + "!";
  
    // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Person');
        data.addColumn('number', 'Cheerfulness');
        data.addRows([
          ['Gabriella', 75],
          ['Christina', 30],
          ['Juliana', 55],
          ['Lori', 20],
          ['Lou', 5]
        ]);

        // Set chart options
        var options = {
          
          'title':'Cheerfulness of My Family',
          'width':400,
          'height':300,
          'backgroundColor': '#8AC2DA',
          'colors': ['#0947BA'],
          'fontName': 'CandyCane',
          'fontSize': '14.5',
          
          
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
      
   
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);