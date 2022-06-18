import homeLoggedIn from '../../components/pages/homeLoggedIn';
import navEvents from '../../components/events/navEvents';
import logoutButton from '../../components/logoutButton';
import navBar from '../../components/pages/navBar';
import domBuilder from '../domBuilder';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();
  navEvents(user.uid);
  homeLoggedIn();
};

export default startApp;
