import navEvents from '../../components/events/navEvents';
import logoutButton from '../../components/logoutButton';
import homeLoggedIn from '../../components/pages/homeLoggedIn';
import navBar from '../../components/pages/navBar';
import domBuilder from '../domBuilder';

const startApp = (user) => {
  domBuilder();
  navBar();
  homeLoggedIn();
  logoutButton();
  navEvents(user.uid);
};

export default startApp;
