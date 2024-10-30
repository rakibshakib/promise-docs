const isWeekend = true;

const promiseTour = new Promise((resolved, reject) => {
  setTimeout(() => {
    if (isWeekend) {
      resolved("Weekend tour");
    } else {
      reject("We will not go on Weekend tour");
    }
  }, 5000);
});

const tourBudgetPlaning = (isTour) => {
  return new Promise((resolve, reject) => {
    const tourData = {
      name: "Weekend tour",
      perPersonBudget: 6000,
    };

    if (isTour) {
      resolve(tourData);
    } else {
      reject("budget fail");
    }
  });
};

const isFailedTour = () => {
  return Promise.reject(false);
};

console.log("Promise start");
// promiseTour
//   .then(isFailedTour)
//   .then(tourBudgetPlaning)
//   .then((tourData) => {
//     console.log(tourData);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const runPromise = async () => {
//   try {
//     console.log("promise start in block ");
//     const isTour = await promiseTour;
//     const budgetPlaning = await tourBudgetPlaning(isTour);
//     console.log({budgetPlaning})
//     console.log("promise end  in block ");
//   } catch (error) {
//     console.log(error);
//   }
// };
// runPromise();

const P1 = new Promise((resolved) => {
  resolved("P1");
});
const P2 = new Promise((resolved) => {
  resolved("P3");
});
const P3 = new Promise((resolved) => {
  resolved("P3");
});

const promiseX = Promise.reject("resolve X");
const promiseY = new Promise((resolve, reject) => setTimeout(reject, 200, "Success Y"));
const promiseZ = new Promise((resolve, reject) => setTimeout(reject, 100, "Reject Z"));

Promise.any([promiseX, promiseY, promiseZ])
    .then((value) => {
        console.log(value);  // Output: "Success Y"
    })
    .catch((error) => {
        console.error("All promises rejected", error.errors);
    });




console.log("Promise ends");
