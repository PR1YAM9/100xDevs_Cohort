// Middleware for handling auth
const {Admin} = require('../db/index')
async function adminMiddleware(req, res, next) {
    try {
        const {username,password} = req.headers;
        const existingUser = await Admin.findOne({username:username, password:password})

        if(!existingUser){
            res.status(404).json({
                message: "User not found"
            })
        }
        
    }
    catch (error) {
        throw(error)
    }

    next();
}

module.exports = adminMiddleware;