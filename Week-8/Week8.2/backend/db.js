const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI ).then(()=>{
    console.log("mongoDB connected")
})

const UserSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true,
        lowercase: true,
        trim : true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        lowercase: true,
        trim : true,
        maxLength: 50
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        lowercase: true,
        trim : true,
        maxLength: 30
    },
    password:{
        type: String,
        required: true,
        minLength: 5
    }
})

const BalanceSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const Account = mongoose.model('Account', BalanceSchema);
const User = mongoose.model('User', UserSchema);

module.exports= {
    User,
    Account
}