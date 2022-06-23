import navEvents from '../../components/events/navEvents';
import logoutButton from '../../components/logoutButton';
import paymentForm from '../../components/forms/paymentForm';
import { viewCart, emptyCart } from '../../components/pages/cart';
import homeLoggedIn from '../../components/pages/homeLoggedIn';
import navBar from '../../components/pages/navBar';
import domBuilder from '../domBuilder';
import domEvents from '../../components/events/domEvents';
import {
  orderDomEvents,
  orderFormEvents,
} from '../../components/events/orderEvents';
import foodFormEvents from '../../components/events/foodFormEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  paymentForm();
  viewCart(user);
  emptyCart(user);
  logoutButton();
  navEvents(user.uid);
  foodFormEvents(user.uid);
  orderDomEvents(user.uid);
  orderFormEvents(user.uid);
  homeLoggedIn(user.uid);
  domEvents();
};

export default startApp;
