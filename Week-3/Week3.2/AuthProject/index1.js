const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const jwtPassword = '123456';
const PORT = 3000;

app.use(express.json());

const ALL_USERS = [
    {
        username: "abc@gmail.com",
        password: "123",
        name: "ABC"
    },
    {
        username: "abc2@gmail.com",
        password: "1234567",
        name: "ABCABC"
    }
]

const userExists= (username,password)=>{
    if(!ALL_USERS.find(user=>user.username === username && user.password === password)){
        return false;
    }
    return true;
};

app.post('/signin', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        return res.status(402),json({
            msg: "User not found in the Database"
        })
    };

    var token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token
    });

})

app.get('/users', (req,res)=>{
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token,jwtPassword);
        const username = decoded.username;
        res.json({
            users: ALL_USERS.filter(function(value){
                if(value.username === username){
                    return false;
                }
                else{
                    return true;
                }
            })
        })
    } catch (error) {
        res.status(404).json({
            msg: error
        })
    }
})

// app.listen(PORT,()=>{
//     console.log("listening at 3000")
// })