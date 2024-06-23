import Datepicker from 'flowbite-datepicker';

document.addEventListener('DOMContentLoaded', function() {
  const datepickerEl = document.getElementById('datepickerId');

  if (datepickerEl) {
    new Datepicker(datepickerEl);
  }
});
