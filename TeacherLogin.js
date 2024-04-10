const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/schoolmgmt")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log('failed');
    })

const teacherLogin = new mongoose.Schema({

    
    id: {
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
    },
    password: {
        type: String,
        required: true
    }

})

const TeacherLogin = mongoose.model("TeacherLogin", teacherLogin)

module.exports = TeacherLogin
