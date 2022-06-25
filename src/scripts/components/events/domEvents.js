import { deleteFood, getFoodsOrder, getSingleFood } from '../../../api/foodData';
import {
  deleteOrder,
  getOrders,
  getSingleOrder
} from '../../../api/orderData';
import addFood from '../forms/foodForm';
// import addFood from '../forms/foodForm';
import orderFormOnDom from '../forms/orderForm';
// import paymentForm from '../forms/paymentForm';
import { orderCardsOnDom } from '../pages/allOrders';
import { showFoods } from '../pages/food';
import viewRevenue from '../pages/revenue';
// import { getSingleFood } from '../../../api/foodData';
// import { viewCart } from '../pages/cart';
// import { getSinglePayment } from '../../../api/paymentData';
import paymentForm from '../forms/paymentForm';
import homeLoggedIn from '../pages/homeLoggedIn';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // EVENT FOR VIEWING ORDERS
    if (e.target.id.includes('view-orders')) {
      getOrders(uid).then(orderCardsOnDom);
    }

    // EVENT TO VIEW REVENUE
    if (e.target.id.includes('view-revenue')) {
      viewRevenue(uid);
    }

    // CLICK EVENT TO SHOW NEW ORDER FORM
    if (e.target.id.includes('create-order')) {
      orderFormOnDom(uid);
    }

    // // CLICK EVENT FOR SUBMIT ORDER
    // if (e.target.id.includes('submit-order')) {
    //   e.preventDefault();
    //   console.warn('Order submitted');
    //   const newOrder = {
    //     customerName: document.querySelector('#orderName').value,
    //     customerPhone: document.querySelector('#customerPhone').value,
    //     customerEmail: document.querySelector('#customerEmail').value,
    //     orderType: document.querySelector('#orderType').value,
    //     uid
    //   };

    //   createOrder(newOrder).then(orderCardsOnDom);
    // }
    // DETAILS on Order
    if (e.target.id.includes('order-details-btn')) {
      const [, orderId] = e.target.id.split('--');
      console.warn('You clicked order details button', orderId);
      getFoodsOrder(orderId).then((cartList) => {
        showFoods((cartList.length && cartList[0].orderId) || undefined);
      });
    }

    // EDIT Order
    if (e.target.id.includes('update-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObj) => orderFormOnDom(orderObj));
    }

    // DELETE Order
    if (e.target.id.includes('delete-order-btn')) {
      console.warn('Button clicked');
      const [, firebaseKey] = e.target.id.split('--');
      deleteOrder(firebaseKey, uid).then((orderArray) => orderCardsOnDom(orderArray));
    }
    // DELETE Food
    if (e.target.id.includes('delete-food')) {
      console.warn('hello');
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to delete the item?')) {
        const [, firebaseKey, orderId] = e.target.id.split('--');
        deleteFood(firebaseKey, orderId).then(() => showFoods(orderId));
      }
    }
    // EDIT Food
    if (e.target.id.includes('update-food')) {
      console.warn('hello');
      const [, firebaseKey, orderId] = e.target.id.split('--');
      getSingleFood(firebaseKey).then((foodObj) => addFood(foodObj, orderId));
    }
    // ADD Food
    if (e.target.id.includes('addItemBtn')) {
      console.warn('holla');
      const [, orderId] = e.target.id.split('--');
      addFood({}, orderId);
    }

    // GO TO Payment
    if (e.target.id.includes('payment-btn')) {
      console.warn('You clicked the go to payment button.');
      paymentForm(uid);
    }

    // CLOSE Order Form
    if (e.target.id.includes('close-order-btn')) {
      console.warn('You clicked close order button.');
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then(() => homeLoggedIn());
    }

    /* if (e.target.id.includes('order-details-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      // eslint-disable-next-line no-console
      console.log('target id ===', e.target.id.split('--'), firebaseKey);
      getSingleFood(firebaseKey).then((foodObj) => {
        // eslint-disable-next-line no-console
        console.log('single food ===', foodObj);
        viewCart(foodObj.firebaseKey, foodObj);
      });
    }
    // CLICK EVENT FOR SUBMIT FOOD
    if (e.target.id.includes('update-food')) {
      e.preventDefault();
      console.warn('update-food submitted');
    } */
  });
};

export default domEvents;
