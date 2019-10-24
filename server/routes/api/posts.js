
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const logins = require('./models/logins');
// Get fungtion
router.get('/:name', (req, res, next) => {
  logins.find({name:req.params.name})
  .exec()
  .then(
      docs => { console.log(docs);
      if(docs.length > 0){
          res.status(200).json(docs);
      }else{
          res.status(404).json({ message : "No Users"});
          console.log("notfound")
      }
  })
  .catch( 
      err => { console.log(err);
      res.status(500).json({ error : err }); 
  });
});
// post function
router.post('/', (req, res, next) => {
  console.log(req.body);
var login = new logins({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      password: req.body.password,
      creation: Date.now(),
     
  });
  login.save()
  .then(
      result => {console.log(result);})
  .catch(
      err => {console.log(err);});    

  res.status(201).json({
      message: 'user was created',
     logins:logins
  });
}); 
//get all user
 router.get('/', async (req, res) => {
  logins.find()
  .exec()
  .then(
      docs => { console.log(docs);
      if(docs.length > 0){
          res.status(200).json(docs);
      }else{
          res.status(404).json({ message : "No Users"});
          console.log("notfound")
      }
  })
  .catch( 
      err => { console.log(err);
      res.status(500).json({ error : err }); 
  });
});
 

mongoose.connect(
  'mongodb://localhost/teamwork' ,
  {
    useMongoClient: true
  }
);
module.exports = router;