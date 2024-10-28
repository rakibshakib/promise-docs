const items = ["bread", "cheese", "milk"];

const api = {
  createOrder: (items, callback) => {
    const orderId = Math.floor(Math.random() * 1000); // assume this is come from api
    callback(orderId);
  },

  proceedPayment: (orderId, callback) => {
    const paymentId = orderId; // assume this is come from api
    callback(paymentId);
  },
  orderSummary: (paymentId, callback) => {
    const costAmount = Math.floor(Math.random() * 1000); // assume this is come from api
    callback(costAmount);
  },
  updateWallet: (costAmount) => {
    console.log("costAmount", costAmount);
  },
};

// something like that.. this is callback hell but code is increase horizontally instead of vertically
// this structure is called also pyramid of doom
api.createOrder(items, (orderId) => {
  api.proceedPayment(orderId, (paymentId) => {
    api.orderSummary(paymentId, (costAmount) => {
      api.updateWallet(costAmount);
    });
  });
});
