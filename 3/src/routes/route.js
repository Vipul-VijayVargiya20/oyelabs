// const customerModel = require("../models/customerModel");
const controller = require('../controllers/Usercontroller')
const express = require('express');
const router = express.Router();


router.put('/Registeruser', controller.Registeruser)



module.exports = router