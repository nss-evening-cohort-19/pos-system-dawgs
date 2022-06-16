import clearDom from '../../helpers/utilities/clearDom';
import renderToDom from '../../helpers/utilities/renderToDom';

const addFood = () => {
  clearDom();
  const domString = `
  <form>
  <div class="mb-3">
    <label for="" class="form-label">Item Name</label>
    <input type="text" class="form-control" id="" aria-describedby="" required>
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Item Price</label>
    <input type="password" class="form-control" id="" required>
  </div>
  <button type="submit" class="btn btn-primary">Add/Edit Item</button>
</form>`;
  renderToDom('#form-container', domString);
};
export default addFood;
