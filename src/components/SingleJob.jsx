import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const SingleJob = ({job}) => {
    
    const {companyLogo,jobTitle,companyName,salary,location,id,remoteOrOnsite,fullTimeOrPartTime} = job
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl border">
            <figure className="px-10 pt-10">
                <img src={companyLogo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-start">
                <h2 className="card-title font-bold">{jobTitle}</h2>
                <p className='text-gray-500'>{companyName}</p>

                <div className='inline-flex'>
                <button className='btn-outlined'>{remoteOrOnsite}</button>
                <button className='btn-outlined'>{fullTimeOrPartTime}</button>
                </div>
                <div className="card-actions mt-3">
                   <div className='flex justify-between items-center'>
                        <p className='mr-8'><small className='inline-flex'><MapPinIcon className="h-5 w-5 text-gray-500" />{location}</small></p>
                        <p><small className='inline-flex'><CurrencyDollarIcon className="h-5 w-5 text-gray-500" />
                    Salary: {salary}</small></p>
                   </div>
                <Link to={`/jobs/${id}`}>
                <button className="btn btn-primary">View Details</button>
                </Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SingleJob;