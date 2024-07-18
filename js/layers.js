addLayer("A1", {
    name: "POINTS", 
    symbol: "Ω1", 
    position: 0, 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#A18A85",
    requires: new Decimal(10), 
    resource: "points", 
    baseResource: "points", 
    baseAmount() {return player.points}, 
    type: "normal", 
    exponent: 0.5, 
    gainMult() { 
        mult = new Decimal(1)
        return mult
    },
    gainExp() { 
        return new Decimal(1)
    },
    row: 0, 
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}

    upgrades: {
        11: {
            description: "start now :>)",
            cost: new Decimal(1),
            etc
        },
        etc
    }
})
