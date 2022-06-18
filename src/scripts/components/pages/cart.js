import renderToDom from '../../helpers/utilities/renderToDom';

const viewCart = () => {
  const domString = `
  <div class="card" style="width: 18rem;">
   <div class="card-body">
    <h5 class="card-title">Item Name</h5>
    <h5 class="card-subtitle">PRICE:</h5>
    <a href="#" class="card-link">Edit Item</a>
    <a href="#" class="card-link">Delete Item</a></a>
    </div>
  </div>
  `;
  renderToDom('#card-container', domString);

  // const cartButtons = () => {
  //   const buttonString = `
  //   <button type="button" class="btn btn-success">Add Item</button>
  //   <button type="button" class="btn btn-primary">Go To Payment</button>
  // `;
  //   renderToDom('#card-container', buttonString);
};

export default viewCart;
