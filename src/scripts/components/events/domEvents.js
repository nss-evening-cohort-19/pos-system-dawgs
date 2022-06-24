import { deleteFood, getFood, getSingleFood } from '../../../api/foodData';
import {
  createOrder,
  deleteOrder,
  getOrders,
  getSingleOrder
} from '../../../api/orderData';
import addFood from '../forms/foodForm';
// import addFood from '../forms/foodForm';
import orderFormOnDom from '../forms/orderForm';
import { orderCardsOnDom } from '../pages/allOrders';
import { showFoods } from '../pages/food';
import viewRevenue from '../pages/revenue';
// import { getSingleFood } from '../../../api/foodData';
// import { viewCart } from '../pages/cart';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // EVENT FOR VIEWING ORDERS
    if (e.target.id.includes('view-orders')) {
      getOrders(uid).then(orderCardsOnDom);
    }

    // EVENT TO VIEW REVENUE
    if (e.target.id.includes('view-revenue')) {
      viewRevenue();
    }

    // CLICK EVENT TO SHOW NEW ORDER FORM
    if (e.target.id.includes('create-order')) {
      orderFormOnDom(uid);
    }

    // CLICK EVENT FOR SUBMIT ORDER
    if (e.target.id.includes('submit-order')) {
      e.preventDefault();
      console.warn('Order submitted');
      const newOrder = {
        customerName: document.querySelector('#orderName').value,
        customerPhone: document.querySelector('#customerPhone').value,
        customerEmail: document.querySelector('#customerEmail').value,
        orderType: document.querySelector('#orderType').value,
        uid
      };

      createOrder(newOrder).then(orderCardsOnDom);
    }
    // DETAILS
    if (e.target.id.includes('order-details-btn')) {
      console.warn('You clicked order details button');
      const [, orderFirebaseKey] = e.target.id.split('--');
      getFood(orderFirebaseKey).then((cartList) => {
        showFoods(cartList);
      });
    }

    // EDIT
    if (e.target.id.includes('update-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObj) => orderFormOnDom(orderObj));
    }

    // DELETE
    if (e.target.id.includes('delete-order-btn')) {
      console.warn('Button clicked');
      const [, firebaseKey] = e.target.id.split('--');
      deleteOrder(firebaseKey, uid).then((orderArray) => orderCardsOnDom(orderArray));
    }
    if (e.target.id.includes('delete-food')) {
      console.warn('hello');
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to delete the item?')) {
        const [, firebaseKey, orderId] = e.target.id.split('--');
        deleteFood(firebaseKey, orderId).then(() => showFoods(orderId));
      }
    }
    if (e.target.id.includes('update-food')) {
      console.warn('hello');
      const [, firebaseKey, orderId] = e.target.id.split('--');
      getSingleFood(firebaseKey).then((foodObj) => addFood(foodObj, orderId));
    }
    if (e.target.id.includes('addItemBtn')) {
      console.warn('holla');
      const [, orderId] = e.target.id.split('--');
      addFood({}, orderId);
    }
    /* if (e.target.id.includes('order-details-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      // eslint-disable-next-line no-console
      console.log('target id ===', e.target.id.split('--'), firebaseKey);
      getSingleFood(firebaseKey).then((foodObj) => {
        // eslint-disable-next-line no-console
        console.log('single food ===', foodObj);
        viewCart(foodObj.firebaseKey, foodObj);
      });
    }
    // CLICK EVENT FOR SUBMIT FOOD
    if (e.target.id.includes('update-food')) {
      e.preventDefault();
      console.warn('update-food submitted');
    } */
  });
};

export default domEvents;
