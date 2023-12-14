const express = require('express');
const app = express();

function sum(n){
    let sum =0;
    for(let i =0;i<n;i++){
        sum = sum+i;
    }
    return sum;
}

app.get('/', (req,res)=>{
    const n = req.query.n;
    const ans = sum(n);
    res.send(`Sum of ${n} is ${ans}`);
})

app.listen(3000, () => console.log('Listening on port 3000'));