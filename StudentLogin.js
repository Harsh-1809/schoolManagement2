const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/schoolmgmt")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log('failed');
    })

const studentLogin = new mongoose.Schema({

    password: {
        type: String,
        required: true
    },
    usn: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }

})

const StudentLogin = mongoose.model("StudentLogin", studentLogin)

module.exports = StudentLogin
