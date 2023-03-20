import axios from "axios";

const localUrl = 'http://localhost:5000/api';

export default {
  async createJob(job){
    console.log('the job is', job);
    const res = await axios.post(`${localUrl}/create-job`, job);
    return res.data;
  },
  async getCreatedJobs(userId) {//created jobs of the employer 
    const res = await axios.get(`${localUrl}/get-jobs/${userId}`);
    return res.data.data;
  },
  async getAllJobsWhereCandidatesApplied(authorId){
    const res = await axios.get(`${localUrl}/get-application-employer/${authorId}`);
    return res.data.data;
  }
}