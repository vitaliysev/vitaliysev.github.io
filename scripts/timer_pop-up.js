
    const TimerPopUp = document.querySelector(".timer_pop-up");
    const closeBtn = TimerPopUp.querySelector(".form__close");
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