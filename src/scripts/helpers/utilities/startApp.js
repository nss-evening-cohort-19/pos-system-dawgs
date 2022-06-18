import navEvents from '../../components/events/navEvents';
import paymentForm from '../../components/forms/paymentForm';
import logoutButton from '../../components/logoutButton';
import viewCart from '../../components/pages/cart';
// import homeLoggedIn from '../../components/pages/homeLoggedIn';
import navBar from '../../components/pages/navBar';
import domBuilder from '../domBuilder';

const startApp = (user) => {
  domBuilder();
  navBar();
  // homeLoggedIn();
  logoutButton();
  paymentForm();
  viewCart();
  navEvents(user);
};

export default startApp;
