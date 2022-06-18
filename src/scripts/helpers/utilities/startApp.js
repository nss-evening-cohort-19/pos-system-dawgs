// import { getOrders } from '../../../api/orderData';
import navEvents from '../../components/events/navEvents';
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
  logoutButton();
  navEvents(user.uid);
  // getOrders().then((orderArray) => orderCardsOnDom(orderArray));
};

export default startApp;
