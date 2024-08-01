const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    role_id: {
        type: Number,
        unique: true
    },
    role_name: {
        type: String,
    },
    role_description: {
        type: String,
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

module.exports = mongoose.model("Role", roleSchema);
