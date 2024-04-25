const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    jobCategory: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        enum: ['Full-time', 'Part-time', 'Contract'],
        required: true
    },
    jobLocation: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    jobTechnologies: [{
        type: String
    }],
  userid:{type:mongoose.Types.ObjectId, ref:"userModel"}

});

const JobModel = mongoose.model('JobModel', jobSchema);

module.exports = JobModel;
