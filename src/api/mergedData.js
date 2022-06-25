<<<<<<< HEAD
// import { getSingleOrder } from './orderData';

// // VIEW ORDER DETAILS
// const viewOrderDetails = async (firebaseKey) => {
//   const orderObject = await getSingleOrder(firebaseKey);
//   const itemObject = await getItems(firebaseKey);
//   return ({
//     itemObject,
//     ...orderObject
//   });
// };

// import { getSingleFood } from './foodData';
import { getOrderItems, getSingleOrder } from './orderData';
=======
import { getSingleFood } from './foodData';
import { getOrderItems } from './orderData';
import { getPayments } from './paymentData';
>>>>>>> main

// ORDER REVENUE
const viewOrderRevenue = async (firebaseKey) => {
  const payments = await getPayments(firebaseKey);
  return ({
    payments
  });
};

// const deleteOrderItems = (orderId) => new Promise((resolve, reject) => {
//   getItems(orderId).then((orderItemArr) => {
//     const deleteItems = orderItemArr.map((item) => deleteItem(item.firebaseKey));
//     Promise.all(deleteItems).then(() => resolve(deleteOrder(orderId)));
//   });
// });

// export { viewOrderDetails, deleteOrderItems, viewOrderProfit };
const viewOrderDetails = (orderFireBaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(orderFireBaseKey)
    .then((obj) => {
      getOrderItems(obj.firebaseKey)
        .then((ordersItems) => {
          resolve({ ordersItems, ...obj });
        });
    }).catch((error) => reject(error));
});
export default { viewOrderDetails, viewOrderRevenue };
