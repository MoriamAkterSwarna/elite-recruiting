import React, { useState } from 'react';
import { BriefcaseIcon,Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='bg-gray-100 flex justify-between items-center p-8 w-full rounded sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8'>

            <Link to='/' className='inline-flex items-center relative'>
                <BriefcaseIcon className="h-8 w-8 text-purple-500" />
                <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>Elite Recruiting</span>
            </Link>

            
            <div className='lg:flex space-x-20 items-center'>
            <ul className='lg:flex space-x-8 items-center font-bold hidden'>
                <li>
                    <NavLink to='/' 
                    title='Home'
                    className={({isActive}) => (isActive ? 'active' : 'default:')}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/statistics' className={({isActive}) => (isActive ? 'active' : 'default:')}>Statistics</NavLink>
                </li>
                <li>
                    <NavLink to='/appliedjobs' className={({isActive}) => (isActive ? 'active' : 'default:')}>Applied Jobs</NavLink>
                </li>
                <li>
                    <NavLink to='/blog' className={({isActive}) => (isActive ? 'active' : 'default:')}>Blog</NavLink>
                </li>
            </ul>
            <button className='btn-primary'>Start Applying</button>
            </div>

            
            <div className='lg:hidden'>
                        <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Bars3BottomRightIcon className='w-5 text-gray-600' />
                    </button>

                    {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <BriefcaseIcon className='h-6 w-6 text-blue-500' />
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        EliteRecruiting
                      </span>
                    </Link>
                  </div>
                  
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/statistics'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-fuchsia-500'
                      >
                        Statistics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/appliedjobs'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-fuchsia-500'
                      >
                        Applied Jobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/blog'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-fuchsia-500'
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}

            </div>
        </div>
    );
};

export default Header;