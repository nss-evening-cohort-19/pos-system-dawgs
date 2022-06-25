import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;
// GET Food
const getFoodsOrder = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/foods.json?orderBy="orderId"&equalTo="${orderId}"`)
    .then((response) => {
      if (response.data) {
        // eslint-disable-next-line no-console
        console.log('response ===', response.data);
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const getFoods = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/foods.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// UPDATE Food
const updateFood = (foodObj, firebaseKey) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/foods/${firebaseKey}.json`, foodObj)
    .then(resolve)
    .catch(reject);
});
// DELETE Food
const deleteFood = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/foods/${firebaseKey}.json`)
  // .then(() => {
  //   getFood(orderId).then((cardsArray) => resolve(cardsArray));
  // })
  // .catch(reject);
    .then(resolve)
    .catch((error) => reject(error));
});
// GET Single Food
const getSingleFood = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/foods/${firebaseKey}.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => reject(error));
});
// const getFoodsOrder = (orderId) => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/foods.json?orderBy="orderId"&equalTo="${orderId}"`)
//     .then((itemsArr) => {
//       if (itemsArr.data) {
//         resolve(Object.values(itemsArr.data));
//       } else {
//         resolve([]);
//       }
//     }).catch((error) => reject(error));
// });
// const pushId = () => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/foods.json`)
//   .then
// })

// CREATE Food
const createFood = (foodObj, orderId) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/foods.json`, foodObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/foods/${response.data.name}.json`, payload)
        .then(() => {
          getFoodsOrder(foodObj, orderId).then(resolve);
        });
    }).catch(reject);
});

export {
  getFoodsOrder,
  getFoods,
  updateFood,
  createFood,
  deleteFood,
  getSingleFood,
};
