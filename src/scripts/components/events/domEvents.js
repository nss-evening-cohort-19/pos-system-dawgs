import { getOrders } from '../../../api/orderData';
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

    // CLICK EVENT FOR EDITING AN ITEM
  });
};

export default domEvents;
