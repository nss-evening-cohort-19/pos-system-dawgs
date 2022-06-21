// import { getFood } from '../../../api/foodData';
import navEvents from '../../components/events/navEvents';
// import addFood from '../../components/forms/foodForm';
import logoutButton from '../../components/logoutButton';
// import { showFoods } from '../../components/pages/food';
// import paymentForm from '../../components/forms/paymentForm';
// import viewCart from '../../components/pages/cart';
import homeLoggedIn from '../../components/pages/homeLoggedIn';
import navBar from '../../components/pages/navBar';
import domBuilder from '../domBuilder';
import domEvents from '../../components/events/domEvents';
import { orderDomEvents, orderFormEvents } from '../../components/events/orderEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  homeLoggedIn();
  // addFood();
  // paymentForm();
  // viewCart();
  logoutButton();
  navEvents(user.uid);
  orderDomEvents(user.uid);
  orderFormEvents(user.uid);
  // getFood().then((foodArray) => showFoods(foodArray));
  homeLoggedIn();
  domEvents();
};

export default startApp;
