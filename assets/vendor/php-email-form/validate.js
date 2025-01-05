(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function (e) {
    e.addEventListener('submit', function (event) {
      event.preventDefault();

      let thisForm = this;


      let allInputs = thisForm.querySelectorAll('input, textarea, select');
      let inputValues = [];

      allInputs.forEach(function(input) {
        inputValues.push(input.name + ': ' + input.value);
      });

      console.log(inputValues);

      thisForm.querySelector('.loading').classList.add('d-block');

      setTimeout(function() {
        thisForm.querySelector('.loading').classList.remove('d-block');
        let sentMessage = thisForm.querySelector('.sent-message');
        sentMessage.style.display = 'flex';

        for (let i = 0; i < allInputs.length - 1; i++) {
          allInputs[i].value = '';
        }
        setTimeout(function() {
            sentMessage.style.display = 'none';
        }, 3000);

    }, 3000);
    

    });
  });

})();
