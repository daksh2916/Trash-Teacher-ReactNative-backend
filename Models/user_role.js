const mongoose = require("mongoose");

const userRoleSchema = new mongoose.Schema({
    user_id: {
        type: Number,

    },
    role_id: {
        type: Number,

    },
    health_facility_id:{
        type:Number,
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

module.exports = mongoose.model("User_Role", userRoleSchema);
