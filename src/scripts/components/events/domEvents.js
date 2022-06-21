import { createOrder, getOrders } from '../../../api/orderData';
import orderCardsOnDom from '../pages/allOrders';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // EVENT FOR VIEWING ORDERS
    if (e.target.id.includes('view-orders')) {
      getOrders(uid).then(orderCardsOnDom);
    }

    // CLICK EVENT TO SHOW NEW ORDER FORM
    if (e.target.id.includes('create-order')) {
      orderCardsOnDom();
    }

    // EVENT TO CREATE AN ORDER
    if (e.target.id.includes('submit-order')) {
      e.preventDefault();
      const newOrder = {
        orderName: document.querySelector('#orderName').value,
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
