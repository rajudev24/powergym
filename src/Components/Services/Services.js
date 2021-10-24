import React from 'react';
import Trainings from '../Trainings/Trainings';
import './Service.css'

const Services = () => {
    return (
        <div>
            <div className='services-section'>
                <h1 className='services-moto'>Choose Your Program</h1>
            </div>
            <Trainings></Trainings>
        </div>
    );
};

export default Services;