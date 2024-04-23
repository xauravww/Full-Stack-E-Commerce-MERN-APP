const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')


const app = express()
app.use(cors({
    origin : ['http://localhost:3000','https://mern-ecomm-gco0.onrender.com','http:127.0.0.1:5500'],
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

const PORT =  process.env.PORT || 8080


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})
