import React from 'react';
import PropTypes from "prop-types";

const Course = ({ course, handelAddToCart }) => {
    const { img, title, description, price, time } = course;
    return (
        <div className='bg-white p-4 rounded-xl flex flex-col  justify-between gap-6'>
            <img className='h-52 w-full rounded-lg' src={img} alt={title} />
            <h4 className='text-2xl font-semibold'>{title}</h4>
            <p>{description}</p>
            <div className='font-medium flex items-center justify-between gap-1'>
                <p className='flex items-center'>
                    {/* Dollar svg */}
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 1V23" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    Price: {price}</p>
                <p className='flex items-center'>
                    {/* Bookmark svg */}
                    <span className='me-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                            <path d="M10 3.042C8.35161 1.56336 6.2144 0.746944 4 0.750001C2.948 0.750001 1.938 0.930002 1 1.262V15.512C1.96362 15.172 2.97816 14.9989 4 15C6.305 15 8.408 15.867 10 17.292M10 3.042C11.6483 1.56328 13.7856 0.746849 16 0.750001C17.052 0.750001 18.062 0.930002 19 1.262V15.512C18.0364 15.172 17.0218 14.9989 16 15C13.7856 14.9969 11.6484 15.8134 10 17.292M10 3.042V17.292" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    Credit: {time}hr</p>
            </div>
            <div className='text-center w-full'>
                <button
                    onClick={() => handelAddToCart(course, time, price)}
                    className='bg-blue-500 text-white font-semibold py-2 w-full rounded-lg '>Select</button>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handelAddToCart: PropTypes.func.isRequired,
}

export default Course;