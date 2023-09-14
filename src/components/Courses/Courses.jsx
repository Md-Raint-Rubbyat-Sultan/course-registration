import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import PropTypes from "prop-types";

const Courses = ({ handelAddToCart }) => {
    const [courses, setCourses] = useState(() => []);

    const [isLoading, setLoading] = useState(() => true);

    const loadCourses = async () => {
        try {
            const res = await fetch("course.json");
            const data = await res.json();
            setCourses(() => data);
            setLoading(() => false);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        let mount = true;
        if (mount) {
            loadCourses();
        }
        return () => mount = false;
    }, [])

    return (
        <div className='order-2 md:order-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {isLoading && <h3 className='text-2xl font-bold text-blue-500'>Loading...</h3>}
            {
                courses.map((course, idx) => <Course
                    key={idx}
                    course={course}
                    handelAddToCart={handelAddToCart}
                />)
            }
        </div>
    );
};

Courses.propTypes = {
    handelAddToCart: PropTypes.func.isRequired,
}

export default Courses;