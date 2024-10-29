const isWeekend = true;

const promiseTour = new Promise((resolve, reject) => {
    if (isWeekend) {
        const tourData = {
            name: "Weekend tour",
            perPersonBudget: 5000,
        };
        resolve(tourData);
    } else {
        reject("We will not go on Weekend tour");
    }
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

promiseTour
    .then(readyBaggage)
    .then(isBudgetFriendlyTour)
    .then((message) => {
        console.log({message});
    })
    .catch((error) => {
        console.log(error);
    });
