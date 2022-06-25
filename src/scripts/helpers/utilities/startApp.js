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
import formEvents from '../../components/events/formEvents';
// import cartEvents from '../../components/events/cartEvents';
// import { orderDomEvents, orderFormEvents } from '../../components/events/orderEvents';
// import { foodFormEvents, foodDomEvents } from '../../components/events/foodEvents';
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
  // getFood().then((foodArray) => showFoods(foodArray));
  // getOrders().then((orderArray) => orderCardsOnDom(orderArray));
  // getFood().then((foodArray) => viewCart(foodArray));
};

export default startApp;
