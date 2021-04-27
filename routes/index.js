const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/screener', (req, res) => {
  var payload = `empty`;
  res.render('screener', {data:payload});
});

module.exports = router;