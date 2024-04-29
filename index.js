const express = require("express")
const { userRoutes } = require("./Routes/userRoutes")
const { jobRouter } = require("./Routes/jobRoute")

let app = express()
PORT = 4000
require("./helper/dbConnection")
app.use(express.json())

app.get("/", (req,res)=>{
res.send("server is Running")
})


app.use('/user',userRoutes)
app.use('/job',jobRouter)



app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})