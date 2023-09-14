import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState(() => []);

    const loadCourses = async () => {
        const res = await fetch("course.json");
        const data = await res.json();
        setCourses(() => data);
    }

    useEffect(() => {
        let mount = true;
        if (mount) {
            loadCourses();
        }
        return () => mount = false;
    }, [])

    return (
        <div className='md:col-span-2 lg:col-span-3'>
            {
                courses.map((course, idx) => <Course
                    key={idx}
                    course={course}
                />)
            }
        </div>
    );
};

export default Courses;