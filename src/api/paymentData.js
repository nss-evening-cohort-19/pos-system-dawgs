// API CALLS FOR PAYMENTS

import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.database.URL;

// GET PAYMENTS
const getPayments = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/payments.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

// DELETE PAYMENTS
const deletePayment = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/payments/${firebaseKey}.json`)
    .then(() => {
      getPayments().then((paymentsArray) => resolve(paymentsArray));
    })
    .catch((error) => reject(error));
});

// GET SINGLE PAYMENT
const getSinglePayment = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/payments.json?orderBy="type"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// CREATE PAYMENT
const createPayment = (paymentObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/payments.json`, paymentObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/payments/${response.data.name}.json`, payload)
        .then(() => {
          getPayments(paymentObj).then(resolve);
        });
    }).catch(reject);
});

// UPDATE PAYMENT
const updatePayment = (paymentObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/payments/${paymentObj.firebaseKey}.json`, paymentObj)
    .then(() => getPayments().then(resolve))
    .catch(reject);
});

export {
  getPayments,
  createPayment,
  deletePayment,
  getSinglePayment,
  updatePayment
};
