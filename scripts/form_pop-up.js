    const popUpHolder = document.querySelector(".form_pop-up");
    const openFormBtn = document.querySelector(".form-button");
    const closeFormBtn = popUpHolder.querySelector(".form__close");
    const form = document.querySelector(".holder");
    let fields = form.querySelectorAll('.form__input');
    openFormBtn.addEventListener("click", openForm);
    closeFormBtn.addEventListener("click", closeForm);
    const submitBtn = document.querySelector(".subscribe-button");
    let title = popUpHolder.querySelector(".text");
    let container = document.querySelector(".form_container");

    function closeForm() {
      var errors = form.querySelectorAll('.error')

      for (var i = 0; i < errors.length; i++) {
        errors[i].remove()
      }
      for (var i = 0; i < fields.length; i++) {
        console.log(fields[i].value);
        fields[i].value = '';
      }
      popUpHolder.style.visibility = "hidden";
      popUpHolder.style.opacity = '0';

    }

    function openForm() {
      container.style.padding = '0 3% 3% 3%';
      submitBtn.textContent = 'Send';
      container.style.height = '50%';
      title.textContent = "Form"
      form.style.display = "flex";
      popUpHolder.style.visibility = "visible";
      popUpHolder.style.opacity = '1';
    }
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      console.log('clicked on validate')
      var errors = form.querySelectorAll('.error')

      for (var i = 0; i < errors.length; i++) {
        errors[i].remove()
      }
      if (!fields[0].value) {
        console.log('field is blank', fields[i]);
        var error = document.createElement('div')
        error.className='error'
        error.style.color = 'red'
        error.style.fontSize = '50%';
        error.innerHTML = 'Cannot be blank'
        form[0].parentElement.insertBefore(error, fields[0]);
      }
      if (!fields[1].value) {
        console.log('field is blank', fields[i]);
        var error = document.createElement('div')
        error.className='error'
        error.style.color = 'red'
        error.style.fontSize = '50%';
        error.innerHTML = 'Cannot be blank'
        form[1].parentElement.insertBefore(error, fields[1]);
      } else if (!isValidNumber(fields[1].value)) {
        console.log('incorrect number');
        var error = document.createElement('div')
        error.className='error'
        error.style.color = 'red'
        error.style.fontSize = '50%';
        error.innerHTML = 'Incorrect number'
        form[1].parentElement.insertBefore(error, fields[1]);
      }
      if (!fields[2].value) {
        var error = document.createElement('div')
        error.className='error'
        error.style.color = 'red'
        error.style.fontSize = '50%';
        error.innerHTML = 'Cannot be blank'
        form[2].parentElement.insertBefore(error, fields[2]);
      } else if (!isValidEmail(fields[2].value)) {
        console.log('incorrect email');
        var error = document.createElement('div')
        error.className='error'
        error.style.color = 'red'
        error.style.fontSize = '50%';
        error.innerHTML = 'Incorrect email'
        form[2].parentElement.insertBefore(error, fields[2]);
      }
      if (!fields[3].value) {
        console.log('field is blank');
        var error = document.createElement('div')
        error.className='error'
        error.style.color = 'red'
        error.style.fontSize = '50%';
        error.innerHTML = 'Cannot be blank'
        form[3].parentElement.insertBefore(error, fields[3]);
      } else if (isValidReview(fields[3].value)) {
        var error = document.createElement('div');
        error.className = "error";
        error.style.color = 'red'
        error.style.fontSize = '50%';
        error.innerHTML = 'Use English'
        form[3].parentElement.insertBefore(error, fields[3]);
      }
      var errors = form.querySelectorAll('.error')
      if (errors.length == 0) {
        submitBtn.textContent = 'Sending...';
        let name = fields[0].value;
        let number = fields[1].value;
        let email = fields[2].value;
        let review = fields[3].value;
        sendData({ name , number, email, review });
      }
    })
    function isValidReview(review) {
      const reviewPattern = /[А-яЁё]/;
      return reviewPattern.test(review);
    }
    function isValidEmail(email) {


const emailPattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

return emailPattern.test(email);

}
    function isValidNumber(number) {
      const numberPattern = /\+7\d{10}/
      return numberPattern.test(number);
    }

 function sendData(data) {
        fetch('http://test.test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            submitBtn.textContent = "Successfully send";
        })
        .catch(error => {
            container.style.height = '10%';
            container.style.padding = '0 1% 1% 1%';
            form.style.display = 'none';
            title.textContent = 'Thank You!';
            alert("Ошибка при отправке: " + error.message);
        });
    }