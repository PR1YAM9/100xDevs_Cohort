const express = require('express');
const PORT = 8080;
const rootRouter = require('./routes/index');
const cors = require("cors");
require('dotenv').config()
const app = express();


app.use(cors);
app.use(express.json());


app.use("/api/v1",rootRouter)


app.listen(PORT,()=>{
    console.log("http://localhost:8080")
})