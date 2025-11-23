import {Application} from "../models/application.model.js";
import {Job} from "../models/job.model.js"


export const applyJob = async (req, res) => {
    try{
        const userId = req.id;
        const jobId = req.params.id;
        if(!jobId){
            return res.status(400).json({
                message: "Job id is required.",
                success: false
            })
        }

        // check if the user is already applied for the job
        const existingApplication = await Application.findOne({job: jobId, application: userId});

        if(existingApplication){
            return res.status(400).json({
                message: "you have Already applied for this jobs",
                success: false
            })
        }

        // check if the job exists
        const job = await Job.findById(jobId)
        if(!job){
            return res.status(400).json({
                message: "Job not Found",
                success: false
            })
        }

        // create a new application
        const newApplication = await Application.create({
            job: jobId,
            applicant: userId
        });

        job.applications.push(newApplication._id);
        await job.save();

        return res.status(201).json({
            message: "Job applied successfully",
            success: true
        })
    }
    catch(err){
        console.log(err)
    }
}


export const getAppliedJob = async (req, res) => {
    try{
        const userId = req.id;
        const application = await Application.find({applicant: userId}).sort({createdAt: -1}).populate({
            path: "job",
            options: {sort: {createdAt: -1}},
            populate:{
                path:"company",
                options: {sort:{createdAt: -1}}
            }
        });

        if(!application){
            return res.status(404).json({
                message: "No Application",
                success: false
            })
        };

        return res.status(200).json({
            application,
            success: true 
        })
    }
    catch(err){
        console.log(err);
    }
}


// Admin see the how many user applied

export const getApplicants = async(req,res)=>{
    try{
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path: "applications",
            options: {sort:{createdAt: -1}},
            populate: {
                path: "applicant"
            }
        });

        if(!job){
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        };

        return res.status(200).json({
            job,
            success: true
        })
    }
    catch(err){
        console.log(err)
    }
}


export const updateStatus = async (req, res) => {
    try{
        const {status} = req.body;
        const applicationId = req.params.id;

       const validStatuses = ["pending", "accepted", "rejected"];
        if(!status || !validStatuses.includes(status.toLowerCase())){
            return res.status(400).json({
                message: "Status not found",
                success: false
            })
        };

        // find the application by application id
        const application = await Application.findById({_id: applicationId});
        if(!application){
             return res.status(404).json({
                message: "Application not found",
                success: false
            })
        };

        // Update the status
        application.status = status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message: "Status update successfully",
            success: true
        })
    }
    catch(err){console.log(err)}
}