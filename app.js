const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const routes = require("./routes");
const CoinGecko = require("coingecko-api");
const CoinGeckoJSON = require("./coins.json");

const {
  loadbtc,
  loadeth,
  loadbnb,
  loadxrp,
  loadada,
  loaddot,
  loaduni,
  loadcake,
  loadlink,
  loaddoge,
} = require("./loadcurrencies");

const app = express();
const CoinGeckoClient = new CoinGecko();

/* -------------------- APP CONFIG -------------------- */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/* -------------------- MIDDLEWARE -------------------- */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "graphics")));
app.use(express.static(path.join(__dirname, "css")));

/* -------------------- GLOBAL DATA -------------------- */

const payload = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

loadbtc(payload);
loadeth(payload);
loadbnb(payload);
loadxrp(payload);
loadada(payload);
loaddot(payload);
loaduni(payload);
loadcake(payload);
loadlink(payload);
loaddoge(payload);

/* -------------------- ROUTES -------------------- */

/**
 * POST /screener
 */
app.post("/screener", async (req, res) => {
  try {
    if (!req.body || !req.body.symbol) {
      return res.status(400).send("Symbol is required");
    }

    const symbol = req.body.symbol.toLowerCase();
    const coin = CoinGeckoJSON.find((doc) => doc.symbol === symbol);

    if (!coin) {
      return res.sendFile(path.join(__dirname, "html/error.html"));
    }

    const obj = await CoinGeckoClient.coins.fetch(coin.id, {
      tickers: false,
      market_data: true,
      community_data: false,
      developer_data: false,
      localization: false,
      sparkline: false,
    });

    payload[0] = {
      name: obj.data.name,
      symbol: obj.data.symbol,
      image: obj.data.image.large,
      price: obj.data.market_data.current_price.usd,
      change: obj.data.market_data.price_change_24h,
      volume: obj.data.market_data.total_volume.usd,
    };

    res.render("screener", { data: payload });
  } catch (err) {
    console.error("Screener error:", err);
    res.status(500).send("Internal server error");
  }
});

/**
 * Other routes
 */
app.use("/", routes);

/**
 * 404 handler
 */
app.use((req, res) => {
  res.status(404);

  if (req.accepts("html")) {
    return res.render("404", { url: req.url });
  }

  if (req.accepts("json")) {
    return res.json({ error: "Not found" });
  }

  res.type("txt").send("Not found");
});

/* -------------------- SERVER -------------------- */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
