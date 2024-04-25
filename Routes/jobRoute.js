const express  = require("express")
const { JobCreate, allJobs, singleJob, deleteJob, searchjobs } = require("../Controller/JobController")
// const { isAuthenticated } = require("../middleware/jwtVerify")
const { verifyToken } = require("../middleware/jwtVerify")
const jobRouter = express.Router()

// jobRouter.get("/",async(req,res) =>{
//     res.send("job Routing")
// })

jobRouter.post("/create",verifyToken,JobCreate)
jobRouter.get("/",verifyToken,allJobs)
jobRouter.get("/singlejob/:id",verifyToken,singleJob)
jobRouter.delete("/:id",verifyToken,deleteJob)

jobRouter.get('/search',verifyToken,searchjobs)






module.exports = {jobRouter}