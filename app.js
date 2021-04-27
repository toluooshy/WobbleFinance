const express = require('express');
const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
const CoinGeckoList = require('coinlist');

const { loadbtc, loadeth, loadbnb, loadxrp, loadada, loaddot, loaduni, loadcake, loadlink, loaddoge } = require('./loadcurrencies');

var payload = [{},{},{},{},{},{},{},{},{},{},{}];
  
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'graphics')));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.urlencoded({ extended: true })); 

app.set('view engine', 'ejs');

app.use('/', routes);

loadbtc(payload); loadeth(payload); loadbnb(payload); loadxrp(payload); loadada(payload); loaddot(payload); loaduni(payload); loadcake(payload); loadlink(payload); loaddoge(payload);

app.post('/screener', function(req, res) {
  async function fetch() {
    // var coin = CoinGeckoList.get(req.body.symbol.toLowerCase()).id;
    var coin = { 'algo': 'algorand', 'crv': 'curve-dao-token', 'build': 'build-finance' };
    await CoinGeckoClient.coins.fetch(coin[req.body.symbol.toLowerCase()], { tickers: false, market_data: true, community_data: false, developer_data: false, localization: false, sparkline: false }).then(obj => {
      payload[0] = {
        name: obj.data.name,
        symbol: obj.data.symbol,
        image: obj.data.image['large'],
        price: obj.data.market_data.current_price['usd'],
        change: obj.data.market_data.price_change_24h,
        volume: obj.data.market_data.total_volume['usd']
      };
    }).catch(err => {
      console.log(err);
    });
    // console.log(payload);
    res.render('screener', {data:payload});
  } 
  fetch();
});

app.use('/', function(req, res, next){
  res.status(404);
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }
  res.type('txt').send('Not found');
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server listening at http://localhost:5000`)
});