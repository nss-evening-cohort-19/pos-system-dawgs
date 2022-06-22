import renderToDom from '../../helpers/utilities/renderToDom';
import clearDom from '../../helpers/utilities/clearDom';
import Dawgz from '../../../images/Dawgz.png';

const homeLoggedIn = () => {
  clearDom();
  const domString = `<div>
    <button id="view-orders" type="button" class="btn btn-success btn-lg">View Orders</button><br>
    <button id="create-order" type="button" class="btn btn-info btn-lg">Create An Order</button><br>
    <button id="view-revenue" type="button" class="btn btn-warning btn-lg">View Revenue</button>
    <div id="logo-container">
    <img class="nav-logo" src=${Dawgz} alt="pizza-logo" width="500" height="500"></div>
    `;

  renderToDom('#buttons-container', domString);
};

export default homeLoggedIn;
