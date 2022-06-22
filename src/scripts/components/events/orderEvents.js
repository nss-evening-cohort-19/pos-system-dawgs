import {
  createOrder, deleteOrder, getSingleOrder, updateOrder
} from '../../../api/orderData';
import addFood from '../forms/foodForm';
import orderFormOnDom from '../forms/orderForm';
import { orderCardsOnDom } from '../pages/allOrders';

// *** Buttons on Order Cards ***
const orderDomEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
  // DETAILS
  // if (e.target.id.includes('order-details-btn')) {
  //   const [, orderFirebaseKey] = e.target.id.split('--');
  //   viewOrderDetails(orderFirebaseKey).then((cartList) => {
  //     viewCart(cartList);
  //   });
  // }

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
  });
};
// *** Orders Form Events ***
const orderFormEvents = (uid) => {
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
      createOrder(orderObj).then((orderArray) => addFood(uid, orderArray));
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
      updateOrder(orderObject).then(orderCardsOnDom);
    }
  });
};

export { orderDomEvents, orderFormEvents };
