import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategory from './SingleCategory';

const Categories = () => {
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div className='text-center'>
            <h2 className='text-4xl mb-5 font-bold '>Job Category List</h2>
            <p className='mb-10'>Choose Your Own Adventure: Explore Countless Career Possibilities with Our Curated Job Categories and Job Matching Technology</p>
            <div className='grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6'>
            {
                categories.map(category => <SingleCategory key={category.id} category={category}></SingleCategory>)
            }
            </div>
        </div>
    );
};

export default Categories;