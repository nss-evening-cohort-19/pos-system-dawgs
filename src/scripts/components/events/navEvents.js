import signOut from '../../helpers/signOut';
import homeLoggedIn from '../pages/homeLoggedIn';
import { getOrders, searchOrders } from '../../../api/orderData';
import orderFormOnDom from '../forms/orderForm';
import { orderCardsOnDom } from '../pages/allOrders';

const navEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // HOMEPAGE
  document.querySelector('#home').addEventListener('click', homeLoggedIn);

  // VIEW ORDER
  document.querySelector('#view-orders').addEventListener('click', () => {
    getOrders(uid).then(orderCardsOnDom);
  });

  // CREATE ORDER
  document.querySelector('#create-order').addEventListener('click', () => {
    orderFormOnDom(uid);
  });

  // SEARCH BAR
  document.querySelector('#search').addEventListener('click', (e) => {
    e.preventDefault();
    const string = document.querySelector('#searchBar').value.toLowerCase();
    searchOrders(uid, string).then(orderCardsOnDom);
  });
};

export default navEvents;
