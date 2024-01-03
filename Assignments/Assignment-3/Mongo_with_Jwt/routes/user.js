const { Router, json } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course} = require('../db/index');
const { default: mongoose } = require("mongoose");
const ObjectId = require('mongodb').ObjectId;
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config')
router.post('/signup',async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingAdmin = await User.findOne({username:username,password:password});
    if(existingAdmin){
        res.status(402).json({
            msg: "User already exists"
        })
    }    

    const user = new User({
        username: username,
        password: password
    })
    await user.save();
    res.json({
        message: 'User created successfully'
    })    
});

router.post('/signin',async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({
        username,
        password
    })

    if(user){
        const token = jwt.sign(username, JWT_SECRET)
        res.header('authorization', `Bearer${token}`);

        req.json({
            token: token,
            message: "token generated"
        })
        
    }else{
        res.json({
            message: "Not authorized "
        })
    }
});

router.get('/courses', userMiddleware, async (req, res) => {
    const courses = await Course.find();
    res.json({
        courses
    })

});

router.post('/courses/:courseID', userMiddleware, async (req, res) => {
    const { courseID } = req.params;
    const { username } = req.headers;
    const isValid = mongoose.Types.ObjectId.isValid(courseID);

    if (!isValid) {
        return res.json({
            msg: "courseID invalid"
        });
    }

    const course = await Course.findOne(new ObjectId(courseID));

    if (!course) {
        return res.status(404).json({
            msg: "course not found"
        });
    }

    try {
        await User.findOneAndUpdate({ username: username }, {
            $addToSet: { course: courseID }
        });

        res.json({
            id: courseID,
            message: `${courseID} purchased`
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Internal Server Error"
        });
    }
});


router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const { username } = req.headers;

    try {
        const userData = await User.findOne({ username: username });

        if (!userData) {
            return res.status(404).json({
                msg: "User not found"
            });
        }

        const purchasedCourses = userData.course || [];

        res.json({
            username: username,
            purchasedCourses: purchasedCourses
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Internal Server Error"
        });
    }
});


module.exports = router
