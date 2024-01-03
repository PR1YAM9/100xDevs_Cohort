const { JWT_SECRET } = require("../config");
const { User } = require("../db/index");
const jwt = require("jsonwebtoken");
async function userMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization;
    const words = token.split("");
    const jwtToken = words[1];
    const decodedJWT = jwt.decode(jwtToken, JWT_SECRET);
    if (decodedJWT.username) {
      next();
    } else {
      res.status(411).json({
        message: "not authorized",
      });
    }
  } catch (error) {
    res.json({
        error: error
    })
  }
}

module.exports = userMiddleware;
