
var express = require('express');
var usersController = require('../Controller/usersController');
var router = express.Router();


module.exports = (upload) => {

  /* GET users listing. */
  router.get('/', usersController.getAllusers);


  /* GET users by id . */
  router.get('/:id', usersController.getuserbyid);


  // add user 
  router.post('/', upload.single('profilepic'), usersController.addusers);

  // login
  router.post('/login', usersController.login)
  
  //logout
  router.get('/logout/:id', usersController.logout)

  // update user 
  router.put('/:id', upload.single('profilepic'), usersController.updateuser);


  // delete user 
  router.delete('/:id', usersController.deleteuser);


  // test router  

  router.get('/test', function (req, res, next) {
    res.send('respond with a resource -test');
  });

  return router;

}

