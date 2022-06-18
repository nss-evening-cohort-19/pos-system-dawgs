import renderToDom from '../../helpers/utilities/renderToDom';
import clearDom from '../../helpers/utilities/clearDom';

const homeLoggedIn = () => {
  clearDom();
  const domString = `
    <button id="view-orders" type="button" class="btn btn-success btn-lg">View Orders</button>
    <button id="create-order" type="button" class="btn btn-info btn-lg">Create An Order</button>
    <button id="view-revenue" type="button" class="btn btn-warning btn-lg">View Revenue</button>
    `;

  renderToDom('#buttons-container', domString);
};

export default homeLoggedIn;
