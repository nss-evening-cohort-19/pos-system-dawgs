import clearDom from '../../helpers/utilities/clearDom';
import renderToDom from '../../helpers/utilities/renderToDom';

const noOrders = () => {
  document.querySelector('#add-card').innerHTML = '<h1>No Orders</h1>';
};

const orderCardsOnDom = (array) => {
  clearDom();
  if (array.length) {
    let domString = '';
    array.forEach((order) => {
      domString += `
<div id="order-cards" class="card" style="width: 18rem">
  <div class="card-body">
    <h4 class="card-title">${order.name}</h4>
    <h6 class="card-text">${order.status}</h6>
    <h6 class="card-text">${order.phone}</h6>
    <h6 class="card-text">${order.email}</h6>
    <h6 class="card-text">${order.type}</h6>
    <button id="order-details-btn--${order.firebaseKey}" class="card-link">Details</button>
    <button id="update-order-btn--${order.firebaseKey}" class="card-link">Edit</button>
    <button id="delete-order-btn--${order.firebaseKey}" class="card-link">Delete</button>
  </div>
</div>
      `;
    });
    renderToDom('#card-container', domString);
  } else {
    noOrders();
  }
};

export { orderCardsOnDom, noOrders };
