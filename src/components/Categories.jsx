import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Categories = () => {
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div className='text-center'>
            <h2 className='text-4xl mb-5 font-bold '>Job Category List</h2>
            <p className='mb-10'>Choose Your Own Adventure: Explore Countless Career Possibilities with Our Curated Job Categories and Job Matching Technology</p>
            {
                categories.map(category => <p>{category.categoryName}</p>)
            }
        </div>
    );
};

export default Categories;