const express = require('express');
const router = express.Router();
const zod = require('zod');
const { User , Account } = require('../db');
const jwt = require('jsonwebtoken');
const { authMiddleware } = require('../middlewares/middleware');
require('dotenv').config()

const jwtSecret = process.env.JWT_SECRET

const signupSchema = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
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
        const user = await  User.create({
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        })
        // using user id to generate token
        const userId= user._id;

        await Account.create({
            userId: userId,
            balance: 1 + Math.floor(Math.random() * 10000)
        })

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


const updateBody= zod.object({
    username: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/", authMiddleware , async (req,res)=>{
    try {
        const body = req.body;
        const {success} = updateBody.safeParse(body);

        if(!success){
            return res.status(411).json({
                message: "Error while updating the information"
            })
        } 

        const updatedUser = await User.findOneAndUpdate(
            { _id: req.userId },
            { $set: req.body },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "Updated Succesfully"
        })

    } catch (error) {
        console.log(error)
        res.json({
            message: "Internal Error occured"
        })
    }
})

router.get("/bulk"  , async (req,res)=>{
    try {
        const testParam = req.query.test;
        const filter = req.query.filter || "";
        const filterRegex = new RegExp(filter, 'i');

        const users = await User.find({
            $or : [
                {firstName: filterRegex},
                {lastName: filterRegex}
            ]
        })

        if(!users){
            res.status(404).json({
                message: "User not Found"
            })
        }

        res.json({
            user: users.map(user =>({
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id
            }))
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Internal error occured"
        })
    }
})

module.exports = router;