const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('matchroom route');
});




module.exports = router;