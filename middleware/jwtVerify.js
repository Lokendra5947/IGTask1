const jwt = require("jsonwebtoken")
let verifyToken = async(req,res,next)=>{
    try{
        let token  = req.headers.token
        if(!token) {return res.status(400).send({ success: false, message: "Token not found" });}
        var decoded = jwt.verify(token,"shhhh")
        // console.log("decoded data:  ",decoded)
        if(!decoded){return res.status(400).send({success:false,message:"please login"})}
    req.userid  = decoded.user._id
    next()

    }
    catch (error){
        console.log(error)
        res.status(400).send({ success: false, message: "Crashed Token" })
    }
}
module.exports = {verifyToken}

// const isAuthenticated = (req, res, next)=> {
//     // Check if user is authenticated
//     if (req.isAuthenticated()) {
//         return next(); // User is authenticated, proceed to the next middleware
//     }
//     // User is not authenticated, send 401 Unauthorized response
//     res.status(401).json({ message: 'Unauthorized' });
// }

// module.exports = {isAuthenticated}