const express = require("express")
const router = express.Router()
const {addUser}=require("../controllers/userControllers")

router.post("/", addUser)

module.exports=router