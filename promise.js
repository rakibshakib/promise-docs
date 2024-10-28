const cartItemList = ["bread", "cheese", "milk", "juice", "eggs"];

/* 
    createOrder(cartItemList); // return orderId
    processToPayment(orderId); // return paymentId 
*/

// the way to of calling those functions
createOrder(cartItemList, (orderId) => {
  processToPayment(orderId);
});

