/*
 * All data gathered using in-game extraction and wikis linked in the "url" field for each crop.
 */

// Crop List
var crops = {
  "amaranth": {
    "name": "Amaranth",
    "url": "https://stardewvalleywiki.com/Amaranth",
    "img": "amaranth.png",
    "seeds": {
      "sell": 35,
      "pierre": 70,
      "joja": 87,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 150
    }
  },
  "ancient_fruit": {
    "name": "Ancient Fruit",
    "url": "https://stardewvalleywiki.com/Ancient_Fruit",
    "img": "ancient_fruit.png",
    "seeds": {
      "sell": 30,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Unpurchasable",
      "specialUrl": "https://stardewvalleywiki.com/Ancient_Seeds"
    },
    "growth": {
      "initial": 28,
      "regrow": 7
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0,
      "price": 550
    }
  },
  "apple": {
    "name": "Apple",
    "url": "https://stardewvalleywiki.com/Apple",
    "img": "apple.png",
    "seeds": {
      "sell": 1000,
      "pierre": 2000,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0,
      "price": 100
    }
  },
  "apricot": {
    "name": "Apricot",
    "url": "https://stardewvalleywiki.com/Apricot",
    "img": "apricot.png",
    "seeds": {
      "sell": 500,
      "pierre": 1000,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0,
      "price": 50
    }
  },
  "artichoke": {
    "name": "Artichoke",
    "url": "https://stardewvalleywiki.com/Artichoke",
    "img": "artichoke.png",
    "seeds": {
      "sell": 15,
      "pierre": 30,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 160
    }
  },
  "banana": {
    "name": "Banana",
    "url": "https://stardewvalleywiki.com/Banana",
    "img": "banana.png",
    "seeds": {
      "sell": 850,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Island Trader",
      "specialUrl": "https://stardewvalleywiki.com/Island_Trader"
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0,
      "price": 150
    }
  },
  "beet": {
    "name": "Beet",
    "url": "https://stardewvalleywiki.com/Beet",
    "img": "beet.png",
    "seeds": {
      "sell": 10,
      "pierre": 0,
      "joja": 0,
      "special": 20,
      "specialLoc": "Oasis",
      "specialUrl": "https://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 100,
      "millPrice": 150,
      "millUses": 3,
      "millOverride": "Sugar"
    }
  },
  "blueberry": {
    "name": "Blueberry",
    "url": "https://stardewvalleywiki.com/Blueberry",
    "img": "blueberry.png",
    "seeds": {
      "sell": 40,
      "pierre": 80,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 4
    },
    "produce": {
      "type": "Fruit",
      "extra": 2,
      "extraPerc": 1.01,
      "price": 50
    }
  },
  "blue_jazz": {
    "name": "Blue Jazz",
    "url": "https://stardewvalleywiki.com/Blue_Jazz",
    "img": "blue_jazz.png",
    "seeds": {
      "sell": 15,
      "pierre": 30,
      "joja": 37,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "type": "Flower",
      "extra": 0,
      "extraPerc": 0,
      "price": 50
    }
  },
  "bok_choy": {
    "name": "Bok Choy",
    "url": "https://stardewvalleywiki.com/Bok_Choy",
    "img": "bok_choy.png",
    "seeds": {
      "sell": 25,
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 80
    }
  },
  "broccoli": {
    "name": "Broccoli",
    "url": "https://stardewvalleywiki.com/Broccoli",
    "img": "broccoli.png",
    "seeds": {
      "sell": 40,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Unpurchasable",
      "specialUrl": "https://stardewvalleywiki.com/Broccoli_Seeds"
    },
    "growth": {
      "initial": 8,
      "regrow": 4
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 70
    }
  },
  "cactus_fruit": {
    "name": "Cactus Fruit",
    "url": "https://stardewvalleywiki.com/Cactus_Fruit",
    "img": "cactus_fruit.png",
    "seeds": {
      "sell": 0,
      "pierre": 0,
      "joja": 0,
      "special": 150,
      "specialLoc": "Oasis",
      "specialUrl": "https://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 12,
      "regrow": 3
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0,
      "price": 75
    }
  },
  "carrot": {
    "name": "Carrot",
    "url": "https://stardewvalleywiki.com/Carrot",
    "img": "carrot.png",
    "seeds": {
      "sell": 15,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Unpurchasable",
      "specialUrl": "https://stardewvalleywiki.com/Carrot_Seeds"
    },
    "growth": {
      "initial": 3,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 35
    }
  },
  "cauliflower": {
    "name": "Cauliflower",
    "url": "https://stardewvalleywiki.com/Cauliflower",
    "img": "cauliflower.png",
    "seeds": {
      "sell": 40,
      "pierre": 80,
      "joja": 100,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 175
    }
  },
  "cherry": {
    "name": "Cherry",
    "url": "https://stardewvalleywiki.com/Cherry",
    "img": "cherry.png",
    "seeds": {
      "sell": 850,
      "pierre": 1700,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0,
      "price": 80
    }
  },
  "coffee_bean": {
    "name": "Coffee Bean",
    "url": "https://stardewvalleywiki.com/Coffee_Bean",
    "img": "coffee_bean.png",
    "seeds": {
      "sell": 15,
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Traveling Merchant",
      "specialUrl": "https://stardewvalleywiki.com/Traveling_Cart"
    },
    "growth": {
      "initial": 10,
      "regrow": 2
    },
    "produce": {
      "type": "Special",
      "extra": 3,
      "extraPerc": 1.007,
      "price": 15,
      "kegPrice": 150,
      "kegUses": 5,
      "jarOverride": "None",
      "kegOverride": "Coffee"
    }
  },
  "corn": {
    "name": "Corn",
    "url": "https://stardewvalleywiki.com/Corn",
    "img": "corn.png",
    "seeds": {
      "sell": 75,
      "pierre": 150,
      "joja": 187,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 14,
      "regrow": 4
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 50
    }
  },
  "cranberries": {
    "name": "Cranberries",
    "url": "https://stardewvalleywiki.com/Cranberries",
    "img": "cranberries.png",
    "seeds": {
      "sell": 120,
      "pierre": 240,
      "joja": 300,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 5
    },
    "produce": {
      "type": "Fruit",
      "extra": 1.11,
      "extraPerc": 1.00,
      "price": 75
    }
  },
  "eggplant": {
    "name": "Eggplant",
    "url": "https://stardewvalleywiki.com/Eggplant",
    "img": "eggplant.png",
    "seeds": {
      "sell": 10,
      "pierre": 20,
      "joja": 25,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 5
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0.002,
      "price": 60
    }
  },
  "fairy_rose": {
    "name": "Fairy Rose",
    "url": "https://stardewvalleywiki.com/Fairy_Rose",
    "img": "fairy_rose.png",
    "seeds": {
      "sell": 100,
      "pierre": 200,
      "joja": 250,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "type": "Flower",
      "extra": 0,
      "extraPerc": 0,
      "price": 290
    }
  },
  "fiber": {
    "name": "Fiber",
    "url": "https://stardewvalleywiki.com/Fiber",
    "img": "fiber.png",
    "seeds": {
      "sell": 5,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Unpurchasable",
      "specialUrl": "https://stardewvalleywiki.com/Fiber_Seeds"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "type": "Resource",
      "extra": 3,
      "extraPerc": 1.375,
      "price": 1
    }
  },
  "garlic": {
    "name": "Garlic",
    "url": "https://stardewvalleywiki.com/Garlic",
    "img": "garlic.png",
    "seeds": {
      "sell": 20,
      "pierre": 40,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 60
    }
  },
  "grape": {
    "name": "Grape",
    "url": "https://stardewvalleywiki.com/Grape",
    "img": "grape.png",
    "seeds": {
      "sell": 30,
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 3
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0,
      "price": 80,
      "dehydratorPrice": 600,
      "dehydratorOverride": "Raisins"
    }
  },
  "green_bean": {
    "name": "Green Bean",
    "url": "https://stardewvalleywiki.com/Green_Bean",
    "img": "green_bean.png",
    "seeds": {
      "sell": 30,
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 3
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 40
    }
  },
  "hops": {
    "name": "Hops",
    "url": "https://stardewvalleywiki.com/Hops",
    "img": "hops.png",
    "seeds": {
      "sell": 30,
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 11,
      "regrow": 1
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 25,
      "kegPrice": 300,
      "kegOverride": "Pale Ale"
    }
  },
  "hot_pepper": {
    "name": "Hot Pepper",
    "url": "https://stardewvalleywiki.com/Hot_Pepper",
    "img": "hot_pepper.png",
    "seeds": {
      "sell": 20,
      "pierre": 40,
      "joja": 50,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 3
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0.03,
      "price": 40
    }
  },
  "kale": {
    "name": "Kale",
    "url": "https://stardewvalleywiki.com/Kale",
    "img": "kale.png",
    "seeds": {
      "sell": 35,
      "pierre": 70,
      "joja": 87,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 110
    }
  },
  "mango": {
    "name": "Mango",
    "url": "https://stardewvalleywiki.com/Mango",
    "img": "mango.png",
    "seeds": {
      "sell": 850,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Island Trader",
      "specialUrl": "https://stardewvalleywiki.com/Island_Trader"
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0,
      "price": 130
    }
  },
  "melon": {
    "name": "Melon",
    "url": "https://stardewvalleywiki.com/Melon",
    "img": "melon.png",
    "seeds": {
      "sell": 40,
      "pierre": 80,
      "joja": 100,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0,
      "price": 250
    }
  },
  "orange": {
    "name": "Orange",
    "url": "https://stardewvalleywiki.com/Orange",
    "img": "orange.png",
    "seeds": {
      "sell": 1000,
      "pierre": 2000,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0,
      "price": 100
    }
  },
  "parsnip": {
    "name": "Parsnip",
    "url": "https://stardewvalleywiki.com/Parsnip",
    "img": "parsnip.png",
    "seeds": {
      "sell": 10,
      "pierre": 20,
      "joja": 25,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 35
    }
  },
  "peach": {
    "name": "Peach",
    "url": "https://stardewvalleywiki.com/Peach",
    "img": "peach.png",
    "seeds": {
      "sell": 1500,
      "pierre": 3000,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0,
      "price": 140
    }
  },
  "pineapple": {
    "name": "Pineapple",
    "url": "https://stardewvalleywiki.com/Pineapple",
    "img": "pineapple.png",
    "seeds": {
      "sell": 240,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Island Trader",
      "specialUrl": "https://stardewvalleywiki.com/Island_Trader"
    },
    "growth": {
      "initial": 14,
      "regrow": 7
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0,
      "price": 300
    }
  },
  "pomegranate": {
    "name": "Pomegranate",
    "url": "https://stardewvalleywiki.com/Pomegranate",
    "img": "pomegranate.png",
    "seeds": {
      "sell": 1500,
      "pierre": 3000,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0,
      "price": 140
    }
  },
  "poppy": {
    "name": "Poppy",
    "url": "https://stardewvalleywiki.com/Poppy",
    "img": "poppy.png",
    "seeds": {
      "sell": 50,
      "pierre": 100,
      "joja": 125,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "type": "Flower",
      "extra": 0,
      "extraPerc": 0,
      "price": 140
    }
  },
  "potato": {
    "name": "Potato",
    "url": "https://stardewvalleywiki.com/Potato",
    "img": "potato.png",
    "seeds": {
      "sell": 25,
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 1,
      "extraPerc": 0.25,
      "price": 80
    }
  },
  "powdermelon": {
    "name": "Powdermelon",
    "url": "https://stardewvalleywiki.com/Powdermelon",
    "img": "powdermelon.png",
    "seeds": {
      "sell": 20,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Unpurchasable",
      "specialUrl": "https://stardewvalleywiki.com/Powdermelon_Seeds"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0,
      "price": 60
    }
  },
  "pumpkin": {
    "name": "Pumpkin",
    "url": "https://stardewvalleywiki.com/Pumpkin",
    "img": "pumpkin.png",
    "seeds": {
      "sell": 50,
      "pierre": 100,
      "joja": 125,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 320
    }
  },
  "radish": {
    "name": "Radish",
    "url": "https://stardewvalleywiki.com/Radish",
    "img": "radish.png",
    "seeds": {
      "sell": 20,
      "pierre": 40,
      "joja": 50,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 90
    }
  },
  "red_cabbage": {
    "name": "Red Cabbage",
    "url": "https://stardewvalleywiki.com/Red_Cabbage",
    "img": "red_cabbage.png",
    "seeds": {
      "sell": 50,
      "pierre": 100,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 260
    }
  },
  "rhubarb": {
    "name": "Rhubarb",
    "url": "https://stardewvalleywiki.com/Rhubarb",
    "img": "rhubarb.png",
    "seeds": {
      "sell": 50,
      "pierre": 0,
      "joja": 0,
      "special": 100,
      "specialLoc": "Oasis",
      "specialUrl": "https://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0,
      "price": 220
    }
  },
  "starfruit": {
    "name": "Starfruit",
    "url": "https://stardewvalleywiki.com/Starfruit",
    "img": "starfruit.png",
    "seeds": {
      "sell": 200,
      "pierre": 0,
      "joja": 0,
      "special": 400,
      "specialLoc": "Oasis",
      "specialUrl": "https://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0,
      "price": 750
    }
  },
  "strawberry": {
    "name": "Strawberry",
    "url": "https://stardewvalleywiki.com/Strawberry",
    "img": "strawberry.png",
    "seeds": {
      "sell": 0,
      "pierre": 0,
      "joja": 0,
      "special": 100,
      "specialLoc": "Egg Festival",
      "specialUrl": "https://stardewvalleywiki.com/Egg_Festival"
    },
    "growth": {
      "initial": 8,
      "regrow": 4
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0.02,
      "price": 120
    }
  },
  "summer_spangle": {
    "name": "Summer Spangle",
    "url": "https://stardewvalleywiki.com/Summer_Spangle",
    "img": "summer_spangle.png",
    "seeds": {
      "sell": 25,
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "type": "Flower",
      "extra": 0,
      "extraPerc": 0,
      "price": 90
    }
  },
  "summer_squash": {
    "name": "Summer Squash",
    "url": "https://stardewvalleywiki.com/Summer_Squash",
    "img": "summer_squash.png",
    "seeds": {
      "sell": 20,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Unpurchasable",
      "specialUrl": "https://stardewvalleywiki.com/Summer_Squash_Seeds"
    },
    "growth": {
      "initial": 6,
      "regrow": 3
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 45
    }
  },
  "sunflower": {
    "name": "Sunflower",
    "url": "https://stardewvalleywiki.com/Sunflower",
    "img": "sunflower.png",
    "seeds": {
      "sell": 20,
      "pierre": 200,
      "joja": 125,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "type": "Flower",
      "extra": 0,
      "extraPerc": 0,
      "price": 80
    }
  },
  "sweet_gem_berry": {
    "name": "Sweet Gem Berry",
    "url": "https://stardewvalleywiki.com/Sweet_Gem_Berry",
    "img": "sweet_gem_berry.png",
    "seeds": {
      "sell": 200,
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Traveling Merchant",
      "specialUrl": "https://stardewvalleywiki.com/Traveling_Cart"
    },
    "growth": {
      "initial": 24,
      "regrow": 0
    },
    "produce": {
      "type": "Special",
      "extra": 0,
      "extraPerc": 0,
      "price": 3000
    }
  },
  "taro_root": {
    "name": "Taro Root",
    "url": "https://stardewvalleywiki.com/Taro_Root",
    "img": "taro_root.png",
    "seeds": {
      "sell": 20,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Island Trader",
      "specialUrl": "https://stardewvalleywiki.com/Island_Trader"
    },
    "growth": {
      "initial": 10,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 100
    }
  },
  "tea_leaves": {
    "name": "Tea Leaves",
    "url": "http://stardewvalleywiki.com/Tea_Leaves",
    "img": "tea_leaves.png",
    "seeds": {
      "sell": 0,
      "pierre": 0,
      "joja": 0,
      "special": 2500,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 20,
      "regrow": 1
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 50,
      "kegPrice": 100,
      "kegOverride": "Tea"
    }
  },
  "tomato": {
    "name": "Tomato",
    "url": "https://stardewvalleywiki.com/Tomato",
    "img": "tomato.png",
    "seeds": {
      "sell": 25,
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 11,
      "regrow": 4
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0.05,
      "price": 60
    }
  },
  "tulip": {
    "name": "Tulip",
    "url": "https://stardewvalleywiki.com/Tulip",
    "img": "tulip.png",
    "seeds": {
      "sell": 10,
      "pierre": 20,
      "joja": 25,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "type": "Flower",
      "extra": 0,
      "extraPerc": 0,
      "price": 30
    }
  },
  "unmilled_rice": {
    "name": "Unmilled Rice",
    "url": "https://stardewvalleywiki.com/Unmilled_Rice",
    "img": "unmilled_rice.png",
    "seeds": {
      "sell": 20,
      "pierre": 40,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0.1,
      "price": 30,
      "millPrice": 100,
      "millOverride": "Rice"
    }
  },
  "wheat": {
    "name": "Wheat",
    "url": "https://stardewvalleywiki.com/Wheat",
    "img": "wheat.png",
    "seeds": {
      "sell": 5,
      "pierre": 10,
      "joja": 12,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 25,
      "kegPrice": 200,
      "kegOverride": "Beer",
      "millPrice": 50,
      "millOverride": "Wheat Flour"
    }
  },
  "yam": {
    "name": "Yam",
    "url": "https://stardewvalleywiki.com/Yam",
    "img": "yam.png",
    "seeds": {
      "sell": 30,
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 160
    }
  },
  "spring_seeds": {
    "name": "Spring Seeds",
    "url": "http://stardewvalleywiki.com/Spring_Seeds",
    "img": "spring_seeds.png",
    "seeds": {
      "sell": 0,
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "type": "Special",
      "extra": 0,
      "extraPerc": 0,
      // (Wild Horseradish + Daffodil + Leek + Dandelion) / 4
      "price": (50 + 30 + 60 + 40) / 4
    },
    "isWildseed": true
  },
  "summer_seeds": {
    "name": "Summer Seeds",
    "url": "http://stardewvalleywiki.com/Summer_Seeds",
    "img": "summer_seeds.png",
    "seeds": {
      "sell": 0,
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "type": "Special",
      "extra": 0,
      "extraPerc": 0,
      // (Spice Berry + Grape + Sweet Pea) / 3
      "price": (80 + 80 + 50) / 3
    },
    "isWildseed": true
  },
  "fall_seeds": {
    "name": "Fall Seeds",
    "url": "http://stardewvalleywiki.com/Fall_Seeds",
    "img": "fall_seeds.png",
    "seeds": {
      "sell": 0,
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "type": "Special",
      "extra": 0,
      "extraPerc": 0,
      // (Blackberry + Common Mushroom + Hazelnut + Wild Plum) / 4
      "price": (20 + 40 + 90 + 80) / 4
    },
    "isWildseed": true
  },
  "winter_seeds": {
    "name": "Winter Seeds",
    "url": "http://stardewvalleywiki.com/Winter_Seeds",
    "img": "winter_seeds.png",
    "seeds": {
      "sell": 0,
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "type": "Special",
      "extra": 0,
      "extraPerc": 0,
      // (Crocus + Crystal Fruit + Snow Yam + Winter Root) / 4
      "price": (60 + 150 + 100 + 70) / 4
    },
    "isWildseed": true
  },
  // SVE crops
  "ancient_fiber": {
    "name": "Ancient Fiber",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Ancient_Fiber",
    "img": "ancient_fiber.png",
    "seeds": {
      "sell": 145,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Unpurchasable",
      "specialUrl": "https://stardew-valley-expanded.fandom.com/wiki/Ancient_Fern_Seed"
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 2,
      "extraPerc": 0.05,
      "price": 145
    },
    "mod": "Stardew Valley Expanded"
  },
  "butternut_squash": {
    "name": "Butternut Squash",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Butternut_Squash",
    "img": "butternut_squash.png",
    "seeds": {
      "sell": 45,
      "pierre": 90,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 200
    },
    "mod": "Stardew Valley Expanded"
  },
  "cucumber": {
    "name": "Cucumber",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Cucumber",
    "img": "cucumber.png",
    "seeds": {
      "sell": 75,
      "pierre": 150,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 2
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 45
    },
    "mod": "Stardew Valley Expanded"
  },
  "gold_carrot": {
    "name": "Gold Carrot",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Gold_Carrot",
    "img": "gold_carrot.png",
    "seeds": {
      "sell": 300,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Unpurchasable",
      "specialUrl": "https://stardew-valley-expanded.fandom.com/wiki/Gold_Carrot_Seed"
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 1000
    },
    "mod": "Stardew Valley Expanded"
  },
  "joja_berry": {
    "name": "Joja Berry",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Joja_Berry",
    "img": "joja_berry.png",
    "seeds": {
      "sell": 650,
      "pierre": 0,
      "joja": 0,
      "special": 6500,
      "specialLoc": "Joja Emporium",
      "specialUrl": "https://stardew-valley-expanded.fandom.com/wiki/Joja_Emporium"
    },
    "growth": {
      "initial": 25,
      "regrow": 4
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0.15,
      "price": 650
    },
    "mod": "Stardew Valley Expanded"
  },
  "joja_veggie": {
    "name": "Joja Veggie",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Joja_Veggie",
    "img": "joja_veggie.png",
    "seeds": {
      "sell": 200,
      "pierre": 0,
      "joja": 0,
      "special": 600,
      "specialLoc": "Joja Emporium",
      "specialUrl": "https://stardew-valley-expanded.fandom.com/wiki/Joja_Emporium"
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0.1,
      "price": 1254
    },
    "mod": "Stardew Valley Expanded"
  },
  "monster_fruit": {
    "name": "Monster Fruit",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Monster_Fruit",
    "img": "monster_fruit.png",
    "seeds": {
      "sell": 0,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Unpurchasable",
      "specialUrl": "https://stardew-valley-expanded.fandom.com/wiki/Stalk_Seed"
    },
    "growth": {
      "initial": 25,
      "regrow": 0
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0,
      "price": 1525
    },
    "mod": "Stardew Valley Expanded"
  },
  "monster_mushroom": {
    "name": "Monster Mushroom",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Monster_Mushroom",
    "img": "monster_mushroom.png",
    "seeds": {
      "sell": 0,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Unpurchasable",
      "specialUrl": "https://stardew-valley-expanded.fandom.com/wiki/Fungus_Seed"
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 850
    },
    "mod": "Stardew Valley Expanded"
  },
  "nectarine": {
    "name": "Nectarine",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Nectarine",
    "img": "nectarine.png",
    "seeds": {
      "sell": 1500,
      "pierre": 6000,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0,
      "price": 150
    },
    "mod": "Stardew Valley Expanded"
  },
  "pear": {
    "name": "Pear",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Pear",
    "img": "pear.png",
    "seeds": {
      "sell": 900,
      "pierre": 3200,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0,
      "price": 90
    },
    "mod": "Stardew Valley Expanded"
  },
  "persimmon": {
    "name": "Persimmon",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Persimmon",
    "img": "persimmon.png",
    "seeds": {
      "sell": 2000,
      "pierre": 8000,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "type": "Fruit",
      "extra": 0,
      "extraPerc": 0,
      "price": 200
    },
    "mod": "Stardew Valley Expanded"
  },
  "salal_berry": {
    "name": "Salal Berry",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Salal_Berry",
    "img": "salal_berry.png",
    "seeds": {
      "sell": 0,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Unpurchasable",
      "specialUrl": "https://stardew-valley-expanded.fandom.com/wiki/Shrub_Seed"
    },
    "growth": {
      "initial": 13,
      "regrow": 4
    },
    "produce": {
      "type": "Fruit",
      "extra": 2,
      "extraPerc": 0.03,
      "price": 75
    },
    "mod": "Stardew Valley Expanded"
  },
  "slime_berry": {
    "name": "Slime Berry",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Slime_Berry",
    "img": "slime_berry.png",
    "seeds": {
      "sell": 0,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Unpurchasable",
      "specialUrl": "https://stardew-valley-expanded.fandom.com/wiki/Slime_Seed"
    },
    "growth": {
      "initial": 13,
      "regrow": 4
    },
    "produce": {
      "type": "Fruit",
      "extra": 2,
      "extraPerc": 0.1,
      "price": 65
    },
    "mod": "Stardew Valley Expanded"
  },
  "sweet_potato": {
    "name": "Sweet Potato",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Sweet_Potato",
    "img": "sweet_potato.png",
    "seeds": {
      "sell": 67,
      "pierre": 134,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 280
    },
    "mod": "Stardew Valley Expanded"
  },
  "tree_coin": {
    "name": "Tree Coin",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Tree_Coin",
    "img": "tree_coin.png",
    "seeds": {
      "sell": 10000,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Unpurchasable",
      "specialUrl": "https://stardew-valley-expanded.fandom.com/wiki/Tree_Coin"
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "type": "Special",
      "extra": 0,
      "extraPerc": 0,
      "price": 1000
    },
    "mod": "Stardew Valley Expanded"
  },
  "void_root": {
    "name": "Void Root",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Void_Root",
    "img": "void_root.png",
    "seeds": {
      "sell": 0,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Unpurchasable",
      "specialUrl": "https://stardew-valley-expanded.fandom.com/wiki/Void_Seed"
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "type": "Vegetable",
      "extra": 0,
      "extraPerc": 0,
      "price": 235
    },
    "mod": "Stardew Valley Expanded"
  },
  // Cornucopia crops
  "adzuki_bean": {
    "name": "Adzuki Bean",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Adzuki_Bean",
    "img": "adzuki_bean.png",
    "seeds": {
      "sell": 50,
      "pierre": 100,
      "joja": 125,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 4
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0.2,
      "price": 60
    },
    "mod": "Cornucopia"
  },
  "agave": {
    "name": "Agave",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Agave",
    "img": "agave.png",
    "seeds": {
      "sell": 50,
      "pierre": 0,
      "joja": 0,
      "special": 100,
      "specialLoc": "Oasis",
      "specialUrl": "https://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 270
    },
    "mod": "Cornucopia"
  },
  "almond": {
    "name": "Almond",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Almond",
    "img": "almond.png",
    "seeds": {
      "sell": 937,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 90
    },
    "mod": "Cornucopia"
  },
  "aloe": {
    "name": "Aloe",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Aloe",
    "img": "aloe.png",
    "seeds": {
      "sell": 50,
      "pierre": 0,
      "joja": 0,
      "special": 100,
      "specialLoc": "Oasis",
      "specialUrl": "https://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 170
    },
    "mod": "Cornucopia"
  },
  "asparagus": {
    "name": "Asparagus",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Asparagus",
    "img": "asparagus.png",
    "seeds": {
      "sell": 30,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 140
    },
    "mod": "Cornucopia"
  },
  "avocado": {
    "name": "Avocado",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Avocado",
    "img": "avocado.png",
    "seeds": {
      "sell": 2000,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 200
    },
    "mod": "Cornucopia"
  },
  "bamboo": {
    "name": "Bamboo",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Bamboo",
    "img": "bamboo.png",
    "seeds": {
      "sell": 40,
      "pierre": 0,
      "joja": 0,
      "special": 80,
      "specialLoc": "Oasis",
      "specialUrl": "https://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 65
    },
    "mod": "Cornucopia"
  },
  "barley": {
    "name": "Barley",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Barley",
    "img": "barley.png",
    "seeds": {
      "sell": 5,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 25
    },
    "mod": "Cornucopia"
  },
  "basil": {
    "name": "Basil",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Basil",
    "img": "basil.png",
    "seeds": {
      "sell": 10,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 3,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 30
    },
    "mod": "Cornucopia"
  },
  "beansprouts": {
    "name": "Beansprouts",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Beansprouts",
    "img": "beansprouts.png",
    "seeds": {
      "sell": 50,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 30
    },
    "mod": "Cornucopia"
  },
  "bee_balm": {
    "name": "Bee Balm",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Bee_Balm",
    "img": "bee_balm.png",
    "seeds": {
      "sell": 10,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 30
    },
    "mod": "Cornucopia"
  },
  "bell_pepper": {
    "name": "Bell Pepper",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Bell_Pepper",
    "img": "bell_pepper.png",
    "seeds": {
      "sell": 65,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 4
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 70
    },
    "mod": "Cornucopia"
  },
  "black_beans": {
    "name": "Black Beans",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Black_Beans",
    "img": "black_beans.png",
    "seeds": {
      "sell": 30,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 3
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 15
    },
    "mod": "Cornucopia"
  },
  "blue_agave": {
    "name": "Blue Agave",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Blue_Agave",
    "img": "blue_agave.png",
    "seeds": {
      "sell": 90,
      "pierre": 0,
      "joja": 0,
      "special": 180,
      "specialLoc": "Oasis",
      "specialUrl": "https://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 400
    },
    "mod": "Cornucopia"
  },
  "blue_mist": {
    "name": "Blue Mist",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Blue_Mist",
    "img": "blue_mist.png",
    "seeds": {
      "sell": 10,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 30
    },
    "mod": "Cornucopia"
  },
  "bluebonnet": {
    "name": "Bluebonnet",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Bluebonnet",
    "img": "bluebonnet.png",
    "seeds": {
      "sell": 10,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 30
    },
    "mod": "Cornucopia"
  },
  "breadfruit": {
    "name": "Breadfruit",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Breadfruit",
    "img": "breadfruit.png",
    "seeds": {
      "sell": 2000,
      "pierre": 0,
      "joja": 0,
      "special": 4000,
      "specialLoc": "Oasis",
      "specialUrl": "https://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 240
    },
    "mod": "Cornucopia"
  },
  "buckwheat": {
    "name": "Buckwheat",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Buckwheat",
    "img": "buckwheat.png",
    "seeds": {
      "sell": 5,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 25
    },
    "mod": "Cornucopia"
  },
  "buttercup": {
    "name": "Buttercup",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Buttercup",
    "img": "buttercup.png",
    "seeds": {
      "sell": 10,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 25
    },
    "mod": "Cornucopia"
  },
  "cabbage": {
    "name": "Cabbage",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Cabbage",
    "img": "cabbage.png",
    "seeds": {
      "sell": 35,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 130
    },
    "mod": "Cornucopia"
  },
  "camphor_leaves": {
    "name": "Camphor Leaves",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Camphor_Leaves",
    "img": "camphor_leaves.png",
    "seeds": {
      "sell": 1000,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 100
    },
    "mod": "Cornucopia"
  },
  "canary_melon": {
    "name": "Canary Melon",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Canary_Melon",
    "img": "canary_melon.png",
    "seeds": {
      "sell": 225,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 5
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 225
    },
    "mod": "Cornucopia"
  },
  "canola_flower": {
    "name": "Canola Flower",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Canola_Flower",
    "img": "canola_flower.png",
    "seeds": {
      "sell": 50,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 40
    },
    "mod": "Cornucopia"
  },
  "cantaloupe": {
    "name": "Cantaloupe",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Cantaloupe",
    "img": "cantaloupe.png",
    "seeds": {
      "sell": 40,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 180
    },
    "mod": "Cornucopia"
  },
  "carnation": {
    "name": "Carnation",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Carnation",
    "img": "carnation.png",
    "seeds": {
      "sell": 20,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 80
    },
    "mod": "Cornucopia"
  },
  "cashew": {
    "name": "Cashew",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Cashew",
    "img": "cashew.png",
    "seeds": {
      "sell": 1000,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 100
    },
    "mod": "Cornucopia"
  },
  "cassava": {
    "name": "Cassava",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Cassava",
    "img": "cassava.png",
    "seeds": {
      "sell": 25,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0.2,
      "price": 80
    },
    "mod": "Cornucopia"
  },
  "catnip": {
    "name": "Catnip",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Catnip",
    "img": "catnip.png",
    "seeds": {
      "sell": 30,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 70
    },
    "mod": "Cornucopia"
  },
  "celery": {
    "name": "Celery",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Celery",
    "img": "celery.png",
    "seeds": {
      "sell": 15,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 45
    },
    "mod": "Cornucopia"
  },
  "chamomile": {
    "name": "Chamomile",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Chamomile",
    "img": "chamomile.png",
    "seeds": {
      "sell": 10,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 35
    },
    "mod": "Cornucopia"
  },
  "chickpea": {
    "name": "Chickpea",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Chickpea",
    "img": "chickpea.png",
    "seeds": {
      "sell": 100,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 5
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 55
    },
    "mod": "Cornucopia"
  },
  "chives": {
    "name": "Chives",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Chives",
    "img": "chives.png",
    "seeds": {
      "sell": 10,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 35
    },
    "mod": "Cornucopia"
  },
  "chrysanthemum": {
    "name": "Chrysanthemum",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Chrysanthemum",
    "img": "chrysanthemum.png",
    "seeds": {
      "sell": 20,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 80
    },
    "mod": "Cornucopia"
  },
  "cilantro": {
    "name": "Cilantro",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Cilantro",
    "img": "cilantro.png",
    "seeds": {
      "sell": 10,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 35
    },
    "mod": "Cornucopia"
  },
  "cinnamon_sticks": {
    "name": "Cinnamon Sticks",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Cinnamon_Sticks",
    "img": "cinnamon_sticks.png",
    "seeds": {
      "sell": 1500,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 140
    },
    "mod": "Cornucopia"
  },
  "clary_sage": {
    "name": "Clary Sage",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Clary_Sage",
    "img": "clary_sage.png",
    "seeds": {
      "sell": 10,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 30
    },
    "mod": "Cornucopia"
  },
  "clematis": {
    "name": "Clematis",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Clematis",
    "img": "clematis.png",
    "seeds": {
      "sell": 45,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 3
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0.03,
      "price": 110
    },
    "mod": "Cornucopia"
  },
  "cocoa_pod": {
    "name": "Cocoa Pod",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Cocoa__Pod",
    "img": "cocoa_pod.png",
    "seeds": {
      "sell": 1250,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 125
    },
    "mod": "Cornucopia"
  },
  "cotton_boll": {
    "name": "Cotton Boll",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Cotton_Boll",
    "img": "cotton_boll.png",
    "seeds": {
      "sell": 100,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 2
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0.1,
      "price": 80
    },
    "mod": "Cornucopia"
  },
  "cumin_seeds": {
    "name": "Cumin Seeds",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Cumin_Seeds",
    "img": "cumin_seeds.png",
    "seeds": {
      "sell": 40,
      "pierre": 0,
      "joja": 0,
      "special": 80,
      "specialLoc": "Oasis",
      "specialUrl": "https://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 40
    },
    "mod": "Cornucopia"
  },
  "dahlia": {
    "name": "Dahlia",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Dahlia",
    "img": "dahlia.png",
    "seeds": {
      "sell": 15,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 50
    },
    "mod": "Cornucopia"
  },
  "daikon": {
    "name": "Daikon",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Daikon",
    "img": "daikon.png",
    "seeds": {
      "sell": 70,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 195
    },
    "mod": "Cornucopia"
  },
  "daisy": {
    "name": "Daisy",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Daisy",
    "img": "daisy.png",
    "seeds": {
      "sell": 5,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 15
    },
    "mod": "Cornucopia"
  },
  "dill": {
    "name": "Dill",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Dill",
    "img": "dill.png",
    "seeds": {
      "sell": 25,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 65
    },
    "mod": "Cornucopia"
  },
  "dragon_fruit": {
    "name": "Dragon Fruit",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Dragon_Fruit",
    "img": "dragon_fruit.png",
    "seeds": {
      "sell": 1250,
      "pierre": 0,
      "joja": 0,
      "special": 2500,
      "specialLoc": "Oasis",
      "specialUrl": "https://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 125
    },
    "mod": "Cornucopia"
  },
  "durian": {
    "name": "Durian",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Durian",
    "img": "durian.png",
    "seeds": {
      "sell": 2000,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 350
    },
    "mod": "Cornucopia"
  },
  "durum": {
    "name": "Durum",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Durum",
    "img": "durum.png",
    "seeds": {
      "sell": 5,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 25
    },
    "mod": "Cornucopia"
  },
  "eucalyptus_leaves": {
    "name": "Eucalyptus Leaves",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Eucalyptus_Leaves",
    "img": "eucalyptus_leaves.png",
    "seeds": {
      "sell": 1375,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 135
    },
    "mod": "Cornucopia"
  },
  "fairy_duster": {
    "name": "Fairy Duster",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Fairy_Duster",
    "img": "fairy_duster.png",
    "seeds": {
      "sell": 10,
      "pierre": 0,
      "joja": 0,
      "special": 20,
      "specialLoc": "Oasis",
      "specialUrl": "https://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 40
    },
    "mod": "Cornucopia"
  },
  "fall_rose": {
    "name": "Fall Rose",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Fall_Rose",
    "img": "fall_rose.png",
    "seeds": {
      "sell": 100,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 5
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 290
    },
    "mod": "Cornucopia"
  },
  "fennel": {
    "name": "Fennel",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Fennel",
    "img": "fennel.png",
    "seeds": {
      "sell": 10,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 35
    },
    "mod": "Cornucopia"
  },
  "fenugreek": {
    "name": "Fenugreek",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Fenugreek",
    "img": "fenugreek.png",
    "seeds": {
      "sell": 10,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 35
    },
    "mod": "Cornucopia"
  },
  "fig": {
    "name": "Fig",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Fig",
    "img": "fig.png",
    "seeds": {
      "sell": 1000,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 100
    },
    "mod": "Cornucopia"
  },
  "freesia": {
    "name": "Freesia",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Freesia",
    "img": "freesia.png",
    "seeds": {
      "sell": 20,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 80
    },
    "mod": "Cornucopia"
  },
  "rafflesia": {
    "name": "Rafflesia",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Rafflesia",
    "img": "rafflesia.png",
    "seeds": {
      "sell": 500,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 34,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 2400
    },
    "mod": "Cornucopia"
  },
  "geranium": {
    "name": "Geranium",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Geranium",
    "img": "geranium.png",
    "seeds": {
      "sell": 20,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 80
    },
    "mod": "Cornucopia"
  },
  "ginseng": {
    "name": "Ginseng",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Ginseng",
    "img": "ginseng.png",
    "seeds": {
      "sell": 296,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 30,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 2600
    },
    "mod": "Cornucopia"
  },
  "grapefruit": {
    "name": "Grapefruit",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Grapefruit",
    "img": "grapefruit.png",
    "seeds": {
      "sell": 1500,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 140
    },
    "mod": "Cornucopia"
  },
  "green_peas": {
    "name": "Green Peas",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Green_Peas",
    "img": "green_peas.png",
    "seeds": {
      "sell": 25,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 35
    },
    "mod": "Cornucopia"
  },
  "groundcherries": {
    "name": "Groundcherries",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Groundcherries",
    "img": "groundcherries.png",
    "seeds": {
      "sell": 75,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 3
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 60
    },
    "mod": "Cornucopia"
  },
  "habanero": {
    "name": "Habanero",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Habanero",
    "img": "habanero.png",
    "seeds": {
      "sell": 65,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 5
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0.1,
      "price": 120
    },
    "mod": "Cornucopia"
  },
  "hibiscus": {
    "name": "Hibiscus",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Hibiscus",
    "img": "hibiscus.png",
    "seeds": {
      "sell": 750,
      "pierre": 0,
      "joja": 0,
      "special": 1500,
      "specialLoc": "Oasis",
      "specialUrl": "https://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 75
    },
    "mod": "Cornucopia"
  },
  "honeydew": {
    "name": "Honeydew",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Honeydew",
    "img": "honeydew.png",
    "seeds": {
      "sell": 40,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 180
    },
    "mod": "Cornucopia"
  },
  "honeysuckle": {
    "name": "Honeysuckle",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Honeysuckle",
    "img": "honeysuckle.png",
    "seeds": {
      "sell": 120,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 16,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.03,
      "price": 110
    },
    "mod": "Cornucopia"
  },
  "hyacinth": {
    "name": "Hyacinth",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Hyacinth",
    "img": "hyacinth.png",
    "seeds": {
      "sell": 20,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 80
    },
    "mod": "Cornucopia"
  },
  "hydrangea": {
    "name": "Hydrangea",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Hydrangea",
    "img": "hydrangea.png",
    "seeds": {
      "sell": 20,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 80
    },
    "mod": "Cornucopia"
  },
  "iris": {
    "name": "Iris",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Iris",
    "img": "iris.png",
    "seeds": {
      "sell": 25,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 90
    },
    "mod": "Cornucopia"
  },
  "jalapeño": {
    "name": "Jalapeño",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Jalapeño",
    "img": "jalapeño.png",
    "seeds": {
      "sell": 10,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 4
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0.1,
      "price": 40
    },
    "mod": "Cornucopia"
  },
  "jasmine": {
    "name": "Jasmine",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Jasmine",
    "img": "jasmine.png",
    "seeds": {
      "sell": 750,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 40
    },
    "mod": "Cornucopia"
  },
  "kidney_beans": {
    "name": "Kidney Beans",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Kidney_Beans",
    "img": "kidney_beans.png",
    "seeds": {
      "sell": 90,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 4
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 35
    },
    "mod": "Cornucopia"
  },
  "kiwifruit": {
    "name": "Kiwifruit",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Kiwifruit",
    "img": "kiwifruit.png",
    "seeds": {
      "sell": 50,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 21,
      "regrow": 2
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0.1,
      "price": 100
    },
    "mod": "Cornucopia"
  },
  "larkspur": {
    "name": "Larkspur",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Larkspur",
    "img": "larkspur.png",
    "seeds": {
      "sell": 25,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 90
    },
    "mod": "Cornucopia"
  },
  "lavender": {
    "name": "Lavender",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Lavender",
    "img": "lavender.png",
    "seeds": {
      "sell": 10,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 30
    },
    "mod": "Cornucopia"
  },
  "lemon": {
    "name": "Lemon",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Lemon",
    "img": "lemon.png",
    "seeds": {
      "sell": 500,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 50
    },
    "mod": "Cornucopia"
  },
  "lemongrass": {
    "name": "Lemongrass",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Lemongrass",
    "img": "lemongrass.png",
    "seeds": {
      "sell": 10,
      "pierre": 0,
      "joja": 0,
      "special": 20,
      "specialLoc": "Oasis",
      "specialUrl": "https://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 50
    },
    "mod": "Cornucopia"
  },
  "lentils": {
    "name": "Lentils",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Lentils",
    "img": "lentils.png",
    "seeds": {
      "sell": 20,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 20
    },
    "mod": "Cornucopia"
  },
  "lettuce": {
    "name": "Lettuce",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Lettuce",
    "img": "lettuce.png",
    "seeds": {
      "sell": 10,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 65
    },
    "mod": "Cornucopia"
  },
  "licorice_root": {
    "name": "Licorice Root",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Licorice_Root",
    "img": "licorice_root.png",
    "seeds": {
      "sell": 50,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 135
    },
    "mod": "Cornucopia"
  },
  "lily": {
    "name": "Lily",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Lily",
    "img": "lily.png",
    "seeds": {
      "sell": 25,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 90
    },
    "mod": "Cornucopia"
  },
  "lime": {
    "name": "Lime",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Lime",
    "img": "lime.png",
    "seeds": {
      "sell": 500,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 50
    },
    "mod": "Cornucopia"
  },
  "lotus": {
    "name": "Lotus",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Lotus",
    "img": "lotus.png",
    "seeds": {
      "sell": 30,
      "pierre": 0,
      "joja": 0,
      "special": 60,
      "specialLoc": "Oasis",
      "specialUrl": "https://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 11,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 150
    },
    "mod": "Cornucopia"
  },
  "lupine": {
    "name": "Lupine",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Lupine",
    "img": "lupine.png",
    "seeds": {
      "sell": 15,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 50
    },
    "mod": "Cornucopia"
  },
  "lychee": {
    "name": "Lychee",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Lychee",
    "img": "lychee.png",
    "seeds": {
      "sell": 1250,
      "pierre": 0,
      "joja": 0,
      "special": 2500,
      "specialLoc": "Oasis",
      "specialUrl": "https://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 110
    },
    "mod": "Cornucopia"
  },
  "magnolia": {
    "name": "Magnolia",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Magnolia",
    "img": "magnolia.png",
    "seeds": {
      "sell": 625,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 60
    },
    "mod": "Cornucopia"
  },
  "marjoram": {
    "name": "Marjoram",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Marjoram",
    "img": "marjoram.png",
    "seeds": {
      "sell": 15,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 50
    },
    "mod": "Cornucopia"
  },
  "melaleuca_leaves": {
    "name": "Melaleuca Leaves",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Melaleuca_Leaves",
    "img": "melaleuca_leaves.png",
    "seeds": {
      "sell": 1000,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 100
    },
    "mod": "Cornucopia"
  },
  "mint": {
    "name": "Mint",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Mint",
    "img": "mint.png",
    "seeds": {
      "sell": 15,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 50
    },
    "mod": "Cornucopia"
  },
  "morning_glory": {
    "name": "Morning Glory",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Morning_Glory",
    "img": "morning_glory.png",
    "seeds": {
      "sell": 120,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 110
    },
    "mod": "Cornucopia"
  },
  "mustard_greens": {
    "name": "Mustard Greens",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Mustard_Greens",
    "img": "mustard_greens.png",
    "seeds": {
      "sell": 20,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0.1,
      "price": 40
    },
    "mod": "Cornucopia"
  },
  "navy_beans": {
    "name": "Navy Beans",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Navy_Beans",
    "img": "navy_beans.png",
    "seeds": {
      "sell": 40,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 3
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 15
    },
    "mod": "Cornucopia"
  },
  "nutmeg": {
    "name": "Nutmeg",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Nutmeg",
    "img": "nutmeg.png",
    "seeds": {
      "sell": 1000,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 90
    },
    "mod": "Cornucopia"
  },
  "oats": {
    "name": "Oats",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Oats",
    "img": "oats.png",
    "seeds": {
      "sell": 5,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 25
    },
    "mod": "Cornucopia"
  },
  "okra": {
    "name": "Okra",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Okra",
    "img": "okra.png",
    "seeds": {
      "sell": 80,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.2,
      "price": 60
    },
    "mod": "Cornucopia"
  },
  "onion": {
    "name": "Onion",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Onion",
    "img": "onion.png",
    "seeds": {
      "sell": 40,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 115
    },
    "mod": "Cornucopia"
  },
  "orchid": {
    "name": "Orchid",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Orchid",
    "img": "orchid.png",
    "seeds": {
      "sell": 100,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 300
    },
    "mod": "Cornucopia"
  },
  "oregano": {
    "name": "Oregano",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Oregano",
    "img": "oregano.png",
    "seeds": {
      "sell": 15,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 50
    },
    "mod": "Cornucopia"
  },
  "pansy": {
    "name": "Pansy",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Pansy",
    "img": "pansy.png",
    "seeds": {
      "sell": 15,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 50
    },
    "mod": "Cornucopia"
  },
  "papaya": {
    "name": "Papaya",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Papaya",
    "img": "papaya.png",
    "seeds": {
      "sell": 150,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 135
    },
    "mod": "Cornucopia"
  },
  "parsley": {
    "name": "Parsley",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Parsley",
    "img": "parsley.png",
    "seeds": {
      "sell": 10,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 45
    },
    "mod": "Cornucopia"
  },
  "passion_fruit": {
    "name": "Passion Fruit",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Passion_Fruit",
    "img": "passion_fruit.png",
    "seeds": {
      "sell": 65,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 5
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 220
    },
    "mod": "Cornucopia"
  },
  "peanut": {
    "name": "Peanut",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Peanut",
    "img": "peanut.png",
    "seeds": {
      "sell": 30,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 20,
      "regrow": 0
    },
    "produce": {
      "extra": 2,
      "extraPerc": 0,
      "price": 85
    },
    "mod": "Cornucopia"
  },
  "pecan": {
    "name": "Pecan",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Pecan",
    "img": "pecan.png",
    "seeds": {
      "sell": 1250,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 125
    },
    "mod": "Cornucopia"
  },
  "peony": {
    "name": "Peony",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Peony",
    "img": "peony.png",
    "seeds": {
      "sell": 25,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 110
    },
    "mod": "Cornucopia"
  },
  "perilla_leaves": {
    "name": "Perilla Leaves",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Perilla_Leaves",
    "img": "perilla_leaves.png",
    "seeds": {
      "sell": 15,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 50
    },
    "mod": "Cornucopia"
  },
  "petunia": {
    "name": "Petunia",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Petunia",
    "img": "petunia.png",
    "seeds": {
      "sell": 15,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 50
    },
    "mod": "Cornucopia"
  },
  "pink_cat": {
    "name": "Pink Cat",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Pink_Cat",
    "img": "pink_cat.png",
    "seeds": {
      "sell": 10,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 30
    },
    "mod": "Cornucopia"
  },
  "pinto_beans": {
    "name": "Pinto Beans",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Pinto_Beans",
    "img": "pinto_beans.png",
    "seeds": {
      "sell": 40,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 3
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 15
    },
    "mod": "Cornucopia"
  },
  "pistachio": {
    "name": "Pistachio",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Pistachio",
    "img": "pistachio.png",
    "seeds": {
      "sell": 937,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 90
    },
    "mod": "Cornucopia"
  },
  "pitcher_plant": {
    "name": "Pitcher Plant",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Pitcher_Plant",
    "img": "pitcher_plant.png",
    "seeds": {
      "sell": 150,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 15,
      "regrow": 5
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 150
    },
    "mod": "Cornucopia"
  },
  "plantain": {
    "name": "Plantain",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Plantain",
    "img": "plantain.png",
    "seeds": {
      "sell": 450,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 175
    },
    "mod": "Cornucopia"
  },
  "pomelo": {
    "name": "Pomelo",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Pomelo",
    "img": "pomelo.png",
    "seeds": {
      "sell": 850,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 80
    },
    "mod": "Cornucopia"
  },
  "prismatic_rose": {
    "name": "Prismatic Rose",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Prismatic_Rose",
    "img": "prismatic_rose.png",
    "seeds": {
      "sell": 1000,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 20,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 1500
    },
    "mod": "Cornucopia"
  },
  "purple_coneflower": {
    "name": "Purple Coneflower",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Purple_Coneflower",
    "img": "purple_coneflower.png",
    "seeds": {
      "sell": 15,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 60
    },
    "mod": "Cornucopia"
  },
  "quinoa": {
    "name": "Quinoa",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Quinoa",
    "img": "quinoa.png",
    "seeds": {
      "sell": 10,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0.2,
      "price": 30
    },
    "mod": "Cornucopia"
  },
  "red_onion": {
    "name": "Red Onion",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Red_Onion",
    "img": "red_onion.png",
    "seeds": {
      "sell": 40,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 115
    },
    "mod": "Cornucopia"
  },
  "rose": {
    "name": "Rose",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Rose",
    "img": "rose.png",
    "seeds": {
      "sell": 100,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 290
    },
    "mod": "Cornucopia"
  },
  "rosemary": {
    "name": "Rosemary",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Rosemary",
    "img": "rosemary.png",
    "seeds": {
      "sell": 15,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 75
    },
    "mod": "Cornucopia"
  },
  "sage": {
    "name": "Sage",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Sage",
    "img": "sage.png",
    "seeds": {
      "sell": 20,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 70
    },
    "mod": "Cornucopia"
  },
  "sesame_seeds": {
    "name": "Sesame Seeds",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Sesame_Seeds",
    "img": "sesame_seeds.png",
    "seeds": {
      "sell": 60,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "extra": 2,
      "extraPerc": 0,
      "price": 60
    },
    "mod": "Cornucopia"
  },
  "shallot": {
    "name": "Shallot",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Shallot",
    "img": "shallot.png",
    "seeds": {
      "sell": 40,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 115
    },
    "mod": "Cornucopia"
  },
  "soybeans": {
    "name": "Soybeans",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Soybeans",
    "img": "soybeans.png",
    "seeds": {
      "sell": 65,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.1,
      "price": 65
    },
    "mod": "Cornucopia"
  },
  "spinach": {
    "name": "Spinach",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Spinach",
    "img": "spinach.png",
    "seeds": {
      "sell": 5,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 35
    },
    "mod": "Cornucopia"
  },
  "spring_rose": {
    "name": "Spring Rose",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Spring_Rose",
    "img": "spring_rose.png",
    "seeds": {
      "sell": 100,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 5
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 290
    },
    "mod": "Cornucopia"
  },
  "sugar_beet": {
    "name": "Sugar Beet",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Sugar_Beet",
    "img": "sugar_beet.png",
    "seeds": {
      "sell": 50,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 180
    },
    "mod": "Cornucopia"
  },
  "sugarcane": {
    "name": "Sugarcane",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Sugarcane",
    "img": "sugarcane.png",
    "seeds": {
      "sell": 10,
      "pierre": 0,
      "joja": 0,
      "special": 20,
      "specialLoc": "Oasis",
      "specialUrl": "https://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.1,
      "price": 30
    },
    "mod": "Cornucopia"
  },
  "summer_rose": {
    "name": "Summer Rose",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Summer_Rose",
    "img": "summer_rose.png",
    "seeds": {
      "sell": 100,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 5
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 290
    },
    "mod": "Cornucopia"
  },
  "tarragon": {
    "name": "Tarragon",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Tarragon",
    "img": "tarragon.png",
    "seeds": {
      "sell": 15,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 60
    },
    "mod": "Cornucopia"
  },
  "thyme": {
    "name": "Thyme",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Thyme",
    "img": "thyme.png",
    "seeds": {
      "sell": 15,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 50
    },
    "mod": "Cornucopia"
  },
  "turmeric": {
    "name": "Turmeric",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Turmeric",
    "img": "turmeric.png",
    "seeds": {
      "sell": 40,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 100
    },
    "mod": "Cornucopia"
  },
  "turnip": {
    "name": "Turnip",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Turnip",
    "img": "turnip.png",
    "seeds": {
      "sell": 15,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 75
    },
    "mod": "Cornucopia"
  },
  "ube": {
    "name": "Ube",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Ube",
    "img": "ube.png",
    "seeds": {
      "sell": 50,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0.1,
      "price": 200
    },
    "mod": "Cornucopia"
  },
  "ume": {
    "name": "Ume",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Ume",
    "img": "ume.png",
    "seeds": {
      "sell": 500,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 50
    },
    "mod": "Cornucopia"
  },
  "violet": {
    "name": "Violet",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Violet",
    "img": "violet.png",
    "seeds": {
      "sell": 10,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 30
    },
    "mod": "Cornucopia"
  },
  "walnut": {
    "name": "Walnut",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Walnut",
    "img": "walnut.png",
    "seeds": {
      "sell": 937,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 90
    },
    "mod": "Cornucopia"
  },
  "wasabi_root": {
    "name": "Wasabi Root",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Wasabi_Root",
    "img": "wasabi_root.png",
    "seeds": {
      "sell": 50,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 165
    },
    "mod": "Cornucopia"
  },
  "watermelon": {
    "name": "Watermelon",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Watermelon",
    "img": "watermelon.png",
    "seeds": {
      "sell": 150,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 640
    },
    "mod": "Cornucopia"
  },
  "winter_rose": {
    "name": "Winter Rose",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Winter_Rose",
    "img": "winter_rose.png",
    "seeds": {
      "sell": 100,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 5
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 290
    },
    "mod": "Cornucopia"
  },
  "wisteria": {
    "name": "Wisteria",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Wisteria",
    "img": "wisteria.png",
    "seeds": {
      "sell": 625,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 60
    },
    "mod": "Cornucopia"
  },
  "wolfsbane": {
    "name": "Wolfsbane",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Wolfsbane",
    "img": "wolfsbane.png",
    "seeds": {
      "sell": 25,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 140
    },
    "mod": "Cornucopia"
  },
  "wormwood": {
    "name": "Wormwood",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Wormwood",
    "img": "wormwood.png",
    "seeds": {
      "sell": 50,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 150
    },
    "mod": "Cornucopia"
  },
  "ylang_ylang": {
    "name": "Ylang Ylang",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Ylang_Ylang",
    "img": "ylang_ylang.png",
    "seeds": {
      "sell": 750,
      "pierre": 0,
      "joja": 0,
      "special": 1500,
      "specialLoc": "Oasis",
      "specialUrl": "https://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 75
    },
    "mod": "Cornucopia"
  },
  "yuzu": {
    "name": "Yuzu",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Yuzu",
    "img": "yuzu.png",
    "seeds": {
      "sell": 500,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 40
    },
    "mod": "Cornucopia"
  },
  "zucchini": {
    "name": "Zucchini",
    "url": "https://stardewcornucopia.wiki.gg/wiki/Zucchini",
    "img": "zucchini.png",
    "seeds": {
      "sell": 25,
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 14,
      "regrow": 2
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0.1,
      "price": 60
    }
  }
};
