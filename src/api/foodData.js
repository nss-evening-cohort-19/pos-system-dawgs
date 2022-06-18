import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

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

const updateFood = (foodObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/foods/${foodObj.firebaseKey}.json`, foodObj)
    .then(() => getFood(foodObj.uid).then(resolve))
    .catch(reject);
});

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

export { getFood, updateFood, createFood };
