require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get("/shashank", (req, res)=>{
    res.send("Yoo, this is good and your gonna be a good backend engineer")
})

app.get("/Youtube", (req, res)=>{
    res.send('<h1>this is youtube and this is so funny bro</h1>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`The Server is running succesfully on ${port}`)
})