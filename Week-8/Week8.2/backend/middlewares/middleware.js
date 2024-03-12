require('dotenv').config();
const jwt = require('jsonwebtoken')
const jwtSecret= process.env.JWT_SECRET;


const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(403).json({
            message: "Not authorized"
        })
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token,jwtSecret);
        if(decoded){
            req.userId = decoded.userId;
            next();
        }
        else{
            return res.status(403).json({
                message: "not verified"
            })          
        }
    } catch (error) {
        return res.status(403).json({
            message: "not verified"
        })
    }
}

module.exports={
    authMiddleware
}