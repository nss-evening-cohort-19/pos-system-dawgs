import { createOrder, getOrders } from '../../../api/orderData';
import orderFormOnDom from '../forms/orderForm';
import { orderCardsOnDom } from '../pages/allOrders';
import viewRevenue from '../pages/revenue';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // EVENT FOR VIEWING ORDERS
    if (e.target.id.includes('view-orders')) {
      getOrders(uid).then(orderCardsOnDom);
    }

    // CLICK EVENT TO SHOW NEW ORDER FORM
    if (e.target.id.includes('create-order')) {
      orderFormOnDom(uid);
    }

    // EVENT TO VIEW REVENUE
    if (e.target.id.includes('view-revenue')) {
      viewRevenue();
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
  });
};

export default domEvents;
