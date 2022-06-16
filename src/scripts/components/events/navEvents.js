import signOut from '../../helpers/signOut';
import homeLogedIn from '../pages/homeLoggedIn';

const navEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // HOMEPAGE
  document.querySelector('#home').addEventListener('click', homeLogedIn);
};

export default navEvents;
