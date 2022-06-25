// import { createFood, updateFood } from '../../../api/foodData';
// import { viewCart } from '../pages/cart';
// // import viewOrderDetails from '../../../api/mergedData';
// // import { getOrderItems } from '../../../api/orderData';
// // import { orderCardsOnDom } from '../pages/allOrders';
// import { showFoods } from '../pages/food';

// const foodFormEvents = (uid) => {
//   document.querySelector('#main-container').addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (e.target.id.includes('submit-item')) {
//       const [, orderId] = e.target.id.split('--');
//       const foodObj = [{
//         name: document.querySelector('#name').value,
//         price: document.querySelector('#price').value,
//         orderId
//       }];
//       createFood(foodObj).then(() => {
//         // eslint-disable-next-line no-console
//         console.log('foodObj ===', foodObj);
//         viewCart(foodObj);
//       });
//     //   console.warn(foodObj);
//     //   createFood(foodObj).then(() => viewOrderDetails(foodObj.orderId).then((orderObj) => viewCart(orderObj)));
//     }
//     if (e.target.id.includes('update-item')) {
//       const [, firebaseKey] = e.target.id.split('--');
//       const foodObj = {
//         name: document.querySelector('#name').value,
//         price: document.querySelector('#price').value,
//         firebaseKey,
//         uid,
//       };
//       updateFood(foodObj).then((foodArray) => {
//         // eslint-disable-next-line no-console
//         console.log('update food ===', foodArray);
//         showFoods(foodArray);
//       });
//     }
//   });
// };
// export default foodFormEvents;
