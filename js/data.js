// Options used to draw the graph.
var options = {
	"machine": "raw",
	"equipment": 0,
	"sellRaw": false,
	"sellExcess": false,
	"aging": 0,
	"planted": 1,
	"maxSeedMoney": 0,
	"days": 28,
	"fertilizer": 2,
	"level": 0,
	"season": 4,
	"buySeed": false,
	"replant": false,
	"nextyear": false,
	"buyFert": false,
	"average": false,
	"fertilizer": 2,
	"fertilizerSource": 0,
	"crossSeason": false,
	"fruit": false,
	"seeds": {
		"pierre": true,
		"joja": true,
		"special": true
	},
	"skills": {
		"till": false,
		"agri": false,
		"arti": false,
		"gatherer": false,
		"botanist": false
	},
	"foodIndex": 0,
	"foodLevel": 0,
	"extra": false,
	"disableLinks": false,
	"onlyYear1": false,
	"enableMods": false,
	"enableVanilla": true,
	"enableSVE": false,
	"enableCornucopia": false,
	"enableCornucopiaMachines": false
};

var artisanMachineSources = {

	vanilla: {
		jar: {
			label: "Preserves Jar",
			baseUses: 1,
			types: {
				Vegetable: "Pickles",
				Fruit: "Jelly",
				"Coffee Bean": "None"
			},
			typePrice: {
				"Pickles": {
					mode: "multiplierPlusFlat",
					multiplier: 2,
					flat: 50
				},
				"Jelly": {
					mode: "multiplierPlusFlat",
					multiplier: 2,
					flat: 50
				}
			}
		},
		keg: {
			label: "Keg",
			baseUses: 1,
			types: {
				Vegetable: "Juice",
				Fruit: "Wine",
				"Coffee Bean": "Coffee",
				"Hops": "Pale Ale",
				"Tea Leaves": "Tea",
				"Wheat": "Beer"
			},
			typePrice: {
				"Juice": {
					mode: "multiplier",
					multiplier: 2.25
				},
				"Wine": {
					mode: "multiplier",
					multiplier: 3,
					aging: true
				},
				"Coffee": {
					mode: "flat",
					flat: 150,
					uses: 5
				},
				"Pale Ale": {
					mode: "flat",
					flat: 300,
					aging: true
				},
				"Tea": {
					mode: "flat",
					flat: 100
				},
				"Beer": {
					mode: "flat",
					flat: 200,
					aging: true
				}
			}
		},
		dehydrator: {
			label: "Dehydrator",
			baseUses: 5,
			types: {
				Fruit: "Dried Fruit",
				"Grape": "Raisins"
			},
			typePrice: {
				"Dried Fruit": {
					mode: "multiplierPlusFlat",
					multiplier: 7.5,
					flat: 25
				},
				"Raisins": {
					mode: "flat",
					flat: 600
				}
			}
		},
		mill: {
			label: "Mill",
			baseUses: 1,
			types: {
				"Beet": "Sugar",
				"Unmilled Rice": "Rice",
				"Wheat": "Wheat Flour"
			},
			typePrice: {
				"Sugar": {
					mode: "flat",
					flat: 150
				},
				"Rice": {
					mode: "flat",
					flat: 100
				},
				"Wheat Flour": {
					mode: "flat",
					flat: 50
				}
			}
		}
	},

	cornucopia: {
		alembic: {
			label: "Alembic",
			baseUses: 5,
			types: {
				Fruit: "Essential Oil",
				Vegetable: "Essential Oil",
				Flower: "Essential Oil",
				Herb: "Essential Oil",
				Spice: "Essential Oil",
				Nut: "Essential Oil"
			},
			typePrice: {
				"Essential Oil": {
					mode: "multiplier",
					multiplier: 7.5
				}
			}
		},
		butterChurn: {
			label: "Butter Churn",
			baseUses: 1,
			types: {
				Nut: "Nut Butter",
				"Cocoa Pod": "Cocoa Butter",
				"Coconut": "Coconut Butter",
				"Peanut": "Peanut Butter",
				"Oats": "Oat Butter",
				"Soybeans": "Soy Butter",
				"Sunflower": "Sunflower Butter"
			},
			typePrice: {
				"Nut Butter": {
					mode: "multiplier",
					multiplier: 1.5
				},
				"Cocoa Butter": {
					mode: "flat",
					flat: 250
				},
				"Coconut Butter": {
					mode: "flat",
					flat: 250
				},
				"Peanut Butter": {
					mode: "flat",
					flat: 200
				},
				"Oat Butter": {
					mode: "multiplier",
					multiplier: 1.5,
					uses: 2
				},
				"Soy Butter": {
					mode: "multiplier",
					multiplier: 1.5,
					uses: 2
				},
				"Sunflower Butter": {
					mode: "multiplier",
					multiplier: 1.5
				}
			}
		},
		cheesePress: {
			label: "Cheese Press",
			baseUses: 1,
			types: {
				"Mung Beans": "Eggless Egg",
				"Soybeans": "Tofu"
			},
			typePrice: {
				"Eggless Egg": {
					mode: "flat",
					flat: 50
				},
				"Tofu": {
					mode: "flat",
					flat: 280,
					uses: 2
				}
			}
		},
		compactMill: {
			label: "Compact Mill",
			baseUses: 1,
			types: {
				"Aloe": "Aloe Gel",
				"Apple": "Applesauce",
				"Hot Pepper": "Chili Powder",
				"Habanero": "Chili Powder",
				"Jalapeño": "Chili Powder",
				"Lemon": "Lemon Zest",
				"Lime": "Lime Zest",
				"Soybeans": "Miso Paste",
				"Orange": "Orange Zest",
				"Bell Pepper": "Paprika",
				"Peppercorn": "Pepper"
			},
			typePrice: {
				"Aloe Gel": {
					mode: "flat",
					flat: 150
				},
				"Applesauce": {
					mode: "flat",
					flat: 250
				},
				"Chili Powder": {
					mode: "flat",
					flat: 150
				},
				"Lemon Zest": {
					mode: "flat",
					flat: 100
				},
				"Lime Zest": {
					mode: "flat",
					flat: 100
				},
				"Miso Paste": {
					mode: "flat",
					flat: 300
				},
				"Orange Zest": {
					mode: "flat",
					flat: 150
				},
				"Paprika": {
					mode: "flat",
					flat: 140
				},
				"Pepper": {
					mode: "flat",
					flat: 140
				}
			}
		},
		dehydrator: {
			label: "Dehydrator",
			baseUses: 5,
			types: {
				Vegetable: "Dried Vegetable",
				Herb: "Dried Herb",
				Flower: "Dried Flower"
			},
			typePrice: {
				"Dried Vegetable": {
					mode: "multiplierPlusFlat",
					multiplier: 7.5,
					flat: 25
				},
				"Dried Herb": {
					mode: "multiplierPlusFlat",
					multiplier: 10,
					flat: 50
				},
				"Dried Flower": {
					mode: "multiplierPlusFlat",
					multiplier: 10,
					flat: 50
				}
			}
		},
		dryingRack: {
			label: "Drying Rack",
			baseUses: 5,
			types: {
				Herb: "Dried Herb",
				Flower: "Dried Flower"
			},
			typePrice: {
				"Dried Herb": {
					mode: "multiplierPlusFlat",
					multiplier: 10,
					flat: 50
				},
				"Dried Flower": {
					mode: "multiplierPlusFlat",
					multiplier: 10,
					flat: 50
				}
			}
		},
		extruder: {
			label: "Extruder",
			baseUses: 1,
			types: {
				"Cassava": "Glass Noodles",
				"Potato": "Glass Noodles",
				"Yam": "Glass Noodles",
				"Sweet Potato": "Glass Noodles",
				"Zucchini": "Zoodles"
			},
			typePrice: {
				"Glass Noodles": {
					mode: "flat",
					flat: 200
				},
				"Zoodles": {
					mode: "flat",
					flat: 100
				}
			}
		},
		juicer: {
			label: "Juicer",
			baseUses: 1,
			types: {
				Fruit: "Juice",
				Vegetable: "Juice"
			},
			typePrice: {
				"Juice": {
					mode: "multiplier",
					multiplier: 2.25
				}
			}
		},
		keg: {
			label: "Keg",
			baseUses: 1,
			types: {
				Nut: "Nut Milk",
				Vegetable: "Wine",
				"Coconut": "Coconut Milk",
				"Soybeans": "Soy Milk",
				"Oats": "Oat Milk",
				"Durum": "Dark Ale",
				"Buckwheat": "Porter",
				"White Grape": "Sparkling Wine",
				"Barley": "Stout"
			},
			typePrice: {
				"Nut Milk": {
					mode: "multiplier",
					multiplier: 2.25
				},
				"Wine": {
					mode: "multiplier",
					multiplier: 3,
					aging: true
				},
				"Coconut Milk": {
					mode: "flat",
					flat: 250
				},
				"Soy Milk": {
					mode: "multiplier",
					multiplier: 2.25
				},
				"Oat Milk": {
					mode: "multiplier",
					multiplier: 2.25
				},
				"Dark Ale": {
					mode: "flat",
					flat: 300
				},
				"Porter": {
					mode: "flat",
					flat: 250
				},
				"Sparkling Wine": {
					mode: "flat",
					flat: 260
				},
				"Stout": {
					mode: "flat",
					flat: 250
				}

			}
		},
		mill: {
			label: "Mill",
			baseUses: 1,
			types: {
				"Corn": "Corn Flour",
				"Buckwheat": "Buckwheat Flour",
				"Durum": "Semolina Flour",
				"Barley": "Whole-Grain Flour",
				"Sugar Cane": "Cane Sugar",
				"Sugar Beet": "Beet Sugar"
			},
			typePrice: {
				"Corn Flour": {
					mode: "flat",
					flat: 50
				},
				"Buckwheat Flour": {
					mode: "flat",
					flat: 50
				},
				"Semolina Flour": {
					mode: "flat",
					flat: 50
				},
				"Whole-Grain Flour": {
					mode: "flat",
					flat: 50
				},
				"Cane Sugar": {
					mode: "flat",
					flat: 100
				},
				"Beet Sugar": {
					mode: "flat",
					flat: 200
				}
			}
		},
		oilMaker: {
			label: "Oil Maker",
			baseUses: 1,
			types: {
				"Avocado": "Avocado Oil",
				"Hot Pepper": "Chili Oil",
				"Habanero": "Chili Oil",
				"Jalapeño": "Chili Oil",
				"Coconut": "Coconut Oil",
				"Canola Flower": "Oil",
				"Peanut": "Oil",
				"Olive": "Olive Oil",
				"Palm Nut": "Palm Oil",
				"Sesame Seeds": "Sesame Oil"
			},
			typePrice: {
				"Avocado Oil": {
					mode: "flat",
					flat: 400
				},
				"Chili Oil": {
					mode: "flat",
					flat: 120
				},
				"Coconut Oil": {
					mode: "flat",
					flat: 200
				},
				"Oil": {
					mode: "flat",
					flat: 100
				},
				"Olive Oil": {
					mode: "flat",
					flat: 450,
					uses: 4
				},
				"Palm Oil": {
					mode: "flat",
					flat: 150
				},
				"Sesame Oil": {
					mode: "flat",
					flat: 120
				}

			}
		},
		jar: {
			label: "Preserves Jar",
			baseUses: 1,
			types: {
				"Olive": "Brined Olives",
				"Daikon": "Kimchi",
				"Lettuce": "Kimchi",
				"Cucumber": "Pickle Spears",
				"Cabbage": "Sauerkraut",
				"Red Cabbage": "Sauerkraut",
				"Soybeans": "Soy Sauce",
				"Ume": "Umeboshi"
			},
			typePrice: {
				"Brined Olives": {
					mode: "flat",
					flat: 320,
					uses: 3
				},
				"Kimchi": {
					mode: "multiplierPlusFlat",
					multiplier: 2,
					flat: 50
				},
				"Pickle Spears": {
					mode: "flat",
					flat: 260
				},
				"Sauerkraut": {
					mode: "flat",
					flat: 340
				},
				"Soy Sauce": {
					mode: "flat",
					flat: 300,
					uses: 2,
					aging: true
				},
				"Umeboshi": {
					mode: "flat",
					flat: 150
				}
			}
		},
		vinegarKeg: {
			label: "Vinegar Keg",
			baseUses: 1,
			types: {
				"Grape": "Vinegar",
				"White Grape": "Vinegar",
				"Sugar Cane": "Vinegar",
				"Apple": "Vinegar",
				"Unmilled Rice": "Vinegar",
				"Coconut": "Vinegar"
			},
			typePrice: {
				"Vinegar": {
					mode: "flat",
					flat: 100
				}
			}
		},
		loom: {
			label: "Loom",
			baseUses: 3,
			types: {
				"Cotton Boll": "Cloth"
			},
			typePrice: {
				"Cloth": {
					mode: "flat",
					flat: 470
				}
			}
		}
	}
};

// Different fertilizers with their stats.
var fertilizers = [
	{
		"name": "None",
		"ratio": 0,
		"growth": 1,
		"cost": 0
	},
	{
		"name": "Basic Fertilizer",
		"ratio": 1,
		"growth": 1,
		"cost": 100
	},
	{
		"name": "Quality Fertilizer",
		"ratio": 2,
		"growth": 1,
		"cost": 150
	},
	{
		"name": "Speed-Gro",
		"ratio": 0,
		"growth": 0.9,
		"cost": 100
	},
	{
		"name": "Deluxe Speed-Gro",
		"ratio": 0,
		"growth": 0.75,
		"cost": 150,
		"alternate_cost": 80
	},
	{
		"name": "Deluxe Fertilizer",
		"ratio": 3,
		"growth": 1,
		"cost": 0
	},
	{
		"name": "Hyper Speed-Gro",
		"ratio": 0,
		"growth": 0.67,
		"cost": 0
	}
];

var seasons = [
	{
		name: "Spring",
		key: "spring",
		duration: 28
	},
	{
		name: "Summer",
		key: "summer",
		duration: 28
	},
	{
		name: "Fall",
		key: "fall",
		duration: 28
	},
	{
		name: "Winter",
		key: "winter",
		duration: 28
	},
	{
		name: "Greenhouse",
		key: "greenhouse",
		duration: 112
	}
];
