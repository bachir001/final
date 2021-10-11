var express = require('express');
var shopController = require('../Controller/shopsController');
var router = express.Router();


module.exports = (upload) => {

/* GET shops listing. */
router.get('/', shopController.getAllshops);


/* Get shops addername */

router.get('/addername',shopController.getShopsAdderName);

/* GET shop by id . */
router.get('/:id', shopController.getshopbyid);


// add shop 
router.post('/', upload.single('shopimg'), shopController.addshop);



// update shop 
router.put('/:id', upload.single('shopimg'), shopController.updateshop);



// get shops 
router.get('/get/accepted', shopController.getacceptedshops);

// get latest 
// router.get('/getl/latestacc', shopController.getlatestshops);


//get shops via location
router.get('/getl/:location', shopController.getshopbylocation);


//get accepted shops of specific adder 

router.get('/geta/:adder', shopController.getshopbyadder);



// delete shop 
router.delete('/:id', shopController.deleteshop);


// test router  

router.get('/test', function (req, res, next) {
  res.send('respond with a resource -test');
});


return router;

}