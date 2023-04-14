const mongoose = require('mongoose');



const schema = mongoose.Schema;
const userschema = new schema({
    name:{
        type:String,
        // require:true
    },
    number:{
        type:Number,
        // require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        require:true
    },
})

module.exports = mongoose.model('register',userschema)