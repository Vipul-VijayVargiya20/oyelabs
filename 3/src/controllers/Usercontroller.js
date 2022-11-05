const userModel = require("../models/Usermodel");


// validation for request body
const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}

const Registeruser = async function (req, res) {
    try {
        let requestBody = req.body

        let { email, name } = requestBody

        if (Object.keys(requestBody).length == 0) {
            res.status(400).send({ status: false, msg: "BAD REQUEST,please provide valid information" })
            return
        }

        if (!isValid(email)) {
            res.status(400).send({ status: false, msg: "email is required" })
            return
        }

        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            res.status(400).send({ status: false, msg: "email should be valid email address" })
            return
        }

        if (!isValid(name)) {
            res.status(400).send({ status: false, msg: "firstName is required" })
            return
        }


        let isEmailAlreadyUsed = await userModel.findOneAndUpdate({ email: email }, { $set: { name: name } }, { new: true })


        if (isEmailAlreadyUsed) {

            res.status(200).send({  msg: "email already used but the name is updated", data: isEmailAlreadyUsed })
        }


        else {
            let createuser = await userModel.create(requestBody)
            res.status(201).send({ data: createuser })
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })

    }
}

module.exports.Registeruser = Registeruser