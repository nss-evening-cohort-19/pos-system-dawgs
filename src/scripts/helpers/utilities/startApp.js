import navEvents from '../../components/events/navEvents';
import logoutButton from '../../components/logoutButton';
// import { showFoods } from '../../components/pages/food';
import paymentForm from '../../components/forms/paymentForm';
// import orderFormOnDom from '../../components/forms/orderForm';
import { viewCart, emptyCart } from '../../components/pages/cart';
// import orderCardsOnDom from '../../components/pages/allOrders';
// import homeLoggedIn from '../../components/pages/homeLoggedIn';
import navBar from '../../components/pages/navBar';
import domBuilder from '../domBuilder';
import domEvents from '../../components/events/domEvents';
<<<<<<< HEAD
import { orderFormEvents, orderDomEvents } from '../../components/events/orderEvents';
=======
import { orderDomEvents, orderFormEvents } from '../../components/events/orderEvents';
>>>>>>> main

const startApp = (user) => {
  domBuilder();
  navBar();
<<<<<<< HEAD
  // paymentForm();
  // viewCart();
=======
  // addFood();
  // orderFormOnDom();
  paymentForm();
  viewCart(user);
  emptyCart(user);
>>>>>>> main
  logoutButton();
  navEvents(user.uid);
  orderDomEvents(user.uid);
  orderFormEvents(user.uid);
<<<<<<< HEAD
  homeLoggedIn(user.uid);
=======
>>>>>>> main
  domEvents();
  // getFood().then((foodArray) => showFoods(foodArray));
  // getOrders().then((orderArray) => orderCardsOnDom(orderArray));
//   getFood().then((foodArray) => showFoods(foodArray));
};

export default startApp;
