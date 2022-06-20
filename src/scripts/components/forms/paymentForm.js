// import clearDom from '../../helpers/utilities/clearDom';
import renderToDom from '../../helpers/utilities/renderToDom';

const paymentForm = (obj = {}) => {
  // clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-payment--${obj.firebaseKey}` : 'submit-payment'}">
  <select class="form-select" aria-label="Default select example">
      <option selected>${obj.type || ''}</option>
      <option value="${obj.cash || ''}">Cash</option>
      <option value="${obj.credit || ''}">Credit/Debit</option>
      <option value="${obj.mobile || ''}">Mobile</option>
      <option value="${obj.check || ''}">Check</option>
    <div class="input-group mb-3">
      <span class="input-group-text">$</span>
      <input type="text" class="form-control" aria-label="${obj.tip || ''}">
      <span class="input-group-text">.00</span>
    </div>
  </select>
  <button type="submit" class="btn btn-success">Close Order
    </button>
  </form>
  `;

  renderToDom('#form-container', domString);
};

export default paymentForm;
