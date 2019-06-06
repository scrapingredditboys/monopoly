function generateParameters() {
    // Initial parameters
    const params = {
        purchaseThreshold: 10,
        housePurchaseThreshold: 10,
        bidUp: 30,
        tradeAcceptanceThreshold: 0,
        tradeRejectionThreshold: -100,
        spotsBehind: 10,
        spotsAhead: 10,
        communityChestJailCardValue: 10,
        chanceJailCardValue: 10,
        maxAmountOfRejections: 3,
        firstBuildingOdds: 35,
        lastBuildingOdds: 100
    };
    return params;
}