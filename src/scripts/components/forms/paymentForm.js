// import clearDom from '../../helpers/utilities/clearDom';
import renderToDom from '../../helpers/utilities/renderToDom';

const paymentForm = (obj = {}) => {
  // clearDom();
  const domString = `
  <form id="payment-types">
  <select class="form-select" aria-label="Default select example">
      <option selected>Select Payment Type</option>
      <option value="Cash">Cash</option>
      <option value="Credit">Credit/Debit</option>
      <option value="Mobile">Mobile</option>
      <option value="Check">Check</option>
    <div class="input-group mb-3">
      <span class="input-group-text">$</span>
      <input type="text" placeholder="Tip Amount" class="form-control" value="${obj.tip || ''}">
    </div>
  </select>
  <button type="submit" class="btn btn-success">Close Order
    </button>
  </form>
  `;

  renderToDom('#form-container', domString);
};

export default paymentForm;
