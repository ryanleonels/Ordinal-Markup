const b = () => {return game.base}
let ordThresh = {
  1: () => 0,
  2: () => b(), // hi patcail sooooo uhhhh we gotta implement the in-betweens but then we have to define them ourselves
  3: () => b()*2, // Psi Level was originally made to not have fractional
  4: () => b()*3, //
  5: () => b()*4,// big brain get psi function at the bottom
  6: () => b()**2,
  7: () => b()**2*2, // https://discord.com/channels/666033278553292800/674704776990294016/719620131226910811 for 100-110
  8: () => b()**3, // https://discord.com/channels/666033278553292800/674704776990294016/719620951238770839 for 110-120
  9: () => b()**4, // https://discord.com/channels/666033278553292800/674704776990294016/719622232468619405 for 120-150
  10: () => b()**10,
  11: () => b()**b(),
  12: () => b()**b()*2,
  13: () => b()**(b()+1),
  14: () => b()**(b()+1)*2,
  15: () => b()**(b()+2),
  16: () => b()**(b()+3),
  17: () => b()**(b()*2),
  18: () => b()**(b()*2+1),
  19: () => b()**(b()*3),
  20: () => b()**(b()**2),
  21: () => b()**(b()**2)+(b()**2),
  22: () => b()**(b()**2+1),
  23: () => b()**(b()**2+b()),
  24: () => b()**(b()**2*2),
  25: () => b()**(b()**2*3),
  26: () => b()**(b()**3),
  27: () => b()**(b()**3*2),
  28: () => b()**(b()**4),
  29: () => b()**(b()**5),
  30: () => b()**(b()**b()),
  31: () => b()**(b()**b())+(b()**2),
  32: () => b()**(b()**b()+1),
  33: () => b()**(b()**b()+b()),
  34: () => b()**(b()**b()*2),
  51: () => 4e270,
  67: () => 5e270,
  68: () => 8e270,
  70: () => 1.2e271,
  77: () => 1.3e271,
  78: () => 2.4e271,
  90: () => 3.6e271,
  94: () => 3.7e271,
  95: () => 3.8e271,
  96: () => 4e271,
  97: () => 7.2e271,
  98: () => 7.6e271,
  100: () => 1.08e272,
  102: () => 1.09e272,
  103: () => 2.16e272,
  104: () => 3.24e272,
  105: () => (3**6 * 4) * 1e270,
  106: () => (3**7 * 4) * 1e270,
  107: () => (3**11 * 4) * 1e270,
  108: () => (3**11 * 4 + 108) * 1e270,
  109: () => (3**11 * 4 * 2 + 108) * 1e270,
  110: () => (3**12 * 4) * 1e270,
  111: () => (3**12 * 4 + 1) * 1e270,
  112: () => (3**13 * 4) * 1e270,
  113: () => (3**15 * 4) * 1e270,
  114: () => (3**16 * 4) * 1e270,
  115: () => (3**24 * 4) * 1e270,
  116: () => (3**25 * 4) * 1e270,
  117: () => (3**38 * 4) * 1e270,
  118: () => (3**38 * 4 * 2) * 1e270,
  119: () => (3**38 * 4 * 2 + 3**12*4) * 1e270,
  120: () => (3**39 * 4) * 1e270,
  122: () => (3**39 * 4 + 1) * 1e270,
  124: () => (3**39 * 4 + 2) * 1e270,
  125: () => (3**39 * 4 + 4) * 1e270,
  150: () => BHO,
  151: () => BHO*2,
  152: () => BHO*41,
  153: () => BHO*86,
  154: () => BHO*342,
  155: () => Infinity
}
//EN(3).pow(41*3**27)
let minBase = {
  1: 0,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 3,
  7: 3,
  8: 4,
  9: 5,
  10: 11,
  11: 3,
  12: 3,
  13: 3,
  14: 3,
  15: 3,
  16: 4,
  17: 3,
  18: 3,
  19: 4,
  20: 3,
  21: 3,
  22: 3,
  23: 3,
  24: 3,
  25: 4,
  26: 4,
  27: 4,
  28: 5,
  29: 6,
  30: 4,
  31: 4,
  32: 4,
  33: 4,
  34: 4,
  51: 2,
  67: 2,
  68: 3,
  70: 3,
  77: 3,
  78: 3,
  90: 2,
  94: 3,
  95: 3,
  96: 2,
  97: 2,
  98: 3,
  100: 3,
  102: 3,
  103: 3,
  104: 3,
  105: 3,
  106: 3,
  107: 3,
  108: 3,
  109: 3,
  110: 3,
  111: 3,
  112: 3,
  113: 3,
  114: 3,
  115: 3,
  116: 3,
  117: 3,
  118: 3,
  119: 3,
  120: 3,
  122: 3,
  124: 3,
  125: 3,
  150: 2,
  151: 2,
  152: 2,
  153: 2,
  154: 2,
  155: 1
}

let getPsi = ord => {
  if (game.incrementyverse==1) {
    let level = 154
    if (game.bigBrainOrd.gte(ordThreshData["buchholz e(W2+1)"])) level=155
    if (game.bigBrainOrd.gte(EN(3).pent(5))) level=156
    if (game.bigBrainOrd.gte(EN.arrow(3,4,3))) level=157
    if (game.bigBrainOrd.gte(EN.arrow(3,7625597484988,3))) level=158
    if (game.bigBrainOrd.gte(EN.expansion(3,5))) level=159
    if (game.bigBrainOrd.gte(Infinity)) level=160
    return level
  }
  let temp = Object.keys(ordThresh)
  temp.reverse()
  for(const i in temp) {
    if((ordThresh[temp[i]] >= 1e270 ? Math.round(ord/1e270)*1e270 : ord) >= (ordThresh[temp[i]])()) return temp[i]
  }
}

let getPsiReq = level => {
  if (level >= 155) {
    return [ordThreshData["buchholz e(W2+1)"],EN(3).pent(5),EN.arrow(3,4,3),EN.arrow(3,7625597484988,3),EN.expansion(3,5),EN(Infinity)][level-155]
  }
  let k
  for (k in ordThresh) {
    if (level<=k && minBase[k]<=game.base) {
      return ordThresh[k]
    }
  }
  return 0
}

