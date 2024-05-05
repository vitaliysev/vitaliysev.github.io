var deadline = 'May 28 2024';
    initializeClock('information__clock', deadline);
    function getTimeRemaining(endtime){
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor( (t/1000) % 60 );
      var minutes = Math.floor( (t/1000/60) % 60 );
      var hours = Math.floor( (t/(1000*60*60)) % 24 );
      var days = Math.floor( t/(1000*60*60*24) );
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  function updateClock(){
    var t = getTimeRemaining(endtime);
    clock.innerHTML = 'Time before calculus exam <br/> days: ' + t.days + ', ' +
      'hours: '+ t.hours + ', ' + 'minutes: ' + t.minutes + ', ' + 'seconds: ' + t.seconds;
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  }
  updateClock(endtime);
  var timeinterval = setInterval(updateClock,1000);
}
