// import { getOrders } from '../../../api/orderData';
import { getFood } from '../../../api/foodData';
import navEvents from '../../components/events/navEvents';
// import addFood from '../../components/forms/foodForm';
import logoutButton from '../../components/logoutButton';
import { showFoods } from '../../components/pages/food';
// import paymentForm from '../../components/forms/paymentForm';
import orderFormOnDom from '../../components/forms/orderForm';
// import viewCart from '../../components/pages/cart';
// import orderCardsOnDom from '../../components/pages/allOrders';
import homeLoggedIn from '../../components/pages/homeLoggedIn';
import navBar from '../../components/pages/navBar';
import domBuilder from '../domBuilder';
import foodDomEvents from '../../components/events/foodDomEvents';
import foodFormEvents from '../../components/events/foodFormEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  // addFood();
  orderFormOnDom();
  // paymentForm();
  // viewCart();
  logoutButton();
  navEvents(user.uid);
  foodDomEvents(user.id);
  foodFormEvents(user.id);
  getFood().then((foodArray) => showFoods(foodArray));
  homeLoggedIn();
  // getOrders().then((orderArray) => orderCardsOnDom(orderArray));
};

export default startApp;
