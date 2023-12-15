const express = require("express");
const app = express();

app.use(express.json());

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const johnKidney = users[0].kidneys;
  const numberOfKidney = users[0].kidneys.length;

  let healthyKidney = 0;
  for (let i = 0; i < johnKidney.length; i++) {
    if (johnKidney[i].healthy) {
      healthyKidney = healthyKidney + 1;
    }
  }

  const unHealthyKidnies = numberOfKidney - healthyKidney;

  res.json({
    numberOfKidney,
    healthyKidney,
    unHealthyKidnies,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Kidney added",
  });
});

app.put("/", (req, res) => {
  let kidneys = users[0].kidneys;
  for (let i = 0; i < kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }

  res.json({
    msg: "done",
  });
});

app.delete("/", (req, res) => {
    
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
  }

  if (atleastOneUnhealthyKidney) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.send({
      msg: "All unhealthy kidneys removed",
    });
  }
  else{res.status(411).json({
    msg: 'All kidnies are fine'
  })
}
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
