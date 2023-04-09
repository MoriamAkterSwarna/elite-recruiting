import React from 'react';

const SingleCategory = ({category}) => {
    console.log(category)
    const {categoryLogoImage,categoryName,availableJobs} = category
    return (
        <div className='mx-4 mb-10'>
            <div className="card w-[310px] bg-gray-100 shadow-xl">
                <div className=''>
                    <img className='mx-auto mt-8' src={categoryLogoImage} alt="" />
                </div>
            <div className="card-body">
                <h2 className="card-title">{categoryName}</h2>
                <p>Available Jobs: {availableJobs}</p>
            </div>
            </div>
        </div>
    );
};

export default SingleCategory;