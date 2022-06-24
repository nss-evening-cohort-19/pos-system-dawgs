// import {
//   createFood,
//   deleteFood,
//   getSingleFood,
//   updateFood
// } from '../../../api/foodData';
// import addFood from '../forms/foodForm';
// // import { viewCart } from '../pages/cart';
// // import viewOrderDetails from '../../../api/mergedData';
// // import { getOrderItems } from '../../../api/orderData';
// // import { orderCardsOnDom } from '../pages/allOrders';
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

// const foodFormEvents = () => {
//   document.querySelector('#main-container').addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (e.target.id.includes('submit-item')) {
//       const [, orderId] = e.target.id.split('--');
//       const foodObj = {
//         name: document.querySelector('#name').value,
//         price: document.querySelector('#price').value,
//         orderId
//       };
//       createFood(foodObj).then(() => showFoods(orderId));
//       console.warn(foodObj);
//     //   createFood(foodObj).then(() => viewOrderDetails(foodObj.orderId).then((orderObj) => viewCart(orderObj)));
//     }
//     if (e.target.id.includes('update-item')) {
//       const [, firebaseKey, orderId] = e.target.id.split('--');
//       const foodObj = {
//         name: document.querySelector('#name').value,
//         price: document.querySelector('#price').value,
//       };
//       updateFood(foodObj, firebaseKey).then(() => showFoods(orderId));
//     }
//   });
// };
// export { foodFormEvents, foodDomEvents };
