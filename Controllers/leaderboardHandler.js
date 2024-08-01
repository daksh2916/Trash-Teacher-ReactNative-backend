const User = require("../Models/user");
const user_score = require("../Models/user_score");
const UserScore = require("../Models/user_score");

exports.showLeaderBoard = async (req, res) => {
    try {
        const userScores = await UserScore.find({}, { user_id: 1, user_score: 1, _id: 0 }).sort({ user_score: -1 });

        // Fetch all users
        const users = await User.find({}, { user_id: 1, fname: 1, lname: 1, _id: 0 });

        // Create a map of user_id to full name
        const userMap = users.reduce((acc, user) => {
            acc[user.user_id] = `${user.fname} ${user.lname}`;
            return acc;
        }, {});

        // Create leaderboard data by mapping userScores with userMap
        const leaderboardData = userScores.map(score => ({
            name: userMap[score.user_id] || 'Unknown',
            score: score.user_score
        }));

        // Send the response
        res.status(200).json({
            success: true,
            data: leaderboardData,
            message: "Users received successfully"
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            data: 'Internal server error',
            message: err.message
        });
    }
};