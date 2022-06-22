import navEvents from '../../components/events/navEvents';
import logoutButton from '../../components/logoutButton';
<<<<<<< HEAD
import paymentForm from '../../components/forms/paymentForm';
import { viewCart, emptyCart } from '../../components/pages/cart';
import homeLoggedIn from '../../components/pages/homeLoggedIn';
=======
// import { showFoods } from '../../components/pages/food';
// import paymentForm from '../../components/forms/paymentForm';
// // import orderFormOnDom from '../../components/forms/orderForm';
// import { viewCart, emptyCart } from '../../components/pages/cart';
// import orderCardsOnDom from '../../components/pages/allOrders';
// import homeLoggedIn from '../../components/pages/homeLoggedIn';
>>>>>>> main
import navBar from '../../components/pages/navBar';
import domBuilder from '../domBuilder';
import domEvents from '../../components/events/domEvents';
import {
  orderDomEvents,
  orderFormEvents,
} from '../../components/events/orderEvents';
import homeLoggedIn from '../../components/pages/homeLoggedIn';

const startApp = (user) => {
  domBuilder();
  navBar();
<<<<<<< HEAD
  paymentForm();
  viewCart(user);
  emptyCart(user);
=======
  // addFood();
  // orderFormOnDom();
  // paymentForm();
  // viewCart(user);
  // emptyCart(user);
>>>>>>> main
  logoutButton();
  navEvents(user.uid);
  orderDomEvents(user.uid);
  orderFormEvents(user.uid);
  homeLoggedIn(user.uid);
  domEvents();
<<<<<<< HEAD
=======
  homeLoggedIn();
  // getFood().then((foodArray) => showFoods(foodArray));
  // getOrders().then((orderArray) => orderCardsOnDom(orderArray));
  //   getFood().then((foodArray) => showFoods(foodArray));
>>>>>>> main
};

export default startApp;
