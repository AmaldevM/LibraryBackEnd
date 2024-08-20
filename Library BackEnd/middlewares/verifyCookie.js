const jwt = require('jsonwebtoken');

function verifyCookie(req, res, next) {
    if (req.cookies.token) {
        try {
            const userData = jwt.verify(req.cookies.token, process.env.TOKEN_SECRET_KEY);
            req.data = userData
            next()
          } catch(err) {
            // err
          }
    }
    else {
        res.status(401).send("not Logged in")
    }
}
module.exports = {verifyCookie}