// import { getFood } from '../../../api/foodData';
import navEvents from '../../components/events/navEvents';
// import addFood from '../../components/forms/foodForm';
import logoutButton from '../../components/logoutButton';
<<<<<<< HEAD
// import { showFoods } from '../../components/pages/food';
import paymentForm from '../../components/forms/paymentForm';
// import orderFormOnDom from '../../components/forms/orderForm';
import viewCart from '../../components/pages/cart';
// import orderCardsOnDom from '../../components/pages/allOrders';
// import homeLoggedIn from '../../components/pages/homeLoggedIn';
=======
// import paymentForm from '../../components/forms/paymentForm';
// import viewCart from '../../components/pages/cart';
import homeLoggedIn from '../../components/pages/homeLoggedIn';
>>>>>>> main
import navBar from '../../components/pages/navBar';
import domBuilder from '../domBuilder';
// import domEvents from '../../components/events/domEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  // addFood();
  // orderFormOnDom();
  paymentForm();
  viewCart(user.uid);
  logoutButton();
  navEvents(user.uid);
  // orderDomEvents(user.uid);
  // orderFormEvents(user.uid);
  // getFood().then((foodArray) => showFoods(foodArray));
  // getOrders().then((orderArray) => orderCardsOnDom(orderArray));
//   getFood().then((foodArray) => showFoods(foodArray));
};

export default startApp;
