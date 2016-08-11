var Nightmare = require('nightmare');

function moneySupermarket(){
var area1 = new Nightmare()
.viewport(500, 5000)
.useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
.goto('http://www.moneysupermarket.com/gas-and-electricity/')
.wait()
.click('#btnEnquiry')
.wait(4000)
.type('#houseNumberOrName', '1')
.type('#postcode', 'WD194PQ')
.wait(500)
.click('#button-findaddress')
.wait(2000)
.click('#dealsThroughMoneysupermarketNo')
.wait(2000)
.type('#emailAddress', 'hh@gmail.com')
.type('#emailAddressConfirm', 'hh@gmail.com')
.wait(1000)
.click('#getQuotesButton')
.wait(10000)
.screenshot( 'images/moneysupermarket/area1/'+ new Date().toISOString() + '-WD194PQ.png')
.run(function (err, nightmare) {
  if (err) return console.log(err);
  console.log('MS Area 1 done!');
});

var area2 = new Nightmare()
.viewport(500, 5000)
.useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
.goto('http://www.moneysupermarket.com/gas-and-electricity/')
.wait()
.click('#btnEnquiry')
.wait(4000)
.type('#houseNumberOrName', '1')
.type('#postcode', 'IP15EE')
.wait(500)
.click('#button-findaddress')
.wait(2000)
.click('#dealsThroughMoneysupermarketNo')
.wait(2000)
.type('#emailAddress', 'hh@gmail.com')
.type('#emailAddressConfirm', 'hh@gmail.com')
.wait(1000)
.click('#getQuotesButton')
.wait(10000)
.screenshot( 'images/moneysupermarket/area2/'+ new Date().toISOString() + '-IP15EE.png')
.run(function (err, nightmare) {
  if (err) return console.log(err);
  console.log('MS Area 2 done!');
});

var area3 = new Nightmare()
.viewport(500, 5000)
.useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
.goto('http://www.moneysupermarket.com/gas-and-electricity/')
.wait()
.click('#btnEnquiry')
.wait(4000)
.type('#houseNumberOrName', '1')
.type('#postcode', 'RH101HZ')
.wait(500)
.click('#button-findaddress')
.wait(2000)
.click('#dealsThroughMoneysupermarketNo')
.wait(2000)
.type('#emailAddress', 'hh@gmail.com')
.type('#emailAddressConfirm', 'hh@gmail.com')
.wait(1000)
.click('#getQuotesButton')
.wait(10000)
.screenshot( 'images/moneysupermarket/area3/'+ new Date().toISOString() + '-RH101HZ.png')
.run(function (err, nightmare) {
  if (err) return console.log(err);
  console.log('MS Area 3 done!');
  //process.exit();
});
}

module.exports = moneySupermarket;
