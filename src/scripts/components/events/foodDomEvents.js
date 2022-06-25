// import { deleteFood, getSingleFood } from '../../../api/foodData';
// import addFood from '../forms/foodForm';
// import { showFoods } from '../pages/food';

// const foodDomEvents = () => {
//   document.querySelector('#main-container').addEventListener('click', (e) => {
//     if (e.target.id.includes('delete-food')) {
//       console.warn('hello');
//       // eslint-disable-next-line no-alert
//       if (window.confirm('Are you sure you want to delete the item?')) {
//         const [, firebaseKey, orderId] = e.target.id.split('--');
//         deleteFood(firebaseKey, orderId).then(() => showFoods(orderId));
//       }
//     }
//     if (e.target.id.includes('update-food')) {
//       console.warn('hello');
//       const [, firebaseKey, orderId] = e.target.id.split('--');
//       getSingleFood(firebaseKey).then((foodObj) => addFood(foodObj, orderId));
//     }
//     if (e.target.id.includes('addItemBtn')) {
//       console.warn('holla');
//       const [, orderId] = e.target.id.split('--');
//       addFood({}, orderId);
//     }
//   });
// };
// export default foodDomEvents;
