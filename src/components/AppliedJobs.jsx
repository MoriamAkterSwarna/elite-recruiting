import React, { useState } from 'react';
import { getStoredCart } from '../utilities/fakeDb';
import { useLoaderData } from 'react-router-dom';
import SingleAppliedJobs from './SingleAppliedJobs';

const AppliedJobs = () => {
    const jobData = useLoaderData()
    const [selectJob, setSelectJob] = useState("");
    console.log(selectJob)

    const handleFilter = event=>{
        
        setSelectJob(event.target.value);
        
    }

    
   
    
    let applyJob = [];
    const savedCart = getStoredCart()
    
    for(const id in savedCart){
        const foundJob = jobData?.find(data => data.id == id)
        
       
        if(foundJob){
            applyJob.push(foundJob);
        }
        
    }
    const filteredAppliedJob= jobData.filter((job) =>job.remoteOrOnsite === selectJob || selectJob === "")
    return (
        <>
           <h3 className='text-center text-3xl font-bold py-10 h-[100px] bg-gray-100'>Applied Jobs</h3>

                        
                <div className='my-container relative'>
                    <div className='ml-[55%]'>
                       <select value={selectJob}
                       onChange={handleFilter}>
                            <option value="">Filter By</option>
                            <option value="Remote">Remote</option>
                            <option value="Onsite">Onsite</option>
                       </select>
                    </div>
                {
                    filteredAppliedJob.map(applyJob => <SingleAppliedJobs key={applyJob.id} applyJob={applyJob}></SingleAppliedJobs>)
                }
                </div>
        </>
    );
};

export default AppliedJobs;