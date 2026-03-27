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
	"enableMods": false
};

var artisanMachines = {
	jar: {
		label: "Jar",
		baseUses: 1,
		types: {
			Vegetable: "Pickles",
			Fruit: "Jelly"
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
		},
		mod: "Vanilla"
	},
	keg: {
		label: "Keg",
		baseUses: 1,
		types: {
			Vegetable: "Juice",
			Fruit: "Wine"
		},
		typePrice: {
			"Juice": {
				mode: "multiplier",
				multiplier: 2.25
			},
			"Wine": {
				mode: "multiplier",
				multiplier: 3
			}
		},
		mod: "Vanilla"
	},
	dehydrator: {
		label: "Dehydrator",
		baseUses: 5,
		types: {
			Fruit: "Dried Fruit"
		},
		typePrice: {
			"Dried Fruit": {
				mode: "multiplierPlusFlat",
				multiplier: 7.5,
				flat: 25
			}
		},
		mod: "Vanilla"
	},
	mill: {
		label: "Mill",
		baseUses: 1,
		types: {
		},
		mod: "Vanilla"
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
		},
		mod: "Cornucopia - Artisan Machines"
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

// Different seasons with predefined crops.
var seasons = [
	{
		"name": "Spring",
		"duration": 28,
		"crops": [
			crops.coffee_bean,
			crops.strawberry,
			crops.rhubarb,
			crops.potato,
			crops.cauliflower,
			crops.green_bean,
			crops.tea_leaves,
			crops.kale,
			crops.unmilled_rice,
			crops.garlic,
			crops.parsnip,
			crops.blue_jazz,
			crops.tulip,
			crops.ancient_fruit,
			// crops.spring_seeds,
			crops.carrot,
			crops.fiber,
			// SVE
			crops.cucumber,
			crops.gold_carrot,
			crops.joja_berry,
			crops.joja_veggie,
			crops.salal_berry,
			crops.slime_berry
		],
		"fruit": [
			crops.apricot,
			crops.cherry,
			// SVE
			crops.pear,
			crops.tree_coin
		]
	},
	{
		"name": "Summer",
		"duration": 28,
		"crops": [
			crops.pineapple,
			crops.blueberry,
			crops.starfruit,
			crops.red_cabbage,
			crops.hops,
			crops.melon,
			crops.hot_pepper,
			crops.tea_leaves,
			crops.tomato,
			crops.radish,
			crops.summer_spangle,
			crops.poppy,
			crops.wheat,
			crops.corn,
			crops.coffee_bean,
			crops.sunflower,
			crops.ancient_fruit,
			crops.taro_root,
			// crops.summer_seeds,
			crops.summer_squash,
			crops.fiber,
			// SVE
			crops.ancient_fiber,
			crops.butternut_squash,
			crops.monster_fruit,
			// Cornucopia
			crops.adzuki_bean
		],
		"fruit": [
			crops.peach,
			crops.orange,
			crops.banana,
			crops.mango,
			// SVE
			crops.nectarine,
			crops.tree_coin
		]
	},
	{
		"name": "Fall",
		"duration": 28,
		"crops": [
			crops.sweet_gem_berry,
			crops.cranberries,
			crops.pumpkin,
			crops.grape,
			crops.artichoke,
			crops.beet,
			crops.eggplant,
			crops.amaranth,
			crops.yam,
			crops.tea_leaves,
			crops.fairy_rose,
			crops.bok_choy,
			crops.sunflower,
			crops.wheat,
			crops.corn,
			crops.ancient_fruit,
			// crops.fall_seeds,
			crops.broccoli,
			crops.fiber,
			// SVE
			crops.monster_mushroom,
			crops.sweet_potato
		],
		"fruit": [
			crops.apple,
			crops.pomegranate,
			// SVE
			crops.persimmon,
			crops.tree_coin
		]
	},
	{
		"name": "Winter",
		"duration": 28,
		"crops": [
			// crops.winter_seeds,
			crops.powdermelon,
			crops.fiber,
			// SVE
			crops.void_root
		],
		"fruit": [
			// SVE
			crops.tree_coin
		]
	},
	{
		"name": "Greenhouse",
		"duration": 112,
		"crops": [
			crops.coffee_bean,
			crops.strawberry,
			crops.rhubarb,
			crops.potato,
			crops.cauliflower,
			crops.green_bean,
			crops.tea_leaves,
			crops.kale,
			crops.unmilled_rice,
			crops.garlic,
			crops.parsnip,
			crops.blue_jazz,
			crops.tulip,
			crops.ancient_fruit,
			crops.spring_seeds,
			crops.carrot,
			crops.fiber,
			crops.cucumber,
			crops.gold_carrot,
			crops.joja_berry,
			crops.joja_veggie,
			crops.salal_berry,
			crops.slime_berry,
			crops.pineapple,
			crops.blueberry,
			crops.starfruit,
			crops.red_cabbage,
			crops.hops,
			crops.melon,
			crops.hot_pepper,
			crops.tomato,
			crops.radish,
			crops.summer_spangle,
			crops.poppy,
			crops.wheat,
			crops.corn,
			crops.sunflower,
			crops.taro_root,
			crops.summer_seeds,
			crops.summer_squash,
			crops.ancient_fiber,
			crops.butternut_squash,
			crops.monster_fruit,
			crops.sweet_gem_berry,
			crops.cranberries,
			crops.pumpkin,
			crops.grape,
			crops.artichoke,
			crops.beet,
			crops.eggplant,
			crops.amaranth,
			crops.yam,
			crops.fairy_rose,
			crops.bok_choy,
			crops.fall_seeds,
			crops.broccoli,
			crops.monster_mushroom,
			crops.sweet_potato,
			crops.winter_seeds,
			crops.powdermelon,
			crops.void_root
		],
		"fruit": [
			crops.apricot,
			crops.cherry,
			crops.pear,
			crops.peach,
			crops.orange,
			crops.banana,
			crops.mango,
			crops.nectarine,
			crops.apple,
			crops.pomegranate,
			crops.persimmon,
			crops.tree_coin
		]
	}
];
