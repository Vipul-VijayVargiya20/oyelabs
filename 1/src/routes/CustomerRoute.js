// const customerModel = require("../models/customerModel");
const controller = require('../controllers/Customercontroller')
const express = require('express');
const router = express.Router();


router.post('/CustomerRegister', controller.CustomerRegister)



module.exports = router