var express = require('express');
var shopController = require('../Controller/shopsController');
var router = express.Router();


/* GET shops listing. */
router.get('/', shopController.getAllshops);


/* Get shops addername */

router.get('/addername',shopController.getShopsAdderName);

/* GET users by id . */
router.get('/:id', shopController.getshopbyid);


// add user 
router.post('/', shopController.addshop);


// update user 
router.put('/:id', shopController.updateshop);


// delete user 
router.delete('/:id', shopController.deleteshop);


// test router  

router.get('/test', function (req, res, next) {
  res.send('respond with a resource -test');
});


module.exports = router;