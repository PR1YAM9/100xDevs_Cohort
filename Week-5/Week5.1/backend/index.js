const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
const {createTodo, updateTodo} = require('./types');


app.get('/todos', (req,res)=>{
    
})

app.post('/todo',(req,res)=>{
    const {title, description} = req.body;
    const isValid = createTodo.safeParse(title,description)
    if(!isValid.success){
        res.status(411).json(
            message= "Wrong Data Format"
        )
    }
})

app.put('/completed', (req,res)=>{
    const {title, description} = req.body;
    const isValid = updateTodo.safeParse(title,description)
    if(!isValid.success){
        res.status(411).json(
            message= "Wrong Data Format"
        )
    }
})


app.listen(PORT, ()=>{
    console.log('backend listening at http://localhost:3000/');
})