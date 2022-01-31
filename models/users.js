const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type : String,
    },
    email:{
        type : String,
    },
    active:{
        type : Boolean,
        // required : true,
        // default : true
    }
});

module.exports = mongoose.model('User', userSchema);