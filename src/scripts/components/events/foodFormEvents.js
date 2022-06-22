import { createFood, updateFood } from '../../../api/foodData';
// import { getOrderItems } from '../../../api/orderData';
// import { orderCardsOnDom } from '../pages/allOrders';
// import { viewCart } from '../pages/cart';
import { showFoods } from '../pages/food';

const foodFormEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-food')) {
      const [, firebaseKey] = e.target.id.split('--');
      const foodObj = {
        name: document.querySelector('#name').value,
        price: document.querySelector('#price').value,
        orderId: firebaseKey
      };
      createFood(foodObj).then(() => console.warn(foodObj));
      // createFood(foodObj)
      //   .then((foodArray) => {
      //     foodArray.forEach((item) => {
      //       if (firebaseKey === item.orderId) {
      //         getOrderItems(foodObj.orderId).then((orderObject) => orderCardsOnDom(orderObject));
      //       } else {
      //         console.warn(foodArray);
      //       }
      //     });
      //   });
    }
    if (e.target.id.includes('update-food')) {
      const [, firebaseKey] = e.target.id.split('--');
      const foodObj = {
        name: document.querySelector('#name').value,
        price: document.querySelector('#price').value,
        firebaseKey,
        uid,
      };
      updateFood(foodObj).then((foodArray) => showFoods(foodArray));
    }
  });
};
export default foodFormEvents;
