// Epic messy code Baby !!
// Epic messy code Baby !!
// Epic messy code Baby !!
// Epic messy code Baby !!
// Epic messy code Baby !!
// Epic messy code Baby !!

var nuts = 0;
var nutKids = 0;
var nutBoys = 0;
var nutBoyBonuses = 0;
var nutMen = 0;
var nutFarms = 0;
var nutFactories = 0;
var nutBanks = 0;
var nutEmpires = 0;
var nutWorldControls = 0;
var nutGalacticReigns = 0;
var deezNutGuys = 0;
var clickDamage = 1;
var clickUpgrades = 0;
var clickUpgrades2 = 0;
var allUpgrades = 0;
var allVariables = [nuts,nutKids,nutBoys,nutBoyBonuses,allUpgrades,nutMen,nutFarms,nutFactories,nutBanks,nutEmpires,nutWorldControls,nutGalacticReigns,deezNutGuys,clickUpgrades,clickUpgrades2];
var h = 0;
var m = 0;
var s = 0;
s = checkTime(s);
m = checkTime(m);
var pressed = false;
var deleted = false;
var landscape = true;

var url = window.location.pathname;
var page = url.substring(url.lastIndexOf('/') + 1);

var nutKidCostNext = 0;
var nutBoyCostNext = 0;
var nutBoyBonusCostNext = 0;
var nutManCostNext = 0;
var nutFarmCostNext = 0;
var nutFactoryCostNext = 0;
var nutBankCostNext = 0;
var nutEmpireCostNext = 0;
var nutWorldControlCostNext = 0;
var nutGalacticReignCostNext = 0;
var deezNutGuyCostNext = 0;
var clickUpgradeCostNext = 0;
var clickUpgrade2CostNext = 0;
var allUpgradeCostNext = 0;

var nutKidDamage = 0.1;
var nutBoyDamage = 1;
var nutManDamage = 8;
var nutFarmDamage = 47;
var nutFactoryDamage = 260;
var nutBankDamage = 1400;
var nutEmpireDamage = 7800;
var nutWorldControlDamage = 44000;
var nutGalacticReignDamage = 260000;
var deezNutGuyDamage = 16000000;
var totalDamage = 0;

var buyAudio = new Audio('audio/buy.wav');
var cantBuyAudio = new Audio('audio/cantbuy.wav');
var clickAudio = new Audio('audio/click.wav');
var music = new Audio('audio/sneakysnitch.mp3');
var audioMuted = false;
var musicMuted = false;
var musicProgress = 0;

var nutBoyUpgradeShown = false;
var clickUpgradeShown = false;
var click2UpgradeShown = false;
var allUpgradeShown = false;

music.play();
music.loop=true;

function stopAudio(audio){
		audio.pause();
		audio.currentTime = 0;
}

function toggleAudio(){
	if(!audioMuted){
		clickAudio.muted = true;
		buyAudio.muted = true;
		cantBuyAudio.muted = true;
		audioMuted = true;
	} else {
		clickAudio.muted = false;
		buyAudio.muted = false;
		cantBuyAudio.muted = false;
		audioMuted = false;
	}
}

function toggleMusic(){
	if(!musicMuted){
		music.muted = true;
		musicMuted = true;
	} else {
		music.muted = false;
		musicMuted = false;
	}
}

function kFormatter(num) {
    if(num > 999 && num < 999999){
		num = num/1000;
		return round(num) + "k";
	} else if (num < 1000){
		return num;
	} else if (num >= 1000000 && num < 1000000000){
		num = num/1000000;
		return round(num) + "m";
	} else if (num >= 1000000000 && num < 1000000000000){
		num = num/1000000000;
		return round(num) + "b";
	} else if (num >= 1000000000000 && num < 1000000000000000){
		num = num/1000000000000;
		return round(num) + "t";
	} else if (num >= 1000000000000000 && num < 1000000000000000000){
		num = num/1000000000000000;
		return round(num) + " quadrillion";
	} else if (num >= 1000000000000000000 && num < 1000000000000000000000){
		num = num/1000000000000000000;
		return round(num) + " quintillion";
	}else if (num >= 1000000000000000000000){
		num = num/1000000000000000000000;
		return round(num) + " sextillion";
	}
}

function round(input){
    var output = Math.round(input * 100)/100;
	return output;
}

function clickOnButton(){
	if(!pressed){
		stopAudio(clickAudio);
		clickAudio.play();
		GreyOutButtons();
		nuts = round(nuts + clickDamage);
		document.getElementById("nuts").innerHTML = kFormatter(round(nuts));
		document.getElementById('nutsGamble').innerHTML = round(nuts);
		document.title = ""+nuts+" nuts";
		CheckAmounts();
		pressed = true;
	}
}

function clickAnimation() {
    document.getElementById("amountAdded").innerHTML = "+" + kFormatter(clickDamage);
	var middleNut = document.getElementById("middleNut");
	var amountAdded = document.getElementById("amountAdded");
	var middleNutCounter = document.getElementById("middleNutCounter");
	
	setTimeout(function (){
		middleNut.style.webkitAnimationName = "growStart";
		middleNut.style.webkitAnimationDuration = "0.08s";
		middleNut.style.webkitAnimationFillMode = "forwards";
		
		amountAdded.style.webkitAnimationName = "grow2Start";
		amountAdded.style.webkitAnimationDuration = "0.08s";
		amountAdded.style.webkitAnimationFillMode = "forwards";
		
		middleNutCounter.style.webkitAnimationName = "grow3Start";
		middleNutCounter.style.webkitAnimationDuration = "0.08s";
		middleNutCounter.style.webkitAnimationFillMode = "forwards";
	}, 0);
}

function releaseAnimation() {
	var middleNut = document.getElementById("middleNut");
	var amountAdded = document.getElementById("amountAdded");
	var middleNutCounter = document.getElementById("middleNutCounter");
	
	setTimeout(function (){
		middleNut.style.webkitAnimationName = "grow";
		middleNut.style.webkitAnimationDuration = "0.3s";
		middleNut.style.webkitAnimationFillMode = "";
		
		amountAdded.style.webkitAnimationName = "grow2";
		amountAdded.style.webkitAnimationDuration = "0.3s";
		amountAdded.style.webkitAnimationFillMode = "";
		
		middleNutCounter.style.webkitAnimationName = "grow3";
		middleNutCounter.style.webkitAnimationDuration = "0.3s";
		middleNutCounter.style.webkitAnimationFillMode = "";
	}, 30);
}

function nutClick(number){
    nuts = round(nuts + number);
	document.getElementById("nuts").innerHTML = kFormatter(round(nuts));
	document.getElementById('nutsGamble').innerHTML = round(nuts);
	document.title = kFormatter(nuts) + " nuts";
	CheckAmounts();
	GreyOutButtons();
}

//click every second and run animation
window.setInterval(function(){
	nutClick(totalDamage);
	document.title = kFormatter(nuts) + " nuts";
	
	var addedNuts = document.getElementById("addedNuts");
	if(totalDamage >= 1){
		window.setTimeout(function ()
		{
			addedNuts.style.webkitAnimationName = "fadeOut";
			addedNuts.style.webkitAnimationDuration = "0.5s";
			addedNuts.addEventListener("animationend", function(){addedNuts.style.webkitAnimationName = "";}, false);
		}, 0);
	}
	
}, 1000);


//increase time
window.setInterval(function(){
	s++;
    s = checkTime(s);
	if(s >= 60){
		m++;
		s = 0;
		s = checkTime(s);
		m = checkTime(m);
	}
	if(m >= 60){
		h++;
		m = 0;
		m = checkTime(m);
		h = checkTime(h);
	}
    document.getElementById('time').innerHTML = "played for " + h + ":" + m + ":" + s;
}, 1000);

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function buy(building){
	switch (building){
		case "nutKid":
			var nutKidCost = Math.floor(15 * Math.pow(1.1,nutKids));
			if(nuts >= nutKidCost){
				nutKids = nutKids + 1;
				nuts = nuts - nutKidCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;
		
		case "nutBoy":
			var nutBoyCost = Math.floor(50 * Math.pow(1.1,nutBoys));
			if(nuts >= nutBoyCost){
				nutBoys = nutBoys + 1;
				nuts = nuts - nutBoyCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;
		
		case "buyNutBoyBonus":
			var nutBoyBonusCost = Math.floor(100 * Math.pow(5,nutBoyBonuses));
			if(nuts >= nutBoyBonusCost){
				nutBoyBonuses = nutBoyBonuses + 1;
				nuts = nuts - nutBoyBonusCost;
				UpdateValues();
				nutBoyDamage = nutBoyDamage * 2;
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;
		
		case "x2Click":
			var clickCost = Math.floor(300 * Math.pow(3,clickUpgrades));
			if(nuts >= clickCost){
				clickUpgrades = clickUpgrades + 1
				nuts = nuts - clickCost;
				UpdateValues();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;
		
		case "clickUpgrade2":
			var clickCost2 = Math.floor(5000 * Math.pow(5,clickUpgrades2));
			if(nuts >= clickCost2){
				clickUpgrades2 = clickUpgrades2 + 1;
				nuts = nuts - clickCost2;
				UpdateValues();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;
		
		case "nutMan":
			var nutManCost = Math.floor(1000 * Math.pow(1.1,nutMen));
			if(nuts >= nutManCost){
				nutMen = nutMen + 1;
				nuts = nuts - nutManCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}                        
		break;
		
		case "nutFarm":
			var nutFarmCost = Math.floor(13000 * Math.pow(1.1,nutFarms));
			if(nuts >= nutFarmCost){
				nutFarms = nutFarms + 1;
				nuts = nuts - nutFarmCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;
		
		case "allUpgrade":
			var allUpgradeCost = Math.floor(100000 * Math.pow(5,allUpgrades));
			if(nuts >= allUpgradeCost){
				allUpgrades = allUpgrades + 1;
				nuts = nuts - allUpgradeCost;
				nutKidDamage = nutKidDamage * 2;
				nutBoyDamage = nutBoyDamage * 2;
				nutManDamage = nutManDamage * 2;
				nutFarmDamage = nutFarmDamage * 2;
				nutFactoryDamage = nutFactoryDamage * 2;
				nutBankDamage = nutBankDamage * 2;
				nutEmpireDamage = nutEmpireDamage * 2;
				nutWorldControlDamage = nutWorldControlDamage * 2;
				nutGalacticReignDamage = nutGalacticReignDamage * 2;
				deezNutGuyDamage = deezNutGuyDamage * 2;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;
		
		case "nutFactory":
			var nutFactoryCost = Math.floor(150000 * Math.pow(1.1,nutFactories));
			if(nuts >= nutFactoryCost){
				nutFactories = nutFactories + 1;
				nuts = nuts - nutFactoryCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;
		
		case "nutBank":
			var nutBankCost = Math.floor(1400000 * Math.pow(1.1,nutBanks));
			if(nuts >= nutBankCost){
				nutBanks = nutBanks + 1;
				nuts = nuts - nutBankCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;
		
		case "nutEmpire":
			var nutEmpireCost = Math.floor(20000000 * Math.pow(1.1,nutEmpires));
			if(nuts >= nutEmpireCost){
				nutEmpires = nutEmpires + 1;
				nuts = nuts - nutEmpireCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;
		
		case "nutWorldControl":
			var nutWorldControlCost = Math.floor(330000000 * Math.pow(1.1,nutWorldControls));
			if(nuts >= nutWorldControlCost){
				nutWorldControls = nutWorldControls + 1;
				nuts = nuts - nutWorldControlCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;
		
		case "nutGalacticReign":
			var nutGalacticReignCost = Math.floor(5100000000 * Math.pow(1.1,nutGalacticReigns));
			if(nuts >= nutGalacticReignCost){
				nutGalacticReigns = nutGalacticReigns + 1;
				nuts = nuts - nutGalacticReignCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;
		
		case "deezNutGuy":
			var deezNutGuyCost = Math.floor(7500000000 * Math.pow(1.1,deezNutGuys));
			if(nuts >= deezNutGuyCost){
				deezNutGuys = deezNutGuys + 1;
				nuts = nuts - deezNutGuyCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;
	}
	document.getElementById("damageAdded").innerHTML = "+ " + kFormatter(totalDamage) + "/sec";
	GreyOutButtons();
	Save();
	if(page != "mobile.html"){
		document.getElementById('upgrades').style.display = "";
		document.getElementById('damage').style.display = "";
		document.getElementById('clickBonusText').style.display = "";
		document.getElementById('line2').style.display = "";
	
		var leftpanel = document.getElementsByClassName("item2")[0];
		leftpanel.style.padding = "1vw 1.5vw";
	}
}

window.setInterval(function(){
	
	Save();
	
}, 5000);

function showMenu() {
	var menu = document.getElementById('menu');
	if(page != "mobile.html"){
		if(menu.style.opacity < "1"){
			menu.style.pointerEvents = "auto";
			menu.style.opacity = "1";
			menu.style.left = "8vw";
			document.getElementById('menuButton').style.cursor = "pointer";
			document.getElementById('menuButton2').style.cursor = "pointer";
			document.getElementById('menuButton3').style.cursor = "pointer";
			document.getElementById('menuButton').disabled = false;
			document.getElementById('menuButton2').disabled = false;
			document.getElementById('menuButton3').disabled = false;
		} else {
			menu.style.left = "6.5vw";
			menu.style.opacity = "0";
			menu.style.pointerEvents = "none";
			document.getElementById('menuButton').style.cursor = "default";
			document.getElementById('menuButton2').style.cursor = "default";
			document.getElementById('menuButton3').style.cursor = "default";
			document.getElementById('menuButton').disabled = true;
			document.getElementById('menuButton2').disabled = true;
			document.getElementById('menuButton3').disabled = true;
		}
	} else {
		if(menu.style.opacity < "1"){
			menu.style.opacity = "1";
			menu.style.height = "30px";
			menu.style.left = "25vw";
			document.getElementById('menuButton').style.cursor = "pointer";
			document.getElementById('menuButton2').style.cursor = "pointer";
			document.getElementById('menuButton3').style.cursor = "pointer";
			document.getElementById('menuButton').disabled = false;
			document.getElementById('menuButton2').disabled = false;
			document.getElementById('menuButton3').disabled = false;
		} else {
			menu.style.opacity = "0";
			menu.style.height = "0px";
			menu.style.left = "17vw";
			document.getElementById('menuButton').style.cursor = "default";
			document.getElementById('menuButton2').style.cursor = "default";
			document.getElementById('menuButton3').style.cursor = "default";
			document.getElementById('menuButton').disabled = true;
			document.getElementById('menuButton2').disabled = true;
			document.getElementById('menuButton3').disabled = true;
		}
	}
}

function showMenuOld() {
	var menu = document.getElementById('menu')
    if(menu.style.display === 'none') {
        menu.style.display = 'inline';
    } else {
        menu.style.display = 'none';
    }
}

function showAllBuildings(){
	var buildingMenu = document.getElementsByClassName("item1")[0];
	var upgradeMenu = document.getElementsByClassName("item2")[0];
	if(buildingMenu.style.width < "100px"){
		buildingMenu.style.height = "73%";
    	buildingMenu.style.width = "80%";
		buildingMenu.style.padding = "15px 15px";
		
		//close other menu if open
    	upgradeMenu.style.height = "0px";
    	upgradeMenu.style.width = "0px";
		upgradeMenu.style.padding = "0px 0px 0px 0px";
		
		//show scroll after animation done
		setTimeout(function (){
			buildingMenu.style.overflow = "auto";
		}, 500);
    } else {
    	buildingMenu.style.height = "0px";
    	buildingMenu.style.width = "0px";
		buildingMenu.style.padding = "0px 0px 0px 0px";
		
		buildingMenu.style.overflow = "hidden";
    }
}

function showAllUpgrades(){
	var buildingMenu = document.getElementsByClassName("item1")[0];
	var upgradeMenu = document.getElementsByClassName("item2")[0];
	if(upgradeMenu.style.width < "100px"){
		upgradeMenu.style.height = "73%";
    	upgradeMenu.style.width = "80%";
		upgradeMenu.style.padding = "15px 15px";
		
		//close other menu if open
    	buildingMenu.style.height = "0px";
    	buildingMenu.style.width = "0px";
		buildingMenu.style.padding = "0px 0px 0px 0px";
		
		//show scroll after animation done
		setTimeout(function (){
			buildingMenu.style.overflow = "auto";
		}, 500);
		
    } else {
    	upgradeMenu.style.height = "0px";
    	upgradeMenu.style.width = "0px";
		upgradeMenu.style.padding = "0px 0px 0px 0px";
		
		buildingMenu.style.overflow = "hidden";
    }
}

function NewUpgrade(){
	var newUpgrade = document.getElementById("newUpgrade");
	if(newUpgrade.style.width < "100px"){
		newUpgrade.style.width = "42%";
    } else {
		newUpgrade.style.width = "0px";
    }
}

function uploadHover(){
	var uploadLabel = document.getElementById("uploadLabel");
	var uploadIcon = document.getElementById("uploadIcon");
	uploadLabel.style.height = "50px";
    uploadLabel.style.width = "370px";
	uploadIcon.style.top = "10%";
}

function uploadLeave(){
	var uploadLabel = document.getElementById("uploadLabel");
    uploadLabel.style.height = "40px";
    uploadLabel.style.width = "25px";
	uploadIcon.style.top = "5%";
}

function ShowGambling(){
	var gambling = document.getElementById("gambling");
	if(gambling.style.width < "100px"){
		gambling.style.height = "80%";
    	gambling.style.width = "58%";
		gambling.style.padding = "15px 15px 15px 15px";
		
		//show scroll after animation done
		setTimeout(function (){
			gambling.style.overflow = "auto";
		}, 500);
		
    } else {
    	gambling.style.height = "0px";
    	gambling.style.width = "0px";
		gambling.style.padding = "0px 0px 0px 0px";
		
		gambling.style.overflow = "hidden";
    }
}

//saving
function Save(){
	musicProgress = music.currentTime;
    document.getElementById('saved').innerHTML = "saved";
	setTimeout("document.getElementById('saved').innerHTML = ''", 800)
	var save = {
		'nuts': nuts,
		'nutKids': nutKids,
		'nutBoys': nutBoys,
		'nutBoyBonuses': nutBoyBonuses,
		'clickUpgrades': clickUpgrades,
		'clickUpgrades2': clickUpgrades2,
		'nutMen':  nutMen,
		'nutFarms': nutFarms,
		'allUpgrades': allUpgrades,
		'nutFactories': nutFactories,
		'nutBanks': nutBanks,
		'nutEmpires': nutEmpires,
		'nutWorldControls': nutWorldControls,
		'nutGalacticReigns': nutGalacticReigns,
		'deezNutGuys': deezNutGuys,
		's': s,
		'm': m,
		'h': h,
		'totalDamage': totalDamage,
		'audioMuted': audioMuted,
		'musicMuted': musicMuted,
		'musicProgress': musicProgress,
		'nutBoyUpgradeShown': nutBoyUpgradeShown,
		'clickUpgradeShown': clickUpgradeShown,
		'click2UpgradeShown': click2UpgradeShown,
		'allUpgradeShown': allUpgradeShown
	}
	localStorage.setItem("save",JSON.stringify(save));
}

function DeleteSave(){
	if (confirm('are you sure you want to delete all progress')) {
		deleted = true;
		localStorage.removeItem("save");
		for(var i=0;i<allVariables.length;i++){
			allVariables[i] = 0;
		}
		UpdateValues();
		setTimeout(function (){
			location.reload();
		}, 50);
	}
}

function Load(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.nuts !== "undefined") nuts = savegame.nuts;
	if (typeof savegame.nutKids !== "undefined") nutKids = savegame.nutKids;
	if (typeof savegame.nutBoys !== "undefined") nutBoys = savegame.nutBoys;
	if (typeof savegame.nutBoyBonuses !== "undefined") nutBoyBonuses = savegame.nutBoyBonuses;
	if (typeof savegame.clickUpgrades !== "undefined") clickUpgrades = savegame.clickUpgrades;
	if (typeof savegame.clickUpgrades2 !== "undefined") clickUpgrades2 = savegame.clickUpgrades2;
	if (typeof savegame.nutMen !== "undefined") nutMen = savegame.nutMen;
	if (typeof savegame.nutFarms !== "undefined") nutFarms = savegame.nutFarms;
	if (typeof savegame.allUpgrades !== "undefined") allUpgrades = savegame.allUpgrades;
	if (typeof savegame.nutFactories !== "undefined") nutFactories = savegame.nutFactories;
	if (typeof savegame.nutBanks !== "undefined") nutBanks = savegame.nutBanks;
	if (typeof savegame.nutEmpires !== "undefined") nutEmpires = savegame.nutEmpires;
	if (typeof savegame.nutWorldControls !== "undefined") nutWorldControls = savegame.nutWorldControls;
	if (typeof savegame.nutGalacticReigns !== "undefined") nutGalacticReigns = savegame.nutGalacticReigns;
	if (typeof savegame.deezNutGuys !== "undefined") deezNutGuys = savegame.deezNutGuys;
	if (typeof savegame.s !== "undefined") s = savegame.s;
	if (typeof savegame.m !== "undefined") m = savegame.m;
	if (typeof savegame.h !== "undefined") h = savegame.h;
	if (typeof savegame.timeSinceStart !== "undefined") timeSinceStart = savegame.timeSinceStart;
	if (typeof savegame.totalDamage !== "undefined") totalDamage = savegame.totalDamage;
	if (typeof savegame.audioMuted !== "undefined") audioMuted = savegame.audioMuted;
	if (typeof savegame.musicMuted !== "undefined") musicMuted = savegame.musicMuted;
	if (typeof savegame.musicProgress !== "undefined") musicProgress = savegame.musicProgress;
	if (typeof savegame.nutBoyUpgradeShown !== "undefined") nutBoyUpgradeShown = savegame.nutBoyUpgradeShown;
	if (typeof savegame.clickUpgradeShown !== "undefined") clickUpgradeShown = savegame.clickUpgradeShown;
	if (typeof savegame.click2UpgradeShown !== "undefined") click2UpgradeShown = savegame.click2UpgradeShown;
	if (typeof savegame.allUpgradeShown !== "undefined") allUpgradeShown = savegame.allUpgradeShown;
    document.getElementById('time').innerHTML = "played for " + h + ":" + m + ":" + s;
	UpdateValues();
	UpdateCosts();
}

function GreyOutButtons(){
	if(nuts < nutKidCostNext){
		document.getElementsByClassName('buyNutKid')[1].style.webkitFilter = "brightness(70%)";
	} else if (nuts >= nutKidCostNext){
		document.getElementsByClassName('buyNutKid')[1].style.webkitFilter = "";
	}
	
	if(nuts < nutBoyCostNext){
		document.getElementsByClassName('buyNutBoy')[1].style.webkitFilter = "brightness(70%)";
	} else if (nuts >= nutBoyCostNext){
		document.getElementsByClassName('buyNutBoy')[1].style.webkitFilter = "";
	}
	
	if(nuts < nutManCostNext){
		document.getElementsByClassName('buyNutMan')[1].style.webkitFilter = "brightness(70%)";
	} else if (nuts >= nutManCostNext){
		document.getElementsByClassName('buyNutMan')[1].style.webkitFilter = "";
	}
	
	if(nuts < nutFarmCostNext){
		document.getElementsByClassName('buyNutFarm')[1].style.webkitFilter = "brightness(70%)";
	} else if (nuts >= nutFarmCostNext){
		document.getElementsByClassName('buyNutFarm')[1].style.webkitFilter = "";
	}
	
	if(nuts < nutFactoryCostNext){
		document.getElementsByClassName('buyNutFactory')[1].style.webkitFilter = "brightness(70%)";
	} else if (nuts >= nutFactoryCostNext){
		document.getElementsByClassName('buyNutFactory')[1].style.webkitFilter = "";
	}	
	
	if(nuts < nutBankCostNext){
		document.getElementsByClassName('buyNutBank')[1].style.webkitFilter = "brightness(70%)";
	} else if (nuts >= nutBankCostNext){
		document.getElementsByClassName('buyNutBank')[1].style.webkitFilter = "";
	}	
	
	if(nuts < nutEmpireCostNext){
		document.getElementsByClassName('buyNutEmpire')[1].style.webkitFilter = "brightness(70%)";
	} else if (nuts >= nutEmpireCostNext){
		document.getElementsByClassName('buyNutEmpire')[1].style.webkitFilter = "";
	}	
	
	if(nuts < nutWorldControlCostNext){
		document.getElementsByClassName('buyNutWorldControl')[1].style.webkitFilter = "brightness(70%)";
	} else if (nuts >= nutWorldControlCostNext){
		document.getElementsByClassName('buyNutWorldControl')[1].style.webkitFilter = "";
	}	
	
	if(nuts < nutGalacticReignCostNext){
		document.getElementsByClassName('buyNutGalacticReign')[1].style.webkitFilter = "brightness(70%)";
	} else if (nuts >= nutGalacticReignCostNext){
		document.getElementsByClassName('buyNutGalacticReign')[1].style.webkitFilter = "";
	}
	
	if(nuts < deezNutGuyCostNext){
		document.getElementsByClassName('buyDeezNutGuy')[1].style.webkitFilter = "brightness(70%)";
	} else if (nuts >= deezNutGuyCostNext){
		document.getElementsByClassName('buyDeezNutGuy')[1].style.webkitFilter = "";
	}
	
	if(nuts < nutBoyBonusCostNext){
		document.getElementsByClassName('buyNutBoyBonus')[1].style.webkitFilter = "brightness(70%)";
	} else if (nuts >= nutBoyBonusCostNext){
		document.getElementsByClassName('buyNutBoyBonus')[1].style.webkitFilter = "";
	}
	
	if(nuts < clickUpgradeCostNext){
		document.getElementsByClassName('buyClick')[1].style.webkitFilter = "brightness(70%)";
	} else if (nuts >= clickUpgradeCostNext){
		document.getElementsByClassName('buyClick')[1].style.webkitFilter = "";
	}
	
	if(nuts < clickUpgrade2CostNext){
		document.getElementsByClassName('buyClick2')[1].style.webkitFilter = "brightness(70%)";
	} else if (nuts >= clickUpgrade2CostNext){
		document.getElementsByClassName('buyClick2')[1].style.webkitFilter = "";
	}
	
	if(nuts < allUpgradeCostNext){
		document.getElementsByClassName('buyAllUpgrade')[1].style.webkitFilter = "brightness(70%)";
	} else if (nuts >= allUpgradeCostNext){
		document.getElementsByClassName('buyAllUpgrade')[1].style.webkitFilter = "";
	}
}

function CheckAmounts(){	
	GreyOutButtons();
	if(nuts >= 15 || nutKids >= 1) {		
		var classes = document.getElementsByClassName('buyNutKid');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
		
		if(page != "mobile.html"){
			document.getElementById('things').style.display = "";
		}
		
		if(page != "mobile.html"){
			var leftpanel = document.getElementsByClassName("item1")[0];
			leftpanel.style.padding = "1vw 1.5vw";
		}
	}
	
	if(nuts >= 40 || nutBoys >= 1) {
		var classes = document.getElementsByClassName('buyNutBoy');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if (nuts >= 80 || nutBoyBonuses >= 1) {
		var classes = document.getElementsByClassName('buyNutBoyBonus');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
		if(page != "mobile.html"){
			document.getElementById('upgrades').style.display = "";
			document.getElementById('damage').style.display = "";
			document.getElementById('clickBonusText').style.display = "";
			document.getElementById('line2').style.display = "";
		}
		
		if(page != "mobile.html"){
			var leftpanel = document.getElementsByClassName("item2")[0];
			leftpanel.style.padding = "1vw 1.5vw";
		}
		
		if(page == "mobile.html" && nutBoyUpgradeShown == false){
			NewUpgrade();
			nutBoyUpgradeShown = true;
			setTimeout(function (){
				NewUpgrade();
			}, 2000);
		}
    }
	if(nuts >= 200 || clickUpgrades >= 1) {
		var classes = document.getElementsByClassName('buyClick');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
		
		if(page == "mobile.html" && clickUpgradeShown == false){
			NewUpgrade();
			clickUpgradeShown = true;
			setTimeout(function (){
				NewUpgrade();
			}, 2000);
		}
    }
	if(nuts >= 3000 || clickUpgrades2 >= 1) {
		var classes = document.getElementsByClassName('buyClick2');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
		
		if(page == "mobile.html" && click2UpgradeShown == false){
			NewUpgrade();
			click2UpgradeShown = true;
			setTimeout(function (){
				NewUpgrade();
			}, 2000);
		}
    }
	if(nuts >= 7000 || nutMen >= 1) {
		var classes = document.getElementsByClassName('buyNutMan');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
	}
	if(nuts >= 11000 || nutFarms >= 1) {
		var classes = document.getElementsByClassName('buyNutFarm');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(nuts >= 80000 || allUpgrades >= 1) {
		var classes = document.getElementsByClassName('buyAllUpgrade');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
		
		if(page == "mobile.html" && allUpgradeShown == false){
			NewUpgrade();
			allUpgradeShown = true;
			setTimeout(function (){
				NewUpgrade();
			}, 2000);
		}
    }
	if(nuts >= 150000 || nutFactories >= 1) {
		var classes = document.getElementsByClassName('buyNutFactory');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(nuts >= 1100000 || nutBanks >= 1) {
		var classes = document.getElementsByClassName('buyNutBank');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(nuts >= 17000000 || nutEmpires >= 1) {
		var classes = document.getElementsByClassName('buyNutEmpire');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(nuts >= 2700000000 || nutWorldControls >= 1) {
		var classes = document.getElementsByClassName('buyNutWorldControl');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(nuts >= 4000000000 || nutGalacticReigns >= 1) {
		var classes = document.getElementsByClassName('buyNutGalacticReign');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(nuts >= 6000000000 || deezNutGuys >= 1) {
		var classes = document.getElementsByClassName('buyDeezNutGuy');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
}

function UpdateValues(){
	var clickUpgradesTemp = 15 * clickUpgrades;
	var clickUpgrades2Temp = 50 * clickUpgrades2;
	clickDamage = 1 + clickUpgradesTemp + clickUpgrades2Temp;
	document.getElementById('nuts').innerHTML = kFormatter(round(nuts));
	document.getElementById('nutsGamble').innerHTML = round(nuts);
	document.getElementById('nutKids').innerHTML = nutKids;
	document.getElementById('nutBoys').innerHTML = nutBoys;
	document.getElementById('nutBoyBonuses').innerHTML = nutBoyBonuses;
	document.getElementById('nutBoyBonusTotal').innerHTML = nutBoyDamage;
	document.getElementById('clickDamage').innerHTML = clickDamage;
	document.getElementById('clickUpgrades').innerHTML = clickUpgrades;
	document.getElementById('clickUpgrades2').innerHTML = clickUpgrades2;
	document.getElementById('nutMen').innerHTML = nutMen;
	document.getElementById('nutFarms').innerHTML = nutFarms;
	document.getElementById('allUpgrades').innerHTML = allUpgrades;
	document.getElementById('nutFactories').innerHTML = nutFactories;
	document.getElementById('nutBanks').innerHTML = nutBanks;
	document.getElementById('nutEmpires').innerHTML = nutEmpires;
	document.getElementById('nutGalacticReigns').innerHTML = nutGalacticReigns;
	document.getElementById('deezNutGuys').innerHTML = deezNutGuys;
	document.getElementById('addedNuts').innerHTML = "+ " + kFormatter(totalDamage);
	document.getElementById('totalDamage').innerHTML = kFormatter(totalDamage);
	document.getElementById("damageAdded").innerHTML = "+ " + kFormatter(totalDamage) + "/sec";
	
	document.getElementById('nutKidDamage').innerHTML = kFormatter(nutKidDamage);
	document.getElementById('nutManDamage').innerHTML = kFormatter(nutManDamage);
	document.getElementById('nutFarmDamage').innerHTML = kFormatter(nutFarmDamage);
	document.getElementById('nutFactoryDamage').innerHTML = kFormatter(nutFactoryDamage);
	document.getElementById('nutBankDamage').innerHTML = kFormatter(nutBankDamage);
	document.getElementById('nutEmpireDamage').innerHTML = kFormatter(nutEmpireDamage);
	document.getElementById('nutWorldControlDamage').innerHTML = kFormatter(nutWorldControlDamage);
	document.getElementById('nutGalacticReignDamage').innerHTML = kFormatter(nutGalacticReignDamage);
	document.getElementById('deezNutGuyDamage').innerHTML = kFormatter(deezNutGuyDamage);
}

function UpdateCosts(){
	nutKidCostNext = Math.floor(15 * Math.pow(1.1,nutKids));
	nutBoyCostNext = Math.floor(50 * Math.pow(1.1,nutBoys));
	nutBoyBonusCostNext = Math.floor(100 * Math.pow(5,nutBoyBonuses));
	clickUpgradeCostNext = Math.floor(300 * Math.pow(3,clickUpgrades));
	clickUpgrade2CostNext = Math.floor(5000 * Math.pow(5,clickUpgrades2));
	nutManCostNext = Math.floor(1000 * Math.pow(1.1,nutMen));
	nutFarmCostNext = Math.floor(13000 * Math.pow(1.1,nutFarms));
	allUpgradeCostNext = Math.floor(100000 * Math.pow(5,allUpgrades));
	nutFactoryCostNext = Math.floor(150000 * Math.pow(1.1,nutFactories));
	nutBankCostNext = Math.floor(1400000 * Math.pow(1.1,nutBanks));
	nutEmpireCostNext = Math.floor(20000000 * Math.pow(1.1,nutEmpires));
	nutWorldControlCostNext = Math.floor(330000000 * Math.pow(1.1,nutWorldControls));
	nutGalacticReignCostNext = Math.floor(5100000000 * Math.pow(1.1,nutGalacticReigns));
	deezNutGuyCostNext = Math.floor(7500000000 * Math.pow(1.1,deezNutGuys));
	document.getElementById('nutKidCost').innerHTML = kFormatter(nutKidCostNext);
	document.getElementById('nutBoyCost').innerHTML = kFormatter(nutBoyCostNext);
	document.getElementById('nutBoyBonusCost').innerHTML = kFormatter(nutBoyBonusCostNext);
	document.getElementById('clickCost').innerHTML = kFormatter(clickUpgradeCostNext);
	document.getElementById('clickCost2').innerHTML = kFormatter(clickUpgrade2CostNext);
	document.getElementById('nutManCost').innerHTML = kFormatter(nutManCostNext);
	document.getElementById('nutFarmCost').innerHTML = kFormatter(nutFarmCostNext);
	document.getElementById('allUpgradeCost').innerHTML = kFormatter(allUpgradeCostNext);
	document.getElementById('nutFactoryCost').innerHTML = kFormatter(nutFactoryCostNext);
	document.getElementById('nutBankCost').innerHTML = kFormatter(nutBankCostNext);
	document.getElementById('nutEmpireCost').innerHTML = kFormatter(nutEmpireCostNext);
	document.getElementById('nutWorldControlCost').innerHTML = kFormatter(nutWorldControlCostNext);
	document.getElementById('nutGalacticReignCost').innerHTML = kFormatter(nutGalacticReignCostNext);
	document.getElementById('deezNutGuyCost').innerHTML = kFormatter(deezNutGuyCostNext);
}

function UpdateDamage(){
	totalDamage = round(nutKidDamage * nutKids + nutBoyDamage * nutBoys + nutManDamage * nutMen + nutFarmDamage * nutFarms + nutFactoryDamage * nutFactories + nutBankDamage * nutBanks + nutEmpireDamage * nutEmpires + nutWorldControlDamage * nutWorldControls + nutGalacticReignDamage * nutGalacticReigns + deezNutGuyDamage * deezNutGuys);
}

function CheckMobile(){
	var ratio = window.innerWidth / window.innerHeight;
	if(ratio < 0.745 && page == "index.html"){
		window.location.href = "mobile.html";
	} else if (ratio >= 0.745 && page == "mobile.html"){
		window.location.href = "index.html";
	} else if (ratio < 0.745 && page == ""){
		window.location.href = "mobile.html";
	}
}

function Gamble(level){
	switch(level){
		case 1:
			var randomNumber = Math.floor(Math.random() * 4) + 1;
			var multiplyAmount = 3;
		break;
		
		case 2:
			var randomNumber = Math.floor(Math.random() * 8) + 1;
			var multiplyAmount = 6;
		break;
		
		case 3:
			var randomNumber = Math.floor(Math.random() * 17) + 1;
			var multiplyAmount = 12;
		break;
		
		case 4:
			var randomNumber = Math.floor(Math.random() * 33) + 1;
			var multiplyAmount = 24;
		break;
		
		case 5:
			var randomNumber = Math.floor(Math.random() * 100) + 1;
			var multiplyAmount = 50;
		break;
	}
	var x = prompt("enter an amount of nuts, total nuts: " + nuts,nuts);
	if(x >= 1){
		if(x <= nuts){
			if(confirm("you selected " + x + " nuts, are you sure you want to gamble them for a 25% chance to get " + x * multiplyAmount + " back ?")){
				nuts = nuts - x;
				UpdateValues();
				if(randomNumber == 1){
					alert("you win " + x * multiplyAmount + " nuts!");
					x = x * multiplyAmount;
					nuts = nuts + x;
					UpdateValues();
				} else {
					alert("bad luck, the random number was " + randomNumber + " and you were aiming for 1");
				}
			}
		} else {
			alert("enter an amount under your current nuts");
		}
	}
}

document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        event.preventDefault();
		clickAnimation();
		if(!pressed){
			clickOnButton();
			pressed = true;
		}
    }
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
		releaseAnimation();
		pressed = false;
		heldFor = 0;
    }
}

window.onbeforeunload = function(){
	if(!deleted){
		Save();
	}
}

window.addEventListener('resize', function(){
	CheckMobile();
});

CheckMobile();

//disable pointer cursor on hidden menu buttons
	document.getElementById('menuButton').style.cursor = "default";
	document.getElementById('menuButton2').style.cursor = "default";
	document.getElementById('menuButton3').style.cursor = "default";

Load();

music.currentTime = musicProgress;

//check if enough nuts to unlock things
CheckAmounts();	

//fix stupid animation
releaseAnimation();

//mute twice to get value from save
toggleMusic();
toggleMusic();
toggleAudio();
toggleAudio();

if(page != "mobile.html"){
	document.getElementById('customImage').onchange = function() {
		var imageFile = this.files[0];
		var url = window.URL.createObjectURL(imageFile);
		document.getElementById("middleNut").src = url;
	}
}