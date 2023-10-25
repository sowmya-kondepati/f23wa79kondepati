var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const x = req.query.x || Math.random(); // Use the provided value or generate a random number

  // Apply Math.sin() to the value of 'x'
  const y = Math.sin(x);

  // Construct the response string
  const response = `${Math.sin.name} applied to ${x} is ${y}`;

  res.send(response);
  
});

module.exports = router;
