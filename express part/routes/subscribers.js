var express = require('express');
var subscribercontroller = require('../Controller/subscribersController');
var router = express.Router();


/* GET subs listing. */
router.get('/', subscribercontroller.getAllsubs);



/* GET subs by id . */
router.get('/:id', subscribercontroller.getsubsbyid);


// add subs 
router.post('/', subscribercontroller.addsubs);


// update subs 
router.put('/:id', subscribercontroller.updatesubs);


// delete subs 
router.delete('/:id', subscribercontroller.deletesubs);


// test router  

router.get('/test', function (req, res, next) {
  res.send('respond with a resource -test');
});


module.exports = router;