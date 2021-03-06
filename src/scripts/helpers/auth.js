/* eslint-disable import/no-named-as-default-member */
import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
// eslint-disable-next-line import/no-named-as-default
import startApp from './utilities/startApp';
import logoutButton from '../components/logoutButton';
import firebaseConfig from '../../api/apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp(user);
      // person is logged in do something...
      logoutButton();
    } else {
      // person is NOT logged in
      // document.querySelector('#home').innerHTML = `
      // <h1>HIP HOP, PIZZA, AND WINGS!</h1>
      // `;
      loginButton();
    }
  });
};

export default checkLoginStatus;
