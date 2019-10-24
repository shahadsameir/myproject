
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const project = require('./models/project');
// Get fungtion
router.get('/:name', (req, res, next) => {
  project.find({member:req.params.name})
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
var projects = new project({
      _id: new mongoose.Types.ObjectId(),
      member:req.body.member,
      projectname: req.body.projectname,
      description:req.body. description,
      startat:req.body.startat,
      endat:req.body.endat,
      creation: Date.now(),
     
  });
  projects.save()
  .then(
      result => {console.log(result);})
  .catch(
      err => {console.log(err);});    

  res.status(201).json({
      message: 'user was created',
     project:project
  });
}); 
//get all user
 router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});
 

mongoose.connect(
  'mongodb://localhost/teamwork' ,
  {
    useMongoClient: true
  }
);
module.exports = router;