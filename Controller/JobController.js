const JobModel = require("../Models/jobModel");

// Job Creation 
const JobCreate = async(req,res)=>{
    try{
      const job = await JobModel.create({...req.body})
      if (req.userid != job.userid) {
        return res.status(400).send({ success: true, message: "Not Authorized" });
      }
      res.status(201).send({success:true,message:"job Created", data:job})}

  catch (error){
    // console.log("error Occured",error)
    res.status(500).send({success:false,message:"Internal Sever error"})
  }}


//   Get All Job 
const allJobs = async(req,res)=>{
    const job = await JobModel.find()
    if(!job){return res.status(404).send({success:false,message:"no JOb found"})}
    res.status(200).send({success:true,message:"all JOBS",total:job.length,data:job})
  }

//   get Single Job
  const singleJob = async(req,res)=>{
    const job = await JobModel.findById(req.params.id)
    if(!job) {return res.status(404).send({success:false,message:"no JOb found"})}
    res.status(200).send({success:true,message:"JOb Found",data:job})
  }

//    Delete Job
const deleteJob = async (req,res)=>{
    const job = await JobModel.findById(req.params.id)
    if(!job){return res.status(404).send({success:false,message:"JOb not Exsist"})}
    const deletee = await JobModel.findByIdAndDelete(req.params.id)
    if (req.userid != job.userid) {
      return res.status(400).send({ success: true, message: "Not Authorized" });
    }
    res.status(200).send({success:true,message:"Job Deleted",data:deletee})
}


// Search Job

const searchjobs = async (req, res) => {
    const { jobTitle, jobCategory, jobType, jobLocation } = req.body;
   
    let obj = {};
  
    if (jobTitle) {
      obj.jobTitle = jobTitle;
    }
    if (jobCategory) {
      obj.jobCategory = jobCategory;
    }
    if (jobType) {
      obj.jobType = jobType;
    }
    if (jobLocation) {
      obj.jobLocation = jobLocation;
    }
    var search = await JobModel.find(obj);
  
    if (search.length > 0) {
      return res.status(200).send({sucess: true,message: " Job Found",totalJob: search.length,job: search,});
    }
    res.status(400).send({ sucess: false, message: "NO Job Found" });
  };


  module.exports = {JobCreate, allJobs,singleJob, deleteJob, searchjobs}