const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const User=require("../models/userModel")

const login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({email:email})
    if (!user) {
        return res.status(401).send("Unauthoraized access")
    }
    const passwordsMatch = bcrypt.compareSync(password, user.password)
    if (passwordsMatch) {
        const token = jwt.sign( { _id:user._id, email:user.email,name:user.name }, process.env.TOKEN_SECRET_KEY );
        res.cookie("token", token,{httpOnly:true,secure:process.env.ENVIRONMENT==="development"?false:true,maxAge:1*60*60*1000,sameSite:"none"})
        res.send("logged in")
    }
    else {
        res.status(401).send("Unauthorized access")
    }
}
const verifyLogin = (req, res) => {
    res.send(req.data)
}
module.exports = { login, verifyLogin }