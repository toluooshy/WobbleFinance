fetch("https://api.nomics.com/v1/markets/candles?key=your-key-here&interval=1d&base=ETH&quote=BTC&start=2018-04-14T00%3A00%3A00Z&end=2018-05-14T00%3A00%3A00Z")
  .then(response => response.json())
  .then(data => console.log(data))
