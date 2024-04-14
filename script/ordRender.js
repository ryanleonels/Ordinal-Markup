"use strict";
var urlParams = new URLSearchParams(window.location.search);
// Yeah, I know it's pretty unorganized at the moment
let factorMult = 1;
let bfactorMult = 1;
let succAutoMult = 1;
let limAutoMult = 1;
let RPloop = 0;
let you_found_an_easter_egg = "thoncc"
/* eslint-disable */
//let ordMarks = [];
let numMarks = [];

Number.prototype.toNumber = function() {
    var target = this;
    return this+0;
}

setMarks();
const BHO = V(27);
/* eslint-enable */
let clickCoolDown = 0;
let infinityButtonText = 0;
let game;
const factorShiftCosts = [
  100,
  500,
  5000,
  100000,
  1.1e11,
  2.0e20,
  98e98,
  1.095e272,
  1.095e272
];
const factorCostExp = [2, 2, 2, 2, 2, 2, 2, 2];
const bupUpgradeCosts = [
  1,1,1,10,
  4,3,5,36,
  18,19,7,108,
  16,20,17,324,
  Infinity,Infinity,2e8,1e11,
  Infinity,Infinity,8e18,1e21
];
const slugMile = [1e10, 24, 19, 16, 14, 5, -1];
let totalMult = 1;
let buptotalMute = 1;
const challengeGoals = [
  [1e32, 1e223, 5e270,Infinity],
  [5e270, V(10) + 1e270, V(17) + 1e270,Infinity],
  [1e200, 1e214, 1e250,Infinity],
  [1e33, 5e113, 1.5e119,Infinity],
  [1e120, 3.33e130, 1e200,Infinity],
  [1.02e33, 1e44, 4.75e108,Infinity],
  [1.05e13, 4.18e18, 1.02e20,Infinity],
  [3.0e10, 6.0e10, 2.4e11, Infinity],
  [Infinity,Infinity,Infinity,Infinity]
];
const challengeCurve = [0.24, 0.72, 0.96, 1.2];
let partOP = 0;
let factorBoostLoop = 0;
let cardinalLoop = ExpantaNum(0);
/* eslint-disable */
let collapseAnimation = 0;
/* eslint-enable */
const iupCosts = [1e5, 1e3, 1e9, 5e15, 2e22, 4e23, 1e19, 1e25, 1e27];
const dupCosts = [
  4,
  1000,
  8,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
  Infinity
];
const baselessMile = [5**75,5**90,5**115,5**120,Infinity]
let ordColor = "no";

const get = x => document.getElementById(x);
const musicLink = [
  //"https://cdn.glitch.com/03a4b67b-6f18-4f6d-8d37-50a18fb615c8%2FGoing%20Down%20by%20Jake%20Chudnow%20%5BHD%5D.mp3?v=1581538237884",
  "https://cdn.glitch.com/03a4b67b-6f18-4f6d-8d37-50a18fb615c8%2FHypnothis.mp3?v=1584285594822",
  "https://cdn.glitch.com/310d7aca-4728-445f-9084-db26ceccd7b5%2FArseniy%20Shkljaev%20-%20Nuclearoids%20%5BTrance%5D.mp3?v=1591548196791",
  "https://cdn.glitch.com/310d7aca-4728-445f-9084-db26ceccd7b5%2FHeaven%20and%20Hell%20-%20Jeremy%20Blake%20%5BMpgun.com%5D.mp3?v=1592859293921",
  "https://cdn.glitch.com/6f7e4eb0-585a-45ff-a8c1-2d13a9a7d93f%2FLesion%20X%20-%20A%20Journey%20Through%20The%20Universe%20%5BMpgun.com%5D.mp3?v=1596376734350"
];
const musicName = [
  "OFF",
  //"Going Down by Jake Chudnow",
  "Kevin Macleod - Hypnothis [Royalty Free]",
  "Arseniy Shkljaev - Nuclearoids (http://arseniymusic.com/)",
  "Jeremy Blake - Heaven and Hell (YT Library) [Public Domain]",
  "Lesion X - A Journey Through The Universe (https://soundcloud.com/lesionxbeats) [CC BY 3.0]"
];
const aupCost = [
  1,
  2,
  4,
  8,
  16,
  256,
  65536,
  2 ** 32,
  2 ** 64,
  2 ** 128,
  2 ** 256,
  2 ** 512
];
let AF = 0;
const d = new Date();
if (
  d.getMonth() === 3 &&
  d.getDate() === 1 &&
  !(d.getFullYear() === Number(localStorage.ordinalMarkupAF))
) {
  AF = 1;
  console.log("April Fools!");
  localStorage.setItem("ordinalMarkupAF", d.getFullYear().toString());
} else {
  AF = 0;
}

function updateAchs() {
  
}

function increment(manmade = 0) {

  if (manmade === 0 || game.manualClicksLeft >= 0.5) {
    if (
      manmade === 1 &&
      (inChal(6)||inChal(7)||inChal(8))
    )
      game.manualClicksLeft--;
    if (game.ord % game.base === game.base - 1) {
      game.over++;
    } else {
      game.ord++;
    }
    clickCoolDown = 2;
  }
  //if (manmade === 1) render();
}

function maximize(manmade = 0) {
  if (game.ord % game.base === game.base - 1 && game.over >= 1) {
    game.ord -= game.base - 1;
    game.over += game.base - 1;
    do {
      game.over -= Math.ceil((game.over + game.base) / 2 - 0.1);
      game.ord += game.base;
    } while (
      game.over + game.base >= game.base * 2 &&
      game.ord % game.base ** 2 !== 0
    );
    if (game.ord % game.base ** 2 !== 0) {
      game.ord += game.over;
    }
    game.over = 0;
    clickCoolDown = 2;
  }
  //if (manmade === 1) render();
}

let deltaTime;

function loop(unadjusted, off = 0) {
  checkAchieve()
  updateOptions()
  if (game.incrementyverse == 1) {
    incrementyverseLoop(Math.max(0,unadjusted),off)
    game.lastTick = Date.now();
    return
  }
  let ms=Math.max(0,unadjusted)
  if (inChal(8)&&game.decrementy<10&&unadjusted != 0) {
    ms=50
  }
  if (inChal(9)) {ms = ms/1e15}
  if (game.incrementy.lt(0)) game.incrementy = EN(0);
  if (game.collapseUnlock === 0) game.leastBoost = Infinity;
  if (isNaN(game.leastBoost)) game.leastBoost = Infinity;
  if (game.leastBoost === null) game.leastBoost = Infinity;
  if (game.leastBoost === "null") game.leastBoost = Infinity;
  if (typeof game.leastBoost === "undefined") game.leastBoost = Infinity;
  game.collapseTime += ms / 1000;
  game.base = calcBase();
  game.lastTick = Date.now();
  game.qolSM.nc8 = get("nonC8Auto").value;
  game.qolSM.c8 = get("C8Auto").value;
  game.qolSM.ttnc = get("ttnc").value;
  if (game.cAutoLoop.shift < 0) game.cAutoLoop.shift=0;
  if (game.cAutoLoop.boost < 0) game.cAutoLoop.boost=0;
  if (getBaseless()>=0.5) {
    RPloop += ms
    if (RPloop >= 1000) {
      game.refundPoints += Math.floor(RPloop/1000)
      RPloop = RPloop % 1000
    }
  }
  if (game.OP > BHO * getSingLevel()) game.OP = BHO * getSingLevel();
  if (game.ord > BHO * getSingLevel()) game.ord = BHO * getSingLevel();
  if (getBaseless()>=3) {
    if (!game.sfBought.includes(11)) game.sfBought.push(11)
    if (!game.sfBought.includes(21)) game.sfBought.push(21)
    if (!game.sfBought.includes(22)) game.sfBought.push(22)
    if (!game.sfBought.includes(23)) game.sfBought.push(23)
  }
  singfunctions.forEach(func => func.update())
  if (getOCComp(1)>=1) {
    game.challengeCompletion=[3,3,3,3,3,3,3]
    if (game.chal8Comp >= game.mostChal8Comp) {
      game.mostChal8Comp=game.chal8Comp
    }
    game.chal8Comp=Math.min(Math.max(game.mostChal8Comp,16),Math.max(game.chal8Comp,Math.floor((getOCComp(1)**1.5)*3)))
  }
  if (game.omegaChallenge==6) {
    downgradeSing1()
  }
  if (game.omegaChallenge>=1) {
    if (game.incrementy.gte(game.ocBestIncrementy[game.omegaChallenge-1])) {
      game.ocBestIncrementy[game.omegaChallenge-1]=game.incrementy
    }
  }

  if ((game.challenge>0||game.chal9==1) && !(game.chal8===1) && game.leastBoost <= 5.5 && game.qolSM.acc === 1) {
    if ( // !(1) = false iirc
      game.OP >= challengeGoals[game.chal9==1?8:game.challenge - 1][Number(game.qolSM.nc8) - 1]
    ) {
      completeChallenge();
    }
  }
  if ((game.chal8 === 1) && game.leastBoost <= 5.5 && game.qolSM.acc === 1) { // don't touch this one bc softlocks
    if (game.OP >= getChal8Goal(Number(game.qolSM.c8) - 1)) {
      completeChallenge();
    }
  }
  if (game.chal8 === 1 && calcRefund() > 0 && game.omegaChallenge != 1) // no touch this one
    confirm("You failed Challenge 8 because you had booster upgrades on you!");
  if ((game.chal8 === 1) && calcRefund() > 0 && game.omegaChallenge != 1) refund(); // no touch this, softlocks
  game.boosters =
    ((game.factorBoosts * (game.factorBoosts + 1)) / 2 + Math.round(Math.max(getSumOC(),1)*(calcSlugMile() + getBaseless()))) -
    calcRefund();
  game.boosters=Math.round(game.boosters)
  if (game.boosters < -0.5) refund()
  if (game.leastBoost <= 1e10 && game.OP < calcTotalOPGain()) {
    game.OP +=
      calcTotalOPGain() >= 1e270 ? Infinity : (calcTotalOPGain() / 10000) * ms;
    if (game.OP > calcTotalOPGain()) game.OP = calcTotalOPGain();
  }
  if (getSingLevel()>=game.mostSing) {
    game.mostSing=getSingLevel()
  }
  if (1+game.sing.dm+game.sing.nw+game.manifolds<game.mostSing) {
    game.mostSing=game.sing.dm+game.sing.nw+game.manifolds+1
  }
  let assCount;
  for (assCount in game.assCard) {
    if (game.assCard[assCount].power.lt(1200)&&game.collapseUnlock==1) {
      game.assCard[assCount].power = game.assCard[assCount].power.add(ms/3000)
      if (game.assCard[assCount].power.gte(1200)) game.assCard[assCount].power=EN(1200)
    }
    game.assCard[assCount].power = game.assCard[assCount].power.add(
      game.assCard[assCount].points
        .pow(
          game.assCard[assCount].points
            .log10()
            .pow(0.5)
            .max(2)
        )
        .times(0.001 * ms)
    );
    game.assCard[assCount].mult = game.assCard[assCount].power
      .add(10)
      .log10()
      .times(game.aups.includes(7) && assCount == 1? game.alephOmega.add(1).pow(1 / 32): 1)
      .times(game.sfBought.includes(71) && assCount == 2?1+(getSingLevel()+game.manifolds-game.sing.m-game.spentFunctions)*0.4:1)
      .times(game.sfBought.includes(52)?1.5:1)
      .pow(Math.max(1,getOCComp(5)**0.5));
    if (game.omegaChallenge == 5) game.assCard[assCount].mult = EN(0.0001*Math.max(1,getOCComp(5)**0.2))
  }
  if (game.upgrades.includes(8)) {
    game.incrementy = game.incrementy.add(getIncrementyRate(ms / 2));
  }
  changeDynamic(ms);
  if (game.dynamic < 0) game.dynamic = 0;
  if (inChal(8)) game.decrementy += getDecrementyRate(ms); //oof, sniped I WAS SUPPOSED TO DO c8 re
  if (game.boostUnlock == 1 && game.limAuto === 0) game.limAuto = 1;
  totalMult = factorMult * calcTotalMultWOFactor();
  buptotalMute =
    bfactorMult *
    calcBupTotalMultWOFactor() *
    calcIncrementyMult() *
    (game.aups.includes(4) ? Math.log10(10 + game.OP) : 1);
  succAutoMult = game.aups.includes(2)
    ? Math.max(Math.sqrt(game.limAuto), 1)
    : 1;
  limAutoMult = game.aups.includes(2)
    ? Math.max(Math.sqrt(game.succAuto), 1)
    : 1;
  const chal8Tip = game.ord >= (game.base**(3*game.base+(game.base==5&&game.sfBought.includes(61) ? game.base : 0)));
  const tempSucc = game.succAuto * succAutoMult * totalMult;
  const tempLim = game.limAuto * limAutoMult * totalMult;
  if (game.iups[3] === 1) buptotalMute += 500000000;
  if (game.iups[8] === 1) buptotalMute += 1e15;
  if (
    (game.succAuto < 1e265 || game.limAuto < 1e265) &&
    !(game.ord >= 3 ** 27 && game.base <= 3) //&&
    //!(chal8Tip)
  ) {
    if (game.succAuto * totalMult > 0) {
      game.autoLoop.succ += ms;
      if (game.autoLoop.succ >= 1000 / tempSucc) {
        game.autoLoop.succ -= 1000 / tempSucc;
        increment();
      }
    }
    if (tempLim > 0) {
      game.autoLoop.lim += ms;
      if (game.autoLoop.lim >= 1000 / tempLim) {
        game.autoLoop.lim -= 1000 / tempLim;
        maximize();
      }
    }

    if (game.maxAuto > 0) {
      maxall();
    }
    if (game.autoLoop.succ >= 1000 / tempSucc) {
      if (game.autoLoop.lim >= 1000 / tempLim) {
        game.over = 0;
        game.ord += Math.min(
          Math.floor(game.autoLoop.succ / (1000 / tempSucc)),
          game.base *
            Math.floor(
              game.autoLoop.lim /
                (1000 / (game.limAuto * limAutoMult * totalMult))
            )
        );
        game.autoLoop.succ %= 1000 / tempSucc;
        game.autoLoop.lim %= 1000 / tempLim;
      } else if (
        Math.floor(game.autoLoop.succ / (1000 / tempSucc)) >=
        game.base - (game.ord % game.base)
      ) {
        game.ord += game.base - (game.ord % game.base) - 1;
        game.over +=
          Math.floor(game.autoLoop.succ / (1000 / tempSucc)) -
          (game.base - (game.ord % game.base) - 1);
        game.autoLoop.succ %= 1000 / tempSucc;
      } else {
        game.ord += Math.floor(game.autoLoop.succ / (1000 / tempSucc));
        game.autoLoop.succ %= 1000 / tempSucc;
      }
    }
  } else {
    game.over = 0;
    game.ord = Math.max(Math.min(game.succAuto, game.limAuto), 4e270);
  }
  if ((!chal8Tip) && inChal(8) && calcOrdPoints() >= 1e30*1e10**(game.base==5&&game.sfBought.includes(61)))
    game.ord = game.base ** (game.base * 3+(game.base==5&&game.sfBought.includes(61)?game.base:0));
  changeDynamic(ms);
  if (game.dynamic < 0) game.dynamic = 0;
  if (ms > 0) {
    if ((game.upgrades.includes(2) || game.leastBoost <= 5.5) && game.autoOn.max === 1) {
      game.bAutoLoop.max += ms;
      if (game.bAutoLoop.max >= 1000 / buptotalMute) {
        game.bAutoLoop.max -= 1000 / buptotalMute;
        if ((game.OP < (inChal(5) && game.factorShifts >= 2 || game.factorShifts==7 ? Infinity : getFSCost(game.factorShifts)) && ((game.challengeCompletion[game.challenge-1]==3)||(!(game.challenge > 0) && !(game.chal8)&&game.chal9==0) || game.OP < (challengeGoals[game.challenge - 1] == undefined ? 1e300 : challengeGoals[game.challenge-1][game.challengeCompletion[game.challenge - 1]]))) || game.OP >= 1e265) {
          maxInfStuff();
        }
      }
    }
    if (game.upgrades.includes(3) && game.autoOn.inf === 1) {
      game.bAutoLoop.inf += ms;
      if (game.bAutoLoop.inf >= 1000 / buptotalMute) {
        game.bAutoLoop.inf -= 1000 / buptotalMute;
        if (
          game.OP + game.ord >= 1e265 &&
          (!inChal(1))
        )
          infinity();
        if (
          game.OP + game.ord <= 1e265 &&
          totalMult <= 0.01 &&
          game.leastBoost <= 5.5
        )
          infinity();
      }
    }
    if (
      game.bAutoLoop.max >= 1000 / buptotalMute &&
      (game.bAutoLoop.inf >= 1000 / buptotalMute || game.leastBoost <= 1e10)
    ) {
      const bupCom = Math.min(
        game.bAutoLoop.max / (1000 / buptotalMute),
        game.leastBoost <= 1e10
          ? Infinity
          : game.bAutoLoop.inf / (1000 / buptotalMute)
      );
      game.bAutoLoop.max %= 1000 / buptotalMute;
      game.bAutoLoop.inf %= 1000 / buptotalMute;
      increaseOrdTier2(bupCom);
    }
  }
  if (game.upgrades.includes(7) || game.leastBoost <= 19) {
    partOP += (ms / 1000) * calcOPPS();
    game.OP += Math.floor(partOP);
    partOP %= 1;
  }
  if (game.OP > BHO * getSingLevel()) game.OP = BHO * getSingLevel();
  if (game.ord > BHO * getSingLevel()) game.ord = BHO * getSingLevel();
  if (game.upgrades.includes(8)) {
    game.incrementy = game.incrementy.add(getIncrementyRate(ms / 2));
    if (
      getIncrementyRate(1000).gte(game.maxIncrementyRate) &&
      (inChal(2)||inChal(4)||inChal(6)||inChal(8)||!inAnyChal())
    ) {
      game.maxIncrementyRate = getIncrementyRate(1000)};
    if (game.incrementy.gte(game.bestIncrementy)) {
      game.bestIncrementy=game.incrementy
    }
  }
  game.cAutoLoop.shift +=
    game.leastBoost <= 16 && game.cAutoOn.shift === 1
      ? (ms / 1000) * game.shiftAuto.toNumber()
      : 0;
  if (game.cAutoLoop.shift >= 1) {
    if (!(game.advAutoShift==1&&game.factorShifts==5&&inChal(8))) factorShift();
    game.cAutoLoop.shift %= 1;
  }
  game.cAutoLoop.boost +=
    game.leastBoost <= 16 && game.cAutoOn.boost === 1
      ? (ms / 1000) * game.boostAuto.toNumber()
      : 0;
  if (game.cAutoLoop.boost >= 1) {
    if (
      game.OP >= BHO &&
      (!inAnyChal()) &&
      !(
        game.factorBoosts <=
        slugMile[
          slugMile.findIndex(mile => mile < game.leastBoost)
        ]
      )
    )
      factorBoost();
    game.cAutoLoop.boost %= 1;
  }
  if (game.aups.includes(8))
    cardinalLoop = cardinalLoop.add(game.mostCardOnce.times(ms / 33333));
  if (cardinalLoop.gte(1)) {
    game.cardinals = game.cardinals.add(cardinalLoop.floor());
    cardinalLoop = cardinalLoop.mod(1);
  }
  if (calcBase()==5&&inChal(4)&&game.ord > game.mostChal4) {
    game.mostChal4 = game.ord
  }
  let fbps = getFBps()
  if (
    (!inAnyChal()) &&
    game.chal8 === 0 &&
    game.chal9 === 0 &&
    !game.upgrades.includes(10) &&
    game.cAutoOn.shift === 1 &&
    game.cAutoOn.boost === 1 &&
    game.leastBoost <= 16 &&
    (1/fbps)*getFBmult() <= ms * 0.022
  ) {
    factorBoostLoop +=
      ((1 / calcFactorBoostTime() - 1 / (ms * 0.022)) * ms) / 1000;
    game.factorBoosts += Math.floor(factorBoostLoop);
    factorBoostLoop %= 1;
  }
  if (fbps>=game.bestFBps) {
    game.bestFBps = fbps
  }
  if (
    game.qolSM.ca === 1 &&
    game.collapseTime >= game.qolSM.ttnc &&
    game.reachedBHO === 1 &&
    off === 0
  )
    collapse();
  const themeSave = `<link rel="stylesheet" href="${["style/light", "style/dark", "style/space"][game.theme]}.css">`;
  if (get("theme").innerHTML !== themeSave) get("theme").innerHTML = themeSave;
  if (game.OP >= V(27) || game.ord >= V(27) || game.factorBoosts >= 25)
    game.reachedBHO = 1;
  project(buptotalMute);
  if (ms > 0) render();
  if (game.factorBoosts < 0) game.factorBoosts = 0;
  if (game.base <= 4) game.dynamicUnlock = 1;
}

function render() {
  if (game.incrementyverse == 1) {
    incrementyverseRender()
    return
  }
  const outSize = fghexp(
    ((game.ord % game.base ** 3) + 0.1) / game.base ** 2,
    Math.pow(2, Math.floor(((game.ord % game.base ** 2) + 0.1) / game.base)) *
      (game.base + game.over + (game.ord % game.base))
  );
  let fbvps = getFBps()/getFBmult()
  ordColor = "no";
  const ordSub =
    game.ord <= 1e200 || fbvps >= 10
      ? getFBps()/getFBmult() >= 10
        ? displayOrd(0, game.base, 0, 0, 0, 0, game.colors)
        : displayOrd(game.ord, game.base, game.over, 0, 0, 0, game.colors)
      : displayOrd(
          Math.round(game.ord / 1e270 + 1) * 1e270 - 1e270,
          3,
          0,
          0,
          0,
          0,
          game.colors
        );
  let date=Date.now()/100
  get("hardy").innerHTML =
    `${colorWrap("H", (game.colors === 2?HSL(date):ordColor))}<sub>${(game.colors === 2?colorWrap(ordSub,HSL(date)):ordSub)}</sub><text class="invisible">l</text>${colorWrap(
      `(${game.base})${(game.ord >= game.base ** 3 ||
        outSize >= 10 ** 264 || getFBps()/getFBmult() >= 10
          ? getFBps()/getFBmult() >= 10
            ? `=${game.base}`
            : ""
          : `=${beautifyEN(outSize)}`)}`,
      (game.colors === 2?HSL(date):ordColor)
    )}`
  get("hardyvalue").innerHTML = "Hardy Value: " + hardy(game.ord, game.base, game.over).toString()
  game.canInf =
    game.ord >= game.base ** 3 ||
    outSize >=
      (game.leastBoost <= 19 ? (game.leastBoost <= 5.5 ? 10 : 100) : 10240) ||
    outSize >= Infinity;
  let ordLevel=Number(getPsi(game.ord))
  if (ordLevel > game.bestPsi && ordLevel != 1) {
    game.bestPsi=ordLevel
    $.notify(`Ordinal Level ${ordLevel} Reached! ` + (ordLevel==51?"(You should start repeatedly markuping and max all)":"") + (ordLevel==100? "(Get ready for base 2!)":""), "achieve");
  }
  get("psiLevel").innerText = ordLevel
  if (get("Tab4").style.display == "block") {
  if (ordLevel == 154) {
    get("nextPsiLevel").innerHTML = displayHugeOrd(ordThreshData["buchholz e(W2+1)"])
  } else {
    get("nextPsiLevel").innerHTML = displayOrd(getPsiReq(ordLevel+1)(game.base),game.base)
  }}
  get("bestPsiLevel").textContent=game.bestPsi
  if (game.infUnlock === 1) {
    get("infinityTabButton").style.display = "inline-block";
  } else {
    get("infinityTabButton").style.display = "none";
  }
  if (game.boostUnlock === 1) {
    get("boosterTabButton").style.display = "inline-block";
    if (!(game.challenge>0||game.chal8==1||game.chal9==1)) {
      get("factorBoostText").style.display = "inline-block";
      get("completeChallenge").style.display = "none";
    } else {
      get("factorBoostText").style.display = "none";
      get("completeChallenge").style.display = "inline-block";
      get("finishChallenge").innerHTML =
        `Complete the challenge!<br>${beautify(
          game.chal8 === 1
            ? getChal8Goal(game.chal8Comp)
            : challengeGoals[game.chal9==1?8:game.challenge - 1][
                (game.chal9==1?game.chal9Comp:game.challengeCompletion[game.challenge - 1])
              ]
        )} OP`;
    }
  } else {
    get("boosterTabButton").style.display = "none";
    get("factorBoostText").style.display = "none";
    get("completeChallenge").style.display = "none";
  }
  if (game.dynamicUnlock === 1) {
    get("dynamicFactorButton").style.display = "inline-block";
  } else {
    get("dynamicFactorButton").style.display = "none";
  }
  if (getFBps() < 10 && game.canInf) {
    infinityButtonText = beautify(calcTotalOPGain());
    if (
      get("infinityButton").innerHTML !==
      `Markup to gain ${infinityButtonText} Ordinal Points (I)`
    )
      get("infinityButton").innerHTML =
        `Markup to gain ${infinityButtonText} Ordinal Points (I)`;
    if (get("infinityButton2").innerHTML !== `+${infinityButtonText}`)
      get("infinityButton2").innerHTML = `+${infinityButtonText}`;
  } else {
    get("infinityButton").innerHTML =
      `Reach ${(game.leastBoost <= 19 ? (game.leastBoost <= 5.5 ? 10 : 100) : 10240)} to Markup`;
    get("infinityButton2").innerHTML =
      `Reach ${(game.leastBoost <= 19 ? (game.leastBoost <= 5.5 ? 10 : 100) : 10240)} to Markup`;
  }
  get("challengeSubTab").style.display = game.upgrades.includes(4)
    ? "inline-block"
    : "none";
  get("chalFactorWhole").style.display=(game.boostUnlock==1||game.factorShifts==7) ? "inline" : "none"
  get("challengeFactor").textContent = `Your Quadrupler is x${getChalFact().toFixed(3)}`
  get("incrementySubTab").style.display = game.upgrades.includes(8)
    ? "inline-block"
    : "none";
  get("ordinalPointsDisplay").innerHTML =
    `You have ${fbvps>=10&&game.OP>=1e270?calcOPPS()*game.msint/1000:beautify(game.OP)} Ordinal Points`;
  get("succAutoAmount").innerHTML =
    `You have ${logbeautify(game.succAuto)} successor autoclickers, clicking the successor button ${(game.succAuto > 1e265
      ? logbeautify(game.succAuto)
      : beautify(game.succAuto * totalMult * succAutoMult))} times per second`;
  get("limAutoAmount").innerHTML =
    `You have ${logbeautify(game.limAuto)} maximize autoclickers, clicking the maximize button ${(game.limAuto > 10 ** 265
      ? logbeautify(game.limAuto)
      : beautify(game.limAuto * totalMult * limAutoMult))} times per second`;
  get("buysucc").innerHTML =
    `Buy Successor Autobuyer for ${(inChal(1)? game.succAuto === 1
        ? "Infinity"
        : "1.000e6"
      : beautify(
          Math.min(1e260 + game.succAuto, 100 * (2 ** game.succAuto))
        ))} OP`;
  get("buylim").innerHTML =
    "Buy Maximize Autobuyer for " +
    (inChal(1)
      ? game.limAuto === 1
        ? "Infinity"
        : "1.000e6"
      : beautify(Math.min(10 ** 260 + game.limAuto, 100 * 2 ** game.limAuto))) +
    "  OP";
  get("factorShift").innerHTML =
    "Factor Shift (" +
    game.factorShifts +
    "): Requires " +
    (inChal(5) && game.factorShifts >= 2
      ? "Infinity"
      : game.factorShifts >= 7
      ? (game.factorShifts >= 8 + game.enableBase2 - game.boostUnlock)
        ? "Infinity"
        : (getOCComp(4) == 0 ? "Graham's number (g<sub>ψ(Ω<sup>Ω</sup>ω)</sub> (10))" : beautify(getFSCost(game.factorShifts)))
      : beautify(getFSCost(game.factorShifts))) +
    " OP";
  get("noFactors").style.display =
    game.factors.length == 0 ? "inline-block" : "none";
  get("factorList").style.display =
    game.factors.length == 0 ? "none" : "inline-block";
  factorMult = 1;
  if (game.factors.length > 0) {
    for (
      let factorListCounter = 0;
      factorListCounter < game.factors.length;
      factorListCounter++
    ) {
      factorMult *=
        (1 +
          game.factors[factorListCounter] +
          (game.upgrades.includes(11)
            ? doublea(3) * (inChal(3) && game.omegaChallenge != 2? double() : 1)
            : 0)) *
        (game.upgrades.includes(1) && game.omegaChallenge != 2 ? doublex(1.5) : 1);
    }
  }
  if (game.omegaChallenge==1) factorMult=1
  get("factorMult").textContent =
    "Your factors are " + (game.omegaChallenge==1?"useless lol":"multiplying Tier 1 Automation by " + beautify(factorMult));
  get("boostersText").textContent = "You have " + beautify(game.boosters) + " boosters";
  get("refundBoosters").textContent =
    "Refund back " +
    beautify(calcRefund()) +
    " boosters, but reset all factor shifts (R)";
  get("factorBoost").innerHTML =
    "Factor Boost (" +
    commafy(game.factorBoosts) +
    "): Requires g<sub>" +
    displayOrd(V(game.factorBoosts + 3, 1)) +
    "</sub> (10) OP";
  get("gainBoosters").textContent =
    (getSingLevel() == 1
      ? "Gain " +
        (game.OP >= V(game.factorBoosts + 3)
          ? getFactorBoostGain()
          : game.factorBoosts + 1) +
        " Boosters"
      : "Gain " + Math.round(getFBmult()) + " Factor Boosts") + " (B)";
  get("dynamicMult").textContent =
    "Your Dynamic Factor is x" +
    (
      (game.dynamic * getManifoldEffect()) **
      (game.upgrades.includes(13) && (inChal(1)||inChal(3)||inChal(5)||inChal(7)||inChal(9)) ? 2 : 1)
    ).toFixed(3);
  get("maxAllAuto").innerHTML =
    "Your Max All Autobuyer is clicking the Max All button " +
    ((game.upgrades.includes(2) || game.leastBoost <= 5.5) &&
    game.autoOn.max == 1
      ? beautify(buptotalMute)
      : 0) +
    " times per second, but only if you can't Factor Shift";
  get("infinityAuto").innerHTML =
    "Your Markup Autobuyer is clicking the Markup button " +
    (game.upgrades.includes(3) && game.autoOn.inf == 1
      ? beautify(buptotalMute)
      : 0) +
    " times per second, but only if you're past " +
    displayOrd(10 ** 270 * 4) +
    (game.leastBoost <= 5.5
      ? ". It also activates if your Tier 1 automation isn't autoclicking at least once a second"
      : "");
  get("autoMaxButton").textContent =
    "Max All Autobuyer: " +
    (game.upgrades.includes(2) || game.leastBoost <= 5.5
      ? game.autoOn.max == 1
        ? "ON"
        : "OFF"
      : "LOCKED");
  get("autoInfButton").textContent =
    "Markup Autobuyer: " +
    (game.upgrades.includes(3)
      ? game.autoOn.inf == 1
        ? "ON"
        : "OFF"
      : "LOCKED");
  get("bup6 current").textContent = (getBoostFromBoosters(1) < 1000000 ? getBoostFromBoosters(1).toFixed(2) : beautify(getBoostFromBoosters(1)))
  get("bup11 current").textContent = Math.floor(doublea(3))
  get("runChal").textContent =
    game.chal8 == 1 || game.chal9 == 1
      ? "You're currently running Challenge " + (game.chal8 == 1?8:9)
      : (!inAnyChal())
      ? "You're currently not in a challenge"
      : game.omegaChallenge==1
      ? "You're currently in a Challenge " + game.challenge2[0] + " + " + game.challenge2[1] + " pair. You can't enter any other challenges"
      : "You're currently running Challenge " + game.challenge;
  get("incrementyText").textContent =
    "You have " +
    beautifyEN(game.incrementy) +
    " incrementy, multiplying " +
    "Tier 2 Automation by " +
    calcIncrementyMult().toFixed(3) +
    "x";
  get("incrementyText2").textContent =
    "You are getting " +
    beautifyEN(getIncrementyRate(1000).div((game.challenge == 9) ? 1e15 : 1)) +
    " incrementy per second";
  get("iup1").innerHTML =
    "Base Incrementy multiplier is raised to the 1.05<br>Cost: " +
    beautify(EN(100000).pow(game.iups[0]).times(100000));
  get("iup2").innerHTML =
    "Double the production of incrementy<br>Cost: " +
    beautify(EN(1000).pow(game.iups[1]).times(1000).pow((game.omegaChallenge==4)+1));
  get("iup3").innerHTML =
    "Multiply Incrementy multiplier by 1.2<br>Cost: " +
    beautify(EN(1000000000).pow(game.iups[2]).times(1000000000));
  get("manifoldShift").style.display = game.upgrades.includes(12)
    ? "inline-block"
    : "none";
  get("manifoldAmount").textContent =
    beautify(game.manifolds) +
    (game.sing.m > 0.5
      ? "-" + game.sing.m
      : game.sing.m == 0
      ? ""
      : "+" + (0 - game.sing.m));
  get("manifoldBoost").textContent = getManifoldEffect().toFixed(3);
  get("getManifolds").innerHTML =
    "Reset incrementy for a manifold.<br>Need: " +
    (((game.iups[5] == 1 ? 2 : 3) ** (game.manifolds + 1))*1.2).toFixed(2) +
    "x<br>incrementy multiplier";
  get("manifoldIncrease").textContent =
    "It is increasing by " +
    (game.upgrades.includes(13) && (inChal(1)||inChal(3)||inChal(5)||inChal(7)||inChal(9)) // tip: use ctrl+f
      ? " a non-constant amount "
      : (0.002 * (game.iups[6] == 1 ? 100  * (game.sfBought.includes(32) ? 100 : 1) : 1) * getManifoldEffect()).toFixed(
          3
        )) +
    " per second and caps at " +
    getDynamicFactorCap().toFixed(3);
  get("dynamicDecreaseText").style.display =
    inChal(6)||inChal(7) ? "inline" : "none";
  get("dynamicDecrease").textContent = game.upgrades.includes(14)
    ? "10.000"
    : "1.000e300"; //hi
  let bfactor;
  bfactorMult = 1;
  for (let i = 0; i < 7; i++) {
    bfactor =
      ((1 +
        (game.factors.length >= i + 1
          ? game.factors[i] + (game.upgrades.includes(11) ? doublea(3) : 0)
          : 0)) *
        (game.upgrades.includes(1) && game.factors.length >= i + 1  && game.omegaChallenge != 2? double() : 1)) **
      (game.leastBoost <= 24 && game.challengeCompletion[i] == 0
        ? 0.48
        : challengeCurve[game.challengeCompletion[i]]);
    if (
      (inChal(2) && i == 0) ||
      inChal(8)
    )
      bfactor = 1;
    bfactorMult *= bfactor;
    get("challenge" + (i + 1) + "Effect").textContent =
      "x" + bfactor.toFixed(2) + " (" + game.challengeCompletion[i] + "/3)";
    get("challenge" + (i + 1) + "Goal").innerHTML =
      "Goal: " +
      beautify(challengeGoals[i][Math.min(game.challengeCompletion[i], 2)]) +
      " OP";
    chalbut(i);
  }
  bfactor = getDynamicFactorCap() ** getChalCurve(game.chal8Comp);
  if (inChal(8)) bfactor = 1;
  bfactorMult *= bfactor;
  get("challenge8Effect").textContent =
    "x" + bfactor.toFixed(2) + " (" + game.chal8Comp + "/∞)";
  get("challenge8Goal").textContent =
    "Goal: " + beautify(getChal8Goal(game.chal8Comp)) + " OP";
  chalbut(7);
  for (let i = 0; i < bupUpgradeCosts.length; i++) {
    bup(
      i + 1,
      game.leastBoost <= 5.5 &&
        game.qolSM.abu == 1 &&
        (game.qolSM.ig73 == 0 ||
          i + 1 != 10 ||
          inChal(4)||inChal(6)||inChal(7)
        ) &&
        (game.qolSM.igc8 == 0 || !inChal(8))
        ? 0
        : 1
    );
  }
  get("chalMult").textContent =
    "Your " +
    getSumOfChallenges() +
    " challenge completions have multiplied Tier 1 and 2 Automation by " +
    beautify(bfactorMult);
  for (let i = 1; i <= 9; i++) {
    iup(i, 1);
  }
  get("incrementyText3").innerHTML =
    "You start gaining incrementy when you reach " + displayOrd(4e270);
  get("decrementyText").textContent =
    "There is " +
    (inChal(8)
      ? beautifypower(game.decrementy) + " decrementy and "
      : "") +
    game.manualClicksLeft +
    " clicks left";
  get("decrementyText").style.display =
    inChal(8) || inChal(6) || inChal(7)
      ? "inline"
      : "none";
  get("collapseScreen").style.display =
    collapseAnimation === 0 ? "none" : "block";
  get("collapseScreen").style.opacity = collapseAnimation + "%";
  get("collapseTabButton").style.display =
    game.collapseUnlock === 0 ? "none" : "inline-block";
  get("cardinalText").textContent =
    "You have " + beautify(game.cardinals) + " Unassigned Cardinals";
  get("cardText1").innerHTML =
    "You have " + beautify(game.assCard[0].points) + " ℵ<sub>0</sub>";
  get("cardPow1").innerHTML =
    "You have " +
    beautify(game.assCard[0].power) +
    " ℵ<sub>0</sub> Power (+" +
    beautify(
      game.assCard[0].points.pow(
        game.assCard[0].points
          .log10()
          .pow(0.5)
          .max(2)
      )
    ) +
    "/s)";
  get("cardMult1").textContent = "x" + beautify(game.assCard[0].mult, 3);
  get("cardText2").innerHTML =
    "You have " + beautify(game.assCard[1].points) + " ℵ<sub>1</sub>";
  get("cardPow2").innerHTML =
    "You have " +
    beautify(game.assCard[1].power) +
    " ℵ<sub>1</sub> Power (+" +
    beautify(
      game.assCard[1].points.pow(
        game.assCard[1].points
          .log10()
          .pow(0.5)
          .max(2)
      )
    ) +
    "/s)";
  get("cardMult2").textContent = "x" + beautify(game.assCard[1].mult, 3);
  get("cardText3").innerHTML =
    "You have " + beautify(game.assCard[2].points) + " ℵ<sub>2</sub>";
  get("cardPow3").innerHTML =
    "You have " +
    beautify(game.assCard[2].power) +
    " ℵ<sub>2</sub> Power (+" +
    beautify(
      game.assCard[2].points.pow(
        game.assCard[2].points
          .log10()
          .pow(0.5)
          .max(2)
      )
    ) +
    "/s)";
  get("cardMult3").textContent = "x" + beautify(game.assCard[2].mult, 3);
  for (let i = 0; i < 6; i++) {
    get("slug" + i).classList.remove("slugMile");
    get("slug" + i).classList.add("notSlugMile");
  }
  for (let i = 0; i < calcSlugMile(); i++) {
    get("slug" + i).classList.add("slugMile");
    get("slug" + i).classList.remove("notSlugMile");
  }
  for (let i = 0; i < 4; i++) {
    get("base" + i).classList.remove("slugMile");
    get("base" + i).classList.add("notSlugMile");
  }
  for (let i = 0; i < getBaseless(); i++) {
    get("base" + i).classList.add("slugMile");
    get("base" + i).classList.remove("notSlugMile");
  }
  get("alephOmegaText").innerHTML =
    "You have " + beautify(game.alephOmega) + " ℵ<sub>ω</sub>";
  get("alephOmegaText2").innerHTML =
    "You have " + beautify(game.alephOmega) + " ℵ<sub>ω</sub>";
  for (let i = 1; i <= 12; i++) {
    aup(i, 1);
  }
  get("collapseButton").innerHTML =
    game.omegaChallenge != 0
    ? "Click to exit your current Omega Challenge"
    : game.reachedBHO == 1
      ? "Collapse for " + beautify(EN(calcCard())) + " Cardinals (C)"
      : "Reach the BHO or 25 Factor Boosts to Collapse!<br>(OR restart the current Collapse)";
  get("decrementyRate").textContent =
    inChal(8) ? beautifypower(getDecrementyRate(1000)) : 1;
  dup(1, 1);
  dup(2, 1);
  dup(3, 1);
  get("dup1").innerHTML =
    "Reduce the potency of decrementy by 5%<br><br>Cost: " +
    beautifypower(dupCosts[0] ** (game.dups[0] + 1));
  get("dup2").innerHTML =
    "Halve decrementy growth below " + (game.buchholz==2?"ω^(ω3)":"ω<sup>ω3</sup>") + ", otherwise double it<br>Cost: " +
    beautifypower(dupCosts[1] ** (game.dups[1] + 1));
  get("dup3").innerHTML =
    "Gain a 1.2x multiplier to Tier 1 and 2<br><br>Cost: " +
    beautifypower(dupCosts[2] ** (game.dups[2] + 1));
  get("getDarkManifolds").innerHTML =
    "Get a Dark Manifold<br>Need: " +
    beautifypower(Math.log10(game.sfBought.includes(31)?2:3) * (1 + game.darkManifolds)) +
    " Decrementy";
  get("darkManifoldAmount").textContent =
    beautify(game.darkManifolds) + (game.sing.dm===0||(game.sfBought.includes(11))?"":"-" + beautify(getDMSacrafice()))
  get("darkUpButton").style.display = game.aups.includes(3) ? "inline" : "none";
  get("darkManifoldBoost").textContent = getDarkManifoldEffect().toFixed(3);
  get("darkManifoldMaxMode").textContent =
    "Max Mode: " + (game.darkManifoldMax === 1 ? "ON" : "OFF");
  get("autoPrestigeSubTab").style.display =
    game.leastBoost <= 16 ? "inline-block" : "none";
  get("factorShiftAutoToggle").textContent =
    "Factor Shift Autoprestiger: " + (game.cAutoOn.shift === 1 ? "ON" : "OFF");
  get("factorShiftAutoText").textContent =
    "Your Factor Shift Autoprestiger is Factor Shifting " +
    (game.cAutoOn.shift === 1 ? beautifyEN(game.shiftAuto) : 0) +
    " time(s) per second";
  get("factorShiftAdvAutoToggle").textContent=`Advanced Autoshift (max of 5 Factor Shifts in Challenge 8): ` + (game.advAutoShift==1?"ON":"OFF")
  get("factorShiftAdvAutoToggle").style.display=(getBaseless()>=3?"inline":"none")
  get("factorBoostAutoToggle").textContent =
    "Factor Boost Autoprestiger: " + (game.cAutoOn.boost === 1 ? "ON" : "OFF");
  get("factorBoostAutoText").textContent =
    "Your Factor Boost Autoprestiger is Factor Boosting " +
    (game.cAutoOn.boost == 1 ? beautifyEN(game.boostAuto) : 0) +
    " time(s) per second, but only at the BHO or higher, and if you can't get a sluggish milestone";
  get("cardExtra1").classList.remove("invisible");
  if (!game.aups.includes(1000)) get("cardExtra1").classList.add("invisible");
  get("cardExtra2").classList.remove("invisible");
  if (!game.aups.includes(6)) get("cardExtra2").classList.add("invisible");
  get("cardExtra3").classList.remove("invisible");
  if (!game.aups.includes(5)) get("cardExtra3").classList.add("invisible");
  get("collapseCardHelp").innerHTML =
    (game.reachedBHO === 1
      ? "Next Cardinal in " +
        beautify(
          Math.max(Math.ceil(
            (calcCard().toNumber() + 1) **
              (1 / calcCardExponent(game.collapseTime)) +
              24 -
              game.factorBoosts
          ),1)
        ) +
        " Factor Boost(s) ("
      : "(") +
    game.collapseTime.toFixed(1) +
    "s in collapse)" + "<p>Most Cardinals collapsed at once: " + beautify(game.mostCardOnce) +
    (game.aups.includes(8)?", providing a constant " + beautify(game.mostCardOnce.times(0.03)) + " Cardinals per second":"") + "</p>";
  get("bup10").innerHTML =
    "The base is always five below " +
    displayOrd(4e270) +
    ". Buying this resets your ordinal<br>19 Boosters";
  get("aup4").innerHTML =
    "OP boosts Tier 1 and 2 by x" +
    Math.log10(10 + game.OP).toFixed(3) +
    "<br><br>Cost: 8 ℵ<sub>ω</sub>";
  get("checkIncrementy").style.display =
    game.upgrades.includes(8) && game.flashIncrementy == 1 ? "inline" : "none";
  get("flashIncrementy").style.display = game.upgrades.includes(8)
    ? "inline"
    : "none";
  get("flashIncrementy").textContent =
    "Flashing Incrementy Reminder: " +
    (game.flashIncrementy == 1 ? "ON" : "OFF");
  get("checkIncrementy").style.color = HSL(Date.now() / 10);
  get("fbConfirm").textContent =
    "Factor Boost Confirmation: " + (game.fbConfirm == 1 ? "ON" : "OFF");
  get("bulkBoost").textContent =
    "Bulk Boosting: " + (game.bulkBoost == 1 ? "ON" : "OFF");
  get("aup7").innerHTML =
    "ℵ<sub>ω</sub> boosts the ℵ<sub>1</sub> multiplier by<br>x" +
    game.alephOmega
      .add(1)
      .pow(1 / 32)
      .toNumber()
      .toFixed(2) +
    "<br>Cost: 65536 ℵ<sub>ω</sub>";
  updateFactors();
  get("chal8Incrementy").style.display =
    game.leastBoost <= 5.5 ? "inline" : "none";
  get("chal8IncrementyBoost").style.display =
    game.leastBoost <= 5.5 ? "inline" : "none";
  get("chal8IncrementyBoost").innerHTML =
    "<br>To Incrementy: x" +
    (getDynamicFactorCap() ** getChalIncrementyCurve(game.chal8Comp)).toFixed(
      2
    );
  get("refundConfirmation").textContent =
    "Refund Confirmation: " + (game.bConf.ref == 1 ? "ON" : "OFF");
  get("refundFB").textContent =
    "Factor Boost if possible on Refund: " +
    (game.bConf.refFB == 1 ? "ON" : "OFF");
  get("chalConf").textContent =
    "Challenge Confirmation: " + (game.bConf.chal == 1 ? "ON" : "OFF");
  get("chalFB").textContent =
    "Factor Boost if possible on entering a Challenge: " +
    (game.bConf.chalFB == 1 ? "ON" : "OFF");
  get("bottomBoosterUpgrades").style.display =
    game.leastBoost <= 5.5 ? "table-row" : "none";
  get("bottomBoosterUpgrades2").style.display =
    game.leastBoost <= 5.5 ? "table-row" : "none";
  get("distributeCard").style.display =
    game.leastBoost <= 14 ? "block" : "none";
  get("auprow3").style.display = game.leastBoost <= 5.5 ? "table-row" : "none";
  get("auprow4").style.display = "none";
  get("autoPrestigeBuy").style.display =
    game.leastBoost <= 14 ? "inline" : "none";
  get("autoBup").style.display = game.leastBoost <= 5.5 ? "block" : "none";
  get("abu").textContent =
    "Autobuy Booster Upgrades: " + (game.qolSM.abu == 1 ? "ON" : "OFF");
  get("ig73").textContent =
    "Ignore the 73 Booster Upgrade unless in challenge 4, 6, or 7: " +
    (game.qolSM.ig73 == 1 ? "ON" : "OFF");
  get("igc8").textContent =
    "Ignore in Challenge 8: " + (game.qolSM.igc8 == 1 ? "ON" : "OFF");
  get("acc").textContent =
    "Autocomplete Challenges: " + (game.qolSM.acc == 1 ? "ON" : "OFF");
  get("ca").textContent =
    "Collapse Autoprestiger: " + (game.qolSM.ca == 1 ? "ON" : "OFF");
  get("fbps").style.display = getFBps()/getFBmult() >= 1 ? "block" : "none";
  get("fbps").textContent =
    "You should be getting a total of " +
    commafy(getFBps()) +
    " Factor Boost(s) per second";
  get("singularitySubTab").style.display = game.upgrades.includes(20)
    ? "inline"
    : "none";
  get("singularityFunction").style.display = game.upgrades.includes(20)
    ? "inline"
    : "none";
  get("singText").textContent = "Singularity Level: " + getSingLevel();
  get("singMaterial").innerHTML =
    "You have " +
    beautify(Math.max(0,game.darkManifolds - getDMSacrafice())) +
    " Dark Manifolds, " +
    (game.manifolds - game.sing.m) +
    " Manifolds, and " +
    beautifyEN(game.alephOmega) +
    " ℵ<sub>ω</sub>";
  get("singEffect").innerHTML =
    "Raising the Factor Boosts 25+ requirement to " +
    displayOrd(Math.ceil(BHO * getSingLevel())) +
    " and having them give out " +
    Math.round(getFBmult())
 +
    " times the Factor Boosts" + (getSingLevel()==69?"<br><b>👀 OMG THAT'S THE NICE NUMBER!!! 👀</b>":"");
  get("blackHoleCircle").r.baseVal.value = 10 * Math.cbrt(getSingLevel());
  get("blackHoleCircle").cy.baseVal.value = 10 * Math.cbrt(getSingLevel()) + 10;
  get("blackHole").height.baseVal.value =
    (10 * Math.cbrt(getSingLevel()) + 10) * 2;
  get("sacrDM").innerHTML =
    "Upgrade with<br>" +
    beautify(1e6 * (game.sfBought.includes(23)?4:5) ** game.sing.dm) +
    "<br>Dark Manifolds";
  get("singFBtext").textContent = inChal(8)
    ? "Your decrementy is multiplying by " + beautifypower(getDecrementyRate(1000)) + " per second"
    :  (game.cAutoOn.boost === 0 || game.challenge !== 0 || game.chal9 == 1)
      ? "You are currently getting " + beautify(getIncrementyRate(1000)) + " incrementy per second"
      : "You are currently getting " + commafy(getFBps()) + " Factor Boosts per second";
  get("sacrNw").innerHTML =
    "Upgrade with<br>" +
    beautifyEN(1e18 * (game.sfBought.includes(21)?20:100) ** game.sing.nw) +
    " ℵ<sub>ω</sub>";
  for (let i=0;i<3;i++) {
    document.getElementsByClassName("canThicc")[i].classList.remove("thicc")
    if (game.thicc==1) document.getElementsByClassName("canThicc")[i].classList.add("thicc")
  }
  get("collapseConf").textContent="Collapse Confirmation: " + (game.collapseConf==1?"ON":"OFF")
  get("singularityFunction").textContent=(game.mostSing<19.5?"Reach level 20 Singularity":"Singularity Functions")
  get("getRekt20sing").style.display=(game.mostSing<19.5?"block":"none")
  get("singFuncContent").style.display=(game.mostSing>19.5?"block":"none")
  get("functionText").textContent=
`You have ${getSingLevel()+game.manifolds-game.sing.m - game.spentFunctions} functions.
They are based on your Singularity level.`
  //Instead of storing singularity functions, instead, it stores the highest singularity level achieved
  get("refundPointAmount").innerHTML=`You have ${game.refundPoints} Refund Points<br>You gain them when you Collapse`
  get("baselessMilestoneTab").style.display=(game.sfEver.includes(51)?"inline-block":"none")
  get("maxSing").style.display=(getBaseless()>=2?"block":"none")
  get("minSing").style.display=(getBaseless()>=2?"block":"none")
  get("omegaChallenges").style.display = game.upgrades.includes(24)
    ? "inline"
    : "none";
  [1,2,3,4,5,6].forEach(num => {
    get("oc"+num+"E").textContent=getOCComp(num).toFixed(6)
    get("oc"+num+"G").textContent="Goal: " + beautifyEN(ocGoals[num-1]) + " Incrementy" + (getOCComp(num)>=1?" (Best: " + beautifyEN(game.ocBestIncrementy[num-1])+")":"")
    get("oc" + num).classList.remove("OmegaRun")
    get("oc" + num).classList.remove("collapse")
    get("oc" + num).classList.add(game.omegaChallenge==num?"OmegaRun":"collapse")
  })
  get("bup5Cost").textContent=Math.round(4**(0.5**getOCComp(3)))
  get("bup9Cost").textContent=Math.round(18**(0.5**getOCComp(3)))
  get("bup13Cost").textContent=Math.round(16**(0.5**getOCComp(3)))
  get("bup17Cost").textContent=beautify((bupUpgradeCosts[16])**(0.5**getOCComp(3)))
  get("totalOmegaChalComp").textContent=`Your ${getSumOC().toFixed(2)} Omega Challenge Completions are multiplying booster gain from milestones and OP gain by ${Math.max(getSumOC(),1).toFixed(2)}`
  get("double").textContent=double().toFixed(2)
  get("omegaChal1Combo").style.display=(game.omegaChallenge===1?"inline":"none")
  get("omegaChal1Combo").textContent=` Current Combo: c${game.challenge2[0]} + ${game.challenge2[1]}`
  get("ocSet2").style.display=(game.bestFBps>=5e8?"table-row":"none")
  get("ocSet3").style.display=(game.bestFBps>=Infinity?"table-row":"none")
  get("ocSet4").style.display=(game.bestFBps>=Infinity?"table-row":"none")
  get("ocFBpsReq").style.display=(game.bestFBps<5e8?"block":"none")
  get("oc4Effect").textContent=(1/(1+getOCComp(4))).toFixed(6)
  get("oc5Effect").textContent=(Math.max(1,getOCComp(5)**0.5)).toFixed(6)
  get("OC5Hardness").textContent=(Math.floor(100*(Math.max(1,getOCComp(5)**0.5)))/1000000)
  chalbut(8)
  get("challenge9").style.display=(game.aups.includes(10)?"block":"none")
  get("singRange").style.display=(getBaseless()>=2?"block":"none")
  get("singRange").min=-(game.sing.dm+game.sing.nw)
  get("singRange").max=game.manifolds
  get("singRange").value=game.sing.m
  if (getBaseless()>=4 && !(game.decrementy <= game.darkManifolds * Math.log10(game.sfBought.includes(31)?2:3))) {
    game.darkManifolds = Math.floor(game.decrementy / Math.log10(game.sfBought.includes(31)?2:3));
  }
  if (getBaseless()>=4 && calcIncrementyMult() >= (game.iups[5] == 1 ? 2 : 3) ** (game.manifolds + 1)) {
    game.manifolds=Math.max(game.manifolds,Math.floor(Math.log2(calcIncrementyMult()/1.2)))
  }
  get("oc6Effect").innerHTML=Math.max(1,Math.min(getOCComp(6),1.21)**0.5).toFixed(6)
  get("enterIncrementyverse").style.display=game.sfEver.includes(41)?"inline":"none"
  get("boostersFromMilestones").style.display=(game.collapseUnlock===1?"block":"none")
  get("boostersFromMilestones").textContent=`(+${Math.round(Math.max(getSumOC(),1)*(calcSlugMile() + getBaseless()))} from milestones)`
  get("bestIncrementy").textContent=beautify(game.bestIncrementy)
  get("ocConfEnter").textContent=`Enter Omega Challenge Confirmation: ${game.ocConf.enter==1?"ON":"OFF"}`
  get("ocConfExit").textContent=`Exit Omega Challenge Confirmation: ${game.ocConf.exit==1?"ON":"OFF"}`
  get("ocConfDouble").textContent=`Perform Double Collapse upon entering an Omega Challenge: ${game.ocConf.double==1?"ON":"OFF"}`
  if (game.challenge>0||game.chal8==1||game.chal9==1) {
    challengeProject()
  }
  get("incrementyverseTabButton").style.display = "none"
}

function dup(n, spectate = 0) {
  if (getBaseless()>=4) spectate=0
  get("dup" + n).classList.remove("darkButton");
  get("dup" + n).classList.remove("locked");
  get("dup" + n).classList.remove("bought");
  if (n <= 3) {
    if (game.decrementy >= dupCosts[n - 1] ** (game.dups[n - 1] + 1)) {
      if (spectate == 0) {
        game.dups[n - 1] += 1;
        //game.decrementy = game.decrementy.minus(iupCosts[n-1]**game.iups[n-1])
      } else {
        get("dup" + n).classList.add("darkButton");
      }
    } else {
      get("dup" + n).classList.add("locked");
    }
  } /* else {
    if (!game.upgrades.includes(12)) {
      get("iup"+ + n).style.display = "none";
    } else {
      get("iup"+ + n).style.display = "inline-block";
      if (game.iups[n-1]==1) {
        get("iup" + n).classList.add("bought")
      } else if (game.incrementy.gte(iupCosts[n-1])) {
        if (spectate == 0) {
          game.incrementy = game.incrementy.minus(iupCosts[n-1])
          game.iups[n-1] = 1
        } else {
          get("iup" + n).classList.add("boosterButton")
        }
      } else {
        get("iup" + n).classList.add("locked")
      }
    }
  } */
}

function assign(a, b, c) {
  let assigning = true
  if (game.assBefore == 0&&a!=2) assigning=false
  if (game.assBefore == 0&&a!=2) alert("You should probably go for ℵ1 for your first cardinal")
  if (assigning && game.cardinals.gte(b)) {
    let bulk = EN(c == 1 ? game.cardinals.divide(b).floor() : 1).times(b);
    game.cardinals = game.cardinals.minus(bulk);
    game.assCard[a - 1].points = game.assCard[a - 1].points.add(bulk);
    game.assBefore = 1;
  }
}

function beautifypower(number) {
  if (number == Infinity) {
    return "Infinity";
  } else {
    let exponent = Math.floor(number);
    let mantissa = 10 ** (number % 1);
    if (exponent < 5) return Math.round(10 ** number);
    if (exponent > 100000) {
      exponent = Math.floor(Math.log10(number));
      mantissa = number / 10 ** exponent;
      if (mantissa.toFixed(5) == "10.00000") return "e9.99999e" + exponent;
      return "e" + mantissa.toFixed(5) + "e" + exponent;
    }
    if (mantissa.toFixed(2) == "10.00") return "9.99e" + exponent;
    return mantissa.toFixed(2) + "e" + exponent;
  }
}

function changeMusic() {
  game.music = (game.music + 1) % (musicLink.length + 1);
  if (game.music == 0) {
    get("music").pause();
  } else {
	console.log(musicLink[game.music - 1] || "")
    get("music").src = musicLink[game.music - 1] || "";
    get("music").play();
  }
}

function changeColor() {
  game.colors = (game.colors+1) % 3;
}

function changeInt() {
  let newms = prompt("Please type in the new millisecond interval (20≤x≤1000)");
  if (20 <= Number(newms) && Number(newms) <= 1000 && !isNaN(Number(newms))) {
    game.msint = Math.round(Number(newms));
    save();
    location.reload();
  }
}

function changeOrdLengthLess() {
  let newms = prompt(
    "Please type in the new max length. Type in 0 for no maximum"
  );
  if (!isNaN(Number(newms))&&Number(newms)>=0) {
    game.maxOrdLength.less = Math.round(Number(newms));
  }
}

function changeOrdLengthMore() {
  let newms = prompt(
    "Please type in the new max length. Type in 0 for no maximum"
  );
  if (!isNaN(Number(newms))&&Number(newms)>=0) {
    game.maxOrdLength.more = Math.round(Number(newms));
  }
}

function changeTheme() {
  game.theme = (game.theme + 1) % 3;
}
function changeOrdNotation() {
  game.buchholz = (game.buchholz + 1) % 3;
}

function iup(n, spectate = 0) {
  if (getBaseless()>=4) spectate=0
  get("iup" + n).classList.remove("boosterButton");
  get("iup" + n).classList.remove("locked");
  get("iup" + n).classList.remove("bought");
  if (n <= 3) {
    get("iup" + +n).style.display = "";
    let cost=EN(iupCosts[n - 1]).pow((EN(1).add(game.iups[n - 1])).times((n==2&&game.omegaChallenge==4)+1))
    if (game.incrementy.gte(cost)) {
      if (spectate == 0) {
        game.iups[n - 1] = new ExpantaNum(game.iups[n - 1]).add(1); 
        if (getBaseless()<4) game.incrementy = game.incrementy.minus(cost);
      } else {
        get("iup" + n).classList.add("boosterButton");
      }
    } else {
      get("iup" + n).classList.add("locked");
    }
  } else {
    if (!game.upgrades.includes(12)) {
      get("iup" + +n).style.display = "none";
    } else {
      get("iup" + +n).style.display = "inline-block";
      if (game.iups[n - 1] == 1) {
        get("iup" + n).classList.add("bought");
      } else if (game.incrementy.gte(iupCosts[n - 1])) {
        if (spectate == 0) {
          if (getBaseless()<4) game.incrementy = game.incrementy.minus(iupCosts[n - 1]);
          game.iups[n - 1] = 1;
        } else {
          get("iup" + n).classList.add("boosterButton");
        }
      } else {
        get("iup" + n).classList.add("locked");
      }
    }
  }
}

function chalbut(i) {
  get("challenge" + (i + 1)).classList.remove("boosterButton");
  get("challenge" + (i + 1)).classList.remove("bought");
  get("challenge" + (i + 1)).classList.remove("pointer");
  get("challenge" + (i + 1)).classList.remove("running");
  if (inChal(i+1) || (inChal(8) && i == 7) || (inChal(9) && i == 8)) {
    get("challenge" + (i + 1)).classList.add("running");
  } else if ((game.challengeCompletion[i] >= 3 && i <= 6.1)||(i==8&&game.chal9Comp==3)) {
    get("challenge" + (i + 1)).classList.add("bought");
    if (game.sfEver.includes(51)) get("challenge" + (i + 1)).classList.add("pointer");
  } else {
    get("challenge" + (i + 1)).classList.add("boosterButton");
  }
}

function getManifolds() {
  if (
    calcIncrementyMult() >=
    1.2*(game.iups[5] == 1 ? 2 : 3) ** (game.manifolds + 1)
  ) {
    if (getBaseless()<4) game.incrementy = EN(0);
    game.manifolds += 1;
  }
}

function changeDynamic(ms) {
  if (game.dynamicUnlock == 1)
    game.dynamic +=
      ms / 1000000 * (game.iups[6] == 1 ? 100*(game.sfBought.includes(32) ? 100 : 1): 1); 
  if (inChal(6)) //No update, that was just the previous minor upgrade time to make more studies
    game.dynamic -=
      ((10 ** 297) /
      2 /
      (game.upgrades.includes(14) ? 10 ** 299 : 1) /
      getManifoldEffect()) * ms;
  let capp =
    10 *
    getDarkManifoldEffect() *
    (game.aups.includes(6) ? game.assCard[1].mult.toNumber() : 1);
  if (game.dynamic >= capp) game.dynamic = capp;
}

function getDarkManifolds() {
  if (game.decrementy <= game.darkManifolds * Math.log10(game.sfBought.includes(31)?2:3)) return;
  if (game.darkManifoldMax == 1) {
    game.darkManifolds = Math.floor(game.decrementy / Math.log10(game.sfBought.includes(31)?2:3));
  } else {
    game.darkManifolds += 1;
  }
}

function aup(x, spectate = 0) {
  get("aup" + x).classList.remove("collapse");
  get("aup" + x).classList.remove("bought");
  get("aup" + x).classList.add("locked");
  if (
    spectate == 0 &&
    !game.aups.includes(x) &&
    game.alephOmega.gte(EN(aupCost[x - 1]))
  ) {
    game.alephOmega = game.alephOmega.minus(aupCost[x - 1]);
    game.aups.push(x);
  }
  if (game.alephOmega.gte(EN(aupCost[x - 1]))) {
    get("aup" + x).classList.add("collapse");
    get("aup" + x).classList.remove("locked");
  }
  if (game.aups.includes(x)) {
    get("aup" + x).classList.add("bought");
    get("aup" + x).classList.remove("collapse");
    get("aup" + x).classList.remove("locked");
  }
}

function bup(x, spectate = 0) {
  get("bup" + x).classList.remove("canbuy");
  get("bup" + x).classList.remove("bought");
  get("bup" + x).classList.add("locked");
  if (!game.upgrades.includes(x)) {
    if (
      game.boosters >= Math.round(bupUpgradeCosts[x - 1]**(x%4==1?0.5**getOCComp(3):1)) &&
      (game.leastBoost <= 5.5 || (!inChal(6))) && game.omegaChallenge !== 3
    ) {
      if (
        !(x == 12 && !(getSumOfChallenges() >= 7)) &&
        !(x == 16 && !(getSumOfChallenges() >= 22)) &&
        !(x == 20 && !(getSumOfChallenges() >= 33)) &&
        !(x == 24 && !(getSumOfChallenges() >= 37)) &&
        (x < 4.5 || game.upgrades.includes(x - 4))
      ) {
        if (spectate == 0) {
          if (x == 16&&collapseAnimation==0) {
            let a = confirm(
              "Buying this upgrade will destroy everything booster destroys, along with all of your upgrades, autobuyers, challenges, incrementy, incrementy upgrades, and manifolds for a single currency of the next prestige layer. Are you ready for this?"
            );
            if (a) {
              let b = confirm(
                "Are you really sure about this? YOU WILL LOSE EVERYTHING YOU HAVE!"
              );
              if (b) {
                let c = confirm(
                  "ARE YOU REALLY SURE YOU WANT TO DO THAT! YOU WILL LOSE EVERYTHING AND YOU CAN'T UNDO THIS AND MOM WILL GET MAD AND YOU WILL SEE A GLIMPSE OF THE UNKNOWN AND THIS IS YOUR LAST CHANCE!!!"
                );
                if (c) {
                  collapse();
                }
              }
            }
          } else {
            if (x % 4 != 0) game.boosters -= Math.round(bupUpgradeCosts[x - 1]**(x%4==1?0.5**getOCComp(3):1));
            game.upgrades.push(x);
            if (x==9||x==10) {
              game.ord=0
            }
            get("bup" + x).classList.remove("canbuy");
            get("bup" + x).classList.add("bought");
            get("bup" + x).classList.remove("locked");
          }
        } else {
          get("bup" + x).classList.add("canbuy");
          get("bup" + x).classList.remove("bought");
          get("bup" + x).classList.remove("locked");
        }
      }
    }
  } else {
    get("bup" + x).classList.remove("canbuy");
    get("bup" + x).classList.add("bought");
    get("bup" + x).classList.remove("locked");
  }
}

function logbeautify(number) {
  if (beautify(number) == "10^^10") {
    return "10^^9";
  } else if (beautify(number) == "10^^100") {
    return "10^^99";
  } else {
    return beautify(number);
  }
}

function updateFactors() {
  if (game.factors.length >= 0) {
    let factorListHTML = "";
    for (
      let factorListCounter = 0;
      factorListCounter < game.factors.length;
      factorListCounter++
    ) {
	  const cost = Math.pow(
		  10 ** (factorListCounter + 1),
          factorCostExp[factorListCounter] ** game.factors[factorListCounter]
        )
      factorListHTML +=
        "<li>Factor " +
        (factorListCounter + 1) +
        " x" +
        Math.round((1 +
          (game.upgrades.includes(11)
            ? doublea(3) * (inChal(3) && game.omegaChallenge != 2 ? double() : 1) // uhhhhh what do i do now (bruh)
            : 0) + //It applies automatically in challenge 7
          game.factors[factorListCounter]) *
          (game.upgrades.includes(1) && game.omegaChallenge != 2 ? doublex(1.5) : 1)) +
        ' <button onclick="buyFactor(' +
        factorListCounter +
        `)" class="infinityButton">${cost === Infinity
		? `Maxed!`
		: `Increase Factor ${
			factorListCounter + 1
		} for ${beautify(cost)} OP`}</button></li>`;
    }
    if (get("factorListMain").innerHTML != factorListHTML)
      get("factorListMain").innerHTML = factorListHTML;
  }
}

function buysucc(rend = 0) {
  if (inChal(1)) {
    if (game.OP >= 1000000 && game.succAuto == 0) {
      game.OP -= 1000000;
      game.succAuto += 1;
    }
  } else {
    if (game.OP >= 100 * 2 ** game.succAuto && game.OP < 10 ** 265) {
      game.OP -= 100 * 2 ** game.succAuto;
      game.succAuto += 1;
    } else if (game.OP > 10 ** 265) {
      game.succAuto = game.OP;
    }
  }
  if (rend == 1) render();
}

function buylim(rend = 0) {
  if (inChal(1)) {
    if (game.OP >= 1000000 && game.limAuto == 0) {
      game.OP -= 1000000;
      game.limAuto += 1;
    }
  } else {
    if (game.OP >= 100 * 2 ** game.limAuto && game.OP < 10 ** 265) {
      game.OP -= 100 * 2 ** game.limAuto;
      game.limAuto += 1;
    } else if (game.OP > 10 ** 265) {
      game.limAuto = game.OP;
    }
  }
  if (rend == 1) render();
}

function maxall() {
  let bulk = 0;
  if (inChal(1)) {
    buysucc();
    buylim();
  } else {
    if (game.OP < 10 ** 265) {
      buysucc();
      buylim();
      bulk = Math.floor(
        Math.log(1 + game.OP / (100 * 2 ** game.succAuto)) / Math.log(2)
      );
      game.OP -= (2 ** bulk - 1) * (100 * 2 ** game.succAuto);
      game.succAuto += bulk;
      bulk = Math.floor(
        Math.log(1 + game.OP / (100 * 2 ** game.limAuto)) / Math.log(2)
      );
      game.OP -= (2 ** bulk - 1) * (100 * 2 ** game.limAuto);
      game.limAuto += bulk;
    } else {
      game.succAuto = game.OP;
      game.limAuto = game.OP;
    }
  }
}

function displayOrd(
  ord,
  base = 3,
  over = 0,
  trim = 0,
  large = 0,
  multoff = 0,
  colour = 0
) {
  if (ord == Infinity) {
    if (ordColor == "no") ordColor = "red";
    return colour == 1
      ? "<span style='color:red'>" + "Ω" + "</span>"
      : "Ω";
  } else if (ord < base && large == 0) {
    if (ordColor == "no") ordColor = "red";
    return colour == 1
      ? "<span style='color:red'>" + (ord + over) + "</span>"
      : ord + over;
  } else if ((ord < 10**260 || base > 3) && large == 0) {
    let tempvar = Math.floor(Math.log(ord + 0.1) / Math.log(base));
    if (ordColor == "no") ordColor = HSL(tempvar * 8);
    let tempvar2 = Math.pow(base, tempvar);
    let tempvar3 = Math.floor((ord + 0.1) / tempvar2);
    let tempvar4 =
      "ω" +
      (tempvar == 1
        ? ""
        : (game.buchholz == 2 ? "^(" : "<sup>") +
          displayOrd(Math.ceil(tempvar), base, 0) +
          (game.buchholz == 2 ? ")" : "</sup>")) +
      (tempvar3 == 1
        ? ""
        : (game.buchholz == 2 && tempvar > 1.5 ? "×" : "") + tempvar3) +
      (ord - tempvar2 * tempvar3 + over == 0 ||
      trim == game.maxOrdLength.less - 1
        ? ord - tempvar2 * tempvar3 + over == 0
          ? ""
          : "+..."
        : "+");
    return (
      (colour == 1
        ? "<span style='color:" + HSL(tempvar * 8) + "'>" + tempvar4 + "</span>"
        : tempvar4) +
      (ord - tempvar2 * tempvar3 + over == 0 ||
      trim == game.maxOrdLength.less - 1
        ? ""
        : displayOrd(
            Math.ceil(ord - tempvar2 * tempvar3),
            base,
            over,
            trim + 1,
            large,
            multoff,
            colour
          ))
    );
  } else if (ord < 4 * 10 ** 270) {
    let tempvar =
      multoff == 0
        ? [
            displayOrd(3),
            displayOrd(9),
            displayOrd(27),
            displayOrd(19683),
            ordMarks[game.buchholz][0].replace("x", "")
          ][Math.max(0, Math.floor((ord + 10 ** 268) / 10 ** 270))]
        : [
            "1",
            displayOrd(3),
            displayOrd(27),
            displayOrd(19683),
            ordMarks[game.buchholz][0].replace("x", "")
          ][Math.max(0, Math.floor((ord + 10 ** 268) / 10 ** 270))];
    return colour == 1
      ? color(tempvar, ["ω", "(", ")", "^", "!", "@", "$"], "red")
      : tempvar;
  } else if (ord < BHO) {
    let tempvar = Math.floor(
      Math.log((ord + 10 ** 268) / (4 * 10 ** 270)) / Math.log(3)
    );
    if (ordColor == "no") ordColor = HSL(tempvar * 8);
    let tempvar2 = displayOrd(
      ord - 3 ** tempvar * 4 * 10 ** 270 + 10 ** 265,
      base,
      over,
      trim + 1,
      1,
      ordMarks[game.buchholz][tempvar][
        ordMarks[game.buchholz][tempvar].length - 2
      ] == "x",
      colour
    );
    let output = (colour == 1
      ? color(
          ordMarks[game.buchholz][tempvar],
          ["ψ", "(", "Ω", ")", "BHO", "^", "×", "@", "+", "!", "$"],
          HSL(tempvar * 8)
        )
      : ordMarks[game.buchholz][tempvar]
    ).split("x");

    output.splice(1, 0,
      trim == game.maxOrdLength.more - 1
        ? colour == 1
          ? color("...", ["..."], HSL(tempvar * 8))
          : "..."
        : tempvar2 == "1" || tempvar2 == "<span style='color:red'>1</span>"
        ? tempvar <= 0.5 && game.buchholz == 0
          ? colour == 1
            ? "<span style='color:red'>0</span>"
            : "0"
          : game.buchholz == 2
          ? colour == 1
            ? "<span style='color:red'>1</span>"
            : "1"
          : ""
        : tempvar2
    );
    return output.join("");
  } else if (0 == 1&&ord==BHO) {
    if (ordColor == "no") ordColor = HSL(40 * 8);
    return colour == 1 ? color("BHO", ["BHO"], HSL(80 * 4)) : "BHO";
  } else if (ord < BHO * (ordMarks[0].length - 39)) {
    let tempvar = Math.floor(ord / BHO - 1);

    let tempvar2 = 3 ** (ord / BHO - 1) - 3 ** tempvar;
    if ((ord / BHO) % 1 >= 0.999999999999) {
      tempvar++;
      tempvar2 = 0;
    }
    if ((ord / BHO) % 1 <= 0.000000000001) {
      tempvar2 = 0;
    }

    let tempvar3 =
      tempvar2 < 1
        ? BHO * tempvar2
        : (Math.log10(tempvar2) / Math.log10(3) + 1) * BHO;

    if (ordColor == "no") ordColor = HSL((tempvar + 40) * 8);

    let tempvar4 = displayOrd(
      Math.ceil(tempvar3 + 10 ** 265),
      base,
      over,
      trim + 1,
      large,
      ordMarks[game.buchholz][tempvar + 40][
        ordMarks[game.buchholz][tempvar + 40].length - 2
      ] == "x"
        ? 1
        : 0,
      colour
    );
    
    let output = (colour == 1
      ? color(
          ordMarks[game.buchholz][tempvar + 40],
          ["ψ", "(", "Ω", ")", "ε", "^", "×", "@", "+", "!", "$"],
          HSL((tempvar + 40) * 8)
        )
      : ordMarks[game.buchholz][tempvar + 40]
    ).replace(
      "x",
      trim == game.maxOrdLength.more - 1
        ? colour == 1
          ? color("...", ["..."], HSL(tempvar * 8))
          : "..."
        : tempvar4 == "1" || tempvar4 == "<span style='color:red'>1</span>"
        ? game.buchholz == 2
          ? colour == 1
            ? "<span style='color:red'>1</span>"
            : "1"
          : ""
        : tempvar4
    );
    return output;
  } else { // unbreak huge ordinals (requires incrementyverse update)
    return displayHugeOrd(EN(3).pow((ord/BHO)*(729/1108)).times(4));
  }
}

function fghexp(times, on) {
  if (times < 1) {
    return on;
  } else {
    if (times < 5) {
      return fghexp(times - 1, Math.pow(2, on) * on);
    } else {
      return Infinity;
    }
  }
}

function beautify(number, f = 0) {
  if (typeof number == "number") {
    if (number == Infinity) {
      return "Infinity";
    } else if (1e265 > number) {
      if (1e257 > number) {
        let exponent = Math.floor(Math.log10(number + 0.1));
        let mantissa = number / Math.pow(10, exponent);
        if (exponent < 6) return Math.round(number);
        if (mantissa.toFixed(3) == "10.000") return "9.999e" + exponent;
        return mantissa.toFixed(3) + "e" + exponent;
      } else {
        return "1.000e257 (cap in base " + game.base + ")";
      }
    } else {
      return "g<sub>" + displayOrd(number - 9.9e269, 3) + "</sub> (10)";
    }
  } else {
    return beautifyEN(number, f);
  }
}

function beautifyEN(n, f = 0) {
  let x = EN(n);
  if (x.isNaN()) return "NaN"
  if (!x.isFinite()) return "Infinity"
  if (x.layer > 0) {
    return `10{{1}}${x.layer+2}`
  }
  if (x.gte("eeeee10")) {
    return `10{${x.array[x.array.length-1][0]+1}}${x.array[x.array.length-1][1]+2}`
    return x.toString()
  }
  if (x.lte(1e5)) {
    return f === 0 ? x.floor().toString() : x.toNumber().toFixed(f);
  } else if (x.lte("ee5")) {
    let exponent = x.log10().floor();
    let mantissa = x
      .divide(EN(10).pow(exponent))
      .toNumber()
      .toFixed(2);
    if (mantissa == "10.00") exponent = exponent.add(1);
    if (mantissa == "10.00") mantissa = "1.00";
    return mantissa + "e" + beautify(exponent);
  } else {
    return "e" + beautifyEN(x.log10())
  }
}

function calcOrdPoints(ord = game.ord, base = game.base, over = game.over) {
  if (!(ord > 3 ** 27 && base <= 3)) {
    if (ord < base) {
      return ord + over;
    } else {
      let tempvar = Math.floor(Math.log(ord + 0.1) / Math.log(base));
      let tempvar2 = Math.pow(base, tempvar);
      let tempvar3 = Math.floor((ord + 0.1) / tempvar2);
      return Math.min(
        1e258,
        10 ** calcOrdPoints(tempvar, base, 0) * tempvar3 +
          calcOrdPoints(ord - tempvar2 * tempvar3, base, over)
      );
    }
  } else {
    return Math.round(ord / 1e270 + 1) * 1e270;
  }
}

function Tab(t) {
  get("Tab1").style.display = "none";
  get("Tab2").style.display = "none";
  get("Tab3").style.display = "none";
  get("Tab4").style.display = "none";
  get("Tab5").style.display = "none";
  get("Tab6").style.display = "none";
  get("Tab7").style.display = "none";
  get("Tab8").style.display = "none";
  get("Tab" + t).style.display = "block";
  subTab(game.subTab);
  bsubTab(game.bsubTab);
  csubTab(game.csubTab);
  isubTab(game.isubTab);
  if (game.music >= 1) get("music").play();
  if (t==4) {
    setAchieveText()
  }
}

function subTab(t) {
  get("subTab1").style.display = "none";
  get("subTab2").style.display = "none";
  get("subTab3").style.display = "none";
  get("subTab4").style.display = "none";
  get("subTab5").style.display = "none";
  get("subTab" + t).style.display = "block";
  game.subTab = t;
}
function bsubTab(t) {
  get("bsubTab1").style.display = "none";
  get("bsubTab2").style.display = "none";
  get("bsubTab3").style.display = "none";
  get("bsubTab4").style.display = "none";
  get("bsubTab" + t).style.display = "block";
  game.bsubTab = t;
}

function csubTab(t) {
  [1,2,3,4,5,6,7,8,9,10,11,12].forEach(i => get("csubTab"+i).style.display = "none")
  get("csubTab" + t).style.display = "inline-block";
  game.csubTab = t;
  if (t==6) {
  singfunctions.forEach(func => func.update());
  drawStudyTree();
  }
  //get("body").style["background-size"]="cover"
  //Site: https://wallpaperplay.com/
  //Terms: https://wallpaperplay.com/page-terms
}

function isubTab(t) {
  [1,2,3].forEach(i => get("isubTab"+i).style.display = "none")
  get("isubTab" + t).style.display = "inline-block";
  game.isubTab = t;
}

function resetConf() {
  let code = prompt(
    'Are you sure you want to delete all of your progress? Type in "yes" to reset all of your progress.'
  );
  if (code.toLowerCase() == "yes") {
    reset()
    $.notify("Hard Reset Performed","error")
  };
}

function maxFactors() {
  if (!inChal(2)) {
    if (game.factors.length >= 7 && game.OP >= 1e257) {
      game.factors = [9, 8, 7, 7, 6, 6, 6];
      if (game.factorShifts >= 8) game.factors.push(6);
    } else {
      for (let i = 0; i < game.factors.length; i++)
        while (
          game.OP >=
          Math.pow(10 ** (i + 1), Math.pow(factorCostExp[i], game.factors[i]))
        )
          buyFactor(i);
    }
  }
}

function buyFactor(n) {
  if (
    game.OP >=
      Math.pow(10 ** (n + 1), Math.pow(factorCostExp[n], game.factors[n])) &&
    (!inChal(2))
  ) {
    if (game.OP < 1e265)
      game.OP -= Math.pow(
        10 ** (n + 1),
        Math.pow(factorCostExp[n], game.factors[n])
      );
    game.factors[n] += 1;
  }
}

function debug() {
  game.ord = 0;
  game.over = 0;
  game.canInf = false;
  game.OP = 0;
  game.succAuto = 0;
  game.limAuto = 0;
  game.autoLoop = { succ: 0, lim: 0 };
  game.factorShifts = 7;
  game.base = 3;
  game.manualClicksLeft = 1000;
  game.factors = [9, 8, 7, 4, 4, 3, 2];
  game.infUnlock = 1;
  game.dynamic = 1;
  game.challenge = 0;
  game.chal8 = 0;
  game.decrementy = 0;
  render();
  get("infinityTabButton").style.display = "inline-block";
}

function revertToPreBooster() {
  game.ord = 0;
  game.over = 0;
  game.canInf = false;
  game.OP = 10 ** 270 * 5;
  game.succAuto = 0;
  game.limAuto = 0;
  game.autoLoop = { succ: 0, lim: 0 };
  game.factorShifts = 7;
  game.manualClicksLeft = 1000;
  game.base = 3;
  game.factors = [9, 8, 7, 4, 4, 3, 2];
  game.infUnlock = 1;
  game.dynamic = 1;
  game.challenge = 0;
  game.chal8 = 0;
  game.decrementy = 0;
  render();
  get("infinityTabButton").style.display = "inline-block";
}

function V(n, fb = 0) {
  if (n < 27) {
    let tempvar = 0;
    let tempvar2 = 0;
    while (tempvar < n) {
      if (ordMarks[1][tempvar2][ordMarks[1][tempvar2].length - 2] == "x") {
        tempvar++;
      }
      tempvar2++;
    }
    tempvar2--;
    return 3 ** tempvar2 * 4 * 10 ** 270;
  } else {
    return (
      V(26) *
      243 *
      (fb == 1 ? (game.factorBoosts >= 24 ? getSingLevel() : 1) : 1)
    );
  }
}

function toggleAutoMax() {
  if (game.upgrades.includes(2) || game.leastBoost <= 5.5) {
    game.autoOn.max = 1 - game.autoOn.max;
  }
  render();
}

function toggleAutoInf() {
  if (game.upgrades.includes(3)) {
    game.autoOn.inf = 1 - game.autoOn.inf;
  }
  render();
}

function ENify(x) {
  if (typeof x == "number") {
    return EN(x);
  } else if (x == "null") {
    return EN(0);
  } else {
    let newEN = new EN(0);
    newEN.array = x.array;
    newEN.sign = x.sign;
    newEN.layer = x.layer;
    return newEN;
  }
}

function time(x) {
  if (x==Infinity) return "forever";
  let timeList = [
    Math.floor(x / 86400),
    Math.floor((x % 86400) / 3600),
    Math.floor((x % 3600) / 60),
    Math.floor(x % 60)
  ];
  let timeUnits = ["d ", "h ", "m ", "s"];
  while (timeList[0] == 0) {
    timeList.shift();
    timeUnits.shift();
  }
  let timeOut = "";
  for (let i = 0; i < timeList.length; i++) {
    timeOut += timeList[i];
    timeOut += timeUnits[i];
  }
  if (timeOut == "") timeOut = "<1s";
  return timeOut;
}

function copyStringToClipboard(str) {
  var el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style = {
    position: "absolute",
    left: "-9999px"
  };
  document.body.appendChild(el);
  copyToClipboard(el);
  document.body.removeChild(el);
  $.notify("Copied to clipboard!","success");
}

function copyToClipboard(el) {
  el = typeof el === "string" ? document.querySelector(el) : el;
  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    var editable = el.contentEditable;
    var readOnly = el.readOnly;
    el.contentEditable = true;
    el.readOnly = true;
    var range = document.createRange();
    range.selectNodeContents(el);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    el.setSelectionRange(0, 999999);
    el.contentEditable = editable;
    el.readOnly = readOnly;
  } else {
    el.select();
  }
  document.execCommand("copy");
}

function buyFactorShiftAuto() {
  if (game.alephOmega.gte(500)) {
    game.alephOmega = game.alephOmega.minus(500);
    game.shiftAuto = game.shiftAuto.add(1);
  }
}

function buyFactorBoostAuto() {
  if (game.alephOmega.gte(500)) {
    game.alephOmega = game.alephOmega.minus(500);
    game.boostAuto = game.boostAuto.add(1);
  }
}

function maxAutoprestige() {
  let bulk = game.alephOmega.divide(2000).floor();
  game.alephOmega = game.alephOmega.minus(bulk.times(1000));
  game.shiftAuto = game.shiftAuto.add(bulk);
  game.boostAuto = game.boostAuto.add(bulk);
}

function maxInfStuff() {
  if (game.succAuto == 0) buysucc();
  if (game.limAuto == 0) buylim();
  maxFactors();
  maxall();
}

function distributeCard() {
  let bulk = game.cardinals.divide(3).floor();
  game.cardinals = game.cardinals.minus(bulk.times(3));
  game.assCard[0].points = game.assCard[0].points.add(bulk);
  game.assCard[1].points = game.assCard[1].points.add(bulk);
  game.assCard[2].points = game.assCard[2].points.add(bulk);
}

function getSingularity(x) {
  if (
    x == 0 &&
    game.darkManifolds - getDMSacrafice() >= 1e6 * (game.sfBought.includes(23)?4:5) ** game.sing.dm
  ) {
    game.sing.dm++;
  } else if (x == 1 && game.manifolds >= game.sing.m + 1) {
    game.sing.m++;
  } else if (x == 2 && game.alephOmega.gte(1e18 * (game.sfBought.includes(21)?20:100) ** game.sing.nw)) {
    game.alephOmega = game.alephOmega.minus(1e18 * (game.sfBought.includes(21)?20:100) ** game.sing.nw);
    game.sing.nw++;
  }
}

function getSingManifold() {
  if (getSingLevel() >= 1.5) {
    --game.sing.m;
  }
}

function downgradeSing1() {
  game.sing.m -= getSingLevel()-1
}

function maximizeSing() {
  while (game.darkManifolds - getDMSacrafice() >= 1e6 * (game.sfBought.includes(23)?4:5) ** game.sing.dm) game.sing.dm++;
  while (game.alephOmega.gte(1e18 * (game.sfBought.includes(21)?20:100) ** game.sing.nw)) game.sing.nw++;
  game.sing.m=game.manifolds;
}

function postBHOproj(x) {
  let goal = EN(BHO / 1e270).times(EN(3).pow(getSingLevel() - 1));
  let amt = EN(game.OP / 1e270);
  if (game.OP > BHO) amt = EN(BHO / 1e270).times(EN(3).pow(game.OP / BHO - 1));
  return EN.floor(goal.minus(amt).div(x));
}

function onSingRangeChange() {
  game.sing.m = parseInt(get("singRange").value)
}

let incrementyUpgradeLoop = [EN(0),EN(0),EN(0)]
let inEnterIncrementyverseAnimation = 0
const incrementyverseUpgradeCosts = [EN("1e1136"),EN("1e23500"),EN("e5e7"),EN("eee10"),EN("10^^2500"),EN("10^^^100"),EN("10^^^^^100"),EN("10^^^^^^^^^^10"),EN("10^^^^10"),EN("10^^^^^^^10"),EN("10^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^10"),EN("10^^^^^^^^^^^^^^^^^^^^10")]
const ordThreshData = {
  "buchholz e(W2+1)": EN(3).pow(EN(3).pow(3**26+10/3).add(27)),
  "madore e(W2+1)": EN(3).pow(EN(3).pow(EN(3).pow(30).add(3))),
  "hyperoperational cutoff": EN.arrow(3,27,3)
}
const tenTetrTen = EN(10).tetr(10)
const orb4UnlockReq = 50000
const orb5UnlockReq = 90000
const maxEN = EN(10).expansion(EN.MAX_SAFE_INTEGER)

function fancyText(start,anim,text) {
  if (anim==start) {
    get("newTextFade").textContent = text
  }
  if (anim <= start+50 && anim >= start) {
    get("newTextFade").style.opacity=((anim-start)/50)
  }
  if (anim <= start+150 && anim >= start+100) {
    get("newTextFade").style.opacity=1-((anim-start-100)/50)
  }
}

function incrementyverseActivate() {
  game.incrementyverse = 1
  get("enterIncrementyTextWall").style.display="none"
  get("enterIncrementyverseButton").style.display="none"
  var txt = document.createElement("p");
  txt.style["text-align"]="center"
  txt.style["font-size"]="30pt"
  if (Math.random() < 0.0) flashText("Ordi.")
  txt.innerHTML="<b>Welcome to the Incrementyverse! I suggest you start exploring.</b>"
  get("csubTab9").appendChild(txt);
  game.incrementy=EN("1e540")
}

function incrementyverseLoop(ms,off=0) {
  if (ms>=5) ms=Math.max(game.msint,ms)
  //console.log(ms)
  if (game.sfBought.includes(11)) {game.sfBought=game.sfBought.filter(x => {return x>=77})};
  RPloop += ms
    if (RPloop >= 1000) {
      game.refundPoints += Math.floor(RPloop/1000)
      RPloop = RPloop % 1000
    }
  if (game.orbUnlock == 0 && game.fractalShift >= 0.5) game.orbUnlock = 1
  if (game.orbUnlock == 1) {
    game.orbEffectExp += ms/1000 * calcOrbSpeedMult()
  }
  [1,2,3,4,5].forEach(num => {fuep(num,1)})
  game.bigBrainOrd=game.bigBrainOrd.add(calcIncrementyMult().times(ms/500))
  game.incrementy=game.incrementy.add(getIncrementyRate(ms))
  game.multifolds=game.multifolds.max(EN(calcIncrementyMult()).logBase(3)).floor()
  game.sing.m = Math.floor(game.multifolds)
  buyIupsWithAuto(ms)
  buyIups()
  updateFractalEngine(ms)
  incrementyverseRender()
  get("incrementyiv1").classList.add("boosterButton")
  if (game.incrementy.lt(EN(100000).pow(game.iups[0].add(1)))) get("incrementyiv1").classList.remove("boosterButton")
  get("incrementyiv2").classList.add("boosterButton")
  if (game.incrementy.lt(EN(1000).pow(game.iups[1].add(1)))) get("incrementyiv2").classList.remove("boosterButton")
  get("incrementyiv3").classList.add("boosterButton")
  if (game.incrementy.lt(EN(1000000000).pow(game.iups[2].add(1)))) get("incrementyiv3").classList.remove("boosterButton")
  let psi = getPsi()
  get("psiLevel").textContent=psi
  get("nextPsiLevel").innerHTML=displayHugeOrd(getPsiReq(psi+1))

  if (psi > game.bestPsi) {
    game.bestPsi = psi
    let milestone = ""
    switch (psi) {
      case 155: milestone = " (buchholz e(W2+1))"; break;
      case 156: milestone = " (hyperoperational cutoff)"; break;
      case 157: milestone = " (Infinity)"; break;
      default: milestone = "";
    }
    $.notify(`Ordinal Level ${psi} Reached!${milestone}`, "achieve");
  }
  get("bestPsiLevel").textContent=game.bestPsi
  if (game.ivups.includes(11)){
    if (game.autoFractal[0]) {
      fuep(1)
      fuep(2)
      fuep(3)
      fuep(4)
      fuep(5)
    }
    if (game.autoFractal[1]) {
      buyFractalEngine(1)
    }
    if (game.autoFractal[2]) {
      // buy upper levels as well to make the automation fully functional (no need to hold enter anymore)
      if (game.fractalEngine.length >= 2) buyFractalEngine(2)
      if (game.fractalEngine.length >= 3) buyFractalEngine(3)
      if (game.fractalEngine.length >= 4) buyFractalEngine(4)
    }
  }
}
function flashText(n) {
  get("flash").innerHTML = n
  get("flash").style.display = "block"
  get("flash").style.opacity = "100%"
  get("flash").style.opacity = "99%"
  let i = 0
  let a;
  window.hmm = setInterval(()=>{
    if(parseFloat(get("flash").style.opacity) <= 0) {
      clearInterval(window.hmm)
      get("flash").style.display = "none"
    } else {
      i+=30; get("flash").style.opacity = 100-i-1+"%"
    }
  },50)




}
function incrementyverseRender() {
  incrementyverseButtons()
  const themeSave = `<link rel="stylesheet" href="${["style/light", "style/dark", "style/space"][game.theme]}.css">`;
  if (get("theme").innerHTML !== themeSave) get("theme").innerHTML = themeSave;
  get("incrementyverseText").textContent=`You have ${beautify(game.incrementy)} incrementy, multiplying Tier 2 by ${beautify(calcIncrementyMult())}x`
  get("incrementyverseText2").textContent=`You are getting ${beautify(getIncrementyRate(1000))} incrementy per second`
  get("maxAllAutoInc").textContent=beautify(calcIncrementyMult().times(2))
  get("iiup1cost").textContent=beautify(EN(100000).pow(game.iups[0].add(1)))
  get("iiup2cost").textContent=beautify(EN(1000).pow(game.iups[1].add(1)))
  get("iiup3cost").textContent=beautify(EN(1000000000).pow(game.iups[2].add(1)))
  get("manifoldAmountInc").textContent=beautify(game.multifolds) + "-" + beautify(game.multifolds)
  get("manifoldAmountInc2").textContent=beautify(game.multifolds)
  let OPord = displayHugeOrd(game.bigBrainOrd)
  let hardyDisplay = "H<sub>" + OPord + "</sub><invisible>l</invisible>(3)"
  if (game.colors == 1) {
    hardyDisplay=colorWrap(hardyDisplay,"#FF0000")
  }
  if (game.colors == 2) {
    hardyDisplay=colorWrap(hardyDisplay,HSL(Date.now()/100))
  }
  get("hardy").innerHTML=hardyDisplay
  get("hardyvalue").innerHTML = "Hardy Value: Infinity"
  OPord = `g<sub>${OPord}</sub> (10)`
  get("incrementyverseSuccAutoAmount").innerHTML=`You have ${OPord} successor autoclickers, clicking the successor button ${OPord} times per second`
  get("incrementyverseLimAutoAmount").innerHTML=`You have ${OPord} maximize autoclickers, clicking the maximize button ${OPord} times per second`
  get("buysuccInc").innerHTML=`Buy Successor Autobuyer for ${OPord} OP`
  get("buylimInc").innerHTML=`Buy Limit Autobuyer for ${OPord} OP`
  get("OPdisplayInc").innerHTML=`You have ${OPord} Ordinal Points<text class="invisible">____</text>`
  get("singText").innerHTML=`Singularity Level: ${beautify(getSingLevel())}`
  get("markupForOPInc1").innerHTML=`+${OPord}`
  get("functionText").textContent=`You have ${beautify(getSingLevel().minus(game.spentENFunctions))} functions.
They are based on your Singularity level.`
  get("getManifoldsInc").innerHTML =
    "Reset incrementy for a manifold.<br>Need: " +
    beautify(EN(3).pow(game.multifolds.add(1))) +
    "x<br>incrementy multiplier";
  get("incrementyverseupgradeincrementy").textContent=beautify(game.incrementy)
  for (let i=1;i<=12;i++) {
    ivup(i,1)
  }
  get("sf101effect").textContent=beautify(getSingLevel().minus(game.spentENFunctions).max(3).div(2).floor())
  get("sf102effect").textContent=calcSF102Effect().lte(1000)?calcSF102Effect().toNumber().toFixed(2):beautify(calcSF102Effect())
  get("ivup3").innerHTML=`Incrementy boosts all incrementy automation by ${calcIvup3Effect().lte(1000)?calcIvup3Effect().toNumber().toFixed(2):beautify(calcIvup3Effect())}x<br>e5e7 Incrementy`
  get("fractalEngineMachines").classList.remove("fractalEngineMachines"+(game.ivups.includes(5)?"One":"Two"))
  get("fractalEngineMachines").classList.add("fractalEngineMachines"+(game.ivups.includes(5)?"Two":"One"))
  get("fractalShiftBoostTab").style.display=(game.ivups.includes(5)?"":"none")
  get("fractalEngineSubTab").style.display=game.ivups.includes(4)?"":"none"
  let orbMult = getTotalOrbMult()
  get("energyOrbText").innerHTML=`<b>You have ${getOrbs()} Energy Orb${(getOrbs()==1?"":"s")} at ${(getOrbEffectMult()*100).toFixed(3)}% effectiveness,<br>providing a ${(orbMult.lte(1000)?orbMult.toNumber().toFixed(2):beautify(orbMult))}x multiplier</b>`
  get("energyOrbText2").innerHTML=`Efficiency: +${beautifyEN(EN(1-getOrbEffectMult()).times(100).times(calcOrbSpeedMult()))}%/sec (${beautifyEN(calcOrbSpeedMult())}x speed)`
  get("sf141effect").textContent=(Math.max(2,getfractalshift()-(getfractalshift()<=5.5?2:0))*0.5).toFixed(2)
  if (getfractalshift() > orb4UnlockReq) {
    get("energyOrb4Desc").innerHTML = 'Keep everything on Fractal Shifts<br>Penalty: None<br>Boosted: '
    get("energyOrb4").style.display = ""
    get("orb5Column").style.display = ""
  } else {
    get("energyOrb4Desc").innerHTML = `Reach ${orb4UnlockReq.toLocaleString()} Fractal Shifts`
    get("energyOrb4").style.display = "none"
    get("orb5Column").style.display = "none"
  }
  if (getfractalshift() > orb5UnlockReq) {
    get("energyOrb5Desc").innerHTML = 'Omega<br>Boosted: '
    get("energyOrb5").style.display = ""
  } else {
    get("energyOrb5Desc").innerHTML = `Reach ${orb5UnlockReq.toLocaleString()} Fractal Shifts`
    get("energyOrb5").style.display = "none"
  }
  updateOrb()
  let capStatus = ""
  if (game.fractalShift >= 90000 || game.fractalUpgrades[4] >= 9999) capStatus = " (softcapped)"
  if (game.fractalShift >= 90000 && game.fractalUpgrades[4] >= 10000) capStatus = " (hardcapped)"
  get("fractalShifts").innerHTML = "You have " + (game.fractalUpgrades[4] >= 1 ? " ( " : "") + `${game.fractalShift}` + (game.fractalUpgrades[4] >= 1 ? (" + " + game.fractalUpgrades[4] + " ) ") : "") + capStatus + " Fractal Shifts"
  get("feups").style.display=(game.ivups.includes(6)?"":"none")
  get("fueptext").style.display=(game.ivups.includes(6)?"":"none")
  get("energyOrbSubTab").style.display=(getfractalshift()>=1?"":"none")
  get("fractalAutobuyers").style.display=(game.ivups.includes(11)?"":"none")
  get("autobuyFuep").textContent = "Upgrades Autobuyer: " + (game.autoFractal[0] === 1 ? "ON" : "OFF");
  get("autobuyFEng1").textContent = "Fractal Engine Level 1 Autobuyer: " + (game.autoFractal[1] === 1 ? "ON" : "OFF");
  get("autobuyFEng2").textContent = "Fractal Engine Level 2+ Autobuyer: " + (game.autoFractal[2] === 1 ? "ON" : "OFF");
}

function ivup(x,spectate=0) {
  document.getElementById("ivup" + (x)).classList.remove("canbuy")
  document.getElementById("ivup" + (x)).classList.remove("bought")
  document.getElementById("ivup" + (x)).classList.add("locked")
  if (!game.ivups.includes(x)) {
    if (game.incrementy.gte(incrementyverseUpgradeCosts[x-1])) {
        if (spectate==0) {
            game.incrementy = game.incrementy.minus(incrementyverseUpgradeCosts[x-1])

            game.ivups.push(x)
            document.getElementById("ivup" + (x)).classList.remove("canbuy")
            document.getElementById("ivup" + (x)).classList.add("bought")
            document.getElementById("ivup" + (x)).classList.remove("locked")
            if (x==11) game.autoFractal = [1,1,0]
        } else {
          document.getElementById("ivup" + (x)).classList.add("canbuy")
          document.getElementById("ivup" + (x)).classList.remove("bought")
          document.getElementById("ivup" + (x)).classList.remove("locked")
        }
    }
  } else {
    document.getElementById("ivup" + (x)).classList.remove("canbuy")
    document.getElementById("ivup" + (x)).classList.add("bought")
    document.getElementById("ivup" + (x)).classList.remove("locked")
  }
}


function incrementyverseButtons() {
  get("collapseTabButton").style.display="inline"
  get("secretzero1").style.display="none"
  get("secretzero2").style.display="none"
  get("baselessMilestoneTab").style.display="inline"
  get("singularitySubTab").style.display="inline"
  get("singularityFunction").style.display="inline"
  get("alephPowerTab").style.display="none"
  get("alephUpgradesTab").style.display="none"
  get("enterIncrementyverse").style.display="none"
  get("omegaChallenges").style.display="none"
  get("autoPrestigeSubTab").style.display="none"
  get("boosterTabButton").style.display="none"
  get("infinityTabButton").style.display="none"
  get("collapseTabButton").classList.remove("collapseTabButton")
  get("collapseTabButton").classList.add("tabButton")
  get("collapseTabButton").textContent="Old Mechanics"
  get("collapseTabButton").style.width="180px"
  get("newAutoclickers").style.display="inline"
  get("newAutobuyers").style.display="inline"
  get("newIncrementy").style.display="inline"
  get("OPdisplayInc").style.display="inline"
  get("OPdisplayIncOut").style.display="block"
  get("getRekt20sing").style.display="none"
  get("singTable").style.display="none"
  get("singFuncContent").style.display="block"
  get("singularityFunction").textContent="Singularity Functions"
  get("infinityButton").innerHTML = `Markups no longer exist. You instead get passive pending OP`
  for (let i = 0; i < 6; i++) {
    get("slug" + i).classList.add("slugMile");
    get("slug" + i).classList.remove("notSlugMile");
  }
  for (let i = 0; i < 4; i++) {
    get("base" + i).classList.add("slugMile");
    get("base" + i).classList.remove("notSlugMile");
  }
 get("singMaterial").innerHTML =
    "You have " +
    beautify(Math.max(0,game.darkManifolds - getDMSacrafice())) +
    " Dark Manifolds, " +
    0 +
    " Manifolds, and " +
    beautifyEN(game.alephOmega) +
    " ℵ<sub>ω</sub>";
  get("sacrDM").innerHTML =
    "Upgrade with<br>" +
    beautify(1e6 * (game.sfBought.includes(23)?4:5) ** game.sing.dm) +
    "<br>Dark Manifolds";
  get("sacrNw").innerHTML =
    "Upgrade with<br>" +
    beautifyEN(1e18 * (game.sfBought.includes(21)?20:100) ** game.sing.nw) +
    " ℵ<sub>ω</sub>";
  if (get("Tab7").style.display=="block"&&game.csubTab==5) {
  get("singEffect").innerHTML =
    "Raising the Ordinal Cap to " +
    displayHugeOrd(EN(3).pow(getSingLevel()).times(BHO/3e270))
  }
  get("singFBtext").innerHTML = `You are currently getting ${beautify(getIncrementyRate(1000))} incrementy per second`
  get("blackHoleCircle").r.baseVal.value = 100;
  get("blackHoleCircle").cy.baseVal.value = 110;
  get("blackHole").height.baseVal.value = 220;
  get("minSing").style.display="block"
  get("maxSing").style.display="block"
  get("singRange").style.display="block"
  get("singRange").min=0
  get("singRange").max=1000
  get("singRange").value=1000
  get("SF81").classList.add("trueCenter")
  get("refundPointAmount").innerHTML=`You have ${game.refundPoints} Refund Points<br>You gain them passively`
  get("incrementyverseTabButton").style.display = "inline"
  get("fractalEngineMachines").style.width=document.body.clientWidth*0.75+"px"

  //I think it is better to just implement arbitrary ordinal inputs
  //Up to 10{10{10}10}10 or something
  //
  // we will use XMLHTTPRequests to read a file nope nvm
  //wtf do we do?
}

function buyIups() {

  let x=EN.affordGeometricSeries(game.incrementy,100000,100000,game.iups[0])
  if (game.iups[0].add(x).gte(120)) x=EN(120).minus(game.iups[0]).max(0)
  let c=EN.sumGeometricSeries(x,100000,100000,game.iups[0])
  game.incrementy=game.incrementy.minus(c)
  game.iups[0]=game.iups[0].add(x)

  x=EN.affordGeometricSeries(game.incrementy,1000,1000,game.iups[1])
  if (game.iups[1].add(x).gte(200)) x=EN(200).minus(game.iups[1]).max(0)
  c=EN.sumGeometricSeries(x,1000,1000,game.iups[1])
  game.incrementy=game.incrementy.minus(c)
  game.iups[1]=game.iups[1].add(x)

  x=EN.affordGeometricSeries(game.incrementy,1000000000,1000000000,game.iups[2])
  if (game.iups[2].add(x).gte(66)) x=EN(66).minus(game.iups[2]).max(0)
  c=EN.sumGeometricSeries(x,1000000000,1000000000,game.iups[2])
  game.incrementy=game.incrementy.minus(c)
  game.iups[2]=game.iups[2].add(x)
}

function buyIupsWithAuto(ms) {
  if (game.incrementy.gte(tenTetrTen)) {
    return;
  }
  incrementyUpgradeLoop[0] = incrementyUpgradeLoop[0].add(EN(0+game.sfBought.includes(93)).times(game.autoIncrementy[0]).times(ms/1000).times(calcAutoIncrementyMult()))
  incrementyUpgradeLoop[1] = incrementyUpgradeLoop[1].add(EN(0+game.sfBought.includes(91)).times(game.autoIncrementy[1]).times(ms/1000).times(calcAutoIncrementyMult())
                .times(game.sfBought.includes(111)?getSingLevel().minus(game.spentENFunctions).times(0.01).add(1).pow(1+game.sfBought.includes(112)+game.sfBought.includes(112)):1))
  incrementyUpgradeLoop[2] = incrementyUpgradeLoop[2].add(EN(0+game.sfBought.includes(92)).times(game.autoIncrementy[2]).times(ms/1000).times(calcAutoIncrementyMult()))
  get("autoIncrementy1").innerHTML=`Auto: ${game.sfBought.includes(93)?(game.autoIncrementy[0]==1?"ON":"OFF"):"LOCKED"}<br><br>${game.sfBought.includes(93)&&game.autoIncrementy[0]==1?beautify(calcAutoIncrementyMult()):0}/s`
  get("autoIncrementy2").innerHTML=`Auto: ${game.sfBought.includes(91)?(game.autoIncrementy[1]==1?"ON":"OFF"):"LOCKED"}<br><br>${game.sfBought.includes(91)&&game.autoIncrementy[1]==1?beautify(
    calcAutoIncrementyMult().times(game.sfBought.includes(111)?getSingLevel().minus(game.spentENFunctions).times(0.01).add(1).pow(1+game.sfBought.includes(112)+game.sfBought.includes(112)):1)
  ):0}/s`
  get("autoIncrementy3").innerHTML=`Auto: ${game.sfBought.includes(92)?(game.autoIncrementy[2]==1?"ON":"OFF"):"LOCKED"}<br><br>${game.sfBought.includes(92)&&game.autoIncrementy[2]==1?beautify(calcAutoIncrementyMult()):0}/s`
  for (let i=0;i<3;i++) {
    if (incrementyUpgradeLoop[i].gte(1)) {
      let bulk = incrementyUpgradeLoop[i].floor().min(EN.affordGeometricSeries(game.incrementy,iupCosts[i],iupCosts[i],game.iups[i]))
      if (game.incrementy.lt("ee16")) game.incrementy=game.incrementy.minus(EN.sumGeometricSeries(bulk,iupCosts[i],iupCosts[i],game.iups[i]))
      game.iups[i]=game.iups[i].add(bulk)
      incrementyUpgradeLoop[i]=EN.mod(incrementyUpgradeLoop[i],1)
    }
  }

    //if (DoubleLoop >= 1000 && EN(1000).pow(game.iups[1].add(1)).lt(game.incrementy) && game.sfBought.includes(91) && false) {
     // game.incrementy=game.incrementy.minus(EN(1000).pow(game.iups[1].add(1)))
    //  game.iups[1]=game.iups[1].add(1)
   //   DoubleLoop = DoubleLoop % 1000
  //  }
}


function die() {
  if (inEnterIncrementyverseAnimation == 1) return
  if (!game.bestIncrementy.gte("1e540")) return
  if (game.achievement.length <= 89.5) return
  if (!confirm("Are you sure you want to enter the Incrementyverse? You'll lose all of your factors, boosters, cardinals, challenges, omega challenges, and so on.")) return
  if (!confirm("You also die by entering the Incrementyverse, and your soul will pass through. Are you still sure you want to enter?")) return
  if (!confirm("But you lose everything. You have to be damn sure you want to enter.")) return
  if (!confirm("BUT WAIT, IF YOU DIE IN ORDINAL MARKUP YOU DIE IN MEMES")) return
  alert("NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO...")
  inEnterIncrementyverseAnimation=1
  let anim=0
  get("enterIncrementyverseButton2").style.display="block"
  get("enterIncrementyverseButton2").style["z-index"]="2"
  get("enterIncrementyverseButton2").style.margin="0"
  get("enterIncrementyverseButton2").style.cursor="default"
  get("enterIncrementyverseButton2").style.top="50%"
  get("enterIncrementyverseButton2").style.left="50%"
  get("enterIncrementyverseButton2").style.transform="translate(-50%, -50%)"
  get("enterIncrementyverseButton2").style["-ms-transform"]="translate(-50%, -50%)"
  get("enterIncrementyverseButton2").style.position="absolute"
  const death = setInterval(() => {

    anim += 1;
    if (anim<=100) {
      get("enterIncrementyverseButton2").style.width = `calc(${(50+anim*0.50)}% + ${anim/10}px)` //document.body.scrollHeight-300
      get("enterIncrementyverseButton2").style.height = `calc(${anim/100} * (100%-300px) + 300px)`
      document.body.style.margin=(2-anim/50) + "em"
    }
    if (anim<=120 && anim >= 20) {
      get("newTextFade").style.opacity = 1-((anim-20)/100)
    }
    if (anim <= 200 && anim >= 100) {
      get("enterIncrementyverseButton2").style.height = `calc(${anim/100 + (anim-100)/100} * (100%-300px) + 300px)`
      get("enterIncrementyverseButton2").style["background-size"]=`${100*2**((anim-100)/20)}%`
    }
    if (anim <= 250 && anim >= 200) {
      get("enterIncrementyverseButton2").style.filter=`brightness(${1+(anim-200)/1000})`
    }
    if (anim == 250) {
      get("whitescreen").style.display="block"
      get("whitescreen").style["z-index"]="3"
      get("enterIncrementyverseButton2").style.background="url('https://cdn.glitch.com/6f7e4eb0-585a-45ff-a8c1-2d13a9a7d93f%2Fwhite.png?v=1597786875194')"
      get("enterIncrementyverseButton2").style["border-color"]="#FFFFFF"
      get("enterIncrementyverseButton2").style["background-size"]="400%"
      get("enterIncrementyverseButton2").style.filter=`brightness(1)`
      get("newTextFade").style.opacity=0
    }
    if (anim == 270) {
      get("whitescreen").style.display="none"
      get("whitescreen").style["z-index"]="0"
    }
    if (anim == 300) {
      get("newTextFade").style["font-family"]="serif"
      get("enterIncrementyverseButton2").style.color="#000000"
      get("enterIncrementyverseButton2").style["text-shadow"]="none"
    }
    fancyText(300,anim,"HELLO MORTAL")
    fancyText(500,anim,"YOUR SOUL HAS PASSED THROUGH THE PORTAL")
    fancyText(700,anim,"YOU HAVE EXPERIENCED THE TRUE DIVINE")
    fancyText(900,anim,"AT THE EXPENSE OF ALL OF THOSE MECHANICS")
    fancyText(1100,anim,"WELCOME TO THE INCREMENTYVERSE")
    if (anim==1300) {
      incrementyverseActivate()
    }
    if (anim >= 1300) {
      get("enterIncrementyverseButton2").style.opacity=1-(anim-1300)/200
      document.body.style.margin=((anim-1300)/100)+ "em"
    }
    if (anim === 1500) {
      get("enterIncrementyverseButton2").style.display="none"
      inEnterIncrementyverseAnimation=0
      clearInterval(death);
    }
  }, 50);
}

function displayHugeOrd(x) {
  if (x.isNaN()) return "NEVER"
  if (!x.isFinite() || x.layer >= maxEN.layer) return "Ω"
  return "ψ(" + realDisplayHugeOrd(x.div(4).floor()) + ")"
}

function realDisplayHugeOrd(x,layer=0) {
  let nly = layer+1
  if (x.layer > 0) {
    let k = x.clone()
    let k0 = k.clone(); k0.layer = 0;
    let layerCutoff = (game.buchholz == 0) ? ordThreshData["madore e(W2+1)"] : ordThreshData["buchholz e(W2+1)"]
    let layer1 = x.layer; if (k0.gt(layerCutoff)) layer1++;
    if (layer1 > 3) {
      let zOrd = EN(layer1).add(2).div(3).floor().mul(3)
      return (game.buchholz == 0) ? `Γ<sub>${realDisplayHugeOrd(zOrd,nly)}</sub>` : `${game.buchholz==2?`Ω<sub>2</sub>^(Ω<sub>2</sub>)×${realDisplayHugeOrd(zOrd.sub(3),nly)}`:`Ω<sub>2</sub><sup>Ω<sub>2</sub></sup>(${realDisplayHugeOrd(zOrd.sub(3),nly)})`}`
    }
    k.layer--
    if (game.buchholz == 0) return `φ(${realDisplayHugeOrd(k,nly)},Ω+1)`
    return (game.buchholz==2) ? `Ω<sub>2</sub>^(Ψ<sub>1</sub>(${realDisplayHugeOrd(k,nly)}))`:`Ω<sub>2</sub><sup>Ψ<sub>1</sub>(${realDisplayHugeOrd(k,nly)})</sup>`
  }
  if (x.gte(EN(3).pent(5))) {
    let arrowLevel = x.array[x.array.length-1][0]
    let arrowHeight = x.array[x.array.length-1][1]
    let zOrd = arrowHeight + 3
    if (arrowLevel === 2) {
      if (x.lt(EN(3).pent(zOrd))) zOrd--
      zOrd++
      zOrd = EN(zOrd).div(3).floor().mul(3)
      return (game.buchholz == 0) ? `ζ<sub>${realDisplayHugeOrd(zOrd,nly)}</sub>` : `${game.buchholz==2?"Ω<sub>2</sub>^(2)×":"Ω<sub>2</sub><sup>2</sup>"}(${realDisplayHugeOrd(zOrd.sub(3),nly)})`
    }
    if (x.lt(EN.hyper(arrowLevel+3)(3,zOrd))) zOrd--
    zOrd++
    zOrd = EN(zOrd).div(3).floor().mul(3)
    if (zOrd.eq(3)) zOrd = EN(4)
    if (game.buchholz == 0) return `φ(${realDisplayHugeOrd(EN(arrowLevel),nly)},${realDisplayHugeOrd(zOrd,nly)})`
    return (game.buchholz==2) ? `Ω<sub>2</sub>^(${realDisplayHugeOrd(EN(arrowLevel),nly)})×(${realDisplayHugeOrd(zOrd.sub(3),nly)})`:`Ω<sub>2</sub><sup>${realDisplayHugeOrd(EN(arrowLevel),nly)}</sup>(${realDisplayHugeOrd(zOrd.sub(3),nly)})`
    //ζ
    //3^^^5 (height 2) -> 6
    //3^^^8 (height 5) -> 9
    //3^^^11 (height 8) -> 12
  }
  if (x.gte(EN(3**27).tetr(3))) {
    let pt = x.slog(3**27).floor()
    let ordSub = pt.add(3).div(2).floor().mul(3)
    if (ordSub.gte(3**27)) {
      let pt2 = ordSub.slog(3**27).floor()
      let ordSub2 = pt2.add(3).div(2).floor().mul(3)
      if (ordSub2.gte(3**27)) {
        let pt3 = ordSub2.slog(3**27).floor()
        let ordSub3 = pt3.add(3).div(2).floor().mul(3)
        if (ordSub3.gte(3**27)) return (game.buchholz == 0) ? "ζ<sub>Ω2</sub>" : `${game.buchholz==2?"Ω<sub>2</sub>^(2)":"Ω<sub>2</sub><sup>2</sup>"}`
        return (game.buchholz == 0) ? `ε<sub>ε<sub>ε<sub>${realDisplayHugeOrd(ordSub3,nly+2)}</sub></sub></sub>` : `Ω<sub>2</sub>${game.buchholz==2?"×":""}Ψ<sub>1</sub>(Ω<sub>2</sub>${game.buchholz==2?"×":""}Ψ<sub>1</sub>(Ω<sub>2</sub>(${realDisplayHugeOrd(ordSub3,nly+2)})))`
      }
      return (game.buchholz == 0) ? `ε<sub>ε<sub>${realDisplayHugeOrd(ordSub2,nly+1)}</sub></sub>` : `Ω<sub>2</sub>${game.buchholz==2?"×":""}Ψ<sub>1</sub>(Ω<sub>2</sub>(${realDisplayHugeOrd(ordSub2,nly+1)}))`
    }
    let ordE = (game.buchholz == 0) ? `ε<sub>${realDisplayHugeOrd(ordSub,nly)}</sub>` : `Ω<sub>2</sub>(${realDisplayHugeOrd(ordSub,nly)})`
    if (ordSub.lt(3**27) && pt.mod(2).eq(0) && game.buchholz == 0) return `${ordE}<sup>${ordE}</sup>`
    return ordE
    //(3^^3)^^3: ε(realDisplayHugeOrd(9))
    //(3^^3)^^4: ε(realDisplayHugeOrd(9))^ε(realDisplayHugeOrd(9))
    //(3^^3)^^5: ε(realDisplayHugeOrd(12))
    //(3^^3)^^6: ε(realDisplayHugeOrd(12))^ε(realDisplayHugeOrd(12))
    //(3^^3)^^7: ε(realDisplayHugeOrd(15))
  }
  if (x.gte(ordThreshData["buchholz e(W2+1)"])&&game.buchholz != 0) {
    return "Ω<sub>2</sub>Ω2"
  }
  if (x.gte(ordThreshData["madore e(W2+1)"])&&game.buchholz == 0) {
    return "ε<sub>Ω<sup>2</sup></sub>"
  }
  if (x.gte(3**27)) {
    //return `Ψ<sub>1</sub>(Ψ<sub>2</sub>(Ω)+Ψ<sub>1</sub>(Ψ<sub>2</sub>(Ω)+${realDisplayHugeOrd(x.logBase(3).div(41).floor())}))`
    if (game.buchholz == 0) return `${game.buchholz==2?"ε(Ω2)^(":"ε<sub>Ω2</sub><sup>"}${realDisplayHugeOrd(x.logBase(3).div(27).floor(),nly)}${game.buchholz==2?")":"</sup>"}`
    let ret = x.logBase(3).minus(27)
    if (layer == 0) ret = ret.logBase(3).minus(10/3).floor().times(3).add(0.001) //This 0.001 prevents floating erorr, it;s going to be floored anyways
    return `${layer==0?"Ω<sub>2</sub>Ω+Ψ<sub>1</sub>(Ω<sub>2</sub>Ω+":""}Ψ<sub>1</sub>(Ω<sub>2</sub>Ω+${realDisplayHugeOrd(ret.floor(),nly)})${layer==0?")":""}`
  }
  if (x.gte(3)) {
    return displayOrd(x.toNumber(),3,0,game.maxOrdLength.less-game.maxOrdLength.more).split("ω").join("Ω")

  }
  return x.toString()
}

function displayHugeNum(x) {
  return `g<sub>${displayHugeOrd(x)}</sub> (10)`
}

function calcSF102Effect() {
  return game.incrementy.max(10).log10().pow(0.2)
}

function calcIvup3Effect() {
  return game.incrementy.max(1e10).log10().log10().sqrt()
}

function calcAutoIncrementyMult() {
  return EN(game.sfBought.includes(113)?10:1)
    .times(game.sfBought.includes(113)&&game.sfBought.includes(114)?100:1)
    .times(game.ivups.includes(3)?calcIvup3Effect():1)
    .times(game.sfBought.includes(103)?100:1)
    .times(game.sfBought.includes(115)?10:1)
    .times(game.orbEnabled[0]?getTotalOrbMult():1)
}

function newFractalEngine(x) {
  return {
    level: EN(x),
    own: EN(0),
    charge: EN(0)
  }
}



function FGH(a,b) {
  a=EN(a)
  b=EN(b)
  if (a.eq(2)) {
    return EN(2).pow(b).times(b)
  }
  let ret = EN(1) //Switch might be a better option
  if (a.eq(3)) {
    ret.array = [[0, 10000000000],[1, b.toNumber()-1]]
    return ret
  }
  if (a.eq(4)) {
    ret.array = [[0, 10000000000],[1,8],[2, b.toNumber()-1]]
    return ret
  }
  if (a.gte(5)) {
    ret.array = [[a.toNumber()-4, 8],[a.toNumber()-3, 8],[a.toNumber()-2, b.toNumber()-1]]
    return ret
  }
  return EN.arrow(10,a.minus(1),b.add(1))
}

function updateFractalEngine(ms) {
  while (game.fractalEngine.length >= 4.5) {
    game.fractalEngine.splice(1, 1);
  }
  let anyAuto = 0
  let highAuto = EN(0)
  for (let ind=game.fractalEngine.length-1;ind>=0;ind--) {
    let mach = game.fractalEngine[ind]
    if (mach.level.lt(highAuto)) {
      mach.own = mach.own.add(game.incrementy)
    }
    let tempown = mach.own
    //if (tempown.gte(140)) tempown = tempown.div(140).pow(0.1).times(140)
    if (tempown.gte(1e140)) tempown = tempown.div(1e140).pow(0.9999).times(1e140)
    mach.charge=mach.charge.add(tempown.times(ms/1000).times(getMachMult(mach.level)))
    let autoReq = EN(10).pow(mach.level)
    if (mach.charge.gte(autoReq)) {
      if (highAuto.eq(0)) highAuto = mach.level
      anyAuto = 1
      let autobought = mach.charge.div(autoReq).floor()
      autobought = autobought.minus(1)
      mach.charge=EN.mod(mach.charge,autoReq)
      if (autobought.div(Math.max(1,ms/1000)).gte(1e9)) {mach.charge = EN(Math.random()).times(EN(10).pow(mach.level)).minus(0.001).max(0).floor()}
      if (!(autobought.eq(0))) {
        if (mach.level == game.fractalBase) { // level ω = increase arrow according to # of owned engine (can be squared to reach EN.MAX_SAFE_INTEGER (for next layer) in reasonable time)
          let currentArrow = EN(game.incrementy.array[game.incrementy.array.length-1][0]);
          game.incrementy = arrowIncrease(game.incrementy,currentArrow.add(mach.own.times(game.orbEnabled[1] ? mach.own : 1).times(game.orbEnabled[4] ? mach.own : 1)),autobought);
        } else if (mach.level == game.fractalBase + 1) { // level ω + 1 = increase layer (expansion) according to # of owned engine (can be squared to reach EN.MAX_SAFE_INTEGER (for endgame) in reasonable time)
          if (game.incrementy.layer >= maxEN.layer) { // layer limit reached
            game.incrementy = maxEN; // max the number
            mach.own = maxEN; // as expected if the next layer exists
          } else { // do expansion
            let currentLayer = EN(game.incrementy.layer);
            let expansionRate = mach.own.times(game.orbEnabled[2] ? mach.own : 1).times(game.orbEnabled[4] ? mach.own : 1);
            if (expansionRate.gte(EN.MAX_SAFE_INTEGER-game.incrementy.layer+1)) expansionRate=EN.MAX_SAFE_INTEGER-game.incrementy.layer+1; // prevent overflow
            game.incrementy = game.incrementy.expansion(expansionRate);
          }
        } else { // regular levels (1-99999)
          game.incrementy = arrowIncrease(game.incrementy,mach.level,autobought);
        }
        // if (!(mach.level.eq(1))) {game.fractalEngine[mach.level-2].own = game.fractalEngine[mach.level-2].own.add(1)}
      }
    }
  }
  if (anyAuto == 1) {
    game.iups[0]=game.incrementy.logBase(100000).floor()
    game.iups[1]=game.incrementy.logBase(1000).floor()
    game.iups[2]=game.incrementy.logBase(1000000000).floor()
  }
  get("fractalEngineMachines").children[1].style.display=(game.fractalEngine.length>=2?"":"none")
  get("fractalEngineMachines").children[2].style.display=(game.fractalEngine.length>=3?"":"none")
  get("fractalEngineMachines").children[3].style.display=(game.fractalEngine.length>=4?"":"none")
  for (let i in game.fractalEngine) {
    let mach = game.fractalEngine[i]
    let levelCost = (mach.level > game.fractalBase ? EN(9007199254740991) : mach.level).add(1)
    get("fractalEngineMachines").children[i].children[0].children[0].children[0].children[0].innerHTML=`
    Buy Fractal Engine Level ${beautifyENLevel(mach.level)}<br>Owned: ${beautifyEN(mach.own)}<br>Cost: ${beautifyEN(FGH(levelCost,EN(getFractalBase())).times(EN(game.fractalShift).tetr(2)))} Incrementy`
    let tempown = mach.own
    if (tempown.gte(1e140)) tempown = tempown.div(1e140).pow(0.9999).times(1e140)
    get("fractalEngineMachines").children[i].children[0].children[0].children[0].children[1].innerHTML=`
    Automation Charge: ${beautifyEN(mach.charge)}/${beautifyEN(EN(10).pow(mach.level))}<br>+${beautify(tempown.times(getMachMult(mach.level)))}/s`
  }
  get("fractalDimensionalBase").innerHTML=`Fractal Dimensional Base: ${getFractalBase()}<br>Incrementy: ${beautifyEN(game.incrementy)}
${(game.fractalEngine.some(mach => {return mach.own.gte(1e140)})?`<br><b style="color:red;">Your Fractal Engine gets slower after 1e140 copies (x --> 1e140(x/1e140)^(0.9999))</b>`:"")}`
  get("fractalShift").children[0].innerHTML=`Perform a Fractal Shift and gain the following:
  <br>+1 Automation Engine
  <br>-1 Fractal Engine Base
  <br>${(getOrbs(getfractalshift()+1)-getOrbs(getfractalshift())==0?`Next Orb in ${Math.floor((getOrbs()/2+1)**2)-getfractalshift()} FS`:`+1 Energy Orb`)}
  <br>Fractal Engine Costs go up
  <br><br>Requirement: 10{${(game.fractalShift+2)}}1000 Incrementy`
  get("cumFSReward").innerHTML=
    `Cumulative Rewards:<br>
    ${getfractalshift()+1} Fractal Engine Levels<br>
    -${getfractalshift()} Fractal Base<br>
    +${getOrbs()} Energy Orbs<br>
    x${beautify(EN(getfractalshift()).tetr(2))} Engine Cost`
}

function beautifyENLevel(level) {
  if (level == game.fractalBase) return "ω"
  if (level == game.fractalBase + 1) return "ω + 1"
  return beautifyEN(level)
}

function arrowIncrease(num,order,rep) { //Apply (10{order})^rep num
  // oh hello there
  let numthing = num.clone()
  let orderthing = order.clone()
  let orderNum = order.toNumber()
  let numOrd = numthing.array[numthing.array.length-1][0]
  //console.log(numOrd)
  //console.log(orderNum)
  if (numthing.layer >= 0.5||orderNum>9007199254740991) { //Above 10{9007199254740991}10
    orderthing.layer += 1
    return numthing.max(orderthing)
  }
  if (orderNum >= numOrd+1) { //new arrow set
    if (rep.gte(9007199254740991)) {
      return EN.arrow(10,order,rep)
    }
    numthing.array.push([order.toNumber(),rep.toNumber()])
    return numthing.normalize()
  }
  if (orderNum == numOrd) { //change recursion level
    let rec=EN(numthing.array[numthing.array.length-1][1])
    rec=rec.add(rep)
    if (rec.toNumber()>9007199254740991) {
      return EN.arrow(10,EN(order).add(1),rec)
    }
    numthing.array[numthing.array.length-1][1]=rec.toNumber()
    return numthing
  }
  if (orderNum == numOrd-1) { //same arrow set, Needs Work
    let klength = numthing.array.length
    numthing.array[klength-1][1] -= 1
    if (numthing.array[klength-1][1]==0) {
      let lastArrow = numthing.array.pop()
      numthing=numthing.add(rep)
      return EN.arrow(10,lastArrow[0],numthing.normalize())
    }
    numthing=numthing.add(rep)
    numthing.array[klength-1][1] += 1
    return numthing.normalize()
  }
  return numthing
}

function buyFractalEngine(x) {
  let levelCost = (game.fractalEngine[x-1].level > game.fractalBase ? EN(9007199254740991) : game.fractalEngine[x-1].level).add(1)
  let cost=FGH(levelCost,EN(getFractalBase())).times(EN(getfractalshift()).tetr(2))
  if (game.incrementy.gte(cost)) {
    game.incrementy=game.incrementy.minus(cost)
    game.fractalEngine[x-1].own=game.fractalEngine[x-1].own.add(1)
    if (x==game.fractalEngine.length&&getfractalshift()>=game.fractalEngine[x-1].level.toNumber()) {
      game.fractalEngine.push(newFractalEngine(game.fractalEngine[x-1].level.add(1)))
      while (game.fractalEngine.length >= 4.5) {
        game.fractalEngine.splice(1, 1);
      }
    }
  }
}
function fractalShift() {
  let cost = EN.arrow(10,(game.fractalShift+2),1000)
  if (game.incrementy.gte(cost)) {
    if (game.ivups.includes(12)) bulkshift()
    if (!game.orbEnabled[3]) {
      game.incrementy=EN(0)
      game.bigBrainOrd=EN(0)
      game.iups[0] = EN(0)
      game.iups[1] = EN(0)
      game.iups[2] = EN(0)
      game.sing.m=0
      game.multifolds=EN(0)
      game.incrementy = EN(0)
      game.sing.m = EN(0)
      game.spentENFunctions=EN(0)
      game.sfBought=[]
      game.fractalEngine=[newFractalEngine(1)]
      game.fractalUpgrades[0] = 0
      game.fractalUpgrades[1] = 0
      game.fractalUpgrades[2] = 0
    }
    game.fractalShift += 1
    if (game.fractalShift > 90000) game.fractalShift = 90000
  }
}

function getFractalBase() {
  let x=100000-getfractalshift()
  if (isNaN(x)||typeof x != "number"||x == null) return 100000
  if (x<2) x=2
  return x
}

function getOrbs(x=getfractalshift()) {
  return Math.floor(Math.max(((x.toNumber()+1.26)**0.666)*2-1,0))
}

function getOrbEffectMult(x=game.orbEffectExp) {
  return 1-Math.exp(-x)
}

function getTotalOrbMult() {
  return EN(game.ivups.includes(8)?  1.375 : 1.3).pow(game.fractalUpgrades[2]).add(2.5).pow(getOrbs()*getOrbEffectMult())
  /*let upgrade2Effect = (game.ivups.includes(8)?  1.375 : 1.3)**game.fractalUpgrades[2]
  if (upgrade2Effect == Infinity || upgrade2Effect > 1e308) upgrade2Effect = 1e308
  return EN(2.5+upgrade2Effect).pow(getOrbs()*getOrbEffectMult())*/
}

function toggleOrb(x) {
  if (x==4 && getfractalshift()<orb4UnlockReq) return
  game.orbEnabled[x-1] = 1-game.orbEnabled[x-1]
  game.orbEffectExp = 0
}

function updateOrb() {
  [1,2,3,4,5].forEach(num => {
    get("energyOrb"+num).textContent = (game.orbEnabled[num-1]==1?"ON":"OFF")
  })
}

function calcOrbSpeedMult() {
  return EN(getOrbs()).times(EN(game.ivups.includes(8)?  1.25 : 1.2).pow(game.fractalUpgrades[1])).times(game.sfBought.includes(132)?1.75:1).div(game.orbEnabled.reduce(function(total, num, ind) {
    return EN(total).times([20,50,50,1,1][ind]).pow(num);
  }, 1));
  /*let upgrade1Effect = (game.ivups.includes(8)?  1.25 : 1.2)**game.fractalUpgrades[1]
  if (upgrade1Effect == Infinity || upgrade1Effect > 1e308 / getOrbs()) upgrade1Effect = 1e308 / getOrbs()
  return getOrbs()*upgrade1Effect*(game.sfBought.includes(132)?1.75:1)/game.orbEnabled.reduce(function(total, num, ind) {
    return total * [20,50,50,1,1][ind]**num;
  }, 1);*/
}

function getMachMult(x) {
  return EN(1)
    .times(game.orbEnabled[1]&&x.round().mod(2).eq(1)?getTotalOrbMult():1)
    .times(game.orbEnabled[2]&&x.round().mod(2).eq(0)?getTotalOrbMult():1)
    .times(EN(game.ivups.includes(9)? (game.ivups.includes(10)? (10/3):3) : 2.5).pow(game.fractalUpgrades[0]))
    .times(game.sfBought.includes(131)?1+(getfractalshift()-Math.floor(Math.max(((getfractalshift()+0.26)**0.5)*2-1,0)))*1.5:1)
    .times(game.ivups.includes(7)?10:1)
    .times(game.sfBought.includes(141)?(Math.max(2,getfractalshift()-(game.fractalShift<=5.5?2:0))*0.5):1)
}

function fuep(x,spectate=0) {
  get("feup"+x).classList.remove("locked")
  get("feup"+x).classList.remove("boosterButton")
  let cost = [2,3,5,10,20][x-1]+[1,2,3,6,10][x-1]*game.fractalUpgrades[x-1]
  if (x <= 5) cost -= game.fractalUpgrades[3]
  if (x == 5 && game.fractalUpgrades[4] == 9999) cost = game.fractalBase
  if (x == 5 && game.fractalUpgrades[4] >= 10000) cost = Infinity
  if (cost > game.fractalBase) cost = Infinity
  get("feup"+x+"c").textContent=`10{${cost}}10`
  get("feup1m").textContent = game.ivups.includes(9)? (game.ivups.includes(10)? (3.333):3) : 2.5
  get("feup2m").textContent = game.ivups.includes(8)?  25 : 20
  get("feup3m").textContent = game.ivups.includes(8)?  1.375 : 1.3
  let effInc = game.incrementy.array[game.incrementy.array.length-1]
  if (effInc[0] >= cost || (effInc[0]==cost-1 && effInc[1] >= 9) || (game.incrementy.layer > 0 && cost < Infinity)) {
    if (spectate==0) {game.fractalUpgrades[x-1] += 1}
    get("feup"+x).classList.add("boosterButton")
  } else {
    get("feup"+x).classList.add("locked")
  }
  if (game.fractalUpgrades[4] > 10000) game.fractalUpgrades[4] = 10000
}

function getfractalshift(){
  return game.fractalShift + Math.max(game.fractalUpgrades[4],0)
}

function bulkshift(){
  if (game.fractalShift >= 90000) return // already maxed
  if ((game.incrementy.array[2][0]) > (game.fractalShift) && (game.incrementy.array[2][1]) >= 1000){
    game.fractalShift = game.incrementy.array[2][0] - 1
  }
  else if ((game.incrementy.array[2][0]-1) > (game.fractalShift) && (game.incrementy.array[2][1]) < 1000){
    game.fractalShift = game.incrementy.array[2][0] - 2
  }
}
