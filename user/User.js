var mongoose = require('mongoose');

var candschema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    name: {
        type: String
    },



    email: {
        type: String
    },

    phno: {
        type: Number
    },

    password: {
        type: String
    },

    username: {
        type:String,
        index:true
    },

    skills: [
         {
             type: String

         }
       ],

       languages: [
          {
              type: String

          }
          ],
        collagename: String,

        location:{
    city:String,
    state:String
},
kyc1:{
  type: String
},

kyc2 : {
  type: String
}



//     location: {
// type: {
// type: String,
// default: 'Point',
// enum: ['Point']
// },
// coordinates: {
// type: [],
// default: [0, 0]
// },
// name: String,
// shortAddress: String
// }

});


var User = module.exports = mongoose.model('User' , candschema);
