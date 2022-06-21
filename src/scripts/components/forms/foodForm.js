import clearDom from '../../helpers/utilities/clearDom';
import renderToDom from '../../helpers/utilities/renderToDom';

const addFood = (uid, obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-food--${obj.firebaseKey}` : 'create-food'}" class="mb-4">
  <div class="mb-3">
    <label for="" class="form-label">Item Name</label>
    <input type="text" class="form-control" id="food-name" placeholder="Item Name" value="${obj.name || ''}" required>
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Item Price</label>
    <input type="text" class="form-control" id="food-price" placeholder="Item Price" value="${obj.price || ''}"  required>
  </div>
  <button type="submit" class="btn btn-primary">Add/Edit Item</button>
</form>`;
  renderToDom('#form-container', domString);
};
export default addFood;
