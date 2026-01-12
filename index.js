require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get("/shashank", (req, res)=>{
    res.send("Yoo, this is good and your gonna be a good backend engineer")
})

app.listen(port, ()=>{
    console.log(`The Server is running succesfully on ${port}`)
})