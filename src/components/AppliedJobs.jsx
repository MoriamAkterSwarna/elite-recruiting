import React from 'react';
import { getStoredCart } from '../utilities/fakeDb';
import { useLoaderData } from 'react-router-dom';
import SingleAppliedJobs from './SingleAppliedJobs';

const AppliedJobs = () => {
    const jobData = useLoaderData()
   
    
    let applyJob = [];
    const savedCart = getStoredCart()
    
    for(const id in savedCart){
        const foundJob = jobData?.find(data => data.id == id)
        
       
        if(foundJob){
            applyJob.push(foundJob);
        }
        
    }
    // console.log(applyJob);
    // const {companyLogo} = applyJob;
    // console.log(companyLogo)
    
    return (
        <>
           <h3 className='text-center text-3xl font-bold py-10 h-[100px] bg-gray-100'>Applied Jobs</h3>

                        
                <div className='my-container relative'>
                    <div className='ml-[55%]'>
                        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-1/4">
                            <div className="collapse-title text-xl font-medium">
                                Filter By
                            </div>
                            <div className="collapse-content">
                                <p>Show Onsite</p>
                                <p>Show Remote</p>
                            </div>
                        </div>
                    </div>
                {
                    applyJob.map(applyJob => <SingleAppliedJobs key={applyJob.id} applyJob={applyJob}></SingleAppliedJobs>)
                }
                </div>
        </>
    );
};

export default AppliedJobs;