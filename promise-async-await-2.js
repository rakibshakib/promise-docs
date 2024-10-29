const isWeekend = true;

const promiseTour = () => {
    return new Promise((resolve, reject) => {
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
}

const readyBaggage = async (tourData) => {
    const baggage = {
        personalBudget: 2000,
        clothes: {
            shirt: true,
            pants: true,
        },
        ...tourData,
    };
    return baggage;
}

const isBudgetFriendlyTour = async (baggage) => {
    const totalBudget = baggage.personalBudget + baggage.perPersonBudget;
    if (totalBudget > 7000) {
        return "This is a budget friendly tour";
    } else {
        throw new Error("This is not a budget friendly tour");
    }
}

const planTour = async () => {
    try {
        const tourData = await promiseTour();
        const baggage = await readyBaggage(tourData);
        const message = await isBudgetFriendlyTour(baggage);
        console.log({ message });
    } catch (error) {
        console.log(error);
    }
};

planTour();
