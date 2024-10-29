const isWeekend = false;

const promiseTour = new Promise((resolve, reject) => {
    const tourData = {
        name: "Weekend tour",
        perPersonBudget: 6000,
    };
    setTimeout(() => {
        if (isWeekend) {
            resolve(tourData);
        } else {
            reject("We will not go on Weekend tour");
        }
    }, 2000);
});

const readyBaggage = (tourData) => {
    const baggage = {
        personalBudget: 2000,
        clothes: {
            shirt: true,
            pants: true,
        },
        ...tourData,
    }
    return Promise.resolve(baggage);
}

const isBudgetFriendlyTour = (baggage) => {
    const totalBudget = baggage.personalBudget + baggage.perPersonBudget;
    return new Promise((resolve, reject) => {
        if (totalBudget > 7000) {
            resolve("This is a budget friendly tour");
        } else {
            reject("This is not a budget friendly tour");
        }
    })
}

const delay = (message) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (message) {
                resolve(message);
            } else {
                reject("Error");
            }
        }, 2000);
    })
}

const tempFn = () => {
    console.log("This is function after promise implementation");
}

console.log("Promise start ");

promiseTour
    .then(readyBaggage)
    .then(isBudgetFriendlyTour)
    .then(delay)
    .then((message) => {
        console.log({ message }, "Promise resolved");
    })
    .catch((error) => {
        console.log(error);
    });

tempFn();
console.log("Promise ends");