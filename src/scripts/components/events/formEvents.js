import { createFood, updateFood } from '../../../api/foodData';
import { createOrder, getOrders, updateOrder } from '../../../api/orderData';
import addFood from '../forms/foodForm';
import { orderCardsOnDom } from '../pages/allOrders';
import { showFoods } from '../pages/food';

const formEvents = (uid) => {
  const form = document.querySelector('#form-container');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // CREATE Order Form
    if (e.target.id.includes('submit-order')) {
      const orderObj = {
        name: document.querySelector('#orderName').value,
        status: 'Open',
        phone: document.querySelector('#customerPhone').value,
        email: document.querySelector('#customerEmail').value,
        type: document.querySelector('#orderType').value,
        uid
      };
      // createOrder(orderObj).then((orderArray) => orderCardsOnDom(orderArray));
      // eslint-disable-next-line no-console
      console.log('orderform event ===', orderObj);
      // eslint-disable-next-line no-console
      createOrder(orderObj, uid).then((orderArray) => addFood(orderArray));
    }

    // UPDATE Order Form
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const orderObject = {
        name: document.querySelector('#orderName').value,
        phone: document.querySelector('#customerPhone').value,
        email: document.querySelector('#customerEmail').value,
        type: document.querySelector('#orderType').value,
        firebaseKey,
        uid
      };
      updateOrder(orderObject, uid).then(() => {
        getOrders(uid).then((array) => orderCardsOnDom(array));
      });
    }
    // CREATE Food Form
    if (e.target.id.includes('submit-item')) {
      const [, orderId] = e.target.id.split('--');
      const foodObj = {
        name: document.querySelector('#name').value,
        price: document.querySelector('#price').value,
        orderId
      };
      createFood(foodObj).then(() => showFoods(orderId));
      console.warn(foodObj);
    //   createFood(foodObj).then(() => viewOrderDetails(foodObj.orderId).then((orderObj) => viewCart(orderObj)));
    }
    // UPDATE Food form
    if (e.target.id.includes('update-item')) {
      const [, firebaseKey, orderId] = e.target.id.split('--');
      const foodObj = {
        name: document.querySelector('#name').value,
        price: document.querySelector('#price').value,
      };
      updateFood(foodObj, firebaseKey).then(() => showFoods(orderId));
    }
  });
};

export default formEvents;
