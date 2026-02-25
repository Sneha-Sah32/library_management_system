const jwt = require("jsonwebtoken");

const userAuth = async (req,res,next)=>{
    const {token} = req.cookies;

    if(!token){
       return res.json({
            success:false,
            message:"Not Authorized. Login Again"
        })
    }
    try{
        const tokenDecode=jwt.verify(token,process.env.JWT_SECRET);
// to access the user id from the cookie
        if(tokenDecode.id){
            req.body.userId = tokenDecode.id;
        }else{
            return res.json({
                success:false,
                message:'not authorized. login again'
            })
        }

        next();

    }catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}

module.exports = userAuth;