// Prepare variables
var cropList;

var svgWidth = 1080;
var svgMinWidth = 300;
var svgHeight = 480;

var width = svgWidth - 48;
var height = (svgHeight - 56) / 2;
var barPadding = 4;
var paddingLeft = 8;
var miniBar = 8;
var barOffsetX = 56;
var barOffsetY = 40;
var graphDescription = "Profit";

// Prepare web elements
var svg = d3.select("div.graph")
	.append("svg")
	.attr("width", svgWidth)
	.attr("height", svgHeight)
	.style("background-color", "#333333")
	.style("border-radius", "8px");

var tooltip = d3.select("body")
	.append("div")
	.style("position", "absolute")
	.style("z-index", 10)
	.style("visibility", "hidden")
	.style("background", "rgb(0, 0, 0)")
	.style("background", "rgba(0, 0, 0, 0.75)")
	.style("padding", "8px")
	.style("border-radius", "8px")
	.style("border", "2px solid black");

var gAxis = svg.append("g");
var gTitle = svg.append("g");
var gProfit = svg.append("g");
var gSeedLoss = svg.append("g");
var gFertLoss = svg.append("g");
var gIcons = svg.append("g");
var gTooltips = svg.append("g");

var axisY;
var barsProfit;
var barsSeed;
var barsFert;
var imgIcons;
var barsTooltips;
var options;
var MAX_INT = Number.MAX_SAFE_INTEGER || Number.MAX_VALUE;

function el(id) {
	return document.getElementById(id);
}

/*
 * Formats a specified number, adding separators for thousands.
 * @param num The number to format.
 * @return Formatted string.
 */
function formatNumber(num) {
	num = num.toFixed(2) + '';
	x = num.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

/*
 * Calculates the maximum number of harvests for a crop, specified days, season, etc.
 * @param cropID The ID of the crop to calculate. This corresponds to the crop number of the selected season.
 * @return Number of harvests for the specified crop.
 */
function harvests(cropID) {

	// fruit trees always harvest once per day
	if (cropID >= seasons[options.season].crops.length) {
		return 28;
	}

	var crop = seasons[options.season].crops[cropID];
	var fertilizer = fertilizers[options.fertilizer];
	// Tea blooms every day for the last 7 days of a season
	var isTea = crop.name == "Tea Leaves";

	// if the crop is NOT cross season, remove 28 extra days for each extra season
	var remainingDays = options.days - 28;
	if (options.crossSeason && options.season != 4) {
		var i = options.season + 1;
		if (i >= 4)
			i = 0;
		for (var j = 0; j < seasons[i].crops.length; j++) {
			var seasonCrop = seasons[i].crops[j];
			if (crop.name == seasonCrop.name) {
				remainingDays += 28;
				break;
			}
		}
	} else {
		remainingDays = options.days;
	}

	var harvests = 0;
	var day = 1;

	if (options.skills.agri)
		day += Math.floor(crop.growth.initial * (fertilizer.growth - 0.1));
	else
		day += Math.floor(crop.growth.initial * fertilizer.growth);

	if (day <= remainingDays && (!isTea || ((day - 1) % 28 + 1) > 21))
		harvests++;

	while (day <= remainingDays) {
		if (crop.growth.regrow > 0) {
			day += crop.growth.regrow;
		} else {
			if (options.skills.agri)
				day += Math.floor(crop.growth.initial * (fertilizer.growth - 0.1));
			else
				day += Math.floor(crop.growth.initial * fertilizer.growth);
		}

		if (day <= remainingDays && (!isTea || ((day - 1) % 28 + 1) > 21))
			harvests++;
	}

	return harvests;
}

/*
 * Calculates the total number of crops harvested for a crop.
 * @param crop The crop object, containing all the crop data.
 * @return Number of crops for the specified crop.
 */
function harvested(crop) {
	return (planted(crop) * 1.0 + planted(crop) * crop.produce.extraPerc * crop.produce.extra) * crop.harvests;
}

/*
 * Calculates the minimum cost of a single packet of seeds.
 * @param crop The crop object, containing all the crop data.
 * @return The minimum cost of a packet of seeds, taking options into account.
 */
function minSeedCost(crop) {
	var minSeedCost = Infinity;

	if (crop.seeds.pierre != 0 && options.seeds.pierre && crop.seeds.pierre < minSeedCost)
		minSeedCost = crop.seeds.pierre;
	if (crop.seeds.joja != 0 && options.seeds.joja && crop.seeds.joja < minSeedCost)
		minSeedCost = crop.seeds.joja;
	if (crop.seeds.special != 0 && options.seeds.special && crop.seeds.special < minSeedCost)
		minSeedCost = crop.seeds.special;
	if (minSeedCost == Infinity)
		minSeedCost = 0;

	return minSeedCost;
}

/*
 * Calculates the number of crops planted.
 * @param crop The crop object, containing all the crop data.
 * @return The number of crops planted, taking the desired number planted and the max seed money into account.
 */
function planted(crop) {
	var plantedCount = Number(options.planted);

	if (options.buySeed && options.maxSeedMoney !== 0) {
		return Math.min(plantedCount, Math.floor(options.maxSeedMoney / minSeedCost(crop)));
	} else {
		return plantedCount;
	}
}

/*
 * Removes Number of crops from a quality for specified scenarios. Use this function to take produce away used as seeds or consumed for artisan goods.
 * This assumes lowest quality will be consumed first..
 *
 * @param crop Crop Data
 * @param cropsLeft Crops left unused if not selling raw.
 * @param extra Extra Crops produced
 * @return [countRegular, countSilver, countGold, countIridium] Number of produce for each quality.
 */
function removeCropQuality(removeCrop, countRegular, countSilver, countGold, countIridium) {
	if (removeCrop != 0) {
		// used = (totalCrops + (extra * crop.produce.extra)) - cropsLeft //something wrong with selling excess here
		if (countRegular - removeCrop < 0) {
			removeCrop -= countRegular;
			countRegular = 0;
			if (countSilver - removeCrop < 0) {
				removeCrop -= countSilver;
				countSilver = 0;
				if (countGold - removeCrop < 0) {
					removeCrop -= countGold;
					countGold = 0;
					if (countIridium - removeCrop < 0) {
						removeCrop -= countIridium;
						countIridium = 0;
					} else {
						countIridium -= removeCrop;
						removeCrop = 0;
					}
				} else {
					countGold -= removeCrop;
					removeCrop = 0;
				}
			} else {
				countSilver -= removeCrop;
				removeCrop = 0;
			}
		} else {
			countRegular -= removeCrop;
			removeCrop = 0;
		}
	}

	return [countRegular, countSilver, countGold, countIridium];
}

/*
 * Calculates netIncome based on Quality of Raw produce and Till Skill.
 *
 * @param crop Crop Data
 * @param countRegular Number of crops at regular quality.
 * @param countSilver Number of crops at silver quality.
 * @param countGold Number of crops at gold quality.
 * @param countIridium Number of crops at iridium quality.
 * @return netIncome Total Net Income based only on raw produce by quality including till skill.
 */
function rawNetIncome(crop, countRegular, countSilver, countGold, countIridium) {
	netIncome = 0;

	netIncome += crop.produce.price * countRegular;
	netIncome += Math.trunc(crop.produce.price * 1.25) * countSilver;
	netIncome += Math.trunc(crop.produce.price * 1.5) * countGold;
	netIncome += crop.produce.price * 2 * countIridium;

	if (options.skills.till) {
		netIncome *= 1.1;
	}

	return netIncome;
}

/*
 * Calculates the number of crops to convert to seed for replant.
 * @param crop The crop object, containing all the crop data.
 * @param num_planted The number of crops planted.
 * @return The number of crops planted, taking the desired number planted and the max seed money into account.
 */
function convertToSeeds(crop, num_planted, isTea, isCoffee) {
	var forSeeds = 0;
	if (options.replant && !isTea) {
		if (isCoffee && options.nextyear) {
			forSeeds = num_planted;
		} else if (crop.growth.regrow > 0 && options.nextyear) {
			forSeeds = num_planted * 0.5;
		} else if (crop.growth.regrow == 0) {
			forSeeds = num_planted * crop.harvests * 0.5;
			if (!options.nextyear && forSeeds >= 1)
				forSeeds -= num_planted * 0.5;
		}
	}
	return forSeeds;
}

/*
 * Returns the type of product to use for the crop and machine.
 * @param crop The crop object, containing all the crop data.
 * @param machine The machine type.
 * @return The product type.
 */
function getArtisanType(crop, machine) {
	if (machine == "raw" || machine == "seeds") {
		return null;
	}

	var overrideField = machine + "Override";

	if (crop.produce[overrideField] != null) {
		return crop.produce[overrideField];
	}

	var types = artisanMachines[machine].types;

	if (types[crop.produce.type] != null) {
		return types[crop.produce.type];
	}

	return "None";
}

/*
 * Calculates the price for the crop and machine.
 * @param crop The crop object, containing all the crop data.
 * @param machine The machine type.
 * @return The price.
 */
function getArtisanPrice(crop, machine) {
	var priceField = machine + "Price";
	var artisanType = getArtisanType(crop, machine);
	var machineData = artisanMachines[machine];
	var basePrice = 0;

	if (crop.produce[priceField] != null) {
		basePrice = crop.produce[priceField];
	}
	else if (artisanType != "None" && machineData.typePrice != null && machineData.typePrice[artisanType] != null) {
		var priceData = machineData.typePrice[artisanType];

		switch (priceData.mode) {
			case "multiplier":
				basePrice = crop.produce.price * priceData.multiplier;
				break;
			case "multiplierPlusFlat":
				basePrice = crop.produce.price * priceData.multiplier + priceData.flat;
				break;
			default:
				basePrice = 0;
		}
	}

	if (artisanType == "Wine") {
		basePrice *= getCaskModifier();
	}

	if (artisanType != "Coffee" && options.skills.arti) {
		basePrice *= 1.4;
	}

	return Math.round(basePrice);
}

/*
 * Calculates the cask modifier for the crop.
 * @param crop The crop object, containing all the crop data.
 * @return The cask modifier.
 */
function getCaskModifier() {
	switch (options.aging) {
		case 1: return 1.25;
		case 2: return 1.5;
		case 3: return 2;
		default: return 1;
	}
}

function isMachineEnabled(machineKey) {
	if (!(machineKey in artisanMachines)) {
		return false;
	}

	var mod = artisanMachines[machineKey].mod;

	if (mod == null || mod == "Vanilla") {
		return true;
	}

	if (mod == "Cornucopia - Artisan Machines") {
		return options.enableCornucopiaMachines;
	}

	return false;
}

function rebuildMachineSelector() {
	var select = el("select_machine");
	var currentValue = select.value;
	var enabledMachineKeys = getEnabledMachineKeys();

	select.innerHTML = "";

	function addOption(value, label) {
		var option = document.createElement("option");
		option.value = value;
		option.textContent = label;
		select.appendChild(option);
	}

	addOption("raw", "Raw");

	for (var i = 0; i < enabledMachineKeys.length; i++) {
		var key = enabledMachineKeys[i];
		addOption(key, artisanMachines[key].label);
	}

	addOption("seeds", "Seeds");

	if (
		currentValue == "raw" ||
		currentValue == "seeds" ||
		enabledMachineKeys.includes(currentValue)
	) {
		select.value = currentValue;
	} else {
		select.value = "raw";
	}
}

function getEnabledMachineKeys() {
	var keys = [];

	for (var key in artisanMachines) {
		if (isMachineEnabled(key)) {
			keys.push(key);
		}
	}

	return keys;
}

function isSpecialMachine(machine) {
	return machine == "raw" || machine == "seeds";
}

function isArtisanMachine(machine) {
	return machine in artisanMachines;
}

function machineUsesAging(machine) {
	if (!isArtisanMachine(machine)) return false;

	var machineData = artisanMachines[machine];
	if (machineData.typePrice == null) return false;

	for (var productType in machineData.typePrice) {
		if (productType == "Wine") {
			return true;
		}
	}

	return false;
}

function machineCanSellRawFallback(machine) {
	return isArtisanMachine(machine);
}

function getProduceSoldLabel(machine) {
	if (machine == "raw") return "Raw crops";
	if (machine == "seeds") return "Seeds";

	if (isArtisanMachine(machine)) {
		return artisanMachines[machine].label;
	}

	return "None";
}

function appendQuantitySoldRow(table, quantity) {
	var row = table.append("tr");
	row.append("td").attr("class", "tooltipTdRight").text("Quantity sold:");
	row.append("td")
		.attr("class", quantity > 0 ? "tooltipTdRight" : "tooltipTdRightNeg")
		.text(quantity);
}

function appendExcessRow(table, excessProduce) {
	if (!(excessProduce > 0)) return;

	var row = table.append("tr");

	if (options.sellExcess) {
		row.append("td").attr("class", "tooltipTdRight").text("Excess Produce:");
		row.append("td").attr("class", "tooltipTdRight").text(excessProduce);
	} else {
		row.append("td").attr("class", "tooltipTdRight").text("Excess Unsold:");
		row.append("td").attr("class", "tooltipTdRightNeg").text(excessProduce);
	}
}

function appendProduceSoldSection(table, crop, machine) {
	var row = table.append("tr");
	row.append("td").attr("class", "tooltipTdLeftSpace").text("Produce sold:");

	var artisanType = getArtisanType(crop, machine);
	var fallsBackToRaw = isArtisanMachine(machine) && artisanType == "None";

	if (machine == "raw") {
		row.append("td").attr("class", "tooltipTdRight").text("Raw crops");
		appendQuantitySoldRow(table, crop.profitData.quantitySold);
		return;
	}

	if (machine == "seeds") {
		row.append("td").attr("class", "tooltipTdRight").text("Seeds");
		appendQuantitySoldRow(table, crop.profitData.quantitySold);
		return;
	}

	if (isArtisanMachine(machine) && artisanType != "None") {
		row.append("td").attr("class", "tooltipTdRight").text(artisanType);
		appendQuantitySoldRow(table, crop.profitData.quantitySold);
		appendExcessRow(table, crop.profitData.excessProduce);
		return;
	}

	if (fallsBackToRaw && options.sellRaw) {
		row.append("td").attr("class", "tooltipTdRightNeg").text("Raw crops");
		appendQuantitySoldRow(table, crop.profitData.quantitySold);
		return;
	}

	row.append("td").attr("class", "tooltipTdRightNeg").text("None");
}

/*
 * Calculates how many crops are used for a product.
 * @param crop The crop object, containing all the crop data.
 * @return The number of crops used.
 */
function getMultiCropUsage(crop, machine) {
	var useField = machine + "Uses";
	return crop.produce[useField] != null ? crop.produce[useField] : artisanMachines[machine].baseUses;
}

/*
 * Calculates final crop quality probabilities based on Farming level and fertilizer.
 * The game rolls qualities in this order: iridium -> gold -> silver -> regular.
 *
 * @param crop The crop object.
 * @param farmingLevel Effective farming level, including food buffs.
 * @param fertilizerRatio Fertilizer quality ratio from your fertilizer data.
 * @return Object with final probabilities for regular, silver, gold, iridium.
 */
function getQualityProbabilities(crop, farmingLevel, fertilizerRatio) {
	if (crop.name == "Tea Leaves") {
		return {
			regular: 1,
			silver: 0,
			gold: 0,
			iridium: 0
		};
	}

	var fertilizerLevel = 0;

	if (fertilizerRatio >= 3) {
		fertilizerLevel = 3;
	} else if (fertilizerRatio >= 2) {
		fertilizerLevel = 2;
	} else if (fertilizerRatio >= 1) {
		fertilizerLevel = 1;
	}

	var goldChance =
		0.2 * (farmingLevel / 10) +
		0.2 * fertilizerLevel * ((farmingLevel + 2) / 12) +
		0.01;

	var silverRollChance = Math.min(0.75, goldChance * 2);
	var iridiumRollChance = fertilizerLevel >= 3 ? goldChance / 2 : 0;

	goldChance = Math.max(0, Math.min(1, goldChance));
	silverRollChance = Math.max(0, Math.min(1, silverRollChance));
	iridiumRollChance = Math.max(0, Math.min(1, iridiumRollChance));

	var iridium = iridiumRollChance;
	var gold = (1 - iridium) * goldChance;
	var silver;

	if (fertilizerLevel >= 3) {
		silver = 1 - iridium - gold;
	} else {
		silver = (1 - iridium - gold) * silverRollChance;
	}

	var regular = 1 - iridium - gold - silver;

	regular = Math.max(0, regular);
	silver = Math.max(0, silver);
	gold = Math.max(0, gold);
	iridium = Math.max(0, iridium);

	return {
		regular: regular,
		silver: silver,
		gold: gold,
		iridium: iridium
	};
}

function appendValueChanceRow(table, leftClass, label, value, chance) {
	var tooltipTr = table.append("tr");
	tooltipTr.append("td").attr("class", leftClass).text(label);

	var tdRight = tooltipTr.append("td").attr("class", "tooltipTdRight");
	var priceSpan = tdRight.append("span").attr("class", "price");
	priceSpan.append("span").text(value);
	priceSpan.append("div").attr("class", "gold");
	tdRight.append("span").attr("class", "uses").text(" (" + chance.toFixed(0) + "%)");
}

function appendArtisanValueRow(table, crop, machine, leftClass) {
	var tooltipTr = table.append("tr");
	var artisanType = getArtisanType(crop, machine);

	if (artisanType != "None") {
		tooltipTr.append("td").attr("class", leftClass).text("Value (" + artisanType + "):");

		var tdRight = tooltipTr.append("td").attr("class", "tooltipTdRight");
		var priceSpan = tdRight.append("span").attr("class", "price");
		priceSpan.append("span").text(getArtisanPrice(crop, machine));
		priceSpan.append("div").attr("class", "gold");

		if (getMultiCropUsage(crop, machine) > 1)
			tdRight.append("span").attr("class", "uses").text(" (uses " + getMultiCropUsage(crop, machine) + ")");
	} else {
		tooltipTr.append("td").attr("class", leftClass).text("Value (" + artisanMachines[machine].label + "):");

		var tdRight = tooltipTr.append("td").attr("class", "tooltipTdRight");
		tdRight.append("span").attr("class", "price").text("-");
	}
}

function appendSeedSourceRows(table, crop) {
	var first = true;

	if (crop.seeds.pierre > 0) {
		appendTooltipGoldRow(table, "tooltipTdLeftSpace", "tooltipTdRight", "Seeds (Pierre):", crop.seeds.pierre);
		first = false;
	}
	if (crop.seeds.joja > 0) {
		appendTooltipGoldRow(table, first ? "tooltipTdLeftSpace" : "tooltipTdLeft", "tooltipTdRight", "Seeds (Joja):", crop.seeds.joja);
		first = false;
	}
	if (crop.seeds.special > 0) {
		appendTooltipGoldRow(table, first ? "tooltipTdLeftSpace" : "tooltipTdLeft", "tooltipTdRight", "Seeds (Special):", crop.seeds.special);
		appendTooltipRow(table, "tooltipTdLeft", "tooltipTdRight", "", crop.seeds.specialLoc);
	}
}

function appendTooltipRow(table, leftClass, rightClass, label, value) {
	var tr = table.append("tr");
	tr.append("td").attr("class", leftClass).text(label);
	tr.append("td").attr("class", rightClass).text(value);
	return tr;
}

function appendTooltipGoldRow(table, leftClass, rightClass, label, value) {
	var tr = table.append("tr");
	tr.append("td").attr("class", leftClass).text(label);
	tr.append("td").attr("class", rightClass).text(value)
		.append("div").attr("class", "gold");
	return tr;
}

/*
 * Calculates the profit for a specified crop.
 * @param crop The crop object, containing all the crop data.
 * @return The total profit.
 */
function profit(crop) {
	var profitData = {};

	var numPlanted = planted(crop);
	var fertilizer = fertilizers[options.fertilizer];
	var machine = options.machine;
	var isTea = crop.name == "Tea Leaves";
	var isCoffee = crop.name == "Coffee Bean";

	var useLevel = options.level + options.foodLevel;
	var probability = getQualityProbabilities(crop, useLevel, fertilizer.ratio);

	var netIncome = 0;
	var netExpenses = 0;
	var totalProfit = 0;
	var totalReturnOnInvestment = 0;
	var averageReturnOnInvestment = 0;

	crop.produce.regular = 0;
	crop.produce.silver = 0;
	crop.produce.gold = 0;
	crop.produce.iridium = 0;

	var artisanType = getArtisanType(crop, machine);
	var isArtisanMachine = artisanMachines[machine] != null;
	var fallsBackToRaw = isArtisanMachine && artisanType == "None";

	var forSeeds = convertToSeeds(crop, numPlanted, isTea, isCoffee);

	var extraTotal = (crop.produce.extraPerc * crop.produce.extra) * crop.harvests;
	crop.produce.extraProduced = Math.floor(extraTotal);

	var totalHarvest = numPlanted + numPlanted * crop.produce.extraPerc * crop.produce.extra;
	var totalCrops = totalHarvest * crop.harvests;

	var countRegular = totalCrops * probability.regular;
	var countSilver = totalCrops * probability.silver;
	var countGold = totalCrops * probability.gold;
	var countIridium = totalCrops * probability.iridium;

	[countRegular, countSilver, countGold, countIridium] =
		removeCropQuality(forSeeds, countRegular, countSilver, countGold, countIridium);

	if (machine == "raw" || fallsBackToRaw) {
		if (!(fallsBackToRaw && !options.sellRaw)) {
			netIncome += rawNetIncome(crop, countRegular, countSilver, countGold, countIridium);

			crop.produce.regular = countRegular;
			crop.produce.silver = countSilver;
			crop.produce.gold = countGold;
			crop.produce.iridium = countIridium;

			profitData.quantitySold = Math.floor(totalCrops - forSeeds);
		} else {
			profitData.quantitySold = 0;
		}
	}

	else if (machine == "seeds") {
		if (!isCoffee) {
			var seedItems = totalCrops - forSeeds;
			netIncome += 2 * seedItems * crop.seeds.sell;
			profitData.quantitySold = Math.floor(2 * seedItems);
		} else {
			profitData.quantitySold = 0;
		}
	}

	else if (isArtisanMachine) {
		var cropsPerItem = getMultiCropUsage(crop, machine);
		var usableCrops = Math.max(0, Math.floor(totalCrops - forSeeds));
		var itemsMade = Math.floor(usableCrops / cropsPerItem);
		var cropsLeft = usableCrops % cropsPerItem;

		if (options.sellExcess && cropsLeft > 0) {
			[countRegular, countSilver, countGold, countIridium] =
				removeCropQuality(totalCrops - cropsLeft, countRegular, countSilver, countGold, countIridium);

			netIncome += rawNetIncome(crop, countRegular, countSilver, countGold, countIridium);

			crop.produce.regular = Math.round((countRegular + Number.EPSILON) * 100) / 100;
			crop.produce.silver = Math.round((countSilver + Number.EPSILON) * 100) / 100;
			crop.produce.gold = Math.round((countGold + Number.EPSILON) * 100) / 100;
			crop.produce.iridium = Math.round((countIridium + Number.EPSILON) * 100) / 100;
		}

		netIncome += itemsMade * getArtisanPrice(crop, machine);

		profitData.quantitySold = itemsMade;
		profitData.excessProduce = cropsLeft;
	}

	if (options.buySeed) {
		netExpenses += crop.seedLoss;
	}

	if (options.buyFert) {
		netExpenses += crop.fertLoss;
	}

	totalProfit = netIncome + netExpenses;

	if (netExpenses != 0) {
		totalReturnOnInvestment = 100 * (totalProfit / -netExpenses);

		if (crop.growth.regrow == 0) {
			averageReturnOnInvestment = totalReturnOnInvestment / crop.growth.initial;
		} else {
			averageReturnOnInvestment = totalReturnOnInvestment / options.days;
		}
	} else {
		totalReturnOnInvestment = 0;
		averageReturnOnInvestment = 0;
	}

	profitData.totalReturnOnInvestment = totalReturnOnInvestment;
	profitData.averageReturnOnInvestment = averageReturnOnInvestment;
	profitData.netExpenses = netExpenses;
	profitData.profit = totalProfit;

	profitData.regular = probability.regular;
	profitData.silver = probability.silver;
	profitData.gold = probability.gold;
	profitData.iridium = probability.iridium;

	return profitData;
}

/*
 * Calculates the loss to profit when seeds are bought.
 * @param crop The crop object, containing all the crop data.
 * @return The total loss.
 */
function seedLoss(crop) {
	var harvests = crop.harvests;

	var loss = -minSeedCost(crop);

	if (crop.growth.regrow == 0 && harvests > 0 && !options.replant)
		loss = loss * harvests;

	return loss * planted(crop);
}

/*
 * Calculates the loss to profit when fertilizer is bought.
 *
 * Note that harvesting does not destroy fertilizer, so this is
 * independent of the number of harvests.
 *
 * @param crop The crop object, containing all the crop data.
 * @return The total loss.
 */
function fertLoss(crop) {
	var loss;
	if (options.fertilizer == 4 && options.fertilizerSource == 1)
		loss = -fertilizers[options.fertilizer].alternate_cost;
	else
		loss = -fertilizers[options.fertilizer].cost;
	return loss * planted(crop);
}

/*
 * Converts any value to the average per day value.
 * @param value The value to convert.
 * @return Value per day.
 */
function perDay(value) {
	return value / options.days;
}

/*
 * Performs filtering on a season's crop list, saving the new list to the cropList array.
 */
function fetchCrops() {
	cropList = [];

	var season = seasons[options.season];

	for (var i = 0; i < season.crops.length; i++) {
		if (((season.crops[i].mod == "vanilla" || season.crops[i].mod == undefined) && (options.enableVanilla || !options.enableMods)) ||
			(season.crops[i].mod == "Stardew Valley Expanded" && options.enableMods && options.enableSVE) ||
			(season.crops[i].mod == "Cornucopia" && options.enableMods && options.enableCornucopia)) {

			if ((options.seeds.pierre && season.crops[i].seeds.pierre != 0) ||
				(options.seeds.joja && season.crops[i].seeds.joja != 0) ||
				(options.seeds.special && season.crops[i].seeds.specialLoc != "")) {

				cropList.push(JSON.parse(JSON.stringify(season.crops[i])));
				cropList[cropList.length - 1].id = i;
			}
		}
	}

	if (options.fruit) {
		for (var i = 0; i < season.fruit.length; i++) {
			if (((season.fruit[i].mod == "vanilla" || season.fruit[i].mod == undefined) && (options.enableVanilla || !options.enableMods)) ||
				(season.fruit[i].mod == "Stardew Valley Expanded" && options.enableMods && options.enableSVE) ||
				(season.fruit[i].mod == "Cornucopia" && options.enableMods && options.enableCornucopia)) {

				if ((options.seeds.pierre && season.fruit[i].seeds.pierre != 0) ||
					(options.seeds.joja && season.fruit[i].seeds.joja != 0) ||
					(options.seeds.special && season.fruit[i].seeds.specialLoc != "")) {

					cropList.push(JSON.parse(JSON.stringify(season.fruit[i])));
					cropList[cropList.length - 1].id = season.crops.length + i;
				}
			}
		}
	}
}

/*
 * Calculates all profits and losses for all crops in the cropList array.
 */
function valueCrops() {
	for (var i = 0; i < cropList.length; i++) {
		cropList[i].planted = planted(cropList[i]);
		cropList[i].harvests = harvests(cropList[i].id);
		cropList[i].totalCrops = harvested(cropList[i]);
		cropList[i].seedLoss = seedLoss(cropList[i]);
		cropList[i].fertLoss = fertLoss(cropList[i]);
		cropList[i].profitData = profit(cropList[i]);
		cropList[i].profit = cropList[i].profitData.profit;
		cropList[i].totalReturnOnInvestment = cropList[i].profitData.totalReturnOnInvestment;
		cropList[i].averageReturnOnInvestment = cropList[i].profitData.averageReturnOnInvestment;
		cropList[i].netExpenses = cropList[i].profitData.netExpenses;
		cropList[i].averageProfit = perDay(cropList[i].profit);
		cropList[i].averageSeedLoss = perDay(cropList[i].seedLoss);
		cropList[i].averageFertLoss = perDay(cropList[i].fertLoss);

		if (options.average == 1) {
			cropList[i].drawProfit = cropList[i].averageProfit;
			cropList[i].drawSeedLoss = cropList[i].averageSeedLoss;
			cropList[i].drawFertLoss = cropList[i].averageFertLoss;
			graphDescription = options.planted > 1 ? "Daily Profit per " + options.planted + " tiles" : "Daily Profit per 1 tile";
		}
		else if ((options.average == 2)) {
			if (options.buySeed || (options.buyFert && fertilizers[options.fertilizer].cost > 0)) {
				cropList[i].drawProfit = cropList[i].totalReturnOnInvestment;
				graphDescription = options.planted > 1 ? "Total Return On Investment per " + options.planted + " tiles" : "Total Return On Investment per 1 tile";
			}
			else {
				cropList[i].drawProfit = 0;
				graphDescription = options.planted > 1 ? "Total Profit per " + options.planted + " tiles (Choose an expense for ROI)" : "Total Profit per 1 tile (Choose an expense for ROI)";
			}
			cropList[i].drawSeedLoss = cropList[i].seedLoss;
			cropList[i].drawFertLoss = cropList[i].fertLoss;
		}
		else if (options.average == 3) {
			cropList[i].drawSeedLoss = cropList[i].averageSeedLoss;
			cropList[i].drawFertLoss = cropList[i].averageFertLoss;
			if (options.buySeed || (options.buyFert && fertilizers[options.fertilizer].cost > 0)) {
				cropList[i].drawProfit = cropList[i].averageReturnOnInvestment;
				graphDescription = options.planted > 1 ? "Daily Return On Investment per " + options.planted + " tiles" : "Daily Return On Investment per 1 tile";
			} else {
				cropList[i].drawProfit = 0;
				graphDescription = options.planted > 1 ? "Daily Profit per " + options.planted + " tiles (Choose an expense for ROI)" : "Daily Profit per 1 tile (Choose an expense for ROI)";
			}
		} else {
			cropList[i].drawProfit = cropList[i].profit;
			cropList[i].drawSeedLoss = cropList[i].seedLoss;
			cropList[i].drawFertLoss = cropList[i].fertLoss;
			graphDescription = options.planted > 1 ? "Total Profit per " + options.planted + " tiles" : "Total Profit per 1 tile";
		}
	}
}

/*
 * Sorts the cropList array, so that the most profitable crop is the first one.
 */
function sortCrops() {
	cropList.sort(function (a, b) {
		return b.drawProfit - a.drawProfit;
	});
}

/*
 * Updates the X D3 scale.
 * @return The new scale.
 */
function updateScaleX(graphWidth) {
	return d3.scale.ordinal()
		.domain(d3.range(cropList.length))
		.rangeRoundBands([0, graphWidth], 0.08, 0.04);
}

/*
 * Updates the Y and axis D3 scale.
 * @return The new scale.
 */
function updateScaleY() {
	var domain = getVerticalDomain();

	return d3.scale.linear()
		.domain([domain.min, domain.max])
		.range([height * 2, 0]);
}

function getVerticalDomain() {
	var minValue = 0;
	var maxValue = 0;

	for (var i = 0; i < cropList.length; i++) {
		var d = cropList[i];

		if (d.drawProfit < minValue)
			minValue = d.drawProfit;

		if (options.buySeed && d.drawSeedLoss < minValue)
			minValue = d.drawSeedLoss;

		if (options.buyFert && d.drawFertLoss < minValue)
			minValue = d.drawFertLoss;

		if (d.drawProfit > maxValue)
			maxValue = d.drawProfit;
	}

	// add 10% space above the highest positive value
	if (maxValue > 0) {
		maxValue = maxValue * 1.1;
	}

	minValue = Math.floor(minValue / 100) * 100;
	maxValue = Math.ceil(maxValue / 100) * 100;

	// avoid 0..0
	if (minValue == maxValue) {
		if (maxValue == 0)
			maxValue = 100;
		else if (maxValue > 0)
			minValue = 0;
		else
			maxValue = 0;
	}

	return {
		min: minValue,
		max: maxValue
	};
}

/*
 * Renders the graph.
 * This is called only when opening for the first time or when changing seasons/seeds.
 */
function renderGraph() {

	var graphWidth = Math.max(
		svgMinWidth - barOffsetX - paddingLeft - barPadding * 2,
		cropList.length * 32
	);

	var x = updateScaleX(graphWidth);
	var barWidth = x.rangeBand();
	var iconSize = Math.min(barWidth, 48);
	var y = updateScaleY();
	var zeroY = y(0) + barOffsetY;
	var ax = updateScaleY();

	var svgActualWidth = barOffsetX + graphWidth + paddingLeft + barPadding * 2;
	svg.attr("width", svgActualWidth).style("padding-top", "12px");
	d3.select(".graph").attr("width", svgActualWidth);

	var yAxis = d3.svg.axis()
		.scale(ax)
		.orient("left")
		.tickFormat(d3.format(",s"))
		.ticks(16);

	axisY = gAxis.attr("class", "axis")
		.call(yAxis)
		.attr("transform", "translate(48, " + barOffsetY + ")");

	title = gTitle.attr("class", "Title")
		.append("text")
		.attr("class", "axis")
		.attr("x", 24)
		.attr("y", 12)
		.style("text-anchor", "start")
		.text(graphDescription);

	barsProfit = gProfit.selectAll("rect")
		.data(cropList)
		.enter()
		.append("rect")
		.attr("x", function (d, i) {
			if (d.drawProfit < 0 && options.buySeed && options.buyFert)
				return x(i) + barOffsetX + (barWidth / miniBar) * 2;
			else if (d.drawProfit < 0 && !options.buySeed && options.buyFert)
				return x(i) + barOffsetX + barWidth / miniBar;
			else if (d.drawProfit < 0 && options.buySeed && !options.buyFert)
				return x(i) + barOffsetX + barWidth / miniBar;
			else
				return x(i) + barOffsetX;
		})
		.attr("y", function (d) {
			if (d.drawProfit >= 0)
				return y(d.drawProfit) + barOffsetY;
			else
				return zeroY;
		})
		.attr("height", function (d) {
			return Math.abs(y(d.drawProfit) - y(0));
		})
		.attr("width", function (d) {
			if (d.drawProfit < 0 && options.buySeed && options.buyFert)
				return barWidth - (barWidth / miniBar) * 2;
			else if (d.drawProfit < 0 && !options.buySeed && options.buyFert)
				return barWidth - barWidth / miniBar;
			else if (d.drawProfit < 0 && options.buySeed && !options.buyFert)
				return barWidth - barWidth / miniBar;
			else
				return barWidth;
		})
		.attr("fill", function (d) {
			if (d.drawProfit >= 0)
				return "lime";
			else
				return "red";
		});

	barsSeed = gSeedLoss.selectAll("rect")
		.data(cropList)
		.enter()
		.append("rect")
		.attr("x", function (d, i) { return x(i) + barOffsetX; })
		.attr("y", zeroY)
		.attr("height", function (d) {
			if (options.buySeed)
				return Math.abs(y(d.drawSeedLoss) - y(0));
			else
				return 0;
		})
		.attr("width", barWidth / miniBar)
		.attr("fill", "orange");

	barsFert = gFertLoss.selectAll("rect")
		.data(cropList)
		.enter()
		.append("rect")
		.attr("x", function (d, i) {
			if (options.buySeed)
				return x(i) + barOffsetX + barWidth / miniBar;
			else
				return x(i) + barOffsetX;
		})
		.attr("y", zeroY)
		.attr("height", function (d) {
			if (options.buyFert)
				return Math.abs(y(d.drawFertLoss) - y(0));
			else
				return 0;
		})
		.attr("width", barWidth / miniBar)
		.attr("fill", "brown");

	imgIcons = gIcons.selectAll("image")
		.data(cropList)
		.enter()
		.append("svg:image")
		.attr("x", function (d, i) {
			return x(i) + barOffsetX + (barWidth - iconSize) / 2;
		})
		.attr("y", function (d) {
			if (d.drawProfit >= 0)
				return y(d.drawProfit) + barOffsetY - iconSize - barPadding;
			else
				return zeroY - iconSize - barPadding;
		})
		.attr("width", iconSize)
		.attr("height", iconSize)
		.attr("xlink:href", function (d) { return "img/" + d.img; });

	barsTooltips = gTooltips.selectAll("rect")
		.data(cropList)
		.enter()
		.append("rect")
		.attr("x", function (d, i) { return x(i) + barOffsetX - barPadding / 2; })
		.attr("y", function (d) {
			var values = [0, d.drawProfit];

			if (options.buySeed)
				values.push(d.drawSeedLoss);
			if (options.buyFert)
				values.push(d.drawFertLoss);

			var topValue = d3.max(values);
			var topY = Math.min(y(topValue), y(0));

			return topY + barOffsetY - barWidth - barPadding;
		})
		.attr("height", function (d) {
			var values = [0, d.drawProfit];

			if (options.buySeed)
				values.push(d.drawSeedLoss);
			if (options.buyFert)
				values.push(d.drawFertLoss);

			var topValue = d3.max(values);
			var bottomValue = d3.min(values);

			var topY = Math.min(y(topValue), y(0));
			var bottomY = Math.max(y(bottomValue), y(0));

			return Math.max(0, (bottomY - topY) + barWidth + barPadding);
		})
		.attr("width", barWidth + barPadding)
		.attr("fill", "transparent")
		.attr("pointer-events", "all")
		.attr("cursor", "pointer")
		.on("mouseover", function (d) {
			tooltip.selectAll("*").remove();
			tooltip.style("visibility", "visible");

			tooltip.append("h3").attr("class", "tooltipTitle").text(d.name);

			var tooltipTable = tooltip.append("table")
				.attr("class", "tooltipTable")
				.attr("cellspacing", 0);
			var tooltipTr;


			tooltipTr = tooltipTable.append("tr");
			tooltipTr.append("td").attr("class", "tooltipTdLeft").text("Total profit:");

			if (d.profit > 0)
				tooltipTr.append("td").attr("class", "tooltipTdRightPos").text("+" + formatNumber(d.profit))
					.append("div").attr("class", "gold");
			else
				tooltipTr.append("td").attr("class", "tooltipTdRightNeg").text(formatNumber(d.profit))
					.append("div").attr("class", "gold");

			tooltipTr = tooltipTable.append("tr");
			tooltipTr.append("td").attr("class", "tooltipTdLeft").text("Profit per day:");
			if (d.averageProfit > 0)
				tooltipTr.append("td").attr("class", "tooltipTdRightPos").text("+" + formatNumber(d.averageProfit))
					.append("div").attr("class", "gold");
			else
				tooltipTr.append("td").attr("class", "tooltipTdRightNeg").text(formatNumber(d.averageProfit))
					.append("div").attr("class", "gold");

			if (options.buySeed || options.buyFert) {
				tooltipTr = tooltipTable.append("tr");
				tooltipTr.append("td").attr("class", "tooltipTdLeft").text("Return on investment:");
				if (d.totalReturnOnInvestment > 0)
					tooltipTr.append("td").attr("class", "tooltipTdRightPos").text("+" + formatNumber(d.totalReturnOnInvestment) + "%");
				else
					tooltipTr.append("td").attr("class", "tooltipTdRightNeg").text(formatNumber(d.totalReturnOnInvestment) + "%");

				tooltipTr = tooltipTable.append("tr");
				tooltipTr.append("td").attr("class", "tooltipTdLeft").text("Return on investment per day:");
				if (d.averageReturnOnInvestment > 0)
					tooltipTr.append("td").attr("class", "tooltipTdRightPos").text("+" + formatNumber(d.averageReturnOnInvestment) + "%");
				else
					tooltipTr.append("td").attr("class", "tooltipTdRightNeg").text(formatNumber(d.averageReturnOnInvestment) + "%");
			}

			if (options.buySeed) {
				appendTooltipGoldRow(tooltipTable, "tooltipTdLeftSpace", "tooltipTdRightNeg", "Total seed loss:", formatNumber(d.seedLoss));
				appendTooltipGoldRow(tooltipTable, "tooltipTdLeft", "tooltipTdRightNeg", "Seed loss per day:", formatNumber(d.averageSeedLoss));
			}

			if (options.buyFert) {
				appendTooltipGoldRow(tooltipTable, "tooltipTdLeftSpace", "tooltipTdRightNeg", "Total fertilizer loss:", formatNumber(d.fertLoss));
				appendTooltipGoldRow(tooltipTable, "tooltipTdLeft", "tooltipTdRightNeg", "Fertilizer loss per day:", formatNumber(d.averageFertLoss));
			}

			appendProduceSoldSection(tooltipTable, d, options.machine);

			appendTooltipRow(tooltipTable, "tooltipTdLeft", "tooltipTdRight", "Duration:", options.days + " days");
			appendTooltipRow(tooltipTable, "tooltipTdLeft", "tooltipTdRight", "Crop tiles:", d.planted);
			appendTooltipRow(tooltipTable, "tooltipTdLeft", "tooltipTdRight", "Harvests:", d.harvests);
			appendTooltipRow(tooltipTable, "tooltipTdLeft", "tooltipTdRight", "Total Crops:", Math.floor(d.totalCrops));

			if (options.extra) {
				var fertilizer = fertilizers[options.fertilizer];
				var seedPrice = d.seeds.sell;
				var initialGrow = 0;
				if (options.skills.agri)
					initialGrow += Math.floor(d.growth.initial * (fertilizer.growth - 0.1));
				else
					initialGrow += Math.floor(d.growth.initial * fertilizer.growth);

				var qualityRows = [
					{ label: "Normal", value: d.produce.price, chance: d.profitData.regular * 100, sold: d.produce.regular, show: true },
					{ label: "Silver", value: Math.trunc(d.produce.price * 1.25), chance: d.profitData.silver * 100, sold: d.produce.silver, show: d.name != "Tea Leaves" },
					{ label: "Gold", value: Math.trunc(d.produce.price * 1.5), chance: d.profitData.gold * 100, sold: d.produce.gold, show: d.name != "Tea Leaves" },
					{ label: "Iridium", value: d.produce.price * 2, chance: d.profitData.iridium * 100, sold: d.produce.iridium, show: d.name != "Tea Leaves" && fertilizers[options.fertilizer].ratio >= 3 }
				];

				tooltip.append("h3").attr("class", "tooltipTitleExtra").text("Crop Info");
				tooltipTable = tooltip.append("table")
					.attr("class", "tooltipTable")
					.attr("cellspacing", 0);

				for (var i = 0; i < qualityRows.length; i++) {
					if (qualityRows[i].show) {
						appendValueChanceRow(
							tooltipTable,
							"tooltipTdLeft",
							"Value (" + qualityRows[i].label + "):",
							qualityRows[i].value,
							qualityRows[i].chance
						);
					}
				}

				tooltip.append("h4").attr("class", "tooltipTitleExtra").text("Artisan:");
				tooltipTable = tooltip.append("table")
					.attr("class", "tooltipTable")
					.attr("cellspacing", 0);

				var machineKeys = getEnabledMachineKeys();

				for (var i = 0; i < machineKeys.length; i++) {
					appendArtisanValueRow(
						tooltipTable,
						d,
						machineKeys[i],
						i == 0 ? "tooltipTdLeftSpace" : "tooltipTdLeft"
					);
				}

				tooltipTr = tooltipTable.append("tr");
				tooltipTr.append("td").attr("class", "tooltipTdLeft").text("Value (Seeds):");
				var tdRight = tooltipTr.append("td").attr("class", "tooltipTdRight");
				var priceSpan = tdRight.append("span").attr("class", "price");
				priceSpan.append("span").text(seedPrice);
				priceSpan.append("div").attr("class", "gold");

				tooltip.append("h4").attr("class", "tooltipTitleExtra").text("Other Details:");
				tooltipTable = tooltip.append("table")
					.attr("class", "tooltipTable")
					.attr("cellspacing", 0);

				appendSeedSourceRows(tooltipTable, d);

				appendTooltipRow(tooltipTable, "tooltipTdLeftSpace", "tooltipTdRight", "Time to grow:", initialGrow + " days");
				appendTooltipRow(tooltipTable, "tooltipTdLeft", "tooltipTdRight", "Time to regrow:", d.growth.regrow > 0 ? d.growth.regrow + " days" : "N/A");

				if (d.produce.extra > 0) {
					appendTooltipRow(tooltipTable, "tooltipTdLeft", "tooltipTdRight", "Extra produce:", d.produce.extra);
					appendTooltipRow(tooltipTable, "tooltipTdLeft", "tooltipTdRight", "Extra chance:", (d.produce.extraPerc * 100).toFixed(1) + "%");
				}
				if (d.produce.extraPerc > 0) {
					appendTooltipRow(tooltipTable, "tooltipTdLeft", d.produce.extraProduced > 0 ? "tooltipTdRight" : "tooltipTdRightNeg", "Extra Produced:", d.produce.extraProduced);
				}
			}
		})
		.on("mousemove", function () {
			tooltip.style("top", (d3.event.pageY - 16) + "px").style("left", (d3.event.pageX + 20) + "px");
		})
		.on("mouseout", function () { tooltip.style("visibility", "hidden"); })
		.on("click", function (d) {
			if (!options.disableLinks)
				window.open(d.url, "_blank");
		});
}

/*
 * Updates the already rendered graph, showing animations.
 */
function updateGraph() {
	var graphWidth = Math.max(
		svgMinWidth - barOffsetX - paddingLeft - barPadding * 2,
		cropList.length * 32
	);

	var x = updateScaleX(graphWidth);
	var barWidth = x.rangeBand();
	var y = updateScaleY();
	var zeroY = y(0) + barOffsetY;
	var ax = updateScaleY();

	var svgActualWidth = barOffsetX + graphWidth + paddingLeft + barPadding * 2;
	svg.attr("width", svgActualWidth);
	d3.select(".graph").attr("width", svgActualWidth);

	var yAxis = d3.svg.axis()
		.scale(ax)
		.orient("left")
		.tickFormat(d3.format(",s"))
		.ticks(16);

	axisY.transition()
		.call(yAxis);

	title = gTitle.attr("class", "Title")
		.append("text")
		.attr("class", "axis")
		.attr("x", 24)
		.attr("y", 12)
		.style("text-anchor", "start")
		.text(graphDescription);

	barsProfit.data(cropList)
		.transition()
		.attr("x", function (d, i) {
			if (d.drawProfit < 0 && options.buySeed && options.buyFert)
				return x(i) + barOffsetX + (barWidth / miniBar) * 2;
			else if (d.drawProfit < 0 && !options.buySeed && options.buyFert)
				return x(i) + barOffsetX + barWidth / miniBar;
			else if (d.drawProfit < 0 && options.buySeed && !options.buyFert)
				return x(i) + barOffsetX + barWidth / miniBar;
			else
				return x(i) + barOffsetX;
		})
		.attr("y", function (d) {
			if (d.drawProfit >= 0)
				return y(d.drawProfit) + barOffsetY;
			else
				return zeroY;
		})
		.attr("height", function (d) {
			return Math.abs(y(d.drawProfit) - y(0));
		})
		.attr("width", function (d) {
			if (d.drawProfit < 0 && options.buySeed && options.buyFert)
				return barWidth - (barWidth / miniBar) * 2;
			else if (d.drawProfit < 0 && !options.buySeed && options.buyFert)
				return barWidth - barWidth / miniBar;
			else if (d.drawProfit < 0 && options.buySeed && !options.buyFert)
				return barWidth - barWidth / miniBar;
			else
				return barWidth;
		})
		.attr("fill", function (d) {
			if (d.drawProfit >= 0)
				return "lime";
			else
				return "red";
		});

	barsSeed.data(cropList)
		.transition()
		.attr("x", function (d, i) { return x(i) + barOffsetX; })
		.attr("y", zeroY)
		.attr("height", function (d) {
			if (options.buySeed)
				return Math.abs(y(d.drawSeedLoss) - y(0));
			else
				return 0;
		})
		.attr("width", barWidth / miniBar)
		.attr("fill", "orange");

	barsFert.data(cropList)
		.transition()
		.attr("x", function (d, i) {
			if (options.buySeed)
				return x(i) + barOffsetX + barWidth / miniBar;
			else
				return x(i) + barOffsetX;
		})
		.attr("y", zeroY)
		.attr("height", function (d) {
			if (options.buyFert)
				return Math.abs(y(d.drawFertLoss) - y(0));
			else
				return 0;
		})
		.attr("width", barWidth / miniBar)
		.attr("fill", "brown");

	imgIcons.data(cropList)
		.transition()
		.attr("x", function (d, i) { return x(i) + barOffsetX; })
		.attr("y", function (d) {
			if (d.drawProfit >= 0)
				return y(d.drawProfit) + barOffsetY - barWidth - barPadding;
			else
				return zeroY - barWidth - barPadding;
		})
		.attr('width', barWidth)
		.attr('height', barWidth)
		.attr("xlink:href", function (d) { return "img/" + d.img; });

	barsTooltips.data(cropList)
		.transition()
		.attr("x", function (d, i) { return x(i) + barOffsetX - barPadding / 2; })
		.attr("y", function (d) {
			var values = [0, d.drawProfit];

			if (options.buySeed)
				values.push(d.drawSeedLoss);
			if (options.buyFert)
				values.push(d.drawFertLoss);

			var topValue = d3.max(values);
			var topY = Math.min(y(topValue), y(0));

			return topY + barOffsetY - barWidth - barPadding;
		})
		.attr("height", function (d) {
			var values = [0, d.drawProfit];

			if (options.buySeed)
				values.push(d.drawSeedLoss);
			if (options.buyFert)
				values.push(d.drawFertLoss);

			var topValue = d3.max(values);
			var bottomValue = d3.min(values);

			var topY = Math.min(y(topValue), y(0));
			var bottomY = Math.max(y(bottomValue), y(0));

			return Math.max(0, (bottomY - topY) + barWidth + barPadding);
		})
		.attr("width", barWidth + barPadding);
}

function updateSeasonNames() {
	if (options.crossSeason) {
		el('season_0').innerHTML = "Spring & Summer";
		el('season_1').innerHTML = "Summer & Fall";
		el('season_2').innerHTML = "Fall & Winter";
		el('season_3').innerHTML = "Winter & Spring";
	}
	else {
		el('season_0').innerHTML = "Spring";
		el('season_1').innerHTML = "Summer";
		el('season_2').innerHTML = "Fall";
		el('season_3').innerHTML = "Winter";
	}
}

/*
 * Updates all options and data, based on the options set in the HTML.
 * After that, filters, values and sorts all the crops again.
 */
function updateData() {

	options.season = parseInt(el('select_season').value);
	const isGreenhouse = options.season == 4;

	options.machine = el('select_machine').value;

	var tr_check_sellRawID = el('tr_check_sellRaw');
	var tr_check_sellExcessID = el('tr_check_sellExcess');
	var tr_select_agingID = el('tr_select_aging');

	if (machineCanSellRawFallback(options.machine)) {
		tr_check_sellRawID.classList.remove('hidden');
		tr_check_sellExcessID.classList.remove('hidden');
	} else {
		tr_check_sellRawID.classList.add('hidden');
		tr_check_sellExcessID.classList.add('hidden');

		el('check_sellRaw').checked = false;
		el('check_sellExcess').checked = false;
	}

	if (machineUsesAging(options.machine)) {
		tr_select_agingID.classList.remove('hidden');
		el('select_aging').disabled = false;
		el('select_aging').style.cursor = "pointer";
	} else {
		tr_select_agingID.classList.add('hidden');
		el('select_aging').disabled = true;
		el('select_aging').style.cursor = "default";
		el('select_aging').value = 0;
	}

	options.sellRaw = el('check_sellRaw').checked;
	options.sellExcess = el('check_sellExcess').checked;
	options.aging = parseInt(el('select_aging').value);

	if (el('max_seed_money').value < 0)
		el('max_seed_money').value = '0';
	options.maxSeedMoney = parseInt(el('max_seed_money').value);
	if (isNaN(options.maxSeedMoney)) {
		options.maxSeedMoney = 0;
	}

	options.average = parseInt(el('select_profit_display').value);

	options.crossSeason = el('cross_season').checked;

	if (!isGreenhouse) {
		el('number_days').disabled = true;
		el('cross_season').disabled = false;
		el('cross_season').style.cursor = "pointer";
		el('current_day').disabled = false;
		el('current_day').style.cursor = "text";

		if (el('current_day').value <= 0)
			el('current_day').value = 1;
		if (options.crossSeason) {
			el('number_days').value = 56;
			if (el('current_day').value > 56)
				el('current_day').value = 56;
			options.days = 57 - el('current_day').value;
		}
		else {
			el('number_days').value = 28;
			if (el('current_day').value > 28)
				el('current_day').value = 28;
			options.days = 29 - el('current_day').value;
		}
	} else {
		el('number_days').disabled = false;
		el('cross_season').disabled = true;
		el('cross_season').style.cursor = "default";
		el('current_day').disabled = true;
		el('current_day').style.cursor = "default";

		el('current_day').value = 1;

		if (el('number_days').value > 100000)
			el('number_days').value = 100000;
		options.days = el('number_days').value;
	}

	options.seeds.pierre = el('check_seedsPierre').checked;
	options.seeds.joja = el('check_seedsJoja').checked;
	options.seeds.special = el('check_seedsSpecial').checked;

	options.buySeed = el('check_buySeed').checked;

	options.replant = el('check_replant').checked;

	if (!options.replant || isGreenhouse) {
		el('check_nextyear').disabled = true;
		el('check_nextyear').style.cursor = "default";
		el('check_nextyear').checked = false;
	}
	else {
		el('check_nextyear').disabled = false;
		el('check_nextyear').style.cursor = "pointer";
	}
	options.nextyear = el('check_nextyear').checked;

	if (el('number_planted').value <= 0)
		el('number_planted').value = 1;
	if (options.replant && parseInt(el('number_planted').value) % 2 == 1)
		el('number_planted').value = parseInt(el('number_planted').value) + 1;

	options.planted = parseInt(el('number_planted').value, 10);

	options.fertilizer = parseInt(el('select_fertilizer').value);

	options.buyFert = el('check_buyFert').checked;

	options.fertilizerSource = parseInt(el('speed_gro_source').value);

	if (el('farming_level').value <= 0)
		el('farming_level').value = 0;
	if (el('farming_level').value > 13)
		el('farming_level').value = 13;
	options.level = parseInt(el('farming_level').value);

	if (options.level >= 5) {
		el('check_skillsTill').disabled = false;
		el('check_skillsTill').style.cursor = "pointer";
		options.skills.till = el('check_skillsTill').checked;
	}
	else {
		el('check_skillsTill').disabled = true;
		el('check_skillsTill').style.cursor = "default";
		el('check_skillsTill').checked = false;
		options.skills.till = el('check_skillsTill').checked;
	}

	if (options.level >= 10 && options.skills.till) {
		el('select_skills').disabled = false;
		el('select_skills').style.cursor = "pointer";
	}
	else {
		el('select_skills').disabled = true;
		el('select_skills').style.cursor = "default";
		el('select_skills').value = 0;
	}
	if (el('select_skills').value == 1) {
		options.skills.agri = true;
		options.skills.arti = false;
	}
	else if (el('select_skills').value == 2) {
		options.skills.agri = false;
		options.skills.arti = true;
	}
	else {
		options.skills.agri = false;
		options.skills.arti = false;
	}

	if (el('foraging_level').value <= 0)
		el('foraging_level').value = 0;
	if (el('foraging_level').value > 13)
		el('foraging_level').value = 13;
	options.foragingLevel = parseInt(el('foraging_level').value);

	if (options.foragingLevel >= 5) {
		el('check_skillsGatherer').disabled = false;
		el('check_skillsGatherer').style.cursor = "pointer";
	}
	else {
		el('check_skillsGatherer').disabled = true;
		el('check_skillsGatherer').style.cursor = "default";
		el('check_skillsGatherer').checked = false;
	}
	options.skills.gatherer = el('check_skillsGatherer').checked;

	if (options.foragingLevel >= 10 && options.skills.gatherer) {
		el('check_skillsBotanist').disabled = false;
		el('check_skillsBotanist').style.cursor = "pointer";
	}
	else {
		el('check_skillsBotanist').disabled = true;
		el('check_skillsBotanist').style.cursor = "default";
		el('check_skillsBotanist').checked = false;
	}
	options.skills.botanist = el('check_skillsBotanist').checked;

	options.foodIndex = el('select_food').value;
	options.foodLevel = parseInt(el('select_food').options[options.foodIndex].value);
	if (options.buyFert && options.fertilizer == 4)
		el('speed_gro_source').disabled = false;
	else
		el('speed_gro_source').disabled = true;

	options.extra = el('check_extra').checked;
	options.disableLinks = el('disable_links').checked;

	updateSeasonNames();

	// tree fruit support options
	options.fruit = el('fruit').checked;

	// mod support options
	options.enableMods = el('enable_mods').checked;

	var tr_check_vanillaID = el('tr_check_vanilla');
	var tr_check_sveID = el('tr_check_sve');
	var tr_check_cornucopiaID = el('tr_check_cornucopia');
	var tr_check_cornucopia_machinesID = el('tr_check_cornucopia_machines');

	if (options.enableMods == false) {
		tr_check_vanillaID.classList.add('hidden');
		tr_check_sveID.classList.add('hidden');
		tr_check_cornucopiaID.classList.add('hidden');
		tr_check_cornucopia_machinesID.classList.add('hidden');
	}
	else {
		tr_check_vanillaID.classList.remove('hidden');
		tr_check_sveID.classList.remove('hidden');
		tr_check_cornucopiaID.classList.remove('hidden');
		tr_check_cornucopia_machinesID.classList.remove('hidden');
	}

	options.enableVanilla = el('check_vanilla').checked;
	options.enableSVE = el('check_sve').checked;
	options.enableCornucopia = el('check_cornucopia').checked;
	options.enableCornucopiaMachines = el('check_cornucopia_machines').checked;

	rebuildMachineSelector();
	options.machine = el('select_machine').value;

	// Persist the options object into the URL hash.
	window.location.hash = encodeURIComponent(serialize(options));

	fetchCrops();
	valueCrops();
	sortCrops();
}

/*
 * Called once on startup to draw the UI.
 */
function initial() {
	optionsLoad();
	updateData();
	renderGraph();
}

/*
 * Called on every option change to animate the graph.
 */
function refresh() {
	updateData();
	gTitle.selectAll("*").remove();
	updateGraph();
}

/*
 * Parse out and validate the options from the URL hash.
 */
function optionsLoad() {
	if (!window.location.hash) return;

	options = deserialize(window.location.hash.slice(1));

	function validBoolean(q) {
		return q == 1;
	}

	function validIntRange(min, max, num) {
		return num < min ? min : num > max ? max : parseInt(num, 10);
	}

	function validMachine(machine) {
		var valid = ["raw", "seeds"];
		var enabledMachineKeys = getEnabledMachineKeys();

		for (var i = 0; i < enabledMachineKeys.length; i++) {
			valid.push(enabledMachineKeys[i]);
		}

		return valid.includes(machine) ? machine : "raw";
	}

	options.season = validIntRange(0, 4, options.season);
	el('select_season').value = options.season;

	options.sellRaw = validBoolean(options.sellRaw);
	el('check_sellRaw').checked = options.sellRaw;

	options.sellExcess = validBoolean(options.sellExcess);
	el('check_sellExcess').checked = options.sellExcess;

	options.aging = validIntRange(0, 3, options.aging);
	el('select_aging').value = options.aging;

	options.planted = validIntRange(1, MAX_INT, options.planted);
	el('number_planted').value = options.planted;

	options.maxSeedMoney = validIntRange(0, MAX_INT, options.maxSeedMoney);
	el('max_seed_money').value = options.maxSeedMoney;

	options.average = validIntRange(0, 3, options.average);
	el('select_profit_display').value = options.average;

	options.crossSeason = validBoolean(options.crossSeason);
	el('cross_season').checked = options.crossSeason;

	var daysMax = 0;
	if (options.crossSeason)
		daysMax = options.season === 4 ? MAX_INT : 56;
	else
		daysMax = options.season === 4 ? MAX_INT : 28;

	options.days = validIntRange(1, daysMax, options.days);
	if (options.season === 4) {
		el('number_days').value = options.days;
	}
	else {
		if (options.crossSeason) {
			el('number_days').value = 56;
			el('current_day').value = 57 - options.days;
		}
		else {
			el('number_days').value = 28;
			el('current_day').value = 29 - options.days;
		}
	}

	options.seeds.pierre = validBoolean(options.seeds.pierre);
	el('check_seedsPierre').checked = options.seeds.pierre;

	options.seeds.joja = validBoolean(options.seeds.joja);
	el('check_seedsJoja').checked = options.seeds.joja;

	options.seeds.special = validBoolean(options.seeds.special);
	el('check_seedsSpecial').checked = options.seeds.special;

	options.buySeed = validBoolean(options.buySeed);
	el('check_buySeed').checked = options.buySeed;

	options.replant = validBoolean(options.replant);
	el('check_replant').checked = options.replant;

	options.nextyear = validBoolean(options.nextyear);
	el('check_nextyear').checked = options.nextyear;

	options.fertilizer = validIntRange(0, 6, options.fertilizer);
	el('select_fertilizer').value = options.fertilizer;

	options.fertilizerSource = validIntRange(0, 1, options.fertilizerSource);
	el('speed_gro_source').value = options.fertilizerSource;

	options.buyFert = validBoolean(options.buyFert);
	el('check_buyFert').checked = options.buyFert;

	options.level = validIntRange(0, 13, options.level);
	el('farming_level').value = options.level;

	options.skills.till = validBoolean(options.skills.till);
	el('check_skillsTill').checked = options.skills.till;

	options.skills.agri = validBoolean(options.skills.agri);
	options.skills.arti = validBoolean(options.skills.arti);
	const binaryFlags = options.skills.agri + options.skills.arti * 2;
	el('select_skills').value = binaryFlags;

	options.foragingLevel = validIntRange(0, 13, options.foragingLevel);
	el('foraging_level').value = options.foragingLevel;

	options.skills.gatherer = validBoolean(options.skills.gatherer);
	el('check_skillsGatherer').checked = options.skills.gatherer;

	options.skills.botanist = validBoolean(options.skills.botanist);
	el('check_skillsBotanist').checked = options.skills.botanist;

	options.foodIndex = validIntRange(0, 6, options.foodIndex);
	el('select_food').value = options.foodIndex;

	options.extra = validBoolean(options.extra);
	el('check_extra').checked = options.extra;

	options.disableLinks = validBoolean(options.disableLinks);
	el('disable_links').checked = options.disableLinks;

	updateSeasonNames();

	// mod support options
	options.enableMods = validBoolean(options.enableMods);
	el('enable_mods').checked = options.enableMods;

	options.enableVanilla = validBoolean(options.enableVanilla);
	el('check_vanilla').checked = options.enableVanilla;

	options.enableSVE = validBoolean(options.enableSVE);
	el('check_sve').checked = options.enableSVE;

	options.enableCornucopia = validBoolean(options.enableCornucopia);
	el('check_cornucopia').checked = options.enableCornucopia;

	options.enableCornucopiaMachines = validBoolean(options.enableCornucopiaMachines);
	el('check_cornucopia_machines').checked = options.enableCornucopiaMachines;

	rebuildMachineSelector();
	options.machine = validMachine(options.machine);
	el('select_machine').value = options.machine;
}

function deserialize(str) {
	return JSON.parse(decodeURIComponent(str));
}

function serialize(obj) {
	return JSON.stringify(obj);
}

/*
 * Called when changing season/seeds, to redraw the graph.
 */
function rebuild() {
	gAxis.selectAll("*").remove();
	gProfit.selectAll("*").remove();
	gSeedLoss.selectAll("*").remove();
	gFertLoss.selectAll("*").remove();
	gIcons.selectAll("*").remove();
	gTooltips.selectAll("*").remove();
	gTitle.selectAll("*").remove();

	updateData();
	renderGraph();
}

document.addEventListener('DOMContentLoaded', initial);
document.addEventListener('click', function (event) {
	if (event.target.id === 'reset') window.location = 'index.html';
});
