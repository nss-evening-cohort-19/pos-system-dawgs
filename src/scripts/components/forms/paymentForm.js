import clearDom from '../../helpers/utilities/clearDom';
import renderToDom from '../../helpers/utilities/renderToDom';

const paymentForm = () => {
  clearDom();
  const domString = `
  
  <select class="form-select" aria-label="Default select example">
      <option selected>Payment Type</option>
      <option value="1">Cash</option>
      <option value="2">Card</option>
      <option value="3">Three</option>
    <div class="input-group mb-3">
      <span class="input-group-text">$</span>
      <input type="text" class="form-control" aria-label="Tip Amount">
      <span class="input-group-text">.00</span>
    </div>
  </select>
  <button type="submit" class="btn btn-primary">Close Order
      </button>
  
  `;

  renderToDom('#form-container', domString);
};

export default paymentForm;
