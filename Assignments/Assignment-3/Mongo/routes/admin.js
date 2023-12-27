const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course} = require("../db/index")

// Admin Routes
router.post('/signup',async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingAdmin = await Admin.findOne({username:username,password:password});
    if(existingAdmin){
        res.status(402).json({
            msg: "User already exists"
        })
    }    

    const newAdmin = new Admin({
        username: username,
        password: password
    })
    await newAdmin.save();
    res.json({
        message: 'Admin created successfully'
    })
});

router.post('/courses', adminMiddleware, async(req, res) => {
    const {title,description,price,imageURL} = req.body;
    const newCourse = new Course({
        title: title,
        description: description,
        price: price,
        imageLink: imageURL,
        published: true
    })
    await newCourse.save()
    res.status(200).json({
        message: 'Course created successfully', courseId: newCourse._id 
    })

});

router.get('/courses', adminMiddleware,async (req, res) => {
    const courses = await Course.find();
    res.json({
        courses
    })
});

module.exports = router;