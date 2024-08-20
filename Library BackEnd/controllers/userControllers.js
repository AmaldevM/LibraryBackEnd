const User=require("../models/userModel")
const bcrypt = require('bcrypt');
const saltRounds = 10;

const addUser = async (req, res) => {
    const userData = req.body
    const hash = bcrypt.hashSync(userData.password, saltRounds);
    const user = new User({ ...userData, password: hash })
    await user.save()
    res.send("user added")
}

module.exports={addUser}