const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/schoolmgmt")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log('failed');
    })


const studentDetails = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    grades: {
        type: String,
        required: true
    },
    usn: {
        type: String,
        required: true
    }
})

const student = mongoose.model("student", studentDetails)

module.exports = student