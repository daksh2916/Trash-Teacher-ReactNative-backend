const mongoose = require("mongoose");

const userScoreSchema = new mongoose.Schema({
    user_id: {
        type: Number,

    },
    user_score: {
        type: Number,
        default: 0
    },
    last_Updated_Time: {
        type: Date,
        default: Date.now(),
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

module.exports = mongoose.model("User_Score", userScoreSchema);
