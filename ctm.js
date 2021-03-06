var Nightmare = require('nightmare');
var count = 0;

//This module uses nightmare js to visit compare the market and complete
//their quote form. It is sensitive to slow internet and changes to their
//website

var exports = module.exports = {};

exports.compareTheMarket = function(callback) {
  var area1 = new Nightmare()
  .viewport(1000, 5000)
  .useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
  .goto('https://energy.comparethemarket.com/energy/v2/?AFFCLIE=CM01')
  .wait(15000)
  .type('#your-postcode', 'WD194PQ')
  .wait(1000)
  .click('#find-postcode')
  .wait(4000)
  .click('#goto-your-supplier-details')
  .wait(6000)
  .type('#electricity-usage', '8000')
  .wait(1000)
  .click('#goto-your-energy')
  .type('#gas-usage', '14000')
  .wait(1000)
  .click('#goto-your-energy')
  .wait(7000)
  .click('#pre-select-all')
  .click('#pre-select-payment-all')
  .type('#Email', 'hh@gmail.com')
  .click('#terms')
  .wait(1000)
  .click('#email-submit')
  .wait(25000)
  .screenshot( 'images/comparethemarket/area1/' + new Date().toISOString() + '-WD194PQ.png')
  .run(function (err, nightmare) {
    if (err) return console.log(err);
    console.log('CTM Area 1 done!');
    if (count == 2) {
      callback();
    }
    else count ++
  });
  
  
  
  var area2 = new Nightmare()
  .viewport(1000, 5000)
  .useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
  .goto('https://energy.comparethemarket.com/energy/v2/?AFFCLIE=CM01')
  .wait()
  .type('#your-postcode', 'IP15EE')
  .wait(1000)
  .click('#find-postcode')
  .wait(4000)
  .click('#goto-your-supplier-details')
  .wait(6000)
  .type('#electricity-usage', '8000')
  .wait(1000)
  .click('#goto-your-energy')
  .type('#gas-usage', '14000')
  .wait(1000)
  .click('#goto-your-energy')
  .wait(7000)
  .click('#pre-select-all')
  .click('#pre-select-payment-all')
  .type('#Email', 'hh@gmail.com')
  .click('#terms')
  .wait(1000)
  .click('#email-submit')
  .wait(25000)
  .screenshot( 'images/comparethemarket/area2/' + new Date().toISOString() + '-WD11AA.png')
  .run(function (err, nightmare) {
    if (err) return console.log(err);
    console.log('CTM Area 2 done!');
    if (count == 2) {
      callback();
    }
    else count ++
  });
  
  
  
  var area3 = new Nightmare()
  .viewport(1000, 5000)
  .useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
  .goto('https://energy.comparethemarket.com/energy/v2/?AFFCLIE=CM01')
  .wait(15000)
  .screenshot( 'images/moneysupermarket/area1/'+'testctm.png')
  .type('#your-postcode', 'RH101HZ')
  .wait(1000)
  .click('#find-postcode')
  .wait(4000)
  .click('#goto-your-supplier-details')
  .wait(6000)
  .type('#electricity-usage', '8000')
  .wait(1000)
  .click('#goto-your-energy')
  .type('#gas-usage', '14000')
  .wait(1000)
  .click('#goto-your-energy')
  .wait(7000)
  .click('#pre-select-all')
  .click('#pre-select-payment-all')
  .type('#Email', 'hh@gmail.com')
  .click('#terms')
  .wait(1000)
  .click('#email-submit')
  .wait(25000)
  .screenshot( 'images/comparethemarket/area3/' + new Date().toISOString() + '-RH101HZ.png')
  .run(function (err, nightmare) {
    if (err) return console.log(err);
    console.log('CTM Area 3 done!');
    if (count == 2) {
      callback();
    }
    else count ++
  });
}

