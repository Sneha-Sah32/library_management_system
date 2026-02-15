const userModel = require("../models/User");
const jwt= require("jsonwebtoken");
const bcrypt = require("bcrypt");


async function profile(req,res){
   try{
     const token = req.cookies.token;

    if(!token){
         return res.status(401).json({
            message:"No token"
        });
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    const user = await userModel
    .findById(decoded.id);
    // .select("-password");

//    return res.json(user);

if(!user){
    return res.status(404).json({
        message:"User not found"
    });
}

res.status(200).json({
    id:user._id,
    fullname:user.fullname,
    email:user.email
})
}
catch(error){
 return res.status(401).json({
    message:"Invalid token"
});
}
}


module.exports={
    profile
};