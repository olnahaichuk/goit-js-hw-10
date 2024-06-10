'use strict';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const refs = {
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};
let intervalId;
let initTime;
let userSelectedDate;

const btnStart = document.querySelector('[data-start]');
document.addEventListener('DOMContentLoaded', function () {
  btnStart.setAttribute('disabled', true);
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > new Date()) {
      userSelectedDate = selectedDates[0];
      btnStart.removeAttribute('disabled');
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        iconUrl: '../img/close.png',
        backgroundColor: '#B51B1B',
        messageColor: '#fff',
        titleColor: '#fff',
        theme: 'dark',
      });
      btnStart.setAttribute('disabled', true);
    }
  },
};

flatpickr('#datetime-picker', options);

btnStart.addEventListener('click', () => {
  btnStart.setAttribute('disabled', true);
  initTime = userSelectedDate.getTime();
  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const diff = initTime - currentTime;
    if (diff <= 0) {
      clearInterval(intervalId);
      btnStart.removeAttribute('disabled');
    }
    const time = convertMs(diff);
    const str = addLeadingZero(time);
    refs.daysEl.textContent = str[0];
    refs.hoursEl.textContent = str[1];
    refs.minutesEl.textContent = str[2];
    refs.secondsEl.textContent = str[3];
  }, 1000);
});

function addLeadingZero({ days, hours, minutes, seconds }) {
  days = days.toString().padStart(2, '0');
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');

  return [days, hours, minutes, seconds];
}
