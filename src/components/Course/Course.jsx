import React from 'react';
import PropTypes from "prop-types"

const Course = ({ course }) => {
    console.log(course);
    return (
        <div>
            Course card
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
}

export default Course;