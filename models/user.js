const mongoose = require('mongoose');

const userSchemas = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,

    },
    first_name:{
        type: String,
        required: true,
    },
    last_name:{
        type:String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    city:{
        type:String,
        required: true,
    },
    useremailverified: {
        type: Boolean,
        default: false,
      },
     
},

{
    timestamps: true,
});

const User = mongoose.model("Users", userSchemas);

module.exports = User;