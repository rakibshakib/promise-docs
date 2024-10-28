const cartItemList = ["bread", "cheese", "pizza", "juice", "eggs", "burger"];

const createOrder = (items, callback) => {
  const orderId = Math.floor(Math.random() * 1000); // assume this is come from api
  callback(orderId);
};

// the way to of calling those functions
createOrder(cartItemList, (orderId) => {
  processToPayment(orderId);
});

// promise: we can assume its as an empty object with some data value, and data value will hold what will return from the promise

const promise = createOrder(cartItemList);

// processToPayment will be automatically called when promise is resolved
promise.then((orderId) => {
  processToPayment(orderId);
});
