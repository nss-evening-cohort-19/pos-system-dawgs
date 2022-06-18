// import { getOrders } from '../../../api/orderData';
import { getFood } from '../../../api/foodData';
import navEvents from '../../components/events/navEvents';
// import addFood from '../../components/forms/foodForm';
import logoutButton from '../../components/logoutButton';
import { showFoods } from '../../components/pages/food';
// import paymentForm from '../../components/forms/paymentForm';
// import orderFormOnDom from '../../components/forms/orderForm';
// import viewCart from '../../components/pages/cart';
// import orderCardsOnDom from '../../components/pages/allOrders';
import homeLoggedIn from '../../components/pages/homeLoggedIn';
import navBar from '../../components/pages/navBar';
import domBuilder from '../domBuilder';

const startApp = (user) => {
  domBuilder();
  navBar();
  homeLoggedIn();
  // addFood();
  // orderFormOnDom();
  // paymentForm();
  // viewCart();
  logoutButton();
  navEvents(user.uid);
  // getOrders().then((orderArray) => orderCardsOnDom(orderArray));
  getFood().then((foodArray) => showFoods(foodArray));
};

export default startApp;
