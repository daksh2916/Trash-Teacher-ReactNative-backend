const User = require("../Models/user");
const Score = require("../Models/user_score");

exports.updateScore = async (req, res) => {
  const { fname, lname, score } = req.body;

  if (!fname || !lname || score === undefined) {
    return res.status(400).json({
      success: false,
      message: "Name and score are required",
    });
  }

  try {
    const user = await User.findOne({ fname, lname });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const updateResult = await Score.updateOne(
      { user_id: user.user_id }, 
      { $set: { user_score: score } }
    );

    if (updateResult.nModified === 0) {
      return res.status(404).json({
        success: false,
        message: "Score not updated",
      });
    }
console.log("score updated");
    res.status(200).json({
      success: true,
      message: "Score updated successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
