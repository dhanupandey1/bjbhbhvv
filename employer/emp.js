var mongoose = require('mongoose');

var candschema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    company: {
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


});


var User = module.exports = mongoose.model('User' , candschema);
