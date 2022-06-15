import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import logoutButton from '../components/logoutButton';
import firebaseConfig from '../../api/apiKeys';
import startApp from './utilities/startApp';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp(user);
      // person is logged in do something...
      logoutButton();
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default checkLoginStatus;
