
    const TimerPopUp = document.querySelector(".footer__timer-pop-up");
    const closeBtn = TimerPopUp.querySelector(".pop-up-close");
    closeBtn.addEventListener("click", closeForm);
    setTimeout(function(){
      if (!sessionStorage.getItem('popupClosed')){
	  TimerPopUp.style.visibility = 'visible';
	  TimerPopUp.style.opacity = '1';}
}, 30000);
    function closeForm() {
      sessionStorage.setItem('popupClosed', 'true');
      TimerPopUp.style.visibility = "hidden";
      TimerPopUp.style.opacity = '0';
    }