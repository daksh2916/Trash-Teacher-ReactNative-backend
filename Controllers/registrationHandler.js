const User = require("../Models/user");
const Role =require("../Models/role");
const User_Role=require("../Models/user_role");
const User_Score=require("../Models/user_score")
const Health_Facility=require("../Models/health_facilty");



exports.createUser = async (req, res) => {
    const { fname, lname, mobileNumber, email, role_name, health_facility_name } = req.body;

    if (!fname || !lname || !mobileNumber || !email || !role_name || !health_facility_name) {
        return res.status(400).json({
            success: false,
            message: "Enter all the details carefully"
        });
    }

    try {
       
        const existingUserCount = await User.countDocuments();
        const user_id = existingUserCount + 1;

        
        const role = await Role.findOne({ role_name });
        if (!role) {
            return res.status(400).json({
                success: false,
                message: "Invalid role name"
            });
        }
        const role_id = role.role_id;

       
        const facility = await Health_Facility.findOne({ health_facility_name });
        if (!facility) {
            return res.status(400).json({
                success: false,
                message: "Invalid health facility name"
            });
        }
        const health_facility_id = facility.health_facility_id;

      
        const newUser = await User.create({user_id, fname, lname, mobileNumber, email });

       
        const newUserRole = await User_Role.create({user_id,role_id,health_facility_id });

    
        const newUserScore = await User_Score.create({user_id });

        res.status(200).json({
            success: true,
            data: { newUser, newUserRole, newUserScore },
            message: "User created successfully"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: "Error in creating user"
        });
    }
};