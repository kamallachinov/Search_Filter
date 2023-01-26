const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const express = require("express")

dotenv.config()
const app = express()


const { Schema } = mongoose

const courseSchema = new Schema(
    {
        imgUrl: { type: String, required: true },
        Title: { type: String, required: true },
        subTitle: { type: String, required: true },
        accImg: { type: String, required: true },
        accName: { type: String, required: true },
        accPosition: { type: String, required: true },
        price: { type: Number, required: true }

    }
)
const Courses = mongoose.model("template_5", courseSchema)

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("<h1>Admin Panel</h1>")
})

//GET ALL DATAS
app.get("/courses", (req, res) => {
    Courses.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(404).json({ message: err })
        }
    })
})


//GET COURSE BY ID

app.get("/courses/:id", (req, res) => {
    const { id } = req.params
    Courses.findById(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(404).json({ message: err })
        }
    })
})

//POST COURSE TO API

app.post("/courses", (req, res) => {
    const myObj = new Courses({
        imgUrl: req.body.imgUrl,
        Title: req.body.Title,
        subTitle: req.body.subTitle,
        accImg: req.body.accImg,
        accName: req.body.accName,
        accPosition: req.body.accPosition,
        price: req.body.price
    })
    myObj.save()
    res.send("Data created")
})

//DELETE DATA FROM API
app.delete("/courses/:id", (req, res) => {
    const { id } = req.params
    Courses.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("Data deleted")
        } else {
            res.status(404).json({ message: err })
        }
    })
})





const url = process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)
const PORT = process.env.PORT
mongoose.set('strictQuery', false);
mongoose.connect(url, (err) => {
    if (!err) {
        console.log("DataBase connected");
        app.listen(PORT, () => {
            console.log("SERVER START");
        })
    }
})