import clearDom from '../../helpers/utilities/clearDom';
import renderToDom from '../../helpers/utilities/renderToDom';

const viewOrder = (obj) => {
  clearDom();

  const orderString = ` <div class="card" style="width: 18rem; background-color: black; color: white;">
  <div class="card-body">
    <h6 class="card-subtitle mb-2">TOTAL:</h6>
    <hr>
  </div>
</div>
`;
  renderToDom('#card-container', orderString);

  let foodString = '';
  const array = obj.foodItems;
  array.forEach((item) => {
    foodString += ` <div class="card">
    <div class="card-body" style="height: 180px;">
      <h5 class="card-title">${item.name}</h5>
      <h5 class="card-title">${item.price}</h5>
        <hr>
        <i id="update-food--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        <i id="delete-food--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
    </div>
  </div>`;
  });
  renderToDom('#card-container', foodString);
};
export default viewOrder;
