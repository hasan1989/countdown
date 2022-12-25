








setInterval(myFunction, 1000);

  function myFunction() {
    var inputshow = document.getElementById('outputfield');
    var input = document.getElementById('taskinput');
    var output = document.getElementById('demo');
    var x = document.getElementById("meeting-time").value;
    var date = Date.parse(x); // parse date as a Date object: TODO: Error handling -> sanitize the input
   
    var currentdate = new Date().getTime();
    var dif = date - currentdate;
    var sec = (dif / 1000);
    var floor = Math.floor(sec);
    var modsec = checkTime((floor % 60));
    var min = Math.floor((floor / 60));
    var modmin = checkTime((min % 60));
    var hr = checkTime(Math.floor((min/60))); 
    var modhr = checkTime((hr % 60));
    var day = checkTime(Math.floor(hr / 24))


    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }

    output.innerHTML = `${day} Day ${modhr} Hr ${modmin} Min ${modsec} Sec`
    inputshow.innerHTML = input.value;
  }
