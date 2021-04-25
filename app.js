const { symbolOf, nameOf } = require ('crypto-symbol');

const express = require('express');
const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
  
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'graphics')));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.urlencoded({ extended: true })); 

app.set('view engine', 'ejs');

app.use('/', routes);

app.post('/console', function(req, res) {
  async function fetch(){
    var payload = [];
    payload.push(`https://cryptologos.cc/logos/${nameOf(req.body.symbol).toLowerCase().replace(/ /g, '-')}-${req.body.symbol.toLowerCase()}-logo.png`);
    let price = require('crypto-price');
    await price.getCryptoPrice('USD', req.body.symbol).then(obj => {
      payload.push({
        symbol: req.body.symbol.toUpperCase(),
        name: nameOf(req.body.symbol),
        price: obj.price,
        change: obj.change,
        volume: obj.volume
      });
    }).catch(err => {
      console.log(err)
    });
    const symbols = ['BTC', 'ETH', 'BNB', 'XRP', 'ADA', 'DOT', 'UNI', 'CAKE', 'LINK', 'DOGE'];
    const names = ['Bitcoin', 'Ethereum', 'Binance Coin', 'Ripple', 'Cardano', 'Polkadot', 'Uniswap', 'Pancakeswap', 'Chainlink', 'Dogecoin'];
    for (let i = 0; i < 10; i ++) {
      await price.getCryptoPrice('USD', symbols[i]).then(obj => {
        payload.push({
          symbol: symbols[i],
          name: names[i],
          price: obj.price,
          change: obj.change,
          volume: obj.volume
        });
      }).catch(err => {
        console.log(err)
      });
    }
    res.render('console', {data:payload});
  }
  fetch();
});

app.use('/', function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server listening at http://localhost:5000`)
});