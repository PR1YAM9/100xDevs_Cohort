const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.post('/', (req,res)=>{
    console.log(req.body);
    res.send({
        msg : "2+2=4"
    })
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})