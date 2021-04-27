const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
const CoinGeckoList = require('coinlist');

async function loadbtc(payload) {
    await CoinGeckoClient.coins.fetch('bitcoin', { tickers: false, market_data: true, community_data: false, developer_data: false, localization: false, sparkline: false }).then(obj => {
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
    await CoinGeckoClient.coins.fetch('ethereum', { tickers: false, market_data: true, community_data: false, developer_data: false, localization: false, sparkline: false }).then(obj => {
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
    await CoinGeckoClient.coins.fetch('binancecoin', { tickers: false, market_data: true, community_data: false, developer_data: false, localization: false, sparkline: false }).then(obj => {
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
    await CoinGeckoClient.coins.fetch('ripple', { tickers: false, market_data: true, community_data: false, developer_data: false, localization: false, sparkline: false }).then(obj => {
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
    await CoinGeckoClient.coins.fetch('cardano', { tickers: false, market_data: true, community_data: false, developer_data: false, localization: false, sparkline: false }).then(obj => {
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
    await CoinGeckoClient.coins.fetch('polkadot', { tickers: false, market_data: true, community_data: false, developer_data: false, localization: false, sparkline: false }).then(obj => {
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
    await CoinGeckoClient.coins.fetch('uniswap', { tickers: false, market_data: true, community_data: false, developer_data: false, localization: false, sparkline: false }).then(obj => {
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
    await CoinGeckoClient.coins.fetch('pancakeswap-token', { tickers: false, market_data: true, community_data: false, developer_data: false, localization: false, sparkline: false }).then(obj => {
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
    await CoinGeckoClient.coins.fetch('chainlink', { tickers: false, market_data: true, community_data: false, developer_data: false, localization: false, sparkline: false }).then(obj => {
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
    await CoinGeckoClient.coins.fetch('dogecoin', { tickers: false, market_data: true, community_data: false, developer_data: false, localization: false, sparkline: false }).then(obj => {
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