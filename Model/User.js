const mongoose=require('mongoose');
const Schema=mongoose.Schema
const contactSchema=new Schema({
        name: {
            type: String,
            required: true
        },
        phone_no: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
})

module.exports = mongoose.model("Users",contactSchema)
