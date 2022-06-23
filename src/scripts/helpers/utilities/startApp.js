import navEvents from '../../components/events/navEvents';
import addFood from '../../components/forms/foodForm';
import logoutButton from '../../components/logoutButton';
// import { showFoods } from '../../components/pages/food';
import paymentForm from '../../components/forms/paymentForm';
import orderFormOnDom from '../../components/forms/orderForm';
// import { viewCart, emptyCart } from '../../components/pages/cart';
// import { orderCardsOnDom } from '../../components/pages/allOrders';
import homeLoggedIn from '../../components/pages/homeLoggedIn';
import navBar from '../../components/pages/navBar';
import domBuilder from '../domBuilder';
import domEvents from '../../components/events/domEvents';
import { orderDomEvents, orderFormEvents } from '../../components/events/orderEvents';
<<<<<<< HEAD
import cartEvents from '../../components/events/cartEvents';
=======
import foodFormEvents from '../../components/events/foodFormEvents';
>>>>>>> main
// import { getOrders } from '../../../api/orderData';
// import { viewCart } from '../../components/pages/cart';

const startApp = (user) => {
  domBuilder();
  navBar();
  addFood();
  orderFormOnDom();
  paymentForm();
  // viewCart(user);
  // emptyCart(user);
  cartEvents();
  homeLoggedIn();
  logoutButton();
  navEvents(user.uid);
  foodFormEvents(user.uid);
  orderDomEvents(user.uid);
  orderFormEvents(user.uid);
  homeLoggedIn(user.uid);
  domEvents();
  // getFood().then((foodArray) => showFoods(foodArray));
  // getOrders().then((orderArray) => orderCardsOnDom(orderArray));
  // getFood().then((foodArray) => viewCart(foodArray));
};

export default startApp;
