const express = require('express')
const { login, verifyLogin } = require('../controllers/authControllers')
const router = express.Router()
const {verifyCookie}=require("../middlewares/verifyCookie")

router.post("/", login)
router.get("/verify",verifyCookie, verifyLogin)

module.exports =router