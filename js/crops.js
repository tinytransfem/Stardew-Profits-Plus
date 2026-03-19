/*
 * All data gathered from a modified version of polarstoat/stardew-crop-data
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
      "extra": 0,
      "extraPerc": 0,
      "price": 150,
      "jarType": "Pickles",
      "kegType": "Juice"
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
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 28,
      "regrow": 7
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 550,
      "jarType": "Jelly",
      "kegType": "Wine",
      "dehydratorType": "Dried Fruit"
    }
  },
  "apple_sapling": {
    "name": "Apple Sapling",
    "url": "https://stardewvalleywiki.com/Apple_Sapling",
    "img": "apple_sapling.png",
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
      "extra": 0,
      "extraPerc": 0,
      "price": 100,
      "jarType": "Jelly",
      "kegType": "Wine",
      "dehydratorType": "Dried Fruit"
    }
  },
  "apricot_sapling": {
    "name": "Apricot Sapling",
    "url": "https://stardewvalleywiki.com/Apricot_Sapling",
    "img": "apricot_sapling.png",
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
      "extra": 0,
      "extraPerc": 0,
      "price": 50,
      "jarType": "Jelly",
      "kegType": "Wine",
      "dehydratorType": "Dried Fruit"
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
      "extra": 0,
      "extraPerc": 0,
      "price": 160,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "banana_sapling": {
    "name": "Banana Sapling",
    "url": "https://stardewvalleywiki.com/Banana_Sapling",
    "img": "banana_sapling.png",
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
      "price": 150,
      "jarType": "Jelly",
      "kegType": "Wine",
      "dehydratorType": "Dried Fruit"
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
      "extra": 0,
      "extraPerc": 0,
      "price": 100,
      "jarType": "Pickles",
      "kegType": "Juice",
      "millType": "Sugar"
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
      "extra": 0,
      "extraPerc": 0.02,
      "price": 50,
      "jarType": "Jelly",
      "kegType": "Wine",
      "dehydratorType": "Dried Fruit"
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
      "extra": 0,
      "extraPerc": 0,
      "price": 80,
      "jarType": "Pickles",
      "kegType": "Juice"
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
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 4
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 70,
      "jarType": "Pickles",
      "kegType": "Juice"
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
      "extra": 0,
      "extraPerc": 0,
      "price": 75,
      "jarType": "Jelly",
      "kegType": "Wine",
      "dehydratorType": "Dried Fruit"
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
      "price": 35,
      "jarType": "Pickles",
      "kegType": "Juice"
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
      "extra": 0,
      "extraPerc": 0,
      "price": 175,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "cherry_sapling": {
    "name": "Cherry Sapling",
    "url": "https://stardewvalleywiki.com/Cherry_Sapling",
    "img": "cherry_sapling.png",
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
      "extra": 0,
      "extraPerc": 0,
      "price": 80,
      "jarType": "Jelly",
      "kegType": "Wine",
      "dehydratorType": "Dried Fruit"
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 2
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0.02,
      "price": 15,
      "keg": 150 / 5,
      "kegType": "Coffee"
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
      "extra": 0,
      "extraPerc": 0,
      "price": 50,
      "jarType": "Pickles",
      "kegType": "Juice"
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
      "extra": 0,
      "extraPerc": 0.1,
      "price": 75,
      "jarType": "Jelly",
      "kegType": "Wine",
      "dehydratorType": "Dried Fruit"
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
      "extra": 0,
      "extraPerc": 0.002,
      "price": 60,
      "jarType": "Pickles",
      "kegType": "Juice"
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
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 3,
      "extraPerc": 0.01,
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
      "extra": 0,
      "extraPerc": 0,
      "price": 60,
      "jarType": "Pickles",
      "kegType": "Juice"
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
      "extra": 0,
      "extraPerc": 0,
      "price": 80,
      "jarType": "Jelly",
      "kegType": "Wine",
      "dehydratorType": "Raisins"
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
      "extra": 0,
      "extraPerc": 0,
      "price": 40,
      "jarType": "Pickles",
      "kegType": "Juice"
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
      "extra": 0,
      "extraPerc": 0,
      "price": 25,
      "keg": 300,
      "jarType": "Pickles",
      "kegType": "Pale Ale"
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
      "extra": 0,
      "extraPerc": 0.03,
      "price": 40,
      "jarType": "Jelly",
      "kegType": "Wine",
      "dehydratorType": "Dried Fruit"
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
      "extra": 0,
      "extraPerc": 0,
      "price": 110,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "mango_sapling": {
    "name": "Mango Sapling",
    "url": "https://stardewvalleywiki.com/Mango_Sapling",
    "img": "mango_sapling.png",
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
      "price": 130,
      "jarType": "Jelly",
      "kegType": "Wine",
      "dehydratorType": "Dried Fruit"
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
      "extra": 0,
      "extraPerc": 0,
      "price": 250,
      "jarType": "Jelly",
      "kegType": "Wine",
      "dehydratorType": "Dried Fruit"
    }
  },
  "orange_sapling": {
    "name": "Orange Sapling",
    "url": "https://stardewvalleywiki.com/Orange_Sapling",
    "img": "orange_sapling.png",
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
      "extra": 0,
      "extraPerc": 0,
      "price": 100,
      "jarType": "Jelly",
      "kegType": "Wine",
      "dehydratorType": "Dried Fruit"
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
      "extra": 0,
      "extraPerc": 0,
      "price": 35,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "peach_sapling": {
    "name": "Peach Sapling",
    "url": "https://stardewvalleywiki.com/Peach_Sapling",
    "img": "peach_sapling.png",
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
      "extra": 0,
      "extraPerc": 0,
      "price": 140,
      "jarType": "Jelly",
      "kegType": "Wine",
      "dehydratorType": "Dried Fruit"
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
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 14,
      "regrow": 7
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 300,
      "jarType": "Jelly",
      "kegType": "Wine",
      "dehydratorType": "Dried Fruit"
    }
  },
  "pomegranate_sapling": {
    "name": "Pomegranate Sapling",
    "url": "https://stardewvalleywiki.com/Pomegranate_Sapling",
    "img": "pomegranate_sapling.png",
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
      "extra": 0,
      "extraPerc": 0,
      "price": 140,
      "jarType": "Jelly",
      "kegType": "Wine",
      "dehydratorType": "Dried Fruit"
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
      "extra": 0,
      "extraPerc": 0.2,
      "price": 80,
      "jarType": "Pickles",
      "kegType": "Juice"
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
      "price": 60,
      "jarType": "Jelly",
      "kegType": "Wine",
      "dehydratorType": "Dried Fruit"
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
      "extra": 0,
      "extraPerc": 0,
      "price": 320,
      "jarType": "Pickles",
      "kegType": "Juice"
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
      "extra": 0,
      "extraPerc": 0,
      "price": 90,
      "jarType": "Pickles",
      "kegType": "Juice"
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
      "extra": 0,
      "extraPerc": 0,
      "price": 260,
      "jarType": "Pickles",
      "kegType": "Juice"
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
      "extra": 0,
      "extraPerc": 0,
      "price": 220,
      "jarType": "Jelly",
      "kegType": "Wine",
      "dehydratorType": "Dried Fruit"
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
      "extra": 0,
      "extraPerc": 0,
      "price": 750,
      "jarType": "Jelly",
      "kegType": "Wine",
      "dehydratorType": "Dried Fruit"
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
      "extraPerc": 0.02,
      "price": 120,
      "jarType": "Jelly",
      "kegType": "Wine",
      "dehydratorType": "Dried Fruit"
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
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 3
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 45,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "sunflower": {
    "name": "Sunflower",
    "url": "https://stardewvalleywiki.com/Sunflower",
    "img": "sunflower.png",
    "seeds": {
      "sell": 20,
      "pierre": 100,
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
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 24,
      "regrow": 0
    },
    "produce": {
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
      "price": 100,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "tea_leaves": {
    "name": "Tea Leaves",
    "url": "http://stardewvalleywiki.com/Tea_Leaves",
    "img": "tealeaves.png",
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
      "extra": 0,
      "extraPerc": 0,
      "price": 50,
      "keg": 100,
      "jarType": "Pickles",
      "kegType": "Tea"
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
      "extra": 0,
      "extraPerc": 0.05,
      "price": 60,
      "jarType": "Pickles",
      "kegType": "Juice"
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
      "extra": 0,
      "extraPerc": 0.1,
      "price": 30,
      "jarType": "Pickles",
      "kegType": "Juice",
      "millType": "Wheat Flour"
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
      "extra": 0,
      "extraPerc": 0,
      "price": 25,
      "keg": 200,
      "jarType": "Pickles",
      "kegType": "Beer"
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
      "extra": 0,
      "extraPerc": 0,
      "price": 160,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "springseeds": {
    "name": "Spring Seeds",
    "url": "http://stardewvalleywiki.com/Spring_Seeds",
    "img": "springseeds.png",
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
      "extra": 0,
      "extraPerc": 0,
      // (Wild Horseradish + Daffodil + Leek + Dandelion) / 4
      "price": (50 + 30 + 60 + 40) / 4
    },
    "isWildseed": true
  },
  "summerseeds": {
    "name": "Summer Seeds",
    "url": "http://stardewvalleywiki.com/Summer_Seeds",
    "img": "summerseeds.png",
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
      "extra": 0,
      "extraPerc": 0,
      // (Spice Berry + Grape + Sweet Pea) / 3
      "price": (80 + 80 + 50) / 3,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
    "isWildseed": true
  },
  "fallseeds": {
    "name": "Fall Seeds",
    "url": "http://stardewvalleywiki.com/Fall_Seeds",
    "img": "fallseeds.png",
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
      "extra": 0,
      "extraPerc": 0,
      // (Blackberry + Common Mushroom + Hazelnut + Wild Plum) / 4
      "price": (20 + 40 + 90 + 80) / 4,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
    "isWildseed": true
  },
  "winterseeds": {
    "name": "Winter Seeds",
    "url": "http://stardewvalleywiki.com/Winter_Seeds",
    "img": "winterseeds.png",
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
      "extra": 0,
      "extraPerc": 0,
      // (Crocus + Crystal Fruit + Snow Yam + Winter Root) / 4
      "price": (60 + 150 + 100 + 70) / 4,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
    "isWildseed": true
  },
  // SVE crops
  "cucumber": {
    "name": "Cucumber",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Cucumber",
    "img": "cucumber.png",
    "seeds": {
      "sell": 0,
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
      "extra": 0,
      "extraPerc": 0,
      "price": 45,
      "jarType": "Pickles"
    },
    "mod": "Stardew Valley Expanded"
  }
};
