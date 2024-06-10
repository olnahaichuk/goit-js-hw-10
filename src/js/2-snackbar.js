'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import imageUrl from '../img/close.png ';
import imageUrl from '../img/success.png ';

const refs = {
  formEl: document.querySelector('.form'),
  delayEl: document.querySelector('input[name="delay"]'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const delay = parseInt(refs.delayEl.value);
  const state = document.querySelector('input[name="state"]:checked').value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: ` Fulfilled promise in ${delay}ms`,
        iconUrl: '../img/success.png',
        backgroundColor: '#59A10D',
        messageColor: '#fff',
        titleColor: '#fff',
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        backgroundColor: '#B51B1B',
        iconUrl: '../img/close.png',
        messageColor: '#fff',
        titleColor: '#fff',
      });
    });
});
