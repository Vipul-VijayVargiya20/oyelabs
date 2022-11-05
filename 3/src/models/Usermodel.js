const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: { 
           type: String, 
          required: true, 
          trim: true, 
          unique: true, 
          lowercase: true, 
          match: [/^\w+([\.-]?\w+)@\w+([\. -]?\w+)(\.\w{2,3})+$/] },
    name: { 
        type: String, 
        required: true, 
        trim: true }
},
    { timestamps: true }
)


module.exports = mongoose.model('User', UserSchema)