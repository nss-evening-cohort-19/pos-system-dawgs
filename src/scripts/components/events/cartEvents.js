import { createFood, deleteFood, getSingleFood } from '../../../api/foodData';
import { showFoods } from '../pages/food';
import addFood from '../forms/foodForm';
// import { viewCart } from '../pages/cart';
// import paymentForm from '../forms/paymentForm';
// import { getSinglePayment } from '../../../api/paymentData';

// DELETE CART ITEM
const cartEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card-btn')) {
      console.warn('You clicked the delete item button', e.target.id);
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to delete the item?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteFood(firebaseKey, uid).then((foodArray) => showFoods(foodArray));
      }
    }

    // EDIT CART ITEM
    if (e.target.id.includes('edit-card-btn')) {
      console.warn('You clicked the edit item button.');
      const [, firebaseKey] = e.target.id.split('--');
      getSingleFood(firebaseKey).then((foodObj) => addFood(uid, foodObj));
    }
    // const foodObj = {
    //   name: document.querySelector('#name').value,
    //   price: document.querySelector('#price').value,
    //   orderId: document.querySelector('#orderId').value,
    //   firebaseKey
    // };/media/gWNarMpTibKxcfMDL8/giphy.gif
    // getSingleFood(foodObj).then(showFoods);

    // ADD CART ITEM
    if (e.target.id.includes('add-item-btn')) {
      console.warn('You clicked add item button');
      const [, orderId] = e.target.id.split('--');
      const cartObj = {
        name: document.querySelector('#name').value,
        price: document.querySelector('#price').value,
        orderId
        // firebaseKey,
        // uid
      };
      createFood(cartObj).then(() => showFoods(orderId));
      console.warn(cartObj);
    }
    // eslint-disable-next-line padded-blocks
    // GO TO PAYMENT
    if (e.target.id.includes('payment-btn')) {
      console.warn('You clicked the go to payment button.', e.target.id);
      // const [, firebaseKey] = e.target.id.split('--');
      // getSinglePayment(firebaseKey).then((paymentObj) => paymentForm(uid, paymentObj));
    }
  });
};

export default cartEvents;
