import { createFood, updateFood } from '../../../api/foodData';
import { showFoods } from '../pages/food';

const foodFormEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.dispatchEvent.includes('create-food')) {
      const foodObj = {
        name: document.querySelector('#name').value,
        price: document.querySelector('#price').value,
        uid,
      };
      createFood(foodObj).then((foodArray) => showFoods(foodArray));
    }
    if (e.target.id.includes('update-food')) {
      const [, firebaseKey] = e.target.id.split('--');
      const foodObj = {
        name: document.querySelector('#name').value,
        price: document.querySelector('#price').value,
        firebaseKey,
        uid
      };
      updateFood(foodObj).then(showFoods);
    }
  });
};
export default foodFormEvents;
