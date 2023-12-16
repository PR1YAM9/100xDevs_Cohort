const express = require("express");

const app = express();
const zod = require('zod')
app.use(express.json())
// Without middle wares

// app.get("/health-checkup", function (req, res) {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId;

//   if (username != "priyam" || password != "pass") {
//     res.status(400).json({"msg": "Somethings up with your ionputs"})
//     return
//   }

//   if (kidneyId != 1 && kidneyId != 2) {
//     res.status(400).json({"msg": "Somethings up with your ionputs"})
//     return
//   }
//   res.json({
//     msg: "Your kidney is fine!"
//   })
// });

// With middle wares

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "priyam" || password != "pass") {
    res.status(400).json({ msg: "Somethings up with your inputs" });
    return;
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kidneyId = req.query.kidneyId;
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({ msg: "Somethings up with your inputs" });
    return;
  }else{
    next();
  }
}

app.get('/health-checkup',userMiddleware, kidneyMiddleware, (req,res)=>{
    res.send({
        msg: "Your heart is healthy"
    })
})


// Input Validation


// app.post('/health-checkup', (req,res)=>{
//   const kidneys = req.body.kidneys;
//   if(!kidneys){
//     res.json({
//       msg: "wrong input"
//     })
//   }else{
//     const kidneyLen= kidneys.length;
//     res.send('your kidney length is '+kidneyLen);
//   }
// })

//ZOD: input validation

const schema = zod.array(zod.number());

app.post("/health-checkup",  function (req, res) {
  // kidneys = [1, 2]
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys)
  if(!response.success){
    res.json({
      msg: "Wrong input"
    })
  }
  res.send({
    response
  })
});

// examples: 1.Email , password , counrty can either be IN or USA

const schema1 = zod.object({
  email: zod.string(),
  password: zod.string(),
  country: zod.literal("IN").or(zod.literal("USA"))
})

// Eg2
function validateInput(arr){
const schema2= zod.array(zod.number());

const response = schema2.safeParse(arr);
// console.log(response);
}
validateInput([1,2,3])

//Global catches 
app.use((err,req,res,next)=>{
  res.json({
    msg: "Sorry something is wrong with backend"
  })
})

app.listen(3000);
