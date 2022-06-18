<<<<<<< HEAD
import homeLoggedIn from '../../components/pages/homeLoggedIn';
=======
// import { getOrders } from '../../../api/orderData';
>>>>>>> main
import navEvents from '../../components/events/navEvents';
// import orderFormOnDom from '../../components/forms/orderForm';
import logoutButton from '../../components/logoutButton';
<<<<<<< HEAD
=======
// import orderCardsOnDom from '../../components/pages/allOrders';
// import homeLoggedIn from '../../components/pages/homeLoggedIn';
>>>>>>> main
import navBar from '../../components/pages/navBar';
import domBuilder from '../domBuilder';

const startApp = (user) => {
  domBuilder();
  navBar();
<<<<<<< HEAD
  logoutButton();
  navEvents(user.uid);
  homeLoggedIn();
=======
  // homeLoggedIn();
  // orderFormOnDom();
  logoutButton();
  navEvents(user.uid);
  // getOrders().then((orderArray) => orderCardsOnDom(orderArray));
>>>>>>> main
};

export default startApp;
