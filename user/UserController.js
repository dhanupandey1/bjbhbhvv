var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var User = require('./User');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
extended: true
}));
router.use(bodyParser.json());


router.post('/createUser' , (req,res)=>{

   var name = req.body.name;
   var email = req.body.email;
   var phno = req.body.phno;
   var password = req.body.password;
   var username = req.body.username;
   var skills = req.body.skills;
   var collagename= req.body.collagename;
   var kyc1     = req.body.kyc1;
   var kyc2     = req.body.kyc1;
   var languages =  req.body.language;


        var newuser = new User({
            _id: new mongoose.Types.ObjectId(),
             name: name,
            email: email,
            phno: phno,
            password: password,
            username: username,
            skills : skills,
            collagename:collagename,
            kyc1:kyc1,
            kyc2:kyc2,
            languages: languages

        });


       newuser.save()
       .then(user =>{
           res.status(201).json({
               userCreated: user
           });
       })
       .catch(err => {
           console.log(err);
           res.status(500).json({error: err});
       });
   });




router.get('/', (req, res) => {
console.log("req all users");

User.find().sort({
"_id": -1
}).limit(10).exec((err, users) => {
if (err) return res.status(500).send({
msg: "There was a problem finding the users."
});
res.status(200).json(users);
});
});





router.post('/users/:id', (req, res) => {

  User.findById(req.params.id,(err,user)=>{
      if(err)
      return console.log(err)
      res.json({
        name: user.name,
        email:user.email,
        phno:user.phno,
        password: user.password,
        username: user.username,
        id : user._id

      });});

});


router.post('/updateuser/:id',(req,res)=>{

  var name = req.body.name;
  var email = req.body.email;
  var phno = req.body.phno;
  var password=req.body.password;
  var username= req.body.username;
  var skills = req.body.skills;
  var collagename=req.body.collagename;
  var kyc1=req.body.kyc1;
  var kyc2=req.body.kyc2;
  var languages = user.languages;
  var id = req.params.id;

  var edituser={
    name:name,
    email:email,
    phno:phno,
    password: password,
    username:username,
    skills:skills,
    collagename:collagename,
    kyc1:kyc1,
    kyc2:kyc2,
    languages:languages,
    id:id
  }

  User.findByIdAndUpdate(req.params.id,edituser, function(err,edituser){
        if(err)
        {
          res.status(500).json({
         error: err});
        }
        else{

            res.status(200).json(edituser);

        }
    });
});

  });






module.exports = router;
