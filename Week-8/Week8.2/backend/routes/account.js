const express = require('express');
const router = express.Router();
const zod = require('zod');
const { User, Account } = require('../db');
const jwt = require('jsonwebtoken');
const { authMiddleware } = require('../middlewares/middleware');
const { default: mongoose } = require('mongoose');
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET;

router.get('/balance', authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });
    res.json({
        balance: account.balance
    });
});

// Session and Transaction
router.post('/transfer', authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    try {
        session.startTransaction();

        const { amount, to } = req.body;

        const account = await Account.findOne({ userId: req.userId }).session(session);

        if (!account || account.balance < amount) {
            throw new Error("Insufficient Amount");
        }

        const toAccount = await Account.findOne({ userId: to }).session(session);

        if (!toAccount) {
            throw new Error("Invalid Amount");
        }

        await Account.updateOne({ userId: account.userId }, { $inc: { balance: -amount } }, { session });
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } }, { session });

        await session.commitTransaction();
        res.json({
            message: "Transfer Successful"
        });
    } catch (error) {
        await session.abortTransaction();
        res.status(400).json({
            message: error.message
        });
    } finally {
        session.endSession();
    }
});

module.exports = router;
