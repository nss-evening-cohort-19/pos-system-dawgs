// import { getOrders } from '../../../api/orderData';
import navEvents from '../../components/events/navEvents';
import paymentForm from '../../components/forms/paymentForm';
// import orderFormOnDom from '../../components/forms/orderForm';
import logoutButton from '../../components/logoutButton';
// import orderCardsOnDom from '../../components/pages/allOrders';
// import homeLoggedIn from '../../components/pages/homeLoggedIn';
import navBar from '../../components/pages/navBar';
import domBuilder from '../domBuilder';

const startApp = (user) => {
  domBuilder();
  navBar();
  // homeLoggedIn();
  // orderFormOnDom();
  paymentForm();
  logoutButton();
  navEvents(user.uid);
  // getOrders().then((orderArray) => orderCardsOnDom(orderArray));
};

export default startApp;
