import navEvents from '../../components/events/navEvents';
import addFood from '../../components/forms/foodForm';
import logoutButton from '../../components/logoutButton';
import paymentForm from '../../components/forms/paymentForm';
import orderFormOnDom from '../../components/forms/orderForm';
// import { orderCardsOnDom } from '../../components/pages/allOrders';
import homeLoggedIn from '../../components/pages/homeLoggedIn';
import navBar from '../../components/pages/navBar';
import domBuilder from '../domBuilder';
import domEvents from '../../components/events/domEvents';
import formEvents from '../../components/events/formEvents';
// import cartEvents from '../../components/events/cartEvents';
// import { orderDomEvents, orderFormEvents } from '../../components/events/orderEvents';
// import { foodFormEvents, foodDomEvents } from '../../components/events/foodEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  addFood();
  orderFormOnDom();
  paymentForm();
  // viewCart(user);
  // emptyCart(user);
  homeLoggedIn();
  logoutButton();
  navEvents(user.uid);
  // cartEvents(user.uid);
  // foodDomEvents(user.uid);
  // foodFormEvents(user.uid);
  // orderDomEvents(user.uid);
  // orderFormEvents(user.uid);
  homeLoggedIn(user.uid);
  domEvents(user.uid);
  formEvents(user.uid);
};

export default startApp;
