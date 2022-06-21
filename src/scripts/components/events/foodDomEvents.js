import { deleteFood, getSingleFood } from '../../../api/foodData';
import addFood from '../forms/foodForm';
import { showFoods } from '../pages/food';

const foodDomEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-food')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to delete the item?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteFood(firebaseKey, uid).then((foodArray) => showFoods(foodArray));
      }
    }
    if (e.target.id.includes('update-food')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleFood(firebaseKey).then((foodObj) => addFood(uid, foodObj));
    }
  });
};
export default foodDomEvents;
