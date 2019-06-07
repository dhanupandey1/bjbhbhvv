var express = require('express');
var router = express.Router();
var Emp = require('./employer/emp');
router.use(bodyParser.urlencoded({
extended: true
}));
router.use(bodyParser.json());


router.post('/createUser' , (req,res)=>{

   var company = req.body.name;
   var email = req.body.email;
   var phno = req.body.phno;
   var password = req.body.password;
   var username = req.body.username;
   var kyc1     = req.body.kyc1;
   var kyc2     = req.body.kyc1;



        var newemp = new User({
            _id: new mongoose.Types.ObjectId(),
             name: name,
            email: email,
            phno: phno,
            password: password,
            username: username,
            kyc1:kyc1,
            kyc2:kyc2

        });


       newemp.save()
       .then(emp =>{
           res.status(201).json({
               userEmp: emp
           });
       })
       .catch(err => {
           console.log(err);
           res.status(500).json({error: err});
       });
   });


   router.get('/', (req, res) => {
   console.log("req all users");

   Emp.find().sort({
   "_id": -1
 }).limit(10).exec((err, emp) => {
   if (err) return res.status(500).send({
   msg: "There was a problem finding the employer."
   });
   res.status(200).json(emp);
   });
   });


   router.post('/employer/:id', (req, res) => {

     User.findById(req.params.id,(err,emp)=>{
         if(err)
         return console.log(err)
         res.json({
           name: emp.name,
           email:emp.email,
           phno:emp.phno,
           password: emp.password,
           username: emp.username,
           id : emp._id

         });});

   });

   router.post('/updateuser/:id',(req,res)=>{

     var name = req.body.name;
     var email = req.body.email;
     var phno = req.body.phno;
     var password=req.body.password;
     var username= req.body.username;
     var kyc1=req.body.kyc1;
     var kyc2=req.body.kyc2;
     var id = req.params.id;

     var editemp={
       name:name,
       email:email,
       phno:phno,
       password: password,
       username:username,
       kyc1:kyc1,
       kyc2:kyc2,
       id:id
     }

     User.findByIdAndUpdate(req.params.id,editemp, function(err,editemp){
           if(err)
           {
             res.status(500).json({
            error: err});
           }
           else{

               res.status(200).json(editemp);

           }
       });
   });

     });






   module.exports = router;
