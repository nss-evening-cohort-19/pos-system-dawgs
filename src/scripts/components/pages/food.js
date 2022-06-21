import clearDom from '../../helpers/utilities/clearDom';
import renderToDom from '../../helpers/utilities/renderToDom';

const emptyFoods = () => {
  document.querySelector('#card-container').innerHTML = '<h1>No Items</h1>';
};

const showFoods = (array) => {
  clearDom();
  if (array.length) {
    let domString = '';
    array.forEach((item) => {
      domString += `
        <div class="card">
          <div class="card-body" style="height: 180px;">
            <h5 class="card-title">${item.name}</h5>
            <h5 class="card-title">${item.price}</h5>
              <hr>
              <i id="update-food--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
              <i id="delete-food--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
          </div>
        </div>`;
    });
    renderToDom('#card-container', domString);
  } else {
    emptyFoods();
  }
};

export { showFoods, emptyFoods };
