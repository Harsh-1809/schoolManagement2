const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/schoolmgmt")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log('failed');
    })


const details = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    usn: {
        type: String,
        required: true
    }
})

const login = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})



const collection = mongoose.model("collection", details)
const Admin = mongoose.model("Admin",login)
module.exports = collection
module.exports = Admin


