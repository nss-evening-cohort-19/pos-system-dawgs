import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET Orders
const getOrders = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

// DELETE Order
const deleteOrder = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/orders/${firebaseKey}.json`).then(() => {
    getOrders(uid).then((ordersArray) => resolve(ordersArray));
  })
    .catch((error) => reject(error));
});

// GET Single Order
const getSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createOrder = (orderObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/orders.json`, orderObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/orders/${response.data.name}.json`, payload)
        .then(() => {
          console.warn(payload.firebaseKey, 'create order');
          resolve(payload.firebaseKey);
        });
    })
    .catch((error) => reject(error));
});

// UPDATE Order
const updateOrder = (orderObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/orders/${orderObj.firebaseKey}.json`, orderObj)
    .then(() => getOrders(orderObj.uid).then(resolve))
    .catch(reject);
});
// GET Order Item
const getOrderItems = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/foods.json?orderBy="orderId"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// SEARCH ORDERS
const searchOrders = (string, uid) => new Promise((resolve, reject) => {
  getOrders(uid)
    .then((orders) => {
      const foundOrders = orders.filter((order) => {
        const querybyName = order.customerName.toLowerCase().includes(string);
        const querybyNumber = order.customerPhone.includes(string);
        return (querybyName || querybyNumber);
      });
      resolve(foundOrders);
    })
    .catch(reject);
});

// Exports
export {
  getOrders,
  getOrderItems,
  deleteOrder,
  getSingleOrder,
  createOrder,
  updateOrder,
  searchOrders
};
