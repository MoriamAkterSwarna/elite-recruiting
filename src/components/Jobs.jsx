import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleJob from './SingleJob';

const Jobs = () => {
    const jobs = useLoaderData()
    return (
        <div className='text-center my-6'>
            <h2 className='text-4xl font-bold mb-6'>Featured Jobs</h2>
            <p className='mb-10'>Exploring the World and Beyond: Job Opportunities for Travel and Adventure
                </p>

                <div className='my-container grid lg:grid-cols-2 gap-10'>
                    {
                        jobs.map(job => <SingleJob key={job.id} job={job}></SingleJob>)
                        
                    }
                </div>
        </div>
    );
};

export default Jobs;