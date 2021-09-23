var express = require('express');
var reviewcontroller = require('../Controller/reviewsController');
var router = express.Router();


/* GET shops listing. */
router.get('/', reviewcontroller.getAllreviews);


/* Get shops addername */

router.get('/reviewername',reviewcontroller.getReviewerName);


router.get('/reviewername/:id',reviewcontroller.getReviewerNameByid);


/* GET users by id . */
router.get('/:id', reviewcontroller.getreviewbyid);


// add user 
router.post('/', reviewcontroller.addreview);


// update user 
router.put('/:id', reviewcontroller.updatereview);


// delete user 
router.delete('/:id', reviewcontroller.deletereview);


// test router  

router.get('/test', function (req, res, next) {
  res.send('respond with a resource -test');
});


module.exports = router;