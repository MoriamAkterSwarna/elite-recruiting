import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleJob from './SingleJob';

const Jobs = () => {
    const jobs = useLoaderData()
    const [showAll, setShowAll] = useState(false);
    const handleShowAll = () =>{
        setShowAll(true);

    }
    return (
        <div className='text-center my-6'>
            <h2 className='text-4xl font-bold mb-6'>Featured Jobs</h2>
            <p className='mb-10'>Exploring the World and Beyond: Job Opportunities for Travel and Adventure
                </p>

                <div className='my-container grid lg:grid-cols-2 gap-10'>
                    {
                        Array.from(jobs).slice(0, showAll ? 6 : 4).map(job => <SingleJob key={job.id} job={job}></SingleJob>)
                        
                    }
                     {
                !showAll && (
                   <span onClick={handleShowAll}>
                    <button className='btn-primary'>See More</button>
                </span> )
            }
                </div>
        </div>
    );
};

export default Jobs;