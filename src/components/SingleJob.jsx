import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
const SingleJob = ({job}) => {
    console.log(job)
    const {companyLogo,jobTitle,companyName,salary,location} = job
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
                <button className='btn-outlined'>remote</button>
                <button className='btn-outlined'>time</button>
                </div>
                <div className="card-actions mt-3">
                   <div className='flex justify-between items-center'>
                        <p className='mr-8'><small><MapPinIcon className="h-6 w-6 text-gray-500" />{location}</small></p>
                        <p><small><CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
                    Salary: {salary}</small></p>
                   </div>
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SingleJob;