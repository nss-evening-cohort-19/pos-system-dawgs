import { getOrderItems } from '../../../api/orderData';
import clearDom from '../../helpers/utilities/clearDom';
import renderToDom from '../../helpers/utilities/renderToDom';

const emptyFoods = (orderId) => {
  const domString = '<h1>There are no items in your cart.</h1>';
  renderToDom('#card-container', domString);
  const buttonString = `
    <button id="addItemBtn--${orderId}" type="button" class="btn btn-success">Add Item</button>
    <button type="button" class="btn btn-primary">Go To Payment</button>
  `;
  renderToDom('#buttons-container', buttonString);
};

const showFoods = (orderId) => {
  clearDom();
  let domString = '';
  getOrderItems(orderId).then((array) => {
    if (array.length) {
      array.forEach((item) => {
        domString += `
                <div class="card">
                  <div class="card-body" style="height: 180px;">
                    <h5 class="card-title">${item.name}</h5>
                    <h5 class="card-title">${item.price}</h5>
                      <hr>
                      <i id="update-food--${item.firebaseKey}--${orderId}" class="fas fa-edit btn btn-info"></i>
                      <i id="delete-food--${item.firebaseKey}--${orderId}" class="btn btn-danger fas fa-trash-alt"></i>
                  </div>
                </div>`;
      });
      renderToDom('#card-container', domString);
    } else {
      emptyFoods();
    }
  });
  const buttonString = `
    <button id="addItemBtn--${orderId}" type="button" class="btn btn-success">Add Item</button>
<<<<<<< HEAD
    <button id="payment-btn--${orderId}" type="button" class="btn btn-primary">Go To Payment</button>
=======
    <button type="button" id="payment-btn" class="btn btn-primary">Go To Payment</button>
>>>>>>> main
  `;
  renderToDom('#buttons-container', buttonString);
};

export { showFoods, emptyFoods };
