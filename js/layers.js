addLayer("A1", {
    name: "POINTS", 
    symbol: "Ω1", 
    position: 0, 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#A18A85",
    requires: new Decimal(1e134,237), 
    resource: "WIP (WORK IN PROGRESSS COME BACK AT NEXT UPDATE PLS CHECK)", 
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
        {key: "p", description: "THIS RESENTS NOTHING", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}

     

    
})

addLayer("A2", {
    name: "POINTS", 
    symbol: "Ω2", 
    position: 0, 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "AF7D12",
    requires: new Decimal(1e134,237), 
    resource: "clicky ;]", 
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
    row: 2, 
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}

    
})

addLayer("prestige", {
    name: "prestige POINTS", 
    symbol: "P", 
    position: 0, 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#24B4C8",
    requires: new Decimal(1e134,237), 
    resource: "prestige points", 
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
    row: 16, 
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}

    
})

addLayer("THIS WILL WAIT", {
    name: "WAIT FOR THE UPDATE PLSSSS", 
    symbol: ":D", 
    position: 0, 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#A53087",
    requires: new Decimal(1), 
    resource: "WAITING POINTS", 
    baseResource: "points", 
    baseAmount() {return player.points}, 
    type: "normal", 
    exponent: 0.5, 
    gainMult() { 
        mult = new Decimal(2)
        return mult
    },
    gainExp() { 
        return new Decimal(0)
    },
    row: 0, 
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}

    
})