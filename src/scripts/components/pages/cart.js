import clearDom from '../../helpers/utilities/clearDom';
import renderToDom from '../../helpers/utilities/renderToDom';

const emptyCart = () => {
  document.querySelector('#card-container').innerHTML = '<h1>There are no items in your cart.</h1>';
  // const domString = '<h1>There are no items in your cart.</h1>';
  // renderToDom('#card-container', domString);
};

const viewCart = (array) => {
  clearDom();
  if (array.length) {
    let domString = '';
    array.forEach((item) => {
      domString += `
       <div class="card" style="width: 18rem;">
         <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <h5 class="card-subtitle">${item.price}</h5>
           <a href="#" i id="edit-card-btn--${item.firebaseKey}" class="card-link">Edit Item</a>
           <a href="#" i id="delete-card-btn--${item.firebaseKey}" class="card-link">Delete Item</a>
          </div>
         </div>
      `;
    });
    renderToDom('#card-container', domString);
  } else {
    emptyCart();
  }

  // const cartButtons = () => {
  //   const buttonString = `
  //   <button type="button" class="btn btn-success">Add Item</button>
  //   <button type="button" class="btn btn-primary">Go To Payment</button>
  // `;
  //   renderToDom('#card-container', buttonString);
  // };
};

export { viewCart, emptyCart };
