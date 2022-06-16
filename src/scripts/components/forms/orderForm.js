// import clearDom from '../../helpers/utilities/clearDom';
import renderToDom from '../../helpers/utilities/renderToDom';

const orderFormOnDom = (order = {}) => {
  // clearDom();
  const domstring = `
  <form id="${
  order.firebaseKey ? `update-order--${order.firebaseKey}` : 'create-order'
}">
    <div class="mb-3">
      <label for="orderName" class="form-label">Order Name</label>
      <input type="text" class="form-control" id="orderName" placeholder="Order Name" value="${
  order.name || ''
}" required>
      <label for="customerPhone" class="form-label">Customer Phone</label>
      <input type="phone" class="form-control" id="customerPhone" placeholder="123-456-7890" value="${
  order.phone || ''
}" required>
      <label for="customerEmail" class="form-label">Customer Email</label>
      <input type="email" class="form-control" id="customerEmail" placeholder="name@example.com" value="${
  order.email || ''
}" required>
      <select id="orderType" class="form-select" aria-label="Default select example">
        <label for="orderType" class="form-label">Order Type</label>
        <option selected>Select An Order Type</option>
        <option value="Phone">One</option>
        <option value="In-Person">Two</option>
      </select>
      <button type="submit" class="btn btn-primary mt-3">Create/Edit Order</button>
    </div>
  </form>
  `;
  renderToDom('#form-container', domstring);
};

export default orderFormOnDom;
