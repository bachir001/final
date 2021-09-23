var express = require('express');
var contactcontroller = require('../Controller/contactsController');
var router = express.Router();


/* GET contact msgs listing. */
router.get('/', contactcontroller.getAllcontact);


/* GET msgs by id . */
router.get('/:id', contactcontroller.getcontactbyid);


// add contacts 
router.post('/', contactcontroller.addcontact);


// delete contact msg 
router.delete('/:id', contactcontroller.deletecontact);

// test router  

router.get('/test', function (req, res, next) {
  res.send('respond with a resource -test');
});


module.exports = router;