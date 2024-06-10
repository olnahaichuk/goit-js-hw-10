'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import closeImageUrl from '../img/close.png';
import successImageUrl from '../img/success.png';

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
        iconUrl: successImageUrl,
        backgroundColor: '#59A10D',
        messageColor: '#fff',
        titleColor: '#fff',
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        backgroundColor: '#B51B1B',
        iconUrl: closeImageUrl,
        messageColor: '#fff',
        titleColor: '#fff',
      });
    });
});
