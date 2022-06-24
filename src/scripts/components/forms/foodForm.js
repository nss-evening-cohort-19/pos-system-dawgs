import clearDom from '../../helpers/utilities/clearDom';
import renderToDom from '../../helpers/utilities/renderToDom';

const addFood = (orderId, obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : `submit-item--${orderId}`}" class="mb-4">
  <div class="mb-3">
    <label for="" class="form-label">Item Name</label>
    <input type="text" class="form-control" id="name" placeholder="Item Name" value="${obj.name || ''}" required>
  </div>
  <div class="mb-3">
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Item Price</label>
    <input type="text" class="form-control" id="price" placeholder="Item Price" value="${obj.price || ''}"  required>
  </div>
  <button id="food-submit-btn" type="submit" class="btn btn-primary">${obj.firebaseKey ? 'Update Item' : 'Submit Item'}</button>
</form>`;
  renderToDom('#form-container', domString);
};
export default addFood;
