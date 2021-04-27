const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
const CoinGeckoList = require('coinlist');

async function loadbtc(payload) {
    await CoinGeckoClient.coins.fetch(CoinGeckoList.get('btc').id, { tickers: false, market_data: true, community_data: false, developer_data: false, localization: false, sparkline: false }).then(obj => {
        payload[1] = {
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
}

async function loadeth(payload) {
    await CoinGeckoClient.coins.fetch(CoinGeckoList.get('eth').id, { tickers: false, market_data: true, community_data: false, developer_data: false, localization: false, sparkline: false }).then(obj => {
        payload[2] = {
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
}

async function loadbnb(payload) {
    await CoinGeckoClient.coins.fetch(CoinGeckoList.get('bnb').id, { tickers: false, market_data: true, community_data: false, developer_data: false, localization: false, sparkline: false }).then(obj => {
        payload[3] = {
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
}

async function loadxrp(payload) {
    await CoinGeckoClient.coins.fetch(CoinGeckoList.get('xrp').id, { tickers: false, market_data: true, community_data: false, developer_data: false, localization: false, sparkline: false }).then(obj => {
        payload[4] = {
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
}

async function loadada(payload) {
    await CoinGeckoClient.coins.fetch(CoinGeckoList.get('ada').id, { tickers: false, market_data: true, community_data: false, developer_data: false, localization: false, sparkline: false }).then(obj => {
        payload[5] = {
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
}

async function loaddot(payload) {
    await CoinGeckoClient.coins.fetch(CoinGeckoList.get('dot').id, { tickers: false, market_data: true, community_data: false, developer_data: false, localization: false, sparkline: false }).then(obj => {
        payload[6] = {
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
}

async function loaduni(payload) {
    await CoinGeckoClient.coins.fetch(CoinGeckoList.get('uni').id, { tickers: false, market_data: true, community_data: false, developer_data: false, localization: false, sparkline: false }).then(obj => {
        payload[7] = {
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
}

async function loadcake(payload) {
    await CoinGeckoClient.coins.fetch(CoinGeckoList.get('cake').id, { tickers: false, market_data: true, community_data: false, developer_data: false, localization: false, sparkline: false }).then(obj => {
        payload[8] = {
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
}

async function loadlink(payload) {
    await CoinGeckoClient.coins.fetch(CoinGeckoList.get('link').id, { tickers: false, market_data: true, community_data: false, developer_data: false, localization: false, sparkline: false }).then(obj => {
        payload[9] = {
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
}

async function loaddoge(payload) {
    await CoinGeckoClient.coins.fetch(CoinGeckoList.get('doge').id, { tickers: false, market_data: true, community_data: false, developer_data: false, localization: false, sparkline: false }).then(obj => {
        payload[10] = {
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
}

module.exports = { loadbtc, loadeth, loadbnb, loadxrp, loadada, loaddot, loaduni, loadcake, loadlink, loaddoge };