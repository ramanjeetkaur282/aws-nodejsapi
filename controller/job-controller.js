import Job from "../model/jobs.js";

export const saveJobData=async (request,response)=>{
 try{
    const newJob=new Job(request.body);

    await newJob.save();
    response.status(200).json({message: "Job saved Successfully"});
 } catch(error){
    console.log(error.message);
    response.status(500).json({error:error.message});
 }
};

export const getJobData=async (request,response)=>{
   try{
      const jobs = await Job.find({});
      response.status(200).json(jobs);
   } catch(error){
      console.log(error.message);
      response.status(500).json({error:error.message});
   }
  };