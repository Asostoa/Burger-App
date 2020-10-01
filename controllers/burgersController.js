var express = require('express')
var router = express.Router()

// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', function (req, res) {
	 // res.send('test');
   burger.selectAll(function (data) {
    var handlebarObject = { burgers: data };
    console.log(handlebarObject);
    //render the index.handlebar page
    res.render('index', handlebarObject);

    });

});
router.put("/api/update/burgers/:id", function(req, res) {
  const condition = "id = " + req.params.id;
  console.log("condition", condition);
  console.log(req.body);
  burger.updateBurger(
    {
      name: req.body.burger_name,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});
// Create a New Burger to the DB
router.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/');
  });
});
//modify a burger
router.post('/burger/modify', function (req, res) {
  burger.updateBurger(req.body.burger_name, function() {
    res.redirect('/');
  });
});
//Devour a Burger
router.post('/burger/eat', function (req, res) {
  burger.updateOne(req.body.id, function() {
    res.redirect('/');
  });
});
//restore
router.post('/burger/restore', function (req, res) {
  burger.restoreOne(req.body.id, function() {
    res.redirect('/');
  });
});

module.exports = router;