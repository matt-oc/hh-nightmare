var moneySupermarket = require('./ms.js');
var compareTheMarket = require('./ctm.js');
var count = 0;

moneySupermarket.moneySupermarket(function(cb) {
  if (count == 1) {
    process.exit()
  }
  else count ++;
})

compareTheMarket.compareTheMarket(function(cb) {
  if (count == 1) {
    process.exit()
  }
  else count ++;
})