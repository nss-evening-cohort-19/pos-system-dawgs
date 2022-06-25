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

import { getSingleFood } from './foodData';
import { getOrderItems } from './orderData';

// const viewOrderProfit = async (firebaseKey) => {
//   const paymentObject = await getPayments(firebaseKey);
//   return ({
//     paymentObject
//   });
// };

// const deleteOrderItems = (orderId) => new Promise((resolve, reject) => {
//   getItems(orderId).then((orderItemArr) => {
//     const deleteItems = orderItemArr.map((item) => deleteItem(item.firebaseKey));
//     Promise.all(deleteItems).then(() => resolve(deleteOrder(orderId)));
//   });
// });

// export { viewOrderDetails, deleteOrderItems, viewOrderProfit };
const viewOrderDetails = (orderFireBaseKey) => new Promise((resolve, reject) => {
  getSingleFood(orderFireBaseKey)
    .then((obj) => {
      getOrderItems(obj.firebaseKey)
        .then((ordersItems) => {
          resolve({ ordersItems, ...obj });
        });
    }).catch((error) => reject(error));
});
export default viewOrderDetails;
