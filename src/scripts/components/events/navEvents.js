import signOut from '../../helpers/signOut';
import homeLogedIn from '../pages/homeLoggedIn';
// import { getOrders } from '../../../api/orderData';

const navEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // HOMEPAGE
  document.querySelector('#home').addEventListener('click', homeLogedIn);

  // VIEW ORDER
  /* document.querySelector('#view-order').addEventListener('click', () => {
    getOrders(uid).then(showOrders);
  });

  // CREATE ORDER
  document.querySelector('#create-order').addEventListener('click', () => {
    placeholder(uid);
  });

  // SEARCH BAR
  document.querySelector('#search').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchValue = document.querySelector('#search-value').ariaValueMax.toLowerCase();
    searchOrders(searchValue, uid).then(showOrders);
  }); */
};

export default navEvents;
