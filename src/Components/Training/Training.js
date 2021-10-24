import React from 'react';
import { Link } from 'react-router-dom';
import './Training.css'

const Training = (props) => {
    const { id, fee, courseName, courseTitle, img } = props.training;

    return (
        <div className='training'>
            <img src={img} alt="" />
            <h4 className='course-deatils mt-3'>{courseName} </h4>
            <p className='course-title'>{courseTitle} </p>
            <p className='course-deatils'> Fee: ${fee} </p>
            <Link to={`/programs/${id}`}>
                <button className='joinBtn'>Join Program</button>
            </Link>

        </div>
    );
};

export default Training;