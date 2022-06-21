// // VIEW ORDER DETAILS
// const viewOrderDetails = async (firebaseKey) => {
//   const orderObject = await getSingleOrder(firebaseKey);
//   const itemObject = await getItems(firebaseKey);
//   return ({
//     itemObject,
//     ...orderObject
//   });
// };

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

// export { viewOrderDetails, deleteOrderItems, viewOrderProfit }
