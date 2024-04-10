const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const student = require("./StudentMongo")
const teacher = require("./teacherMongo")
const Admin = require("./mongo")
const StudentLogin = require("./StudentLogin")
const TeacherLogin=require("./TeacherLogin")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


//Admin login

app.post("/add-admin", async (req, res) => {
    const {  email, password } = req.body

    const data = {
        email: email,
        password: password,
    }

    try {
        const check = await Admin.findOne({ email:email, password: password })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
            await Admin.insertMany([data])
        }

    }
    catch (e) {
        res.json("fail")
    }
})

app.post("/admin-login", async (req, res) => {
    const {  email, password } = req.body

    try {
        const check = await Admin.findOne({ email:email, password: password })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
        }

    }
    catch (e) {
        res.json("fail")
    }
})


//Student Login

app.get("/", cors(), (req, res) => {

})


app.post("/student-login", async (req, res) => {
    const { name,email,usn, password } = req.body

    try {
        const check = await StudentLogin.findOne({ usn:usn, password:password })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
        }

    }
    catch (e) {
        res.json("fail")
    }

})



app.post("/student-signup", async (req, res) => {
    const { name,email,password,usn} = req.body

    const data = {
        
        name: name,
        email:email,
        usn: usn,
        password: password,
       
    }

    try {
        const check = await StudentLogin.findOne({ usn: usn, password: password })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
            await StudentLogin.insertMany([data])
        }

    }
    catch (e) {
        res.json("fail")
    }

})

//Teacher Login


app.post("/teacher-login", async (req, res) => {
    const { name, email, id, password } = req.body

    try {
        const check = await TeacherLogin.findOne({ id: id, password: password })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
        }

    }
    catch (e) {
        res.json("fail")
    }

})



app.post("/teacher-signup", async (req, res) => {
    const { name, email, password, id } = req.body

    const data = {

        name: name,
        email: email,
        id: id,
        password: password,

    }

    try {
        const check = await TeacherLogin.findOne({ id: id })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
            await TeacherLogin.insertMany([data])
        }

    }
    catch (e) {
        res.json("fail")
    }

})






//Adding-Student


app.post("/add-student", async (req, res) => {
    const { name, email,usn,password } = req.body

    const data = {
        name: name,
        email: email,
        usn: usn,
        password:password
    }

    try {
        const check = await StudentLogin.findOne({ usn: usn })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
            await StudentLogin.insertMany([data])
        }

    }
    catch (e) {
        res.json("fail")
    }

})


// //ADDING TEACHER


app.post("/add-teacher", async (req, res) => {
    const { name, email,id,password } = req.body

    const data = {
        name: name,
        email: email,
        id: id,
        password:password
    }

    try {
        const check = await TeacherLogin.findOne({ id: id })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
            await TeacherLogin.insertMany([data])
        }

    }
    catch (e) {
        res.json("fail")
    }

})


//Student list

app.get("/student-list", (req, res) => {
    StudentLogin.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))
    
})

//teacher list

app.get("/teacher-list", (req, res) => {
    TeacherLogin.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))

})





//Add Grades
app.post("/add-grades", async (req, res) => {
    const { name, grades, usn } = req.body

    const data = {
        name: name,
        grades: grades,
        usn: usn,

    }

    try {
        const check = await student.findOne({ usn: usn })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
            await student.insertMany([data])
        }

    }
    catch (e) {
        res.json("fail")
    }

})

//Student Grades

app.get("/student-grades", (req, res) => {
    student.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))

})



//Add Subject

app.post("/add-subject", async (req, res) => {
    const { name, subject, id } = req.body

    const data = {
        name: name,
        subject: subject,
        id: id,

    }

    try {
        const check = await teacher.findOne({ id: id })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
            await teacher.insertMany([data])
        }

    }
    catch (e) {
        res.json("fail")
    }

})

// Subjects
app.get("/teacher-subject", (req, res) => {
    teacher.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))

})


app.listen(8000, () => {
    console.log("port connected");
})
