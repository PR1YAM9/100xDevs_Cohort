const express = require('express');
const app = express();
const PORT = 3000;
const jwt = require('jsonwebtoken');
const jwtPassword = '123456';
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://<>:<>@cluster0.t9tqwbb.mongodb.net/")
app.use(express.json());


const User = mongoose.model('Users',{
    name : String,
    email: String,
    password: String
});

app.post('/signup', async(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await User.findOne({name: name});
    if(existingUser){
        return res.status(402).json({
            msg: "User already exixts"
        })
    }

    const newUser = new User({
        name: name,
        email: email,
        password: password
    })
    await newUser.save();
    res.json({
        msg: "user created succesfully"
    })

})

app.get('/showdata', async(req,res)=>{
   const users = {};
   const all= await User.find(users);
   res.json({
    data: all
   })
})

app.listen(PORT,()=>{
    console.log("listening at 3000");
})