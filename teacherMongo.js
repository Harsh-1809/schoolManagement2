const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/schoolmgmt")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log('failed');
    })


const teacherDetails = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required:true
    }
})

const teacher = mongoose.model("teacher", teacherDetails)

module.exports = teacher