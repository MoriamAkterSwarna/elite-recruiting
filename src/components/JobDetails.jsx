import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import AppliedJobs from './AppliedJobs';
import { CalendarDaysIcon, CurrencyDollarIcon,PhoneArrowDownLeftIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/solid'
import { addToDb } from '../utilities/fakeDb';

const JobDetails = () => {
    const job = useLoaderData()
    console.log(job)
    let {id} = useParams();
    console.log(id)

    const [jobs, setJobs] = useState([])
    useEffect(()=>{
        const jobs = job?.find(el => el.id === parseInt(id));
            console.log(jobs)
            setJobs(jobs)
        

    },[])
    const {jobDescription,jobResponsibility,educationalRequirements,experiences,salary,jobTitle,contactInformation,location}  = jobs

    const applyHandler= (job) =>{
        console.log(job)
        addToDb(id)
    }



    return (
        <>
        <h3 className='text-center text-3xl font-bold py-10 h-[100px] bg-gray-100'>Job Details</h3>
        <div className='my-container'>
        {/* Container Box */}
        <div className='flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto'>
          {/* left side Container */}
          <div className=' lg:w-1/2 h-full p-10'>
            <p className='mb-6'><span className='font-bold'>Job Description: </span>{jobDescription}</p>
            <p className='mb-6'><span className='font-bold'>Job Responsibility: </span>{jobResponsibility}</p>
            <p className='mb-6'><span className='font-bold'>Educational Requirements: </span>{educationalRequirements}</p>
            <p className='mb-6'><span className='font-bold'>Experiences: </span>{experiences}</p>
          </div>
          {/* right side Container */}
          
            <div className='bg-blue-50 w-1/3 p-10 m-10 divide-y-2'>
                <p className='font-bold mb-4'>Job Details</p>
                <div>
                
                <p className='mr-8 mt-2'><small className='inline-flex items-center'><CurrencyDollarIcon className="h-6 w-6 text-gray-400" /><span className='font-semibold pl-2'>Salary: </span> {salary}</small></p>
                
                <p className='mr-8 my-4'><small className='inline-flex items-center'><CalendarDaysIcon className="h-6 w-6 text-gray-400" /><span className='font-semibold pl-2'>Job Title: </span>{jobTitle}</small></p>
                        
                </div>
                <div>
                    <p className='divide-y-0'>Contact Information</p>

                <div>
                {/* <p className='mr-8 my-4'><small className='inline-flex items-center'><PhoneArrowDownLeftIcon className="h-5 w-5 text-gray-400" /><span className='font-semibold pl-2'>Phone: </span>{contactInformation.phone}</small></p>

                <p className='mr-8 my-4'><small className='inline-flex items-center'><EnvelopeIcon className="h-5 w-5 text-gray-400" /><span className='font-semibold pl-2'>Email: </span>{contactInformation.email}</small></p>  */}
                <p className='mr-8 my-4'><small className='inline-flex items-center'><MapPinIcon className="h-5 w-5 text-gray-400" /><span className='font-semibold pl-2'>Location: </span>{location}</small></p>
                
                </div>
                </div>
                

               {
                // Array.from(jobs).map(job => <AppliedJobs key={job.id} job={job} applyHandler={applyHandler}></AppliedJobs>)
                Array.from(jobs).map(job => console.log(job))
               }
                <button onClick={()=>applyHandler(job)} className='btn-primary'>Apply Now</button>
            </div>
            
        </div>  
      </div>
        </>
    );
};

export default JobDetails;