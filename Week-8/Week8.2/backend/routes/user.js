const express = require('express');
const router = express.Router();
const zod = require('zod');
const { User } = require('../db');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config')

const signupSchema = zod.object({
    username: zod.string().email(),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string()
})


router.post("/signup", async (req,res)=>{
    try {
        const body = req.body;
    // Parese the body(username , password etc by zod to do input validation)
    const {success} = signupSchema.safeParse(body);

    // if the input fails validation
    if(!success){
        return res.json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    // check if the user already exists or not to avoid redundancy 
    const existingUser =await User.findOne({
        username: req.body.username
    })
    if(existingUser){
        return res.json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    // if it is a new user create a new user to store in the DB
    const user = await new User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    // using user id to generate token
    const userId= user._id;

    // create a token using the jwt secret
    const token = jwt.sign({
        userId
    },jwtSecret)

    // if everything is correct responed with this message and token
    res.json({
        message: "User Created Succesfully ",
        token: token
    })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})

const userSigninBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})


router.post("/signin",async (req,res)=>{
   try {
    const body = req.body;
    const {success} = userSigninBody.safeParse(body);

    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })
    if(!user){
        return res.status(411).json({
            message: "Error occured while logging in"
        })
    }

    const token = jwt.sign({
        userId: user._id
    }, jwtSecret)

    res.json({
        token: token
    })
   } catch (error) {
    console.log(error)
    res.status(500).json({
        message: "Internal Server Error"
    })
   }

})





module.exports = router;