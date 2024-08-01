const mongoose = require("mongoose");

const countryNameSchema = new mongoose.Schema({
    country_id: {
        type: Number,
        unique: true
    },
    country_code: {
        type: String,
        default: "IND"
    },
    country_name: {
        type: String,
    },
    country_description: {
        type: String,
        default:"country"
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

module.exports = mongoose.model("Country_Name", countryNameSchema);
