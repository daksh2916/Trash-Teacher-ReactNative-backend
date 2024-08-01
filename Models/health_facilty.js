const mongoose = require("mongoose");

const health_facility = new mongoose.Schema ({
    health_facility_id:{
        type:Number,   
    },
    health_facility_name:{
        type:String,
    },
    health_facility_description:{
        type:String,
    },
    health_facility_country_id:{
        type:Number,
    },
    active:{
        type:Boolean,
        default:1
    },
    cr_by:{
        type:Number,
        default:1
    },
    cr_date:{
        type:Date,
        default:Date.now(),
    }
},{timestamps:true});


module.exports = mongoose.model("Health_Facility", health_facility); 