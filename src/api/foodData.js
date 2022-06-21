import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;
// GET Food
const getFood = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/foods.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});
// UPDATE Food
const updateFood = (foodObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/foods/${foodObj.firebaseKey}.json`, foodObj)
    .then(() => getFood(foodObj.uid).then(resolve))
    .catch(reject);
});
// DELETE Food
const deleteFood = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/foods/${firebaseKey}.json`)
    .then(() => {
      getFood(uid).then((cardsArray) => resolve(cardsArray));
    })
    .catch(reject);
});
// GET Single Food
const getSingleFood = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/foods/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});
// CREATE Food
const createFood = (foodObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/foods.json`, foodObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/foods/${response.data.name}.json`, payload)
        .then(() => {
          getFood(foodObj.uid).then(resolve);
        });
    }).catch(reject);
});

export {
  getFood,
  updateFood,
  createFood,
  deleteFood,
  getSingleFood,
};
