import React from 'react';
import books from '../assets/63258-career-animation.json'
import Lottie from "lottie-react";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
        {/* Text Content */}
        <div className='mb-10 lg:max-w-lg pr-5 lg:mb-0'>
          <div className='max-w-xl mb-6 lg:mt-8'>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
            Empower Your Career:  Search <br /> and Apply for Jobs with
              <span className='inline-block text-fuchsia-500'>Our Innovative Recruitment Platform</span>
                
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
            Are you tired of endlessly scrolling through generic job postings with no success? Look no further than our job recruitment website! We are the ultimate job search platform for employers and job seekers alike
            </p>
          </div>
          <div className='flex flex-col items-center md:flex-row'>
            <Link to='/books' className='btn md:w-auto md:mr-4 py-3 px-5 rounded text-white'>
              <div className='inline-flex items-center justify-center w-full h-full'>
                <button className='btn-primary mr-3'>Get Started</button>
              
              </div>
            </Link>
           
          </div>
        </div>
        {/* Lottie Animation */}
        <div className='relative lg:w-1/2 '>
          <div className='w-full lg:w-4/5 lg:ml-auto h-56 sm:h-96'>
            <Lottie animationData={books} loop={true} />
          </div>
        </div>
      </div>
    );
};

export default Home;