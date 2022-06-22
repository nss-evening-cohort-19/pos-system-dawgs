import { getFood } from '../../../api/foodData';
import navEvents from '../../components/events/navEvents';
// import addFood from '../../components/forms/foodForm';
import logoutButton from '../../components/logoutButton';
<<<<<<< HEAD
import { showFoods } from '../../components/pages/food';
import paymentForm from '../../components/forms/paymentForm';
// import orderFormOnDom from '../../components/forms/orderForm';
// import { viewCart, emptyCart } from '../../components/pages/cart';
import { orderCardsOnDom } from '../../components/pages/allOrders';
import homeLoggedIn from '../../components/pages/homeLoggedIn';
import navBar from '../../components/pages/navBar';
import domBuilder from '../domBuilder';
import domEvents from '../../components/events/domEvents';
import { orderDomEvents, orderFormEvents } from '../../components/events/orderEvents';
import { viewCart } from '../../components/pages/cart';
import { getOrders } from '../../../api/orderData';
=======
// import { showFoods } from '../../components/pages/food';
// import paymentForm from '../../components/forms/paymentForm';
// // import orderFormOnDom from '../../components/forms/orderForm';
// import { viewCart, emptyCart } from '../../components/pages/cart';
// import orderCardsOnDom from '../../components/pages/allOrders';
// import homeLoggedIn from '../../components/pages/homeLoggedIn';
import navBar from '../../components/pages/navBar';
import domBuilder from '../domBuilder';
import domEvents from '../../components/events/domEvents';
import {
  orderDomEvents,
  orderFormEvents,
} from '../../components/events/orderEvents';
import homeLoggedIn from '../../components/pages/homeLoggedIn';
>>>>>>> main

const startApp = (user) => {
  domBuilder();
  navBar();
  // addFood();
  // orderFormOnDom();
<<<<<<< HEAD
  paymentForm();
  // viewCart(user);
  // emptyCart(user);
  homeLoggedIn();
=======
  // paymentForm();
  // viewCart(user);
  // emptyCart(user);
>>>>>>> main
  logoutButton();
  navEvents(user.uid);
  orderDomEvents(user.uid);
  orderFormEvents(user.uid);
  domEvents();
<<<<<<< HEAD
  getFood().then((foodArray) => showFoods(foodArray));
  getOrders().then((orderArray) => orderCardsOnDom(orderArray));
  getFood().then((foodArray) => viewCart(foodArray));
=======
  homeLoggedIn();
  // getFood().then((foodArray) => showFoods(foodArray));
  // getOrders().then((orderArray) => orderCardsOnDom(orderArray));
  //   getFood().then((foodArray) => showFoods(foodArray));
>>>>>>> main
};

export default startApp;
