

const mongoose = require('mongoose')

const userScheme = new mongoose.Schema(
    {
        username : {
            type : "String",
            required : true
        },
        password : {
            type : "String",
            required : true
        }
    },{timestamps:true,versionKey:false}
)

const userModel = mongoose.model('user',userScheme);

module.exports = userModel ;