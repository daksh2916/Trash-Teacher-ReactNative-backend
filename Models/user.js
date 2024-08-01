const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        unique: true
    },
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    mobileNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    active: {
        type: Boolean,
        default: 1
    },
    cr_by: {
        type: Number,
        default: 1
    },
    cr_date: {
        type: Date,
        default: Date.now(),
    }
  
 

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
