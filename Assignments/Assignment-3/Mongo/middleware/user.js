const {User} = require('../db/index')
async function userMiddleware (req, res, next) {
    try {
        const {username,password} = req.headers;
        const existingUser = await User.findOne({username:username, password:password})

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

module.exports = userMiddleware;