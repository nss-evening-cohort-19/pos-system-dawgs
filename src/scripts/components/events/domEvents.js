import { createOrder, getOrders } from '../../../api/orderData';
// import addFood from '../forms/foodForm';
import orderFormOnDom from '../forms/orderForm';
import { orderCardsOnDom } from '../pages/allOrders';
import viewRevenue from '../pages/revenue';
import { getSingleFood } from '../../../api/foodData';
import { viewCart } from '../pages/cart';

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

    if (e.target.id.includes('order-details-btn')) {
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
    }
  });
};

export default domEvents;
