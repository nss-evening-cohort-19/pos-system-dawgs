<<<<<<< HEAD
import homeLoggedIn from '../../components/pages/homeLoggedIn';
=======
// import { getOrders } from '../../../api/orderData';
>>>>>>> main
import navEvents from '../../components/events/navEvents';
import paymentForm from '../../components/forms/paymentForm';
// import orderFormOnDom from '../../components/forms/orderForm';
import logoutButton from '../../components/logoutButton';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import viewCart from '../../components/pages/cart';
>>>>>>> main
// import orderCardsOnDom from '../../components/pages/allOrders';
// import homeLoggedIn from '../../components/pages/homeLoggedIn';
>>>>>>> main
import navBar from '../../components/pages/navBar';
import domBuilder from '../domBuilder';

const startApp = (user) => {
  domBuilder();
  navBar();
<<<<<<< HEAD
  logoutButton();
  navEvents(user.uid);
  homeLoggedIn();
=======
  // homeLoggedIn();
  // orderFormOnDom();
  paymentForm();
  viewCart();
  logoutButton();
  navEvents(user.uid);
  // getOrders().then((orderArray) => orderCardsOnDom(orderArray));
>>>>>>> main
};

export default startApp;
