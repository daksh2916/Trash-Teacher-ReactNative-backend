const User = require("../Models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Cookies = require("cookies");
require("dotenv").config();

exports.login = async (req, res) => {
  const { fname, lname, email } = req.body;
 console.log("i am loging in");
  if (!fname || !lname || !email) {
 
    console.log("Missing required fields:", req.body);  // Added logging for debugging
    return res.status(400).json({
      success: false,
      message: "Please enter all details carefully",
    });
  }

  try {
    const user = await User.findOne({ fname, lname });

    if (!user) {
      console.log("User not found:", { fname, lname });  // Added logging for debugging
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.email !== email) {
      console.log("Email incorrect:", { email });  // Added logging for debugging
      return res.status(402).json({
        success: false,
        message: "Email is incorrect",
      });
    }

    const payload = {
      fname: user.fname ,lname: user.lname
    };

    const token = jwt.sign(payload, process.env.JWT_SECRETKEY, {
      expiresIn: "2h",
    });

    user.token = token;

    user.email = undefined;

    res.cookie("token", token, {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      token,
      user,
      message: "Logged in successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
