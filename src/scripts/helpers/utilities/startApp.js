import navEvents from '../../components/events/navEvents';
import logoutButton from '../../components/logoutButton';
// import paymentForm from '../../components/forms/paymentForm';
// import viewCart from '../../components/pages/cart';
import homeLoggedIn from '../../components/pages/homeLoggedIn';
import navBar from '../../components/pages/navBar';
import domBuilder from '../domBuilder';
import domEvents from '../../components/events/domEvents';
import { orderFormEvents, orderDomEvents } from '../../components/events/orderEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  // paymentForm();
  // viewCart();
  logoutButton();
  navEvents(user.uid);
  orderDomEvents(user.uid);
  orderFormEvents(user.uid);
  homeLoggedIn(user.uid);
  domEvents();
};

export default startApp;
