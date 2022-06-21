import signOut from '../../helpers/signOut';
import homeLoggedIn from '../pages/homeLoggedIn';
// import { getOrders } from '../../../api/orderData';
import orderFormOnDom from '../forms/orderForm';
// import orderCardsOnDom from '../pages/allOrders';

const navEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // HOMEPAGE
  document.querySelector('#home').addEventListener('click', homeLoggedIn);

  // VIEW ORDER
  /* document.querySelector('#view-order').addEventListener('click', () => {
    getOrders(uid).then(orderCardsOnDom);
  }); */

  // CREATE ORDER
  document.querySelector('#create-order').addEventListener('click', () => {
    orderFormOnDom(uid);
  });
};

export default navEvents;
