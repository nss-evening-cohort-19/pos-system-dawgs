// API CALLS FOR PAYMENTS

import axios from 'axios';
import firebaseConfig from './apiKeys';
import { getOrders } from './orderData';

const dbUrl = firebaseConfig.databaseURL;

// GET PAYMENTS
const getPayments = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/payments.json?orderBy="uid"&equalTo="${uid}`)
    .then((response) => resolve(Object.values(response.data)))
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

// GET TOTAL REVENUE
const getTotalRevenue = (uid) => new Promise((resolve, reject) => {
  getOrders(uid)
    .then((ordersArray) => {
      const reducer = (taco, currentValue) => taco + parseFloat(currentValue.orderTotal ? currentValue.orderTotal : 0);
      const orderTotal = (ordersArray.reduce(reducer, 0));
      console.warn(orderTotal);
      const reduceTips = (taco, currentValue) => taco + parseFloat(currentValue.tipTotal ? currentValue.tipTotal : 0);
      const tipTotal = (ordersArray.reduce(reduceTips, 0));
      console.warn(tipTotal);
      const totalTips = Math.round(tipTotal);
      console.warn(totalTips);
      const totalRev = Math.round(orderTotal + totalTips);
      // eslint-disable-next-line no-console
      console.log('totalRev ===', uid, totalRev, ordersArray);
      resolve(totalRev);
    }).catch(reject);
});

// GET TOTAL TIPS
const getTotalTips = () => new Promise((resolve, reject) => {
  getOrders()
    .then((ordersArray) => {
      const reducer = (taco, currentValue) => taco + parseFloat(currentValue.tipTotal ? currentValue.tipTotal : 0);
      const tipTotal = (ordersArray.reduce(reducer, 0));
      const totalTips = Math.round(tipTotal);
      // eslint-disable-next-line no-console
      console.log('totalTips ===', totalTips, ordersArray);
      resolve(totalTips);
    }).catch(reject);
});

// GET ORDER DATES

// GET ORDER BY PHONE
const getPhoneOrders = () => new Promise((resolve, reject) => {
  getOrders()
    .then((ordersArray) => {
      const phoneOrders = ordersArray.filter((order) => order.type === 'Phone');
      // eslint-disable-next-line no-console
      console.log('phoneOrders === ', ordersArray);
      resolve(phoneOrders.length);
    }).catch(reject);
});

// GET ORDER BY IN PERSON
const getInpersonOrders = () => new Promise((resolve, reject) => {
  getOrders()
    .then((ordersArray) => {
      const inpersonOrders = ordersArray.filter((order) => order.type === 'In-Person');
      // eslint-disable-next-line no-console
      console.log('inpersonOrders === ', ordersArray);
      resolve(inpersonOrders.length);
    }).catch(reject);
});

// GET TOTAL CARD ORDERS
const getCashOrders = () => new Promise((resolve, reject) => {
  getOrders()
    .then((ordersArray) => {
      const cashOrders = ordersArray.filter((order) => order.paymentType === 'cash');
      // eslint-disable-next-line no-console
      console.log('cashOrders ===', ordersArray);
      resolve(cashOrders.length);
    }).catch(reject);
});

// GET TOTAL CREDIT ORDERS
const getCreditOrders = () => new Promise((resolve, reject) => {
  getOrders()
    .then((ordersArray) => {
      const creditOrders = ordersArray.filter((order) => order.paymentType === 'credit');
      // eslint-disable-next-line no-console
      console.log('creditOrders ===', ordersArray);
      resolve(creditOrders.length);
    }).catch(reject);
});

// GET TOTAL MOBILE ORDERS
const getMobileOrders = () => new Promise((resolve, reject) => {
  getOrders()
    .then((ordersArray) => {
      const mobileOrders = ordersArray.filter((order) => order.paymentType === 'mobile');
      // eslint-disable-next-line no-console
      console.log('creditOrders ===', ordersArray);
      resolve(mobileOrders.length);
    }).catch(reject);
});
export {
  getPayments,
  createPayment,
  deletePayment,
  getSinglePayment,
  updatePayment,
  getTotalRevenue,
  getTotalTips,
  getPhoneOrders,
  getInpersonOrders,
  getCashOrders,
  getCreditOrders,
  getMobileOrders
};
