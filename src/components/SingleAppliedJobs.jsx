import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const SingleAppliedJobs = ({applyJob}) => {
    const {companyLogo,jobTitle,companyName,salary,location,id,remoteOrOnsite,fullTimeOrPartTime} = applyJob

    return (
        <div>
           <div className="card card-side w-3/4 my-8 ml-20 border px-4 bg-base-100 shadow-xl">
                <figure className='w-[200px] h-[200px] my-10 bg-gray-100 p-3'><img src={companyLogo} alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{jobTitle}</h2>
                    <p>{companyName}</p>
                    <div className='flex justify-between'>
                        <div>
                        <button className='btn-outlined'>{remoteOrOnsite}</button>
                        <button className='btn-outlined'>{fullTimeOrPartTime}</button>
                        </div>
                        <Link to={`/jobs/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                        </Link>
                        
                    </div>
                    <div className='flex items-center justify-evenly'>
                    <p className='mr-8'><small className='inline-flex'><MapPinIcon className="h-5 w-5 text-gray-500" />{location}</small></p>
                        <p><small className='inline-flex'><CurrencyDollarIcon className="h-5 w-5 text-gray-500" />
                    Salary: {salary}</small></p>
                    
                    </div>
                </div>
                </div> 
        </div>
    );
};

export default SingleAppliedJobs;