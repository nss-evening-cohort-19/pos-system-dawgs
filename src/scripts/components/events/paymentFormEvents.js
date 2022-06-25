import { createPayment, updatePayment } from '../../../api/paymentData';
import viewCart from '../pages/cart';

const paymentFormEvents = (uid) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();

    // CLICK EVENT FOR SUBMITTING FORM FOR PAYMENT
    if (e.target.id.includes('submit')) {
      console.warn('You clicked the submit payment button', e.target.id);
      const paymentObject = {
        type: document.querySelector('#type').value,
        tip: document.querySelector('#tip').value,
        uid
      };
      createPayment(paymentObject).then((paymentsArray) => viewCart(paymentsArray));
    }

    // CLICK EVENT FOR UPDATING PAYMENT
    if (e.target.id.includes('update-payment')) {
      const [, firebaseKey] = e.target.id.split('--');
      const paymentObject = {
        type: document.querySelector('#type').value,
        tip: document.querySelector('#tip').value,
        firebaseKey
      };
      updatePayment(paymentObject).then(viewCart);
    }
  });
};

export default paymentFormEvents;
